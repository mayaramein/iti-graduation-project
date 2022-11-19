import { Component, Input, OnInit } from '@angular/core';
import { Ads } from '../../../Models/ads';
import { AdsServiceService } from '../../services/ads-service.service';

@Component({
  selector: 'app-single-ad',
  templateUrl: './single-ad.component.html',
  styleUrls: ['./single-ad.component.scss']
})
export class SingleAdComponent implements OnInit {

  
  @Input() ad: any ={};
  ads:Ads[]=[];
  constructor(private service: AdsServiceService) { }

  ngOnInit(): void {
  }

  Delete(id:number){
    if(confirm("Are you sure?")==true)
    this.service.DeleteAdsById(id).subscribe(
      ()=>{
        this.service.getAllDepartments().subscribe(d=>{
          this.ads=d;
        })
      }
    );
  }

}
