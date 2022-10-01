import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable  } from '@angular/core';
import { AuthService } from './services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class RouteGuard implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    async canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.check();
    }

    canActivate() {
        return this.check();
    }

    private async check(url: string | null = null) {

        if (this.authService.getAccessToken() != null){
            return true;
        } else{
            this.router.navigate(['/']);
            return false;
        }
    }

}
