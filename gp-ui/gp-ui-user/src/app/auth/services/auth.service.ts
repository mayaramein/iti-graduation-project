import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  user = new Subject()
  createUser(model:any) {
    return this.http.post(environment.ApiUrl+'users' , model)
  }

  getUsers(){
    return this.http.get(environment.ApiUrl+'users')
  }

  login(model:any) {
    return this.http.put(environment.ApiUrl+'login/1' , model)
  }

  getAdmin() {
    return this.http.get(environment.ApiUrl+"admin")
  }
  
  getRole() {
    return this.http.get(environment.ApiUrl+'login/1')
  }
}
