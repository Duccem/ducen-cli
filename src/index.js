#!/usr/bin/env node
const component = require("./component");
const helper = require("./helper");
const git = require("./git");
const project = require("./project");

async function crear(){
    if(process.argv[2]=="create"){
        project();
    }
    if(process.argv[2]=="component"){
        component();
    }
    if(process.argv[2]=="helper"){
        if(process.argv[3]){
            helper();
        }else{
            console.log('[ERROR] name of the project not provided!')
        }
    }
    if(process.argv[2]=="git"){
        await git();
    }
    
}

crear();