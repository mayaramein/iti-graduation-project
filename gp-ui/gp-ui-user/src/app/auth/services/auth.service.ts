import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  // user = new Subject()
  createUser(model:any) {
    return this.http.post(environment.ApiUrl+'users' , model)
  }

  getUsers(){
    return this.http.get(environment.ApiUrl+'users')
  }

  // login(model:any) {
  //   return this.http.put(environment.ApiUrl+'login/1' , model)
  // }

  // getUsers(type:string){
  //   return this.http.get(environment.ApiUrl+type)
  // }

  // getUser(id:number) {
  //   return this.http.get(environment.ApiUrl+"users/"+id)
  // }
  // updateUser(id:number , model:any) {
  //   return this.http.put(environment.ApiUrl+"users/"+id , model)
  // }
  // getRole() {
  //   return this.http.get(environment.ApiUrl+'login/1')
  // }
}
