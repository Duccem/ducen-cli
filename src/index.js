#!/usr/bin/env node
const component = require("./component");
const helper = require("./helper");
const git = require("./git");
async function crear(){
    if(process.argv[2]=="component" || process.argv[2]=="c"){
        component();
    }
    if(process.argv[2]=="helper" || process.argv[2]=="h"){
        helper();
    }
    if(process.argv[2]=="git"){
        await git();
    }
}

crear();