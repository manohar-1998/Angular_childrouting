import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DataCollectionComponent } from './components/data-collection/data-collection.component';
import { CompensationReqformR6Component } from './components/rule6/compensation-reqform-r6/compensation-reqform-r6.component';
import { MedicalHistoryCopyR6Component } from './components/rule6/medical-history-copy-r6/medical-history-copy-r6.component';
import { HospitalCertificateR6Component } from './components/rule6/hospital-certificate-r6/hospital-certificate-r6.component';
import { CertificateForBCSR6Component } from './components/rule6/certificate-for-bcs-r6/certificate-for-bcs-r6.component';
import { InsurabilityDocR6Component } from './components/rule6/insurability-doc-r6/insurability-doc-r6.component';
import { CompensationRequestR26Component } from './components/rule26/compensation-request-r26/compensation-request-r26.component';
import { IdentificationDocR26Component } from './components/rule26/identification-doc-r26/identification-doc-r26.component';
import { MedicalHistoryCopyR26Component } from './components/rule26/medical-history-copy-r26/medical-history-copy-r26.component';
import { MedicalTreatmentR26Component } from './components/rule26/medical-treatment-r26/medical-treatment-r26.component';
import { PersonalInsuranceR26Component } from './components/rule26/personal-insurance-r26/personal-insurance-r26.component';
import { ProofOfResidenceR26Component } from './components/rule26/proof-of-residence-r26/proof-of-residence-r26.component';


@NgModule({
  declarations: [
    AppComponent,
    DataCollectionComponent,
    CompensationReqformR6Component,
    MedicalHistoryCopyR6Component,
    HospitalCertificateR6Component,
    CertificateForBCSR6Component,
    InsurabilityDocR6Component,
    CompensationRequestR26Component,
    IdentificationDocR26Component,
    MedicalHistoryCopyR26Component,
    MedicalTreatmentR26Component,
    PersonalInsuranceR26Component,
    ProofOfResidenceR26Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatNativeDateModule
  ],
  exports:[
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
