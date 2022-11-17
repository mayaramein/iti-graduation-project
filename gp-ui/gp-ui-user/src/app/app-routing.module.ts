import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SharedLayoutComponent } from './shared/components/shared-layout/shared-layout.component';
import { HomeComponent } from './pages/home/home.component';import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuard } from './Gaurds/auth.guard';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [ 
  {path:'', component: SharedLayoutComponent, children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', title:"Home", component:HomeComponent },
    {path:'aboutus', title:"About Us", component:AboutUsComponent },
    {path:'admin-dashboard', title:"Admin Dashboard", component:AdminComponent , canActivate:[AuthGuard]},
    {
      path: 'user',
      loadChildren: () => import('./users/users/users.module')
                            .then(m=>m.UsersModule)
    },
    {
      path: 'ads',
      loadChildren: () => import('./ads/ads/ads.module')
                            .then(m=>m.AdsModule)
    },
    {
      path: 'company',
      loadChildren: () => import('./company/company/company.module')
                            .then(m=>m.CompanyModule)
    },
  ]},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth/auth.module')
                          .then(m=>m.AuthModule)
  },
  {path:'**', title:"Not Found 404", component:NotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
