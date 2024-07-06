import { Component } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent {
  amount:any = "$ Other";

  updateAmount(m:number):void {
    this.amount = m;
  }

  donate():void {
    window.open('https://givebutter.com/generaldonations', '_blank')?.focus();
  }

}
