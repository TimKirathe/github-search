import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchFormComponent } from './search-form/search-form.component';

const routes: Routes = [
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'search-form', component: SearchFormComponent},
  {path: '', redirectTo: 'landing-page', pathMatch: 'full'},
  {path: '**', component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
