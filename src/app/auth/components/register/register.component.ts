import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	public form!            : FormGroup;
    public hidePassword     : boolean = true;

	constructor(
		private authService : AuthService,
		private router      : Router,
	) { }

	ngOnInit(): void {
		this.setForm();
	}

  	public setForm() : void {
		this.form = new FormGroup({
			nombre   : new FormControl(''),
			email    : new FormControl(''),
			password : new FormControl(''),
		});
 	}

    public async submit(){      
		await this.authService.registrar(
			this.form.get("nombre")?.value,
			this.form.get("email")?.value,
			this.form.get("password")?.value,
			1 //este es el rol, un entero donde 1: admin, 2: responsable y 3: usuario
		);
		this.router.navigateByUrl('/'); //redirecciona a /auth/login, ver archivos de routing para entender
    }

}
