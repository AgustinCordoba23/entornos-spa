import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable  } from '@angular/core';
import { AuthService } from './services/auth.service';

@Injectable()
export class RouteGuard implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    async canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.check(state.url);
    }

    canActivate() {
        return this.check();
    }

    private async check(url: string | null = null) {

        if (this.authService.getAccessToken() != null){
            return true;
        } else{
            return false;
        }
    }

}
