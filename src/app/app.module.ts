import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ImpactComponent } from './components/impact/impact.component';
import { AboutComponent } from './components/about/about.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';
import { DonateComponent } from './components/donate/donate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ImpactComponent,
    AboutComponent,
    NewsletterComponent,
    HowWeWorkComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
