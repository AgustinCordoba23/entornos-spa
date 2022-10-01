import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListarComponent } from './listar/listar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule
  ]
})
export class UsuariosModule { }
