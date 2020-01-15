var exec = require("child_process").exec;

function create() {
    exec(`cd ./src/helpers && type NUL > ${process.argv[3]}.ts`);
}

module.exports = create;