import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

	public form!            : FormGroup;
    public hidePassword     : boolean = true;
	public hideConfirmPassword : boolean = true;

	constructor(
		private snackBar    : SnackBarService,
		private authService : AuthService,
		private apiService  : ApiService,
		private router      : Router,
	) { }

	ngOnInit(): void {
		this.setForm();
	}

	public setForm(){
		this.authService.getCurrentUser().then((usuario) => {
			this.form = new FormGroup({
				nombre   : new FormControl(usuario.nombre),
				email    : new FormControl(usuario.email),
				password : new FormControl(''),
				confirmarPassword : new FormControl(''),
				rol : new FormControl(usuario.rol_relacion.nombre),
			});
		});
	}

	 public async submit(){    
		if(this.form.get("password")?.value != this.form.get("confirmarPassword")?.value){
			this.snackBar.show("Las contraseñas no coinciden.");
            return;
		}

		if(this.form.get("password")?.value.length < 6){
			this.snackBar.show("La contraseña debe tener más de 6 caracteres.");
            return;
		}

		await this.apiService.post('/cambiar-password', {
			nueva_password : this.form.get("password")?.value, 
		});

		this.snackBar.show("Cambios guardados con éxito.");
		this.router.navigateByUrl('/');
    }

	public volver(){
		this.router.navigateByUrl(`/`);
	}

}
