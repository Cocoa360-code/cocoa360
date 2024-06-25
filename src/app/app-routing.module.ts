import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImpactComponent } from './components/impact/impact.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about-us", component: ImpactComponent},
  {path: "how-we-work", component: ImpactComponent},
  {path: "our-impact", component: ImpactComponent},
  {path: "contact", component: ImpactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
