import { UserService } from "../service";
import { Request,Response } from "express";

export class UserController{
    private service:UserService;

    constructor(){
        this.service = new UserService();
    }
    public list = (req:Request, res:Response)=>{
        return res.json(this.service.list());
    }
    public create = (req:Request,res:Response)=>{
        console.log(req.body);
        return res.json(this.service.create(req.body));
    }
    public delete = (req:Request,res:Response)=>{
        console.log(req.params.id);
        return res.json(req.params.id);
    }
}