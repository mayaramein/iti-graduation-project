import { Component, Input, OnInit } from '@angular/core';
import { Ads } from '../../../Models/ads';

@Component({
  selector: 'app-all-ads',
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.scss']
})
export class AllAdsComponent implements OnInit {
  AllAds: Ads[] =[];
  @Input() id: number = 0;
  constructor() { }

  ngOnInit(): void {
  }


}
