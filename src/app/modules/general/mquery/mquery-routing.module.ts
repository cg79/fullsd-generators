import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MqueryComponent } from './mquery.component';



const routes: Routes = [
  { path: '', component: MqueryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MqueryRoutingModule { }