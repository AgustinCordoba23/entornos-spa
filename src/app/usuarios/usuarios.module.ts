import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListarComponent } from './listar/listar.component';
import { SharedModule } from '../shared/shared.module';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [
    ListarComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule
  ]
})
export class UsuariosModule { }
