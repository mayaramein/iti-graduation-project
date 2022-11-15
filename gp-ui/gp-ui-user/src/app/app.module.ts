import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { HomeComponent } from './home/home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './auth/components/signin/signin.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { AllAdsComponent } from './ads/components/all-ads/all-ads.component';
import { SingleAdComponent } from './ads/components/single-ad/single-ad.component';
import { AdDetailsComponent } from './ads/components/ad-details/ad-details.component';
import { UserDetailsComponent } from './users/components/user-details/user-details.component';
import { AllUsersComponent } from './users/components/all-users/all-users.component';
import { SingleUserComponent } from './users/components/single-user/single-user.component';
import { AllCompaniesComponent } from './company/components/all-companies/all-companies.component';
import { SingleCompanyComponent } from './company/components/single-company/single-company.component';
import { CompanyDetailsComponent } from './company/components/company-details/company-details.component';
import { AdminComponent } from './home/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    SigninComponent,
    SignupComponent,
    AllAdsComponent,
    SingleAdComponent,
    AdDetailsComponent,
    UserDetailsComponent,
    AllUsersComponent,
    SingleUserComponent,
    AllCompaniesComponent,
    SingleCompanyComponent,
    CompanyDetailsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
