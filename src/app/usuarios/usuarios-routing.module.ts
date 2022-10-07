import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
    {
		path: '',
		pathMatch: 'full',
		component: ListarComponent
    },
    {
		path: 'editar',
		component: EditarComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
