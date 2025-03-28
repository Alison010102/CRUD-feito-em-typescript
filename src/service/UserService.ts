import { IUser } from "../models";
import { UserRepository } from "../repository";

export class UserService{
    private repository:UserRepository;
    constructor(){
        this.repository = new UserRepository();

    }
public list = ()=>{
    return this.repository.list();
}
public create = (user:IUser)=>{
    return this.repository.create(user);
}
public delete = (id:number)=>{
    return this.repository.delete(id);
}
}