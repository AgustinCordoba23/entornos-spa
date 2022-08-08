import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return await this.check();
    }

    public async canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return await this.check();
    }

    public async check() {
        if(this.authService.getAccessToken() != null){
            return true;
        } else{
            this.router.navigate(['/']);
            return false;
        }
    }

}
