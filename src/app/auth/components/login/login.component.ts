import { AuthService     } from '../../services/auth.service';
import { Component       } from '@angular/core';
import { FormControl     } from '@angular/forms';
import { FormGroup       } from '@angular/forms';
import { MatDialog       } from '@angular/material/dialog';
import { OnInit          } from '@angular/core';
import { Router          } from '@angular/router';
import { LocatorService } from 'src/app/shared/services/locator.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public form! : FormGroup;
    public hidePassword : boolean = true;
    
    constructor(
        private authService : AuthService,
        private dialog : MatDialog,
        private router : Router,
    ){}

    public ngOnInit(): void {
        this.setForm();
    }

    public setForm() : void {
		this.form = new FormGroup({
			email : new FormControl(''),
			password : new FormControl(''),
		});
 	}

    public async submit(){      
		await this.authService.login(
			this.form.get("email")?.value,
			this.form.get("password")?.value,
		);
		this.router.navigateByUrl('/home');

        /* 
            para hacer una peticion recordar importar en el constructor el api.service.ts que esta en shared/services,
            luego hacer:
            this.apiServe.METODO(
                RUTA,
                {
                    PARAMETRO : VALOR,
                    ...
                }
            )
            notar que en este caso se llama a authSerive que en los metodos login y registrar carga el apiService
        */
    }
}
