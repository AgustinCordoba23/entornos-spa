import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	public rol : number = 0; //usuario no logueado
	public nombre : string = "";
	public rolDescripcion : string = "";

	constructor(
		private authService: AuthService,
		private router : Router,
	) {}

	ngOnInit(): void {
		this.establecerUsuario();
	}

	public establecerUsuario(){
		this.authService.getCurrentUser().then((usuario) => {
			if (usuario != null){
				this.nombre = usuario.nombre;
				this.rolDescripcion = usuario.rol_relacion.nombre;
				if(usuario.rol_relacion.id == 2){
					this.rol = 2; //responsable administrativo
				} else {
					this.rol = 3; //usuario logueado
				}
			} else{
				this.rol = 0;
			}
		});
	}

	public async logout(){
		await this.authService.logout();
		this.router.navigateByUrl('/');
		this.establecerUsuario();
	}

}
