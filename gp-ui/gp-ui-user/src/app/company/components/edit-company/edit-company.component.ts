import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../../services/company-service.service';
import { SharedService } from '../../../shared/services/shared.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICompany } from 'src/app/Models/icompany';
import { ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private service:CompanyServiceService
            , private sharedService:SharedService
            , private fb: FormBuilder
            , private router:Router
            , private toastr:ToastrService) { }

  ngOnInit(): void {
    // this.router.paramMap.subscribe((params: ParamMap) => {
    //   this.id =  params.get('id')  || ""
    // })
    this.getLocations();
    // GetAllCompaniesById();
    
  }

  getLocations(){
    this.sharedService.addLocation().subscribe((res:any) =>{
      this.locations = res;
    })
  }

  // GetAllCompaniesById(){
  //   this.service.getAllCompaniesById(this.id).subscribe((res:any) => {
  //     this.AllCompanies = res;
  // }
  // }
  
  addFile(e:any){
    let reader = new FileReader();
    if(e.target.files ) {
      let file = e.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.newImage = reader.result; 
      };
    }
    this.Updatedimage=e.target.files[0]
  }

}
