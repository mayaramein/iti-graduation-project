import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICompany } from 'src/app/Models/icompany';
import { CompanyServiceService } from '../../services/company-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Company } from 'src/app/Models/company';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  image:any = ''
  date: Date = new Date();
  seletedLocation:string = ''
  addCompanyForm!: FormGroup ;
  newCompany: Company= {} as Company;
  locations:any[] = [];
  AllCompanies: Company[] =[];
  Scompany: ICompany = new ICompany(

    "","",0,"",[]
  )
  constructor(private service:CompanyServiceService
            , private sharedService:SharedService
            , private fb: FormBuilder
            , private router:Router
            , private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getLocations();
    this.getAllCompanies();
    this.createForm();
  }

  getLocations(){
    this.sharedService.addLocation().subscribe((res:any) =>{
      this.locations = res;
    })
  }

  
  
  createForm() {
      this.addCompanyForm = this.fb.group({
        companyName: ['', [Validators.required, Validators.pattern('[A-Za-z]{4,}')]],
        companyImage: ['', [Validators.required]],
        companyPhoneNumber: ['', [Validators.required]],
        companylocation: ['', [Validators.required]],
    });
    }

  get companyName() {
    return this.addCompanyForm.get('companyName');
  }

  get companyPhoneNumber() {
    return this.addCompanyForm.get('companyPhoneNumber');
  }

  onFileChange(event:any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.image = reader.result as string;
     
        this.addCompanyForm.patchValue({
          fileSource: reader.result as string
        });
   
      };
   
    }
  }
  Save(){
    console.log(this.Scompany)
    this.service.createCompany(this.Scompany).subscribe();
    this.router.navigateByUrl('/company')
  }

  getAllCompanies(){
    this.service.getCompanies().subscribe((res:any) => {
      this.AllCompanies = res;
    })
  }

  // submit() {
  //   console.log(this.AllCompanies)
  //   console.log(this.addCompanyForm.value)
  //   let nCompany = this.addCompanyForm.value as Company;
  //   console.log(nCompany)
  //   let index = this.AllCompanies.findIndex(item => item.companyName == this.addCompanyForm.value.companyName)
  //   if(index != -1)  {
  //     this.toastr.error("Company has already exists", "" , {
  //       disableTimeOut: false,
  //       titleClass: "toastr_title",
  //       messageClass: "toastr_message",
  //       timeOut:5000,
  //       closeButton: true,
  //     })
  //   }else {
  //   // let companyModel: ICompany = this.addCompanyForm.value as ICompany;
  //   // console.log(companyModel)
  //   this.service.createCompany(nCompany).subscribe();
  //   this.service.createFlag=!this.service.createFlag;
  
  //   // this.service.companyCreation(companyModel).subscribe(res => {
  //   //   this.toastr.success("Company added successfully", "" , {
  //   //     disableTimeOut: false,
  //   //     titleClass: "toastr_title",
  //   //     messageClass: "toastr_message",
  //   //     timeOut:5000,
  //   //     closeButton: true,
  //   //   })
  //   // });
  //   this.router.navigate(['company']);
  // }
    
  // }

  

}
