import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree }from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router:Router,private authService:AuthService) { }

 canActivate(_route:ActivatedRouteSnapshot,_state:RouterStateSnapshot):boolean|UrlTree{
    
  if(!this.authService.isUserLoggedIn()){

    alert("You are not allowed to view this page.You are redirected to login page");
    this.router.navigate(["login"],{queryParams:{retUrl:Router}});
    return false;

 }
  return true;

 }
}