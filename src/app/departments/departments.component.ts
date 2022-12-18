import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeModule } from '../Modules/home/home.module';
import { HomeService } from '../Services/home.service';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  Name:any;
  Email:any;
  Comments:any;

post: HomeModule = new HomeModule();
  constructor(private homeService:HomeService,private router: Router) { }

  ngOnInit(): void {
  }
  // src="../assets/dist/js/bootstrap.bundle.min.js";
  // href="../assets/dist/css/bootstrap.min.css"
 navSec(section: string){
   window.location.hash='';
   window.location.hash= section;
 }

 btnClick=  () => {
  this.router.navigateByUrl('/doctors');
};

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

 btnClick1=  () => {
  this.router.navigateByUrl('/comments');
}

}
