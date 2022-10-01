import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

	public form!            : FormGroup;

	columnas: string[] = ['Nombre Completo', 'Email', 'Rol', 'Estado', 'Acciones'];

	usuarios: any[] = [];

	dataSource:any;

	@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

	constructor(
		private apiService : ApiService,
	) { }

	ngOnInit(): void {
		this.setForm();
		this.setListado({});
		this.paginator._intl.itemsPerPageLabel="Registros por página";
	}


	public setForm() : void {
		this.form = new FormGroup({
			nombre : new FormControl(),
			rol : new FormControl(),
			estado : new FormControl(),
		});
 	}

	public async setListado(filtros : any){

		this.usuarios = [];
		
		let response = await this.apiService.getData('/usuarios/listar', {
			filtros : filtros
		});

		response.forEach((usuario: { rol: number; id: any; nombre: any; email: any; estado: any}) => {
			if(usuario.rol != 0){
				this.usuarios.push(
					{
						"id" : usuario.id,
						"nombre" : usuario.nombre,
						"email" : usuario.email,
						"rol" : usuario.rol == 1 ? "Jefe de Cátedra" : usuario.rol == 2 ? "Responsable Administrativo" : "Usuario",
						"estado" : usuario.estado,
					}
				)
			}
		});

		this.dataSource = new MatTableDataSource<any>(this.usuarios);
    	this.dataSource.paginator = this.paginator;
	}

	public filtrar(){ 
		let filtros : any = {};

		if(this.form.get("nombre")?.value){
			filtros["nombre"] = this.form.get("nombre")?.value;
		}

		if(this.form.get("rol")?.value){
			filtros["rol"] = this.form.get("rol")?.value;
		}

		if(this.form.get("estado")?.value){
			if(this.form.get("estado")?.value == 1){
				filtros["estado"] = "HABILITADO";
			} else if (this.form.get("estado")?.value == 2){
				filtros["estado"] = "PENDIENTE";
			} else{
				filtros["estado"] = "DESHABILITADO";
			}
		}

		this.setListado(filtros);
	}

	public limpiar(){
		this.setListado({});
		this.form.controls['nombre'].setValue(null);
		this.form.controls['rol'].setValue(null);
		this.form.controls['estado'].setValue(null);
	}

	public cambiarEstado(accion : string, id : any){
		this.apiService.post(`/usuarios/${id}/${accion}`, {});
		this.limpiar();
	}

}
