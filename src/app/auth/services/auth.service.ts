import { ApiService       } from 'src/app/shared/services/api.service';
import { Injectable       } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor (
        private apiService  : ApiService,
    ) { }

    public async register (name:string, email:string, password:string) {
        await this.apiService.post("/register",{
            name : name,
            email : email,
            password : password,
        });
    }

    public async login(email:string,password:string) : Promise<void> {
        const response = await this.apiService.post("/login",{
            email    : email,
            password : password,
        });

        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('current_user', JSON.stringify(response.user));
    }

    public async logout() : Promise<any> {
        await this.apiService.post("/logout",{});

        localStorage.removeItem('access_token');
        localStorage.removeItem('current_user');
    }

    public async getCurrentUser() {
        return localStorage.getItem('current_user');
    }

    public getAccessToken() : string | null {
        return localStorage.getItem('access_token');
    }

}
