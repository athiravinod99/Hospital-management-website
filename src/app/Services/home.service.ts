import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HomeModule } from '../Modules/home/home.module';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  localport: string="58999";
  constructor(private httpclient: HttpClient) { }

  Add(comment:HomeModule){
    return this.httpclient.post<HomeModule>("http://localhost:53785/api/Comments/PostComment",comment);
  }
}
