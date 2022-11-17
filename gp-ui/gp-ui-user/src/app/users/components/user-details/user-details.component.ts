import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  users:any[] = [];
  isUserLogged: boolean=false;
  constructor(private service:AuthService) { }

  ngOnInit(): void {
    this.isUserLogged= this.service.isUserLogged;
    this.getAllUsers();
  }
  
  getAllUsers(){
    this.service.getUsers().subscribe((res:any) => {
      this.users = res;
    })
  }
}
