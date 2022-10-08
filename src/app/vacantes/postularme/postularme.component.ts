import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-postularme',
  templateUrl: './postularme.component.html',
  styleUrls: ['./postularme.component.scss']
})
export class PostularmeComponent implements OnInit {

	public vacanteId! : string;
	public vacante = {
		catedra : '',
		descripcion : '',
		fecha_fin : ''
	};
	public form!      : FormGroup;
	public archivo!      : File;
	public nombreArchivo : string = '';

	constructor(
		private route       : ActivatedRoute,
		private apiService  : ApiService,
		private snackBar    : SnackBarService,
		private router      : Router
	) { 
		this.vacanteId = route.snapshot.params['id'];
	}

	ngOnInit(): void {
		this.getVacante();
		this.setForm();	
	}

	public async getVacante(){
		let response = await this.apiService.getData(`/vacantes/${this.vacanteId}`);
		
		this.vacante = response['data'].vacante[0];

		let fecha = this.vacante.fecha_fin.split('-');

		let d = fecha[2] + "/" + fecha[1] + "/" + fecha[0];

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
		if(this.nombreArchivo == ''){
			this.snackBar.show("Debe cargar un archivo PDF como CV.");
			return;
		}
		
		if(this.archivo.type != "application/pdf"){
			this.snackBar.show("Debe cargar un archivo PDF como CV.");
			return;
		}
		
		await this.apiService.post(`/vacantes/${this.vacanteId}/postularme`, {
			cv: this.archivo
		});
		
		this.snackBar.show("Postulación guardada con éxito.");
		this.router.navigateByUrl(`/ver/${this.vacanteId}`);
    }

	public seleccionarArchivo(event : any) {
		let fileList: FileList = event.target.files;
		if(fileList.length > 0) {
			this.archivo = fileList[0];
			this.nombreArchivo = fileList[0].name;
		}
	}

	public volver(){
		this.router.navigateByUrl(`/ver/${this.vacanteId}`);
	}

}
