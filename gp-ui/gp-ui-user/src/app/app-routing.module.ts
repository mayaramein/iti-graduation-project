import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SharedLayoutComponent } from './shared/components/shared-layout/shared-layout.component';
import { HomeComponent } from './home/home/home.component';
import { SigninComponent } from './auth/components/signin/signin.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { AllCompaniesComponent } from './company/components/all-companies/all-companies.component';
import { CompanyDetailsComponent } from './company/components/company-details/company-details.component';
import { AllUsersComponent } from './users/components/all-users/all-users.component';
import { UserDetailsComponent } from './users/components/user-details/user-details.component';
import { AdDetailsComponent } from './ads/components/ad-details/ad-details.component';
import { AllAdsComponent } from './ads/components/all-ads/all-ads.component';
import { AdminComponent } from './home/admin/admin.component';

const routes: Routes = [ 
  {path: '', component: SharedLayoutComponent, children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'company', component:AllCompaniesComponent},
    {path:'company/details', component:CompanyDetailsComponent},
    {path:'users', component:AllUsersComponent},
    {path:'user/details/1', component:UserDetailsComponent},
    {path:'ads', component:AllAdsComponent},
    {path:'ads/details', component:AdDetailsComponent},
    {path:'admin-dashboard', component:AdminComponent},
    
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
