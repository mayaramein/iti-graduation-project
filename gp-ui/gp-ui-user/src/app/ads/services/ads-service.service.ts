import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Ads } from 'src/app/Models/ads';
import { IAds } from 'src/app/Models/iads';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdsServiceService {
  
  baseUrl="https://localhost:7248/api/Advertisement";
  // httpOption;
  constructor(private http:HttpClient) { 
    // this.httpOption = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
        // ,Authorization: 'my-auth-token'
    //   })
    // };
  }

  // private handleError(error: HttpErrorResponse) {
  //   // Generic Error handler
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Write error details in Generic error log

  //   // Return an observable with a Advertisement-facing error message.
  //   return throwError(
  //     ()=>new Error('Error occured, please try again')
  //   )
  // }

  // adCreation(ad: IAds): Observable<IAds>{
      
  //   return this.http
  //   .post<IAds>(`${environment.ApiUrl}ads`, JSON.stringify(ad), this.httpOption)
  //   .pipe(
  //     retry(2),
  //     catchError(this.handleError)
  //   );
  // }
  
  getAllDepartments(){
    //return this.Depts;
    return this.http.get<Ads[]>(this.baseUrl);
  }

  AddAds(ad:Ads)
  {
    //this.Depts.push(new Ads(dept.id,dept.name,dept.capacity))
    return this.http.post(this.baseUrl, ad);
  }

  GetAdsById(id:number)/*:Ads|null*/
  {
    return this.http.get<Ads>(this.baseUrl+id)
    // for (let i = 0; i < this.Depts.length; i++) {
    //   if(this.Depts[i].id == id)
    //   return this.Depts[i];
    // }
    // return null;
  }

  DeleteAdsById(id:number)
  {
    return this.http.delete(this.baseUrl+id);
    // for (let i = 0; i < this.Depts.length; i++) {
    //   if(this.Depts[i].id==id)
    //   {
    //     this.Depts.splice(i,1);
    //   }
    // }
  }

  //update
  Update(ad:Ads)
  {
    return this.http.put<Ads>(this.baseUrl+ad.id,ad);
  }


}
