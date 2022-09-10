import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { VacantesRoutingModule } from './vacantes-routing.module';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    VacantesRoutingModule,
    SharedModule
  ]
})
export class VacantesModule { }
