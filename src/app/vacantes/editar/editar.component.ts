import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

	public vacanteId! : string;
	public vacante = {
		catedra : '',
		descripcion : '',
		fecha_fin : ''
	};

	public form!            : FormGroup;
	public minDate          : Date;

	constructor(
		private route: ActivatedRoute,
		private apiService  : ApiService,
		private snackBar    : SnackBarService,
		private router      : Router,
	) { 
		this.vacanteId = route.snapshot.params['id'];
		this.minDate = new Date(new Date().getTime() + 86400000);
	}

	async ngOnInit(){
		this.getVacante();
		this.setForm();
	}

	public async getVacante(){
		let response = await this.apiService.getData(`/vacantes/${this.vacanteId}`);
		
		this.vacante = response['data'].vacante[0];

		let fecha = this.vacante.fecha_fin.split('-');

		let d = new Date(+fecha[0], +fecha[1]-1, +fecha[2]);

		this.form.controls['catedra'].setValue(this.vacante.catedra);
		this.form.controls['descripcion'].setValue(this.vacante.descripcion);
		this.form.controls['fecha'].setValue(d);
	}

	public setForm(){
		this.form = new FormGroup({
			catedra   : new FormControl(''),
			fecha     : new FormControl(''),
			descripcion : new FormControl(''),
		});
	}

	public async submit(){
		if(this.form.get("catedra")?.value == '' || this.form.get("fecha")?.value == '' || this.form.get("descripcion")?.value == ''){
			return;
		}	

		await this.apiService.put(`/vacantes/${this.vacanteId}`, {
			catedra : this.form.get("catedra")?.value,
			descripcion : this.form.get("descripcion")?.value, 
			fecha_fin : this.vacante.fecha_fin
		});
		
		this.snackBar.show("Cambios guardados con éxito.");
		this.router.navigateByUrl(`/ver/${this.vacanteId}`);
    }

	public async eliminar(){
		await this.apiService.delete(`/vacantes/${this.vacanteId}`);
		
		this.snackBar.show("Vacante eliminada con éxito.");
		this.router.navigateByUrl('/');
    }

	public seleccionFecha(event : any){
		let fecha = event.targetElement.value;

		fecha = fecha.split('/');
        if(fecha[0].length == 1){
            fecha[0] = '0' + fecha[0];
        }

        if(fecha[1].length == 1){
            fecha[1] = '0' + fecha[1];
        }

        let d = new Date(fecha[2], +fecha[0]-1, fecha[1]);

		this.form.get('fecha')?.setValue(d);

		fecha = fecha[2] + "-" + fecha[0] + "-" + fecha[1];
		this.vacante.fecha_fin = fecha;
	}

}
