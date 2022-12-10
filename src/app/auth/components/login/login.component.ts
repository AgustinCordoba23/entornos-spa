import { AuthService     } from '../../services/auth.service';
import { Component       } from '@angular/core';
import { FormControl     } from '@angular/forms';
import { FormGroup       } from '@angular/forms';
import { MatDialog       } from '@angular/material/dialog';
import { OnInit          } from '@angular/core';
import { Router          } from '@angular/router';
import { LocatorService } from 'src/app/shared/services/locator.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

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
        private snackBar : SnackBarService,
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
        if(this.form.get("email")?.value == '' || this.form.get("password")?.value == ''){
            return;
        }

        if(!this.form.get("email")?.value.includes('@')){
            this.snackBar.show("El email no es una dirección de corre válida.");
            return;
        }

        await this.authService.login(
            this.form.get("email")?.value,
            this.form.get("password")?.value,
        );
        
        this.router.navigateByUrl('/');
		
    }

    public volver(){
		this.router.navigateByUrl(`/`);
	}
}
