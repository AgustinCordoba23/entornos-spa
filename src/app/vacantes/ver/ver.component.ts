import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss']
})
export class VerComponent implements OnInit {

	public vacanteId! : string;
	public vacante = {
		catedra : '',
		descripcion : '',
		fecha_fin : ''
	};
	public rol! : number;
	public fecha = new Date();

	columnas: string[] = ['Nombre Postulante', 'Email Postulante', 'Orden de Mérito'];
	postulaciones: any[] = [];
	dataSource:any;
	@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

	constructor(
		private route: ActivatedRoute,
		private apiService  : ApiService,
		private authService: AuthService,
	) {
		this.vacanteId = route.snapshot.params['id'];
	}

	ngOnInit(): void {
		this.getVacante();
		this.authService.getCurrentUser().then((usuario) => {
			if (usuario != null){
				this.rol = usuario.rol_relacion.id; 
			} else{
				this.rol = 0;
			}
		});
		
		this.paginator._intl.itemsPerPageLabel="Registros por página";
		
	}

	public async getVacante(){
		let response = await this.apiService.getData(`/vacantes/${this.vacanteId}`);
		
		this.vacante = response['data'].vacante[0];

		this.postulaciones = [];

		response['data'].postulaciones.forEach((postulacion: {nombre: any; email: any; orden_merito: any}) => {
			this.postulaciones.push(
				{
					"nombre" : postulacion.nombre,
					"email" : postulacion.email,
					"orden" : postulacion.orden_merito != null ? postulacion.orden_merito : '-',
				}
			)
		});

		this.dataSource = new MatTableDataSource<any>(this.postulaciones);
    	this.dataSource.paginator = this.paginator;
	}

	public obtenerEstado(fecha : string){
        if(new Date(fecha) < this.fecha){
            return "finalizada";
        } else{
            return "en curso";
        }
    }

	public mesHelper(mes : string){
        switch(mes){
            case "01":
                return "Enero";
            case "02":
                return "Febrero";
            case "03":
                return "Marzo";
            case "04":
                return "Abril";
            case "05":
                return "Mayo";
            case "06":
                return "Junio";
            case "07":
                return "Julio";
            case "08":
                return "Agosto";
            case "09":
                return "Septiembre";
            case "10":
                return "Octubre";
            case "11":
                return "Noviembre";
            case "12":
                return "Diciembre";
        }
        return "";
    }

}
