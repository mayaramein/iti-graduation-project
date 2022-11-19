import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ICompany } from 'src/app/Models/icompany';
import { Company } from 'src/app/Models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {
  // httpOption;
  // constructor(private http:HttpClient) { 
  //   this.httpOption = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //       // ,Authorization: 'my-auth-token'
  //     })
  //   };
  // }

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

  //   // Return an observable with a user-facing error message.
  //   return throwError(
  //     ()=>new Error('Error occured, please try again')
  //   )
  // }
  

  // getAllCompanies(){
  //   return this.http.get(environment.ApiUrl+'company') 
  // }

  // getAllCompaniesById(id:any){
  //   return this.http.get(environment.ApiUrl+'company'+{id}) 
  // }

  // companyCreation(company: ICompany): Observable<ICompany>{
      
  //   return this.http
  //   .post<ICompany>(`${environment.ApiUrl}company`, JSON.stringify(company), this.httpOption)
  //   .pipe(
  //     retry(2),
  //     catchError(this.handleError)
  //   );
  //   // return this.http.post(environment.ApiUrl+'company', company) 
  // }


  // deleteCompany(id:any){
  //   return this.http.delete(environment.ApiUrl+'company'+{id}) 
  // }

  private url = 'Company';
  createFlag=false;
  constructor(private http: HttpClient) {}

  public getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>("https://localhost:7248/api/Company");
    // return this.http.get<Company[]>(`${environment.companyApiUrl}/${this.url}`);
  }

  GetCompanyById(id:string)/*:Department|null*/
  {
    return this.http.get<Company>("https://localhost:7248/api/Company/"+id)
    // for (let i = 0; i < this.Depts.length; i++) {
    //   if(this.Depts[i].id == id)
    //   return this.Depts[i];
    // }
    // return null;
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.http.put<Company>("https://localhost:7248/api/Company",company);
  }

  public createCompany(company: ICompany): Observable<ICompany> {
    // return this.http.post<Company[]>(`${environment.companyApiUrl}/${this.url}`,company);
    // console.log(company)
    return this.http.post<Company>("https://localhost:7248/api/Company", company);
  }

  public deleteCompany(company: Company): Observable<Company[]> {
    return this.http.delete<Company[]>(
      "https://localhost:7248/api/Company"
    );
  }

  DeleteCompanyById(id:string)
  {
    return this.http.delete("https://localhost:7248/api/Company/"+id);
    // return this.http.delete(environment.companyApiUrl+"/"+this.url+"/"+id);
    // for (let i = 0; i < this.Depts.length; i++) {
    //   if(this.Depts[i].id==id)
    //   {
    //     this.Depts.splice(i,1);
    //   }
    // }
  }
}
