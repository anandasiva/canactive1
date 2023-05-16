import { Injectable }from '@angular/core';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
import {of} from'rxjs';

@Injectable()
    export class AuthService{
        private isloggedIn:boolean;
        private userName:string | undefined;
   constructor(){
    this.isloggedIn=false;
   }

   login(username:string,password:string){
    this.isloggedIn=true;
    this.userName=username;
    return of(this.isloggedIn);
   }
   isUserLoggedIn():boolean{
    return this.isloggedIn;
   }

   isAdminUser():any{
      if(this.userName=='Admin'){
             return true;
            }
       return false
    }

    logoutUser():void{
        this.isloggedIn = false;
    }
    
   



    }