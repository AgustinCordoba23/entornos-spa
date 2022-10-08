import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-cargar-resultados',
  templateUrl: './cargar-resultados.component.html',
  styleUrls: ['./cargar-resultados.component.scss']
})
export class CargarResultadosComponent implements OnInit {

	public vacanteId! : string;

	columnas: string[] = ['Nombre Postulante', 'Email Postulante', 'CV', 'Orden de Mérito'];
	postulaciones: any[] = [];
	dataSource:any;
	@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

	usuariosId: any[] = [];

	constructor(
		private route: ActivatedRoute,
		private apiService  : ApiService,
		private snackBar    : SnackBarService,
		private router      : Router,
	) { 
		this.vacanteId = route.snapshot.params['id'];
	}

	ngOnInit(){
		this.getPostulaciones();
		
		this.paginator._intl.itemsPerPageLabel="Registros por página";
	}

	public async getPostulaciones(){
		let response = await this.apiService.getData(`/vacantes/${this.vacanteId}`);

		this.postulaciones = [];

		response['data'].postulaciones.forEach((postulacion: {id: any, nombre: any; email: any, cv: any}) => {
			this.usuariosId.push(postulacion.id);

			this.postulaciones.push(
				{
					"id" : postulacion.id,
					"nombre" : postulacion.nombre,
					"email" : postulacion.email,
					"cv" : postulacion.cv
				}
			)
		});

		this.dataSource = new MatTableDataSource<any>(this.postulaciones);
    	this.dataSource.paginator = this.paginator;
	}

	public async cargarResultado(){

		let ordenes : Array<string> = [];

		this.usuariosId.forEach((usuarioId) => {
			let index = "input-" + usuarioId;

			let input = <HTMLSelectElement>document.getElementById(index);

			if(input.value == ''){
				this.snackBar.show("Debes cargar todos los resultados.");
            	return;
			}

			if(ordenes.includes(input.value)){
				this.snackBar.show("No pueden existir candidatos con el mismo orden.");
            	return;
			}

			ordenes.push(input.value);
		});
		
		let ordenesNumericos : Array<number> = [];
		let tienePrimerPuesto = false;
		ordenes.forEach((orden) => ordenesNumericos.push(Number(orden)));

		ordenesNumericos.forEach((orden) => {
			if(orden == 1) tienePrimerPuesto = true
		});

		if(!tienePrimerPuesto){
			this.snackBar.show("No has asignado un ganador con orden 1.");
			return;
		}

		this.apiService.post(`/vacantes/${this.vacanteId}/cargar-resultados`, {
			usuarios_id : this.usuariosId,
			orden_meritos : ordenesNumericos
		});

		this.snackBar.show("Resultados guardados con éxito.");
		this.router.navigateByUrl(`/ver/${this.vacanteId}`);
		
	}

}
