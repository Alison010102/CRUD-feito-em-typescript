import { updateLanguageServiceSourceFile } from "typescript";
import {UserServices} from "../services";
import { Request,response,Response } from "express";

export class UserController{
    private service : UserServices;

    constructor(){
    this.service = new UserServices();
    }
    public list(req : Request, res : Response) {
        return res.json(this.service.list());
    }
    public create (req : Request, res : Response){
        const User = req.body;
        return res.json (this.service.criate(User));
    }
    public findBild(req : Request, res : Response){
       const id = req.params.id;
        return res.json (this.service.findBild(+id));
    }
    public delete  (req : Request, res : Response){
        const id = req.params.id;
        return res.json (this.service.delete(+id));
}
    public update (req : Request, res : Response){
    const User = req.body;
    return res.json (this.service.update(User));
    }
    
}