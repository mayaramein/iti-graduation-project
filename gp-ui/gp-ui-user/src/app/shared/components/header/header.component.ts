import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLogged:boolean;
  constructor(private service:AuthService, private router:Router) {
    this.isUserLogged=this.service.isUserLogged;
   }

  ngOnInit(): void {
    this.service.getloggedStatus().subscribe(status=>{
      this.isUserLogged=status;
    });
  }

  logout()
  {
    const model={}
    this.service.logout(model);
    this.isUserLogged= this.service.isUserLogged;
    this.router.navigate(['/']);
  }

}
