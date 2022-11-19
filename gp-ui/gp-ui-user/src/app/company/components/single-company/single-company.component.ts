import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/Models/company';
import { CompanyServiceService } from '../../services/company-service.service';

@Component({
  selector: 'app-single-company',
  templateUrl: './single-company.component.html',
  styleUrls: ['./single-company.component.scss']
})
export class SingleCompanyComponent implements OnInit {

  @Input() company: any ={};
  companies:Company[]=[];
  Scompany: Company = new Company(

    "","","",0,"",[]
  )
  constructor(private service:CompanyServiceService
    , private router:Router
    , private acR: ActivatedRoute) { }

  ngOnInit(): void {
    
  }


  Delete(id:string){
    console.log(id)
    if(confirm("Are you sure?")==true)
    this.service.DeleteCompanyById(id).subscribe(
      a => {
        this.service.getCompanies().subscribe((d:any)=>{
          this.companies=d;
        })
        this.router.navigateByUrl('/company');
        // this.router.navigateByUrl('/company/all-companies');
      }
    );

  }
}
