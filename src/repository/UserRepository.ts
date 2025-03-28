import { IUser } from "../models";

let users:IUser [] = [];

export class UserRepository{
    public list = ()=>{
        return users;
    }
    public create = (user:IUser)=>{
        const exist = users.findIndex((u)=> user.id == u.id);
        if (exist != -1){
            return "Produto ja criado";
        }
        users.push(user);
        return user;
    }
    public delete = (id:number)=>{
        const exist = users.findIndex((u)=> id == u.id);
        if (exist == -1){
            return "Produto nao encontrado";
        }
        users = users.filter ((user)=> user.id != user.id);
        return 1;
    }

}