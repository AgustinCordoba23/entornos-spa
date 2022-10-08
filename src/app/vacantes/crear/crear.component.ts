import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

	public form!            : FormGroup;
	public minDate          : Date;
	public fecha 			: string = '';

	constructor(
		private snackBar    : SnackBarService,
		private apiService  : ApiService,
		private router      : Router,
	) {
		this.minDate = new Date(new Date().getTime() + 86400000);
	 }

	ngOnInit(): void {
		this.setForm();
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

		await this.apiService.post('/vacantes', {
			catedra : this.form.get("catedra")?.value,
			descripcion : this.form.get("descripcion")?.value, 
			fecha_fin : this.fecha
		});
		

		this.snackBar.show("Vacante creada con éxito.");
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
		this.fecha = fecha;
	}

	public volver(){
		this.router.navigateByUrl(`/`);
	}


}
