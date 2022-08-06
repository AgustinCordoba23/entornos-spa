import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {AuthService} from "../../auth/services/auth.service"

@Injectable()
export class BearerTokenInterceptor implements HttpInterceptor {
    
    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = this.authService.getAccessToken();
        if (accessToken !== undefined) {
            const authReq = req.clone({
                setHeaders: { Authorization: 'Bearer ' + accessToken }
            });
    
            return next.handle(authReq);
        }

        return next.handle(req);
    }
}