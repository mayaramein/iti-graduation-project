import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SharedLayoutComponent } from './shared/components/shared-layout/shared-layout.component';
import { HomeComponent } from './home/home/home.component';
import { SigninComponent } from './auth/components/signin/signin.component';
import { SignupComponent } from './auth/components/signup/signup.component';

const routes: Routes = [ 
  {path: '', component: SharedLayoutComponent, children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    
  ]},
  {path:'login', component:SigninComponent},
  {path:'register', component:SignupComponent},
  {path:'**', component:NotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
