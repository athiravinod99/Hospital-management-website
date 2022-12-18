import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModule } from '../Modules/login/login.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  localport: string="58999";
  constructor(private httpclient: HttpClient) { }

  Login(Name:string,Password:string){
    return this.httpclient.get<LoginModule>("http://localhost:"+this.localport+"/api/Registrations/GetCheckLogin?username="+Name+"&password="+Password);
  }
}
