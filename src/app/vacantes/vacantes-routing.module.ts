import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { VerComponent } from './ver/ver.component';

const routes: Routes = [

	{
		path: '',
		component: ListarComponent
	},
	{
		path: 'crear',
		component: CrearComponent
	},
	{
		path: 'ver/:id',
		component: VerComponent,
	},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacantesRoutingModule { }
