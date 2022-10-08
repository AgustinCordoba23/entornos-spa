import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { VerComponent } from './ver/ver.component';
import { EditarComponent } from './editar/editar.component';
import { PostularmeComponent } from './postularme/postularme.component';
import { MisPostulacionesComponent } from './mis-postulaciones/mis-postulaciones.component';
import { CargarResultadosComponent } from './cargar-resultados/cargar-resultados.component';

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
	{
		path: 'editar/:id',
		component: EditarComponent,
	},
	{
		path: 'postularme/:id',
		component: PostularmeComponent,
	},
	{
		path: 'mis-postulaciones',
		component: MisPostulacionesComponent,
	},
	{
		path: 'cargar-resultados/:id',
		component: CargarResultadosComponent,
	},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacantesRoutingModule { }
