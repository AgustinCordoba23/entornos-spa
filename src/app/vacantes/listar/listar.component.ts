import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { LocatorService } from 'src/app/shared/services/locator.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

    public vacantes : any = [];
    public fecha = new Date();
    public form! : FormGroup;

    constructor(
        private apiService  : ApiService,
    ) { }

    ngOnInit(): void {
        this.form = new FormGroup({
			catedra : new FormControl(''),
		});
        this.obtenerVacantes();
    }

    public async obtenerVacantes(){
        this.vacantes = await this.apiService.getData('/vacantes');
    }

    public obtenerEstado(fecha : string){
        if(new Date(fecha) < this.fecha){
            return "finalizada";
        } else{
            return "en curso";
        }
    }

    public async buscar(){
        this.vacantes = await this.apiService.getData('/vacantes', {
            filtros: {
                catedra : this.form.get("catedra")?.value,
            }
        });
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
