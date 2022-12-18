import { Component, OnInit } from '@angular/core';
import { DocSignupModule } from '../Modules/doc-signup/doc-signup.module';
import { SignupModule } from '../Modules/signup/signup.module';
import { DocSignupService } from '../Services/doc-signup.service';

@Component({
  selector: 'app-doc-signup',
  templateUrl: './doc-signup.component.html',
  styleUrls: ['./doc-signup.component.css']
})
export class DocSignupComponent implements OnInit {

  post: DocSignupModule = new DocSignupModule();

  constructor(private docsignupService:DocSignupService) { }

  ngOnInit(): void {
  }

  display(){
    console.log("hello");
     this.docsignupService.AddReg(this.post)
     .subscribe(res=>{
       alert("Registration Successfull");
       this.post=new SignupModule();
     },error=>{
       alert("Wrong")
     }
     )
   }

}
