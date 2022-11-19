import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/CustomValidators/PasswordMatch.Validator';
import { IUser } from 'src/app/Models/iuser';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userRegFrm!: FormGroup ;
  users:any[] = [];
  constructor(private fb: FormBuilder
            , private router:Router
            , private service:AuthService
            , private toastr:ToastrService) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.createForm();
  }

  getAllUsers(){
      this.service.getUsers().subscribe((res:any) => {
        this.users = res;
      })
    }

  createForm() {
    this.userRegFrm = this.fb.group({
    userName: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
    email: ['', [Validators.required, Validators.email]],
    // phoneNo: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  }, {validators: passwordMatch});
  }

  get userName() {
    return this.userRegFrm.get('userName');
  }

  get email() {
    return this.userRegFrm.get('email');
  }

  // get phoneNo() {
  //   return this.userRegFrm.get('phoneNo');
  // }

  get password() {
    return this.userRegFrm.get('password');
  }

  get confirmPassword() {
    return this.userRegFrm.get('confirmPassword');
  }

  submit() {
    let index = this.users.findIndex(item => item.email == this.userRegFrm.value.email)
    let indexusr = this.users.findIndex(item => item.username == this.userRegFrm.value.username)
    
    if(index != -1)  {
      this.toastr.error("Email has already registered", "" , {
        disableTimeOut: false,
        titleClass: "toastr_title",
        messageClass: "toastr_message",
        timeOut:5000,
        closeButton: true,
      })
    }
    
    else if(indexusr == -1)  {
      this.toastr.error("Username has already used, Try again", "" , {
        disableTimeOut: false,
        titleClass: "toastr_title",
        messageClass: "toastr_message",
        timeOut:5000,
        closeButton: true,
      })
      this.router.navigate(['auth/register']);
    }
    
    else {
    let userModel: IUser = this.userRegFrm.value as IUser;
    this.service.createUser(userModel).subscribe(res => {
      this.service.user.next(res)
      this.toastr.success("Account created successfully", "" , {
        disableTimeOut: false,
        titleClass: "toastr_title",
        messageClass: "toastr_message",
        timeOut:5000,
        closeButton: true,
      })
    });
    this.router.navigate(['home']);
  }
}
  
}

