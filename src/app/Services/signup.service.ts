import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupModule } from '../Modules/signup/signup.module';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  localport: string="58999";
  constructor(private httpclient: HttpClient) {}

   AddReg(registration:SignupModule){
    return this.httpclient.post<SignupModule>("http://localhost:"+this.localport+"/api/Registrations/PostRegistration",registration);
  }

  

}
