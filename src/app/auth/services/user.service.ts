import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private user: any;
    private accesos: any;
    public readonly stateChanged: EventEmitter<any> = new EventEmitter();

    public setState(data : any) : void {
        this.accesos =  data.accesos;
        delete data.accesos;
        this.user = data;
        this.stateChanged.emit();
    }

    public getUser(): any {
        return this.user;
    }

    public getAccesos(): any[] {
        return this.accesos.filter((acceso: any) => {
            return acceso.spa === 1;
        });
    }

    public esAdministrador(): boolean {
        return this.user.rol_id === 1;
    }

    public removeUserData() {
        this.user = null;
        this.accesos = null;
    }

}