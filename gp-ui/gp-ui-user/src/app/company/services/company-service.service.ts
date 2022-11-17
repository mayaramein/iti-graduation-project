import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ICompany } from 'src/app/Models/icompany';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {
  httpOption;
  constructor(private http:HttpClient) { 
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,Authorization: 'my-auth-token'
      })
    };
  }

  private handleError(error: HttpErrorResponse) {
    // Generic Error handler
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Write error details in Generic error log

    // Return an observable with a user-facing error message.
    return throwError(
      ()=>new Error('Error occured, please try again')
    )
  }
  

  // addCompany(newAd: ICompany): {
  //   // addCompany(newAd: ICompany): Observable<ICompany> {
  //   // return this.http
  //   // .post<ICompany>(`${environment.ApiUrl}company`, JSON.stringify(newAd), this.httpOption)
  //   // .pipe(
  //   //   retry(2),
  //   //   catchError(this.handleError)
  //   // );

  // }
  getAllCompanies(){
    return this.http.get(environment.ApiUrl+'company') 
  }

  companyCreation(company: ICompany): Observable<ICompany>{
      
    return this.http
    .post<ICompany>(`${environment.ApiUrl}company`, JSON.stringify(company), this.httpOption)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
    // return this.http.post(environment.ApiUrl+'company', company) 
  }


  
  
}
