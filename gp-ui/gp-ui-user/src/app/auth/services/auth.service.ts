import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isloggedSubject: BehaviorSubject<boolean>;

  
  constructor(private http:HttpClient) {
    this.isloggedSubject=new BehaviorSubject<boolean> (this.isUserLogged); 
  }
  user = new Subject()
  
  createUser(model:any) {
    return this.http.post(environment.securityApiUrl+'Register' , model)
  }

  getUsers(){
    return this.http.get(environment.ApiUrl+'users')
  }

  // setusrToken(){
  //   let usrToken='123456789';
  //   localStorage.setItem("token", usrToken);
  //   this.isloggedSubject.next(true);
  // }
  login(model:any) {
    // this.setusrToken();
    return this.http.put(environment.ApiUrl+'login/1' , model)
  }

  getRole() {
    return this.http.get(environment.ApiUrl+'login/1')
  }


  logout(model:any)
  {
    localStorage.removeItem("token");
    this.isloggedSubject.next(false);
    return this.http.delete(environment.ApiUrl+'login/1' , model)
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
