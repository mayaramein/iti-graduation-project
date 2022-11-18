import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IAds } from '../../../Models/iads';
import { CompanyServiceService } from '../../services/company-service.service';
import { ICompany } from '../../../Models/icompany';

@Component({
  selector: 'app-all-companies',
  templateUrl: './all-companies.component.html',
  styleUrls: ['./all-companies.component.scss']
})
export class AllCompaniesComponent implements OnInit, OnChanges {

  AllCompanies: ICompany[] =[];
  @Input() id: number = 0;
  // @Output() totalPriceChanged: EventEmitter<number>;
  // orderTotalPrice: number = 0;

  constructor(private service:CompanyServiceService) { }


  ngOnChanges(): void {
    this.service.getAllCompaniesById(this.id)
      .subscribe((res:any) =>{
        this.AllCompanies =res;
      });
  }

  ngOnInit(): void {
    this.getAllCompanies()
  }

  getAllCompanies(){
    this.service.getAllCompanies().subscribe((res:any) => {
      this.AllCompanies = res;
    })
  }

  

}
