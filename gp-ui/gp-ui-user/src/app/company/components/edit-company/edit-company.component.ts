import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CompanyServiceService } from '../../services/company-service.service';
import { SharedService } from '../../../shared/services/shared.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICompany } from 'src/app/Models/icompany';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/Models/company';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {

  id:any=0;
  oldImage:any="";
  newImage:any=false;
  Updatedimage:any=false;
  image:any = ''
  seletedLocation:string = ''
  updateCompanyForm!: FormGroup ;
  updatedCompany: ICompany= {} as ICompany;
  locations:any[] = [];


  // image:any = ''
  // date: Date = new Date();
  // seletedLocation:string = ''
  // addCompanyForm!: FormGroup ;
  // newCompany: Company= {} as Company;
  // locations:any[] = [];
  // AllCompanies: Company[] =[];

  @Input() company?: Company;
  @Output() companyesUpdated = new EventEmitter<Company[]>();
  Scompany: Company = new Company(

    "","","",0,"",[]
  )
  constructor(private service:CompanyServiceService
            , private sharedService:SharedService
            , private fb: FormBuilder
            , private router:Router
            , private toastr:ToastrService
            , private acR: ActivatedRoute) { }

  ngOnInit(): void {
    
    // this.router.paramMap.subscribe((params: ParamMap) => {
    //   this.id =  params.get('id')  || ""
    // })
    // this.getLocations();
    // GetAllCompaniesById();
    this.acR.params.subscribe(a =>{
      let id = a["pid"];
      console.log(id)
      this.service.GetCompanyById(id).subscribe(a => {
        this.Scompany = a;
        console.log(this.Scompany)
      })
    })
  }

  Save(){
    console.log(this.Scompany)
    this.service.updateCompany(this.Scompany).subscribe();
    this.router.navigateByUrl('/company')
  }
  // getAllCompanies(){
  //   this.service.getCompanies().subscribe((res:any) => {
  //     this.AllCompanies = res;
  //   })
  // }
  
  // getLocations(){
  //   this.sharedService.addLocation().subscribe((res:any) =>{
  //     this.locations = res;
  //   })
  // }

  // GetAllCompaniesById(){
  //   this.service.getAllCompaniesById(this.id).subscribe((res:any) => {
  //     this.AllCompanies = res;
  // }
  // }
  
  // addFile(e:any){
  //   let reader = new FileReader();
  //   if(e.target.files ) {
  //     let file = e.target.files[0];
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.newImage = reader.result; 
  //     };
  //   }
  //   this.Updatedimage=e.target.files[0]
  // }
 
  

  // updatecompany(company: Company) {
  //   this.service
  //     .updateCompany(company)
  //     .subscribe((company: Company[]) => this.companyesUpdated.emit(company));
  // }

  // deletecompany(company: Company) {
  //   this.service
  //     .deleteCompany(company)
  //     .subscribe((companyes: Company[]) => this.companyesUpdated.emit(companyes));
  // }

  // createcompany(company: Company) {
  //   this.service
  //     .createCompany(company)
  //     .subscribe((companyes: Company[]) => this.companyesUpdated.emit(companyes));
  // }
}
