var util = require("util");
var exec = util.promisify(require("child_process").exec);
const inquire = require("inquirer");
const questions = [
    {
        type: 'list',
        name: 'tipo',
        choices: ['API','Server side app'],
        message: 'Choose the type of project'
    },
    {
        type: 'list',
        name: 'lenguaje',
        choices: ['Javascript','Typescript'],
        message: 'Choose the lenguage to work'
    },
    {
        type: 'list',
        name: 'framework',
        choices: ['Express','Koa','Nest'],
        message: 'Choose the main framework'
    },
    {
        type: 'list',
        name: 'database',
        choices: ['MongoDB','MySQL'],
        message: 'What database engine do you prefer?'
    }
];

const apiconf = [
    {
        type: 'list',
        name: 'protocolo',
        choices: ['REST','Sockets'],
        message: 'What protocol you want to use'
    }
]


async function apiREST()
{
    const iniciales = await inquire.prompt(questions);
    console.log(iniciales);
    if(iniciales.tipo == 'API'){
        const apiconfig = await inquire.prompt(apiconf);
        console.log(apiconfig);
    }
    await exec(`mkdir ${process.argv[3]}`);
    await exec(`cd ${process.argv[3]} && npm init -y`);
    if(iniciales.lenguaje==="Javascript"){
        await exec(`cd ${process.argv[3]} && mkdir src`);
        await exec(`cd ${process.argv[3]}/src && mkdir public`);
    }else{
        await exec(`cd ${process.argv[3]} && mkdir src`);
        await exec(`cd ${process.argv[3]} && mkdir public`);
    }
    await exec(`cd ${process.argv[3]}/src && mkdir helpers`);
    if(iniciales.tipo === "Server side app"){
        await exec(`cd ${process.argv[3]}/src && mkdir controllers`);
        await exec(`cd ${process.argv[3]}/src && mkdir routes`);
        await exec(`cd ${process.argv[3]}/src && mkdir views`);
    }else{
        await exec(`cd ${process.argv[3]}/src && mkdir components`);
    }
    
}

module.exports = apiREST;