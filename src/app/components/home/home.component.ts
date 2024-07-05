import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  patientsCount:number = 0;
  girlsCount:number = 0;
  communitiesCount:number = 0;

  patientsCountInterval:any = setInterval(()=>{
    this.patientsCount += 10;
    if(this.patientsCount >= 25000) clearInterval(this.patientsCountInterval);
  }, 1);

  girlsCountInterval:any = setInterval(()=>{
    this.girlsCount++;
    if(this.girlsCount == 300) clearInterval(this.girlsCountInterval);
  }, 40);

  communitiesCountInterval:any = setInterval(()=>{
    this.communitiesCount++;
    if(this.communitiesCount == 8) clearInterval(this.communitiesCountInterval);
  }, 700);

}
