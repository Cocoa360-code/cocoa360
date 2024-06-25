import { Component } from '@angular/core';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.scss']
})
export class ImpactComponent {
  farmersCount:number = 0;
  productionCount:number = 0;
  revenueCount:number = 0;

  farmersCountInterval:any = setInterval(()=>{
    this.farmersCount += 20;
    if(this.farmersCount >= 35000) clearInterval(this.farmersCountInterval);
  }, 1);

  productionCountInterval:any = setInterval(()=>{
    this.productionCount++;
    if(this.productionCount == 1425) clearInterval(this.productionCountInterval);
  }, 5);

  revenueCountInterval:any = setInterval(()=>{
    this.revenueCount++;
    if(this.revenueCount == 75) clearInterval(this.revenueCountInterval);
  }, 100);

}
