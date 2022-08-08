import { LoggedInGuard         } from './auth/logged-in.guard';
import { NgModule              } from '@angular/core';
import { RouterModule          } from '@angular/router';
import { Routes                } from '@angular/router';
import { ConstruccionComponent } from './shared/components/construccion/construccion.component';
import { RouteGuard            } from './auth/route.guard';

const routes: Routes = [

    {
        path: '',
        canActivate: [RouteGuard],
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), 
    },
    {
        path: 'home',
        canActivate: [LoggedInGuard],
        component: ConstruccionComponent, //activar modulo cuando se realice
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
