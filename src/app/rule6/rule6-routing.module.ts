import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateForBCSR6Component } from '../components/rule6/certificate-for-bcs-r6/certificate-for-bcs-r6.component';
import { CompensationReqformR6Component } from '../components/rule6/compensation-reqform-r6/compensation-reqform-r6.component';

const routes: Routes = [
  {path:'certificateforbcs6',component:CertificateForBCSR6Component},
  {path:'compensation6',component:CompensationReqformR6Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Rule6RoutingModule { }
