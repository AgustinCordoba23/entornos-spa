import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	public form!            : FormGroup;
    public hidePassword     : boolean = true;
	public hideConfirmPassword : boolean = true;

	constructor(
		private authService : AuthService,
		private router      : Router,
		private snackBar    : SnackBarService,
	) { }

	ngOnInit(): void {
		this.setForm();
	}

  	public setForm() : void {
		this.form = new FormGroup({
			nombre   : new FormControl(''),
			email    : new FormControl(''),
			password : new FormControl(''),
			confirmarPassword : new FormControl(''),
			rol : new FormControl(''),
		});
 	}

    public async submit(){    
		if(this.form.get("email")?.value == '' || this.form.get("password")?.value == '' 
			|| this.form.get("nombre")?.value == '' || this.form.get("confirmarPassword")?.value == ''){
            return;
        }

        if(!this.form.get("email")?.value.includes('@')){
            this.snackBar.show("El email no es una dirección de corre válida.");
            return;
        }

		if(this.form.get("password")?.value != this.form.get("confirmarPassword")?.value){
			this.snackBar.show("Las contraseñas no coinciden.");
            return;
		}

		if(this.form.get("password")?.value.length < 6){
			this.snackBar.show("La contraseña debe tener más de 6 caracteres.");
            return;
		}

		await this.authService.registrar(
			this.form.get("nombre")?.value,
			this.form.get("email")?.value,
			this.form.get("password")?.value,
			this.form.get("rol")?.value,
		);
		this.router.navigateByUrl('/auth/login');

		this.snackBar.show("Cuenta creada con éxito.");
		
    }

	public volver(){
		this.router.navigateByUrl(`/`);
	}

}
