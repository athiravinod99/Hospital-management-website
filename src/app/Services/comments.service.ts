import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentsModule } from '../Module/comments/comments.module';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  localport: string="58999";

  constructor(private httpclient: HttpClient) { }

  AddComment(comment:CommentsModule){
    return this.httpclient.post<CommentsModule>("http://localhost:"+this.localport+"/api/Comments/PostComment",comment);
    
  }
}
