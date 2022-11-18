import { Component, Input, OnInit } from '@angular/core';
import { CompanyServiceService } from '../../services/company-service.service';

@Component({
  selector: 'app-single-company',
  templateUrl: './single-company.component.html',
  styleUrls: ['./single-company.component.scss']
})
export class SingleCompanyComponent implements OnInit {

  @Input() company: any ={};
  constructor(private service:CompanyServiceService) { }

  ngOnInit(): void {
  }

  deleteCompany(company: any){
    // this.service.deleteCompany(company)
  }

}
