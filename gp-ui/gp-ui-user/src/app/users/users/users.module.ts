import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Gaurds/auth.guard';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';
import { AllUsersComponent } from '../components/all-users/all-users.component';
import { SingleUserComponent } from '../components/single-user/single-user.component';

const routes: Routes =[
  {path:'', redirectTo: 'user/profile', pathMatch:'full'},
  {path:'profile', title:"User Profile", component: UserDetailsComponent, canActivate: [AuthGuard]},
  {path:'all-users', title:"All users", component: AllUsersComponent, canActivate: [AuthGuard]},
  {path: 'edit-profile', title:"Edit Profile", component:EditProfileComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    EditProfileComponent,
    UserDetailsComponent,
    AllUsersComponent,
    UserDetailsComponent,
    SingleUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
