import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule { 

  PatientName: string ="";
  Age: Number=0;
  Sex: string ="";
  DoctorName: string ="";
  Time:string ="";
  Specialization:string ="";
  
}

export class UserModule1 { 

  PatientName: string ="";
  Age: Number=0;
  DoctorName: string ="";
  PrescriptionDetails:string ="";
  Date= new Date();
}
