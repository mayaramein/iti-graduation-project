import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICompany } from 'src/app/Models/icompany';
import { CompanyServiceService } from '../../services/company-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared/services/shared.service';

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
  newCompany: ICompany= {} as ICompany;
  locations:any[] = [];
  AllCompanies: ICompany[] =[];
  
  constructor(private service:CompanyServiceService
            , private sharedService:SharedService
            , private fb: FormBuilder
            , private router:Router
            , private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getLocations();
    // this.getAllCompanies();
    this.createForm();
  }

  getLocations(){
    this.sharedService.addLocation().subscribe((res:any) =>{
      this.locations = res;
    })
  }

  
  
  createForm() {
      this.addCompanyForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z]{4,}')]],
      file: ['', [Validators.required]],
      phoneNo: ['', [Validators.required]],
      location: ['', [Validators.required]],
    });
    }

  get name() {
    return this.addCompanyForm.get('name');
  }

  get phoneNo() {
    return this.addCompanyForm.get('phoneNo');
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

  // getAllCompanies(){
  //   this.service.getAllCompanies().subscribe((res:any) => {
  //     this.AllCompanies = res;
  //   })
  // }

  submit() {
    console.log(this.AllCompanies)
    let index = this.AllCompanies.findIndex(item => item.name == this.addCompanyForm.value.name)
    if(index != -1)  {
      this.toastr.error("Company has already exists", "" , {
        disableTimeOut: false,
        titleClass: "toastr_title",
        messageClass: "toastr_message",
        timeOut:5000,
        closeButton: true,
      })
    }else {
    let companyModel: ICompany = this.addCompanyForm.value as ICompany;
    console.log(companyModel)
    this.service.companyCreation(companyModel).subscribe(res => {
      this.toastr.success("Company added successfully", "" , {
        disableTimeOut: false,
        titleClass: "toastr_title",
        messageClass: "toastr_message",
        timeOut:5000,
        closeButton: true,
      })
    });
    this.router.navigate(['company']);
  }
    
  }

  

}
