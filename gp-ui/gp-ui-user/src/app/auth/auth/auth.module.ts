import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../components/signin/signin.component';
import { SignupComponent } from '../components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


  const routes: Routes =[
    {path:'', redirectTo: '/auth/login', pathMatch:'full'},
    {path:'login', title:"Login", component:SigninComponent},
    {path:'register', title:"Register", component:SignupComponent},
   ]
  
@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    
  ]
})
export class AuthModule { }
