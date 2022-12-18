import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentModule, DoctorModule1 } from '../Modules/appointment/appointment.module';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

localport: string="58999";


  constructor(private httpclient: HttpClient) { }

  AddAppoint(appointment:AppointmentModule){
    return this.httpclient.post<AppointmentModule>("http://localhost:"+this.localport+"/api/Appointments/PostAppointment",appointment);
  }


  CheckSlot(DoctorName:any,Time:any){
    return this.httpclient.get<AppointmentModule>("http://localhost:"+this.localport+"/api/Appointments/GetSlotCount?dname="+DoctorName+"&time="+Time);
  }


doctorappointapiurl="http://localhost:58999/api/Appointments/GetDoctors";

DoctorNamesget():Observable<Array<DoctorModule1>>
{
  return this.httpclient.get<Array<DoctorModule1>>(this.doctorappointapiurl);
}


}
