import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataCollectionComponent } from './components/data-collection/data-collection.component';
import { CertificateForBCSR6Component } from './components/rule6/certificate-for-bcs-r6/certificate-for-bcs-r6.component';
import { CompensationReqformR6Component } from './components/rule6/compensation-reqform-r6/compensation-reqform-r6.component';


const routes: Routes = [

  // {path:'',component:DataCollectionComponent},

  // ---------Child Routing Experimentation
  // {path:'',component:DataCollectionComponent,
  // children:[
  //   {path:'certificateforbcs6',component:CertificateForBCSR6Component},
  //   {path:'compensation6',component:CompensationReqformR6Component}
  // ]
  // }

  // Lazy Loading Experiment

  {path:"rule6",loadChildren:()=>import('./rule6/rule6.module')
  .then(mod=>mod.Rule6Module)
  },
  {path:"rule26",loadChildren:()=>import('./rule26/rule26.module')
  .then(mod=>mod.Rule26Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
