import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home.Component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminComponent},
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }