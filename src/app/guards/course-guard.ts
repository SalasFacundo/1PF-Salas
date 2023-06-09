import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '..//feature_modules//students/models/course';
import { DatosService } from '../services/datos.service';
import { UserLoggedService } from '../services/user-logged.service';

@Injectable({
  providedIn: 'root',
})
export class CourseGuard implements CanActivate {
  constructor(
    private datos: DatosService,
    private userLogged: UserLoggedService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot) {

    const courseId = next.params['id'];
    let url = window.location.pathname;
    if (this.datos.getCoursesByUser(this.userLogged.getUser()).some((course: Course) => course.id == courseId)) {
        return true;
    } else {
        this.router.navigate(["home"]);
        return false;
    }
  }
}
