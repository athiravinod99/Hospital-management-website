import { Component, OnInit } from '@angular/core';
import { SignupModule } from '../Modules/signup/signup.module';
import { SignupService } from '../Services/signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  UserName: any;
  Password: any;
  // Patient_ID: any;
  // Patient_Pwd:any;

  post: SignupModule = new SignupModule();
  constructor(private signupService:SignupService) { }

  ngOnInit(): void {

  }
  
  display(){
    console.log("hello");
     this.signupService.AddReg(this.post)
     .subscribe(res=>{
       alert("Registration Successfull");
       this.post=new SignupModule();
     },error=>{
       alert("Wrong")
     }
     )
   }
}
