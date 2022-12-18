import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorModule } from '../Modules/doctor/doctor.module';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor(private httpclient: HttpClient) { }
  doctorappointapiurl="http://localhost:58999/api/Doctors/GetDoctors";
  Doctorget():Observable<Array<DoctorModule>>
{
  return this.httpclient.get<Array<DoctorModule>>(this.doctorappointapiurl);
}
}