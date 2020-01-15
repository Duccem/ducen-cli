# ducen-cli

A tool to help with the development of REST APIs using an architecture of components from server side

## Commands 

For now we have few commands but in the future they will be expanded.

- ### component 
    This command create a new component with the principals 3 files and their structs and the README.md of the component

    ` ducen-cli component | c <component>`

    Example:

    ` ducen-cli component casa`

        +--- components
        |  +--- casa
        |  |  +--- model.ts
        |  |  +--- controller.ts
        |  |  +--- route.ts
    
    **model.ts**

        export interface ICasa{}
    
    **controller.ts**

        
        import { ICasa } from './model';
        import * as consult from '../../helpers/consult';
        import * as links from '../../helpers/links';
        import * as respuestas from '../../errors';

        const model = "";
        const submodel = "";

        /**
        * Get all casa
        * @param query identifier of the consult
        */
        export const get = async (query: any): Promise<any> => {}

        /**
        * Get a casa 
        * @param id id of a casa
        * @param query modifier of the consult
        */
        export const getOne = async (id: string | number, query: any): Promise<any> => {}

        /**
        * Create a new casa
        * @param body 
        */
        export const create = async (body:any): Promise<any> => {}

        /**
        * Update a casa
        * @param params params request 
        * @param body data of the casa
        */
        export const update = async (params:any, body:any): Promise<any> => {}

        /**
        * Delete a casa
        * @param params params requeste object
        */
        export const remove = async (params:any): Promise<any> => {}

    **route.ts**

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

    **README.md**

        # Casa

        This component represents a Casa

- ### git 

    With this command you can make a fast push to the remote repository of the project

    ` ducen-cli git <comment> [<remote>] `

    Example:

    ` ducen-cli git initial commit origin`

    This make a commit and push to the origin remote

- ### helper 
    This command create an empty file on the dir helpers

    ` ducen-cli helper | h <helper> `

    Example:

    ` ducen-cli helper auth`

        +--- helpers
        |  +--- auth.ts
    
