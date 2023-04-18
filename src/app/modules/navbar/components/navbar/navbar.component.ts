import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoggedService } from 'src/app/services/user-logged.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isOpened: boolean = false;
  replace : boolean = true;

  constructor(private loginService: UserLoggedService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.loginService.logOut();
    this.router.navigate(['/login']);
  }

  navigateTo(url: string){
    console.log("REDIRECCIONANDO A");
    console.log(url)
    this.router.navigate([url]);
  }
}
