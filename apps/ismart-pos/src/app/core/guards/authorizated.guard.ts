import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate,  CanActivateChild,  Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { StorageService } from "../services/storage.service";

@Injectable()
export class AuthorizatedGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router,
              private storageService: StorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if (this.storageService.isAuthenticated()) {
      return true;
    }
    
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | Observable<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }
}