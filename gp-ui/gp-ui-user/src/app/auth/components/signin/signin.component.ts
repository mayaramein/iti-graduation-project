import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  userLogFrm!: FormGroup ;
  users:any[] = [];
  isUserLogged: boolean=false;
  isAdmin:Boolean=false;
  constructor(private fb: FormBuilder
            , private router:Router
            , private service:AuthService
            , private toastr:ToastrService) {}

  ngOnInit(): void {
    this.isUserLogged= this.service.isUserLogged;
    this.getAllUsers();
    this.createForm();
  }

  getAllUsers(){
      this.service.getUsers().subscribe((res:any) => {
        this.users = res;
      })
    }

  createForm() {
    this.userLogFrm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  }

  get email() {
    return this.userLogFrm.get('email');
  }

  get password() {
    return this.userLogFrm.get('password');
  }

  
  submit() {
    
    let index = this.users.findIndex(item => item.email == this.userLogFrm.value.email && item.password == this.userLogFrm.value.password)
    console.log(index)
    if(index == -1) {
      this.toastr.error("Email or Password is incorrect", "" , {
        disableTimeOut: false,
        titleClass: "toastr_title",
        messageClass: "toastr_message",
        timeOut:3000,
        closeButton: true,
      })
    }else {

      if(index == 0){
        this.isAdmin = true
      }
      const model = {
        username:this.users[index].username,
        role:this.isAdmin,
      }
      this.service.login(model).subscribe(res => {
        this.service.user.next(res)
        this.toastr.success("Account has login successfully", "" , {
          disableTimeOut: false,
          titleClass: "toastr_title",
          messageClass: "toastr_message",
          timeOut:1000,
          closeButton: true,
        })
        if(this.isAdmin){
          this.router.navigate(['admin-dashboard']);
        }else {
          this.router.navigate(['home']);
        }
      });
    }
    
  }
}
