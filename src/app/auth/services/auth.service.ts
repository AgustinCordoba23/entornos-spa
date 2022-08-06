import { AccesoInterface  } from '../models/acceso.model';
import { ApiService       } from 'src/app/shared/services/api.service';
import { Injectable       } from '@angular/core';
import { Router           } from '@angular/router';
import { UserService      } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _accessToken: string | null = null;

    constructor (
        private apiService  : ApiService,
        private router      : Router,
        private userService : UserService,
    ) { }

    public async register (name:string, email:string, password:string) {
        await this.apiService.post("/register",{
            name : name,
            email : email,
            password : password,
        });
    }

    get currentUser() {
        return this.userService.getUser();
    }

    get accesos(): AccesoInterface[] {
        return this.userService.getAccesos();
    }

    public async getCurrentUser(force: boolean = false): Promise<any> {
        if (this.userService.getUser() && !force) {
            return this.userService.getUser();
        }
        let response = await this.apiService.getData(`/me`);
        this.userService.setState(response.me);

        return response;
    }

    public async login(email:string,password:string) : Promise<void> {
        const response = await this.apiService.post("/login",{
            email    : email,
            password : password,
        });

        this.setAccessToken(response.data.access_token);

        await this.getCurrentUser();
    }

    public async puedeNavegar(uri: string | null): Promise<boolean> {
        if (uri === null) {
            return true;
        }
        let e = [
            '/home',
            '/auth/login', 
        ].filter((u) => {
            return u === uri;
        });

        if (e.length === 1) {
            return true;
        }

        let accesos = await this.fetchAccesos();
        return accesos.filter((row: any) => uri.startsWith(row.ruta)).length > 0;
    }

    public async fetchAccesos(): Promise<any> {
        let accesos = this.userService.getAccesos();
        
        if (accesos) {
            return accesos;
        }
        await this.getCurrentUser();
        return this.userService.getAccesos();
    }

    public estaLogueado() : boolean {
        if(this.currentUser){
            return true;
        }
        return false;
    }

    public async logout() : Promise<any> {
        try {
            await this.apiService.post("/auth/logout",{});
        } catch (e) {

        }

        this.removeSessionData();
    }

    public setAccessToken(value: string) : void {
        localStorage.setItem('access_token', value);
    }

    public removeSessionData() : void {
        this._accessToken = null;
        this.userService.removeUserData();
        localStorage.removeItem('access_token');
    }

    public getAccessToken() : string | null {
        return localStorage.getItem('access_token');
    }

}
