var util = require("util");
var exec = util.promisify(require("child_process").exec);

var comentario = process.argv;
comentario = comentario.slice(3);
comentario = comentario.join(" ");

async function commit() {
    await exec(`git add .`);
    await exec(`git commit -am"${comentario}"`);
    await exec(`git push`);
}

module.exports = commit;