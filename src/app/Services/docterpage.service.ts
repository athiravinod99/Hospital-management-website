import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocterpageModule, DocterpageModule1 } from '../Modules/docterpage/docterpage.module';

@Injectable({
  providedIn: 'root'
})
export class DocterpageService {
  localport: string="58999";
  constructor(private httpclient: HttpClient) {}

  appointmentapiurl="http://localhost:"+this.localport+"/api/Appointments/GetDocAppointment?dname="+localStorage.getItem("Name");

  prescriptionapiurl="http://localhost:"+this.localport+"/api/Prescriptions/GetDocPrescription?dname="+localStorage.getItem("Name");

  AddPrescription(prescription:DocterpageModule){
    return this.httpclient.post<DocterpageModule>("http://localhost:"+this.localport+"/api/Prescriptions/PostPrescription",prescription);
  }

  Appointmentget():Observable<Array<DocterpageModule1>>
  {
    return this.httpclient.get<Array<DocterpageModule1>>(this.appointmentapiurl);
  }

  Prescriptionget():Observable<Array<DocterpageModule>>
  {
    return this.httpclient.get<Array<DocterpageModule>>(this.prescriptionapiurl);
  }
}
