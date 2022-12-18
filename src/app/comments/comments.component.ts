import { Component, OnInit } from '@angular/core';
import { CommentsModule } from '../Module/comments/comments.module';
import { CommentsService } from '../Services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  post: CommentsModule = new CommentsModule();

  constructor(private commentService:CommentsService) { }

  ngOnInit(): void {
  }

  display(){
    console.log(this.post)
    // this.post.PatientName=this.PatientName;
     this.commentService.AddComment(this.post)
     .subscribe(res=>{
       alert("Thanks for Feedback!");
     },error=>{
       alert("Wrong")
     }
     )
   }

}
