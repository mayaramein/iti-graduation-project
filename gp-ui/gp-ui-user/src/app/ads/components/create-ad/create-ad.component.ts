import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ads } from 'src/app/Models/ads';
import { IAds } from 'src/app/Models/iads';
import { SharedService } from 'src/app/shared/services/shared.service';
import { AdsServiceService } from '../../services/ads-service.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss']
})
export class CreateAdComponent implements OnInit {

  image:string =''
  createdDate: Date = new Date();
  createAdForm!: FormGroup ;
  // setState:string[] =[]
  newAd: IAds= {} as IAds;
  locations:any[] = [];
  ad:Ads=new Ads();

  constructor(private service:AdsServiceService
            , private sharedService:SharedService
            , private fb: FormBuilder
            , private router:Router
            , private toastr:ToastrService) {}

  ngOnInit(): void {
    this.getLocations();
    this.createForm();
  }

  getLocations(){
    this.sharedService.addLocation().subscribe((res:any) =>{
      this.locations = res;
    })
  }

  createForm() {
      this.createAdForm = this.fb.group({
      // title: ['', [Validators.required, Validators.pattern('[A-Za-z]{10,}')]],
      description: ['', [Validators.required, Validators.pattern('[A-Za-z]{50,}')]],
      price: ['', [Validators.required]],
      type: ['', [Validators.required]],
      city: ['', [Validators.required]],
      no_Of_Rooms: ['', [Validators.required]],
      no_Of_Bathrooms: ['', [Validators.required]],
      isFurnished: ['', [Validators.required]],
      imgUrl: ['false', [Validators.required]] ,
      // advDate: ['', [Validators.required]],
    });
    }

  // get title() {
  //   return this.createAdForm.get('title');
  // } 
  get description() {
    return this.createAdForm.get('description');
  }get price() {
    return this.createAdForm.get('price');
  }get type() {
    return this.createAdForm.get('type');
  }get city() {
    return this.createAdForm.get('city');
  }get no_Of_Rooms() {
    return this.createAdForm.get('no_Of_Rooms');
  }get no_Of_Bathrooms() {
    return this.createAdForm.get('no_Of_Bathrooms');
  }get floor_Number() {
    return this.createAdForm.get('floor_Number');
  }get isFurnished() {
    return this.createAdForm.get('isFurnished');
  }
  // get file() {
  //   return this.createAdForm.get('file');
  // }
  // get date() {
  //   return this.createAdForm.get('date');
  // }
  onFileChange(event:any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.image = reader.result as string;
     
        this.createAdForm.patchValue({
          fileSource: reader.result as string
        });
   
      };
   
    }
  }

  submit(){
    this.service.AddAds(this.createAdForm.value as Ads).subscribe();
    // this.service.createFlag=!this.deptSer.createFlag;
    this.router.navigate(['ads']);
  }

  // submit() {
    // let index = this.AllCompanies.findIndex(item => item.name == this.createAdForm.value.name)
    // if(index != -1)  {
    //   this.toastr.error("Company has already exists", "" , {
    //     disableTimeOut: false,
    //     titleClass: "toastr_title",
    //     messageClass: "toastr_message",
    //     timeOut:5000,
    //     closeButton: true,
    //   })
    // }else {
    // let adModel: IAds = this.createAdForm.value as IAds;
    // console.log(adModel)
    // this.service.adCreation(adModel).subscribe(res => {
    //   this.toastr.success("Ad Created successfully", "" , {
    //     disableTimeOut: false,
    //     titleClass: "toastr_title",
    //     messageClass: "toastr_message",
    //     timeOut:5000,
    //     closeButton: true,
    //   })
    // });
    // this.router.navigate(['ads']);
  // }
    
  // }

}
