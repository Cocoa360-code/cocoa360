import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  isSubscribed: boolean = false;
  email: string = '';

  onSubmit(): void {
    console.log('Implement Newsletter subscrition!')
    this.isSubscribed = true;
  }
}
