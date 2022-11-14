import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userForm!:FormGroup
  users:any[] = []
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
    this.userForm = this.fb.group({
      username:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      phone:['', [Validators.required]],
      password:['', [Validators.required]],
      Cpassword:['', [Validators.required]],
    })
  }

  submit() {
    const model = {
      username:this.userForm.value.username,
      email:this.userForm.value.email,
      password:this.userForm.value.password,
    }

    let index = this.users.findIndex(item => item.email == this.userForm.value.email)
    if(index != -1) {
      this.toastr.error("Email has already registered", "" , {
        disableTimeOut: false,
        titleClass: "toastr_title",
        messageClass: "toastr_message",
        timeOut:3000,
        closeButton: true,
      })
    }else {
      this.service.createUser(model).subscribe(res => {
        this.toastr.success("Account created successfully", "" , {
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
