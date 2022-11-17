import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IAds } from 'src/app/Models/iads';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdsServiceService {

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

  adCreation(ad: IAds): Observable<IAds>{
      
    return this.http
    .post<IAds>(`${environment.ApiUrl}ads`, JSON.stringify(ad), this.httpOption)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  

}
