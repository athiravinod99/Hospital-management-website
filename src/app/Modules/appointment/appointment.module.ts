import { NgModule } from '@angular/core';
import { CommonModule, Time } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppointmentModule { 
  PatientName: string ="";
  Age: Number=0;
  Sex: string ="";
  DoctorName: string ="";
  Time:string ="";
  Specialization:string ="";
  count:Number=0;
  Department:string="";
}

export class DoctorModule1 {
  DoctorName:string ="";
  Specialization:string ="";
  Department:string="";
}
