import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompensationRequestR26Component } from '../components/rule26/compensation-request-r26/compensation-request-r26.component';
import { IdentificationDocR26Component } from '../components/rule26/identification-doc-r26/identification-doc-r26.component';

const routes: Routes = [
  {path:'identificationdoc',component:IdentificationDocR26Component},
  {path:'compensation',component:CompensationRequestR26Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Rule26RoutingModule { }
