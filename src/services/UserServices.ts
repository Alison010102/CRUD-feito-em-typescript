import {IUser} from "../models";
import {UserRepository} from "../repository";

export class UserServices{
    private repository : UserRepository;

    constructor(){
        this.repository = new UserRepository();
    
    }
    public list = ()=>{
        return this.repository.list();

    }
    public criate = (User : IUser)=>{
        return this.repository.create (User);

    }
    public findBild = (id : number)=>{
        return this.repository.findBild(id);

    }
    public delete (id : number){
        return this.repository.delete(id);

    }
    public update (User : IUser){
        return this.repository.update(User);
    }
    
}