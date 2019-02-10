import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private harcodedAuthenticationService : HarcodedAuthenticationService,
    private router:Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log("routing server fired");
    if (this.harcodedAuthenticationService.isUserLoggedIn()){
      return true; 
    }
    console.log('should navigate to login');
    this.router.navigate(['login']);
    return false; 
  }
}
