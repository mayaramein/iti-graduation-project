import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllAdsComponent } from '../components/all-ads/all-ads.component';
import { AuthGuard } from 'src/app/Gaurds/auth.guard';
import { AdDetailsComponent } from '../components/ad-details/ad-details.component';
import { CreateAdComponent } from '../components/create-ad/create-ad.component';
import { EditAdsComponent } from '../components/edit-ads/edit-ads.component';
import { SingleAdComponent } from '../components/single-ad/single-ad.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes =[
  {path:'', redirectTo: 'ads/all-ads', pathMatch:'full'},
  {path:'all-ads', title:"All Ads", component: AllAdsComponent},
  {path: 'ad-details/:pid', title:"Ad Details", component:AdDetailsComponent},
  {path: 'create-ad', title:"Create Ad", component:CreateAdComponent, canActivate: [AuthGuard]},
  {path: 'edit-ad/:pid', title:"Edit Ad", component:EditAdsComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    AllAdsComponent,
    CreateAdComponent,
    EditAdsComponent,
    SingleAdComponent,
    AdDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AdsModule { }
