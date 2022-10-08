import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { VacantesRoutingModule } from './vacantes-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { VerComponent } from './ver/ver.component';
import { EditarComponent } from './editar/editar.component';
import { PostularmeComponent } from './postularme/postularme.component';
import { MisPostulacionesComponent } from './mis-postulaciones/mis-postulaciones.component';


@NgModule({
	declarations: [
		ListarComponent,
		CrearComponent,
		VerComponent,
		EditarComponent,
		PostularmeComponent,
		MisPostulacionesComponent
	],
	imports: [
		CommonModule,
		VacantesRoutingModule,
		SharedModule
	]
})
export class VacantesModule { }
