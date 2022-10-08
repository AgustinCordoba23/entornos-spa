import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-mis-postulaciones',
  templateUrl: './mis-postulaciones.component.html',
  styleUrls: ['./mis-postulaciones.component.scss']
})
export class MisPostulacionesComponent implements OnInit {

	columnas: string[] = ['Cátedra', 'Fecha de finalización', 'CV', 'Orden de mérito'];

	postulaciones: any[] = [];

	dataSource:any;

	@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

	public archivo!      : File;

	constructor(
		private apiService : ApiService,
	) { }

	ngOnInit(): void {
		this.setListado();
	}

	public async setListado(){

		this.postulaciones = [];
		
		let response = await this.apiService.getData('/vacantes/mis-postulaciones', {});

		response.forEach((postulacion: {catedra: number; fecha_fin: any; cv: any; orden_merito: any;}) => {
			this.postulaciones.push(
				{
					"catedra" : postulacion.catedra,
					"fecha_fin" : postulacion.fecha_fin,
					"cv" : postulacion.cv,
					"orden_merito" : postulacion.orden_merito == null ? 'En curso' : postulacion.orden_merito,
				}
			)
		});

		this.dataSource = new MatTableDataSource<any>(this.postulaciones);
    	this.dataSource.paginator = this.paginator;
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
