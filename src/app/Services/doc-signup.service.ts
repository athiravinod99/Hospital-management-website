import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocSignupModule } from '../Modules/doc-signup/doc-signup.module';

@Injectable({
  providedIn: 'root'
})
export class DocSignupService {

  localport: string="58999";

  constructor(private httpclient: HttpClient) { }

  AddReg(docRegistration:DocSignupModule){
    return this.httpclient.post<DocSignupModule>("http://localhost:"+this.localport+"/api/DocRegistrations/PostDocRegistration",docRegistration);
  }
}
