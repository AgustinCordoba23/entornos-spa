import { LoggedInGuard         } from './auth/logged-in.guard';
import { NgModule              } from '@angular/core';
import { RouterModule          } from '@angular/router';
import { Routes                } from '@angular/router';
import { ConstruccionComponent } from './shared/components/construccion/construccion.component';

const routes: Routes = [

    {
        path: '',
        //canActivate: [RouteGuard],
        //canActivateChild: [RouteGuard],
        children: [
            {
                path:'auth',
                loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), 
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home',
            },
            {
                path: 'home',
                canActivate: [LoggedInGuard],
                component: ConstruccionComponent,
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
