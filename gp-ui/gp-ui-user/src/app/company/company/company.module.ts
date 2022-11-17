import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllCompaniesComponent } from '../components/all-companies/all-companies.component';
import { CompanyDetailsComponent } from '../components/company-details/company-details.component';
import { AddCompanyComponent } from '../components/add-company/add-company.component';
import { EditCompanyComponent } from '../components/edit-company/edit-company.component';
import { AuthGuard } from 'src/app/Gaurds/auth.guard';
import { SingleCompanyComponent } from '../components/single-company/single-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared/shared.module';

const routes: Routes =[
  {path:'', redirectTo: 'all-companies', pathMatch:'full'},
  {path:'all-companies', title:"All companies", component: AllCompaniesComponent},
  {path: 'company-details/:pid', title:"Company Details", component:CompanyDetailsComponent},
  {path: 'create-company', title:"Create Company", component:AddCompanyComponent, canActivate: [AuthGuard]},
  {path: 'edit-company/:pid', title:"Edit Company", component:EditCompanyComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    AddCompanyComponent,
    AllCompaniesComponent,
    CompanyDetailsComponent,
    EditCompanyComponent,
    SingleCompanyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CompanyModule { }
