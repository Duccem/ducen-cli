var util = require("util");
var exec = util.promisify(require("child_process").exec);
var fs = require('fs');

var model = `export interface I${process.argv[3].charAt(0).toUpperCase() + process.argv[3].slice(1)}{}`;
var controller = `
import { I${process.argv[3].charAt(0).toUpperCase() + process.argv[3].slice(1)} } from './model';
import * as consult from '../../helpers/consult';
import * as links from '../../helpers/links';
import * as respuestas from '../../errors';

const model = "";
const submodel = "";

/**
 * Get all ${process.argv[3]}
 * @param query identifier of the consult
 */
export const get = async (query: any): Promise<any> => {}

/**
 * Get a ${process.argv[3]} 
 * @param id id of a ${process.argv[3]}
 * @param query modifier of the consult
 */
export const getOne = async (id: string | number, query: any): Promise<any> => {}

/**
 * Create a new ${process.argv[3]}
 * @param body 
 */
export const create = async (body:any): Promise<any> => {}

/**
 * Update a ${process.argv[3]}
 * @param params params request 
 * @param body data of the ${process.argv[3]}
 */
export const update = async (params:any, body:any): Promise<any> => {}

/**
 * Delete a ${process.argv[3]}
 * @param params params requeste object
 */
export const remove = async (params:any): Promise<any> => {}
`;

var route = `
import * as controller  from './controller';
import  { validar }  from'../../helpers/aunthentication';
import { InternalServerError } from '../../errors';
import  { Router,Request,Response } from 'express';
const router = Router();

router.get('/',validar, async (req:Request, res:Response):Promise<Response> => {
    return res.status(200).json();
});

router.get('/:id',validar, async (req:Request, res:Response):Promise<Response> => {
    return res.status(200).json();
});

router.post('/',validar, async (req:Request, res:Response):Promise<Response> => {
    return res.status(200).json();
});

router.post('/:id',validar, async (req:Request, res:Response):Promise<Response> => {
    return res.status(200).json();
});

router.delete('/:id',validar, async (req:Request, res:Response):Promise<Response> => {
    return res.status(200).json();
});

export default router;
`;
async function create() {
    await exec(`cd ./src/components && mkdir ${process.argv[3]}`);
    fs.writeFile(`./src/components/${process.argv[3]}/model.ts`,model,(err)=>{
        if(err) return console.log(err);
    });
    fs.writeFile(`./src/components/${process.argv[3]}/controller.ts`,controller,(err)=>{
        if(err) return console.log(err);
    });
    fs.writeFile(`./src/components/${process.argv[3]}/route.ts`,route,(err)=>{
        if(err) return console.log(err);
    })
}

module.exports = create;