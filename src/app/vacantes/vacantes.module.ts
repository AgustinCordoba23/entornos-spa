import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacantesRoutingModule } from './vacantes-routing.module';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    VacantesRoutingModule
  ]
})
export class VacantesModule { }
