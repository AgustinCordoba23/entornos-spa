import { LoggedInGuard         } from './auth/logged-in.guard';
import { NgModule              } from '@angular/core';
import { RouterModule          } from '@angular/router';
import { Routes                } from '@angular/router';
import { RouteGuard            } from './auth/route.guard';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), 
    },
    {
        path: 'usuarios',
        canActivate: [RouteGuard],
        loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule), 
    },
    {
        path: '',
        loadChildren: () => import('./vacantes/vacantes.module').then(m => m.VacantesModule), 
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
