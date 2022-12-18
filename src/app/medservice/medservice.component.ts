import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeModule } from '../Modules/home/home.module';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-medservice',
  templateUrl: './medservice.component.html',
  styleUrls: ['./medservice.component.css']
})
export class MedserviceComponent implements OnInit {

  Name:any;
  Email:any;
  Comments:any;

post: HomeModule = new HomeModule();
  constructor(private homeService:HomeService,private router: Router) { }


  ngOnInit(): void {
  }

  add(){
    console.log("hello");
    this.post.Name=this.Name;
    this.post.Email=this.Email;
    this.post.Comments=this.Comments;
     this.homeService.Add(this.post)
     .subscribe(res=>{
       alert("Hi"+""+res.Name+", we will get back you soon!");
       this.post=new HomeModule();
     },error=>{
       alert("Wrong")
     }
     )
   }

   btnClick=  () => {
    this.router.navigateByUrl('/comments');
  }

}
