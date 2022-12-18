import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocloginModule } from '../Modules/doclogin/doclogin.module';

@Injectable({
  providedIn: 'root'
})
export class DocloginService {
  localport: string="58999";
  constructor(private httpclient: HttpClient) { }

  Login(Name:string,Password:string){
    return this.httpclient.get<DocloginModule>("http://localhost:"+this.localport+"/api/DocRegistrations/GetCheckLogin?username="+Name+"&password="+Password);
  }
}
