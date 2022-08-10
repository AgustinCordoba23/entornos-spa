import { ApiService       } from 'src/app/shared/services/api.service';
import { Injectable       } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor (
        private apiService  : ApiService,
    ) { }

    public async registrar (nombre:string, email:string, password:string, rol: number) {
        await this.apiService.post("/registrar",{
            nombre : nombre,
            email : email,
            password : password,
            rol : rol
        });
    }

    public async login(email:string,password:string) : Promise<void> {
        const response = await this.apiService.post("/login",{
            email    : email,
            password : password,
        });

        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('usuario_actual', JSON.stringify(response.usuario));
    }

    public async logout() : Promise<any> {
        await this.apiService.post("/logout",{});

        localStorage.removeItem('access_token');
        localStorage.removeItem('usuario_actual');
    }

    public async getCurrentUser() {
        return localStorage.getItem('usuario_actual');
    }

    public getAccessToken() : string | null {
        return localStorage.getItem('access_token');
    }

}
