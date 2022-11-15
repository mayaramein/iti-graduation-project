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

  loginForm!:FormGroup
  users:any[] = []
  role:string = "users"
  constructor(private fb:FormBuilder
            , private service:AuthService
            , private router:Router
            , private toastr: ToastrService
            ) { }

  ngOnInit(): void {
    this.createForm();
    this.getAllUsers();
  }

  getAllUsers(){
    this.service.getUsers().subscribe((res:any) => {
      this.users = res;
    })
  }

  

  createForm() {
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
    })
  }

  submit() {
    
    let index = this.users.findIndex(item => item.email == this.loginForm.value.email && item.password == this.loginForm.value.password)
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
        this.role = "admin"
      }
      const model = {
        username:this.users[index].username,
        role:this.role,
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
        this.router.navigate(['home']);
      });
    }
    
  }
}
