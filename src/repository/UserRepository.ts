import { isPrefixUnaryExpression } from "typescript";
import { IUser } from "../models";

let User: IUser[] = [];

export class UserRepository{
    public list = ()=>{
        return User;
        }
        public create = (NewUser : IUser) =>{
            const exists = User.find(tmp => tmp.id == NewUser.id);
            if(exists){
                return "Usuário já Cadastrado.";
            }
            User.push(NewUser);
            return User;
        }
        public findBild = (id: number) =>{
            const exists = User.find(tmp => tmp.id == id);
            if(exists){
                return exists;
            }
            return "Usuario Não Encontrado.";
        }
        public delete = (id: number) =>{
            const index = User.findIndex(tmp => tmp.id == id);
            if(index == -1){
                return "Usuário Não Encontrado";
            }
            User = User.filter(tmp => tmp.id != id);
            return "Usuário Removido";
        }
        public update = (User : IUser)=>{
            let exists = User.find(tmp => tmp.id == User.id);
            if(!exists){
                return "Usuário Não Cadastrado.";
            }
        
           exists = User;
           User = User.filter(tmp => tmp.id != exists.id);
           User.push(exists);
           return User;
        }

}
