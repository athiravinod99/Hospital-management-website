import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginModule } from '../Modules/login/login.module';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  post: LoginModule = new LoginModule();
  constructor(private loginService:LoginService,private router: Router) { }

  ngOnInit(): void {
    
  }

  validate(){
    
     this.loginService.Login(this.post.Name,this.post.Pass)
     .subscribe(res=>{
       console.log(res.UserName)
       localStorage.setItem("ID",res.ID)
       localStorage.setItem("Name",res.UserName)
        this.router.navigate(['/user'])
        .then(() => {
          window.location.reload();
        });
       
     },error=>{
       alert("Invalid Credentials")
     }
     )
   }

  

}