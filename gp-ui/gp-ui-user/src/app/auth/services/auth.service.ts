import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from 'src/app/Models/iuser';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isloggedSubject: BehaviorSubject<boolean>;

  
  constructor(private httpC:HttpClient) {
    this.isloggedSubject=new BehaviorSubject<boolean> (this.isUserLogged); 
  }
  user = new Subject()
  
  createUser(model:any) {
    this.isloggedSubject.next(true);
    // return this.http.post(environment.ApiUrl+'Register' , model)
    return this.httpC.post(environment.securityApiUrl+'Register/' , model)
  }

  //  createUser(model: IUser) : Observable <IUser> {
  //   this.isloggedSubject.next(true);
  //   this.httpC.post <IUser>
  //   return this.httpC.post < IUser > (environment.securityApiUrl+'Register/', JSON.stringify(model))
  //   }
      

  getUsers(){
    return this.httpC.get(environment.ApiUrl+'users')
  }

  // setusrToken(){
  //   let usrToken='123456789';
  //   localStorage.setItem("token", usrToken);
  //   this.isloggedSubject.next(true);
  // }

  login(model:any) {
    // this.setusrToken();
    return this.httpC.post(environment.ApiUrl+'login/1' , model)
  }

  getRole() {
    return this.httpC.get(environment.ApiUrl+'login/1')
  }


  logout(model:any)
  {
    localStorage.removeItem("token");
    this.isloggedSubject.next(false);
    return this.httpC.delete(environment.ApiUrl+'login/1' , model)
  }

  get isUserLogged(): boolean
  {
    return  (localStorage.getItem('token'))? true: false
  }

  getloggedStatus(): Observable<boolean>
  {
    return this.isloggedSubject.asObservable();
  }
}
