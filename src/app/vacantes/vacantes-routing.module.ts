import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { VerComponent } from './ver/ver.component';
import { EditarComponent } from './editar/editar.component';
import { PostularmeComponent } from './postularme/postularme.component';
import { MisPostulacionesComponent } from './mis-postulaciones/mis-postulaciones.component';
import { CargarResultadosComponent } from './cargar-resultados/cargar-resultados.component';
import { RouteGuard } from '../auth/route.guard';

const routes: Routes = [

	{
		path: '',
		component: ListarComponent
	},
	{
		path: 'crear',
		canActivate: [RouteGuard],
		component: CrearComponent
	},
	{
		path: 'ver/:id',
		canActivate: [RouteGuard],
		component: VerComponent,
	},
	{
		path: 'editar/:id',
		canActivate: [RouteGuard],
		component: EditarComponent,
	},
	{
		path: 'postularme/:id',
		canActivate: [RouteGuard],
		component: PostularmeComponent,
	},
	{
		path: 'mis-postulaciones',
		canActivate: [RouteGuard],
		component: MisPostulacionesComponent,
	},
	{
		path: 'cargar-resultados/:id',
		canActivate: [RouteGuard],
		component: CargarResultadosComponent,
	},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacantesRoutingModule { }
