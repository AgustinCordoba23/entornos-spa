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
		await this.authService.register(
			this.form.get("nombre")?.value,
			this.form.get("email")?.value,
			this.form.get("password")?.value,
		);
		this.router.navigateByUrl('/auth/login');
    }

}
