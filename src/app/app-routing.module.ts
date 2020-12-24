import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent}   from './create/create.component';
import {HomeComponent}  from './home/home.component';
import {UpdateComponent}  from './update/update.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'create',component:CreateComponent},
  {path:'update/:id',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
