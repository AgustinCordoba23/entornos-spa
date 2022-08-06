import { NgModule   } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouteGuard } from './route.guard';

const routes: Routes = [

    // Rutas con sesión.
    /*
    {
        path: '',
        canActivateChild: [LoggedInGuard],
        children: [
            {
                path: 'change-password/verificar-codigo',
                component: ChangePasswordVerificarCodigoComponent
            },
        ]
    },
    */

    // Rutas de acceso público
    {
        path: 'login',
        component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
  },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }

