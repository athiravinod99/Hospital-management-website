import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModule, UserModule1 } from '../Modules/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  localport: string="58999";
  constructor(private http:HttpClient) { }

  appointmentapiurl="http://localhost:"+this.localport+"/api/Appointments/GetAppointmentsingle?name="+localStorage.getItem("Name");

  prescriptionapiurl="http://localhost:"+this.localport+"/api/Prescriptions/GetPrescriptionSingle?name="+localStorage.getItem("Name");


  Appointmentget():Observable<Array<UserModule>>
  {
    return this.http.get<Array<UserModule>>(this.appointmentapiurl);
  }

  Prescriptionget():Observable<Array<UserModule1>>
  {
    return this.http.get<Array<UserModule1>>(this.prescriptionapiurl);
  }

  // CancelAppoint(PatientName:string,Age:number,Sex:string,DoctorName:string,Time:string,Specialization:string){
  //   return this.http.get<Array<UserModule>>("http://localhost:"+this.localport+"/api/Appointments/Delete?name="+PatientName+"&age="+Age+"&sex="+Sex+"&dname="+DoctorName+"&time="+Time+"&spec="+Specialization);
    
  // }

}
