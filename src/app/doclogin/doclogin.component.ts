import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocloginModule } from '../Modules/doclogin/doclogin.module';
import { DocloginService } from '../Services/doclogin.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css']
})
export class DocloginComponent implements OnInit {

  
  post: DocloginModule = new DocloginModule();
  constructor(private docService:DocloginService,private router: Router) { }

  ngOnInit(): void {
  }

  validate(){
    
    this.docService.Login(this.post.Name,this.post.Pass)
    .subscribe(res=>{
      // console.log(res.UserName)
      localStorage.setItem("ID",res.ID)
      localStorage.setItem("Name",res.UserName)
       this.router.navigate(['/doctorpage'])
       .then(() => {
        window.location.reload();
      });
      
    },error=>{
      alert("Invalid Credentials")
    }
    )
  }
}
