import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isSubscribed: boolean = false;
  email: string = '';

  onSubmit(): void {
    console.log('Implement Newsletter subscrition!')
    this.isSubscribed = true;
  }
}
