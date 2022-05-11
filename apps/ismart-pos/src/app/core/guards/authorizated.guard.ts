import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate,  CanActivateChild,  Router, RouterStateSnapshot } from "@angular/router";
import { initParameter } from "apps/ismart-pos/src/assets/js/init";
import { Observable } from "rxjs";
import { TokenService } from "../services/token.service";

@Injectable()
export class AuthorizatedGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private tokenService: TokenService) {
      initParameter();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if(this.tokenService.isAuthenticated() && sessionStorage.getItem('url')) {
      return true;
    } else if(this.tokenService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | Observable<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }
}