import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DatosService } from '../services/datos.service';
import { UserLoggedService } from '../services/user-logged.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor( private datos: DatosService, private userLogged: UserLoggedService, private router: Router) { }

    canActivate(): boolean {
        if (this.userLogged.isAuthenticated) {            
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

    redirectLogin(){

    }
}
