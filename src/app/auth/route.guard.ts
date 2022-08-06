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

        let puedeNavegar = await this.authService.puedeNavegar(url);
        
        if (puedeNavegar === true) {
            if (!this.authService.estaLogueado()) {
                // this.router.navigateByUrl('/');
                window.scroll(0,0);
            }
        }
        return puedeNavegar;
    }

}
