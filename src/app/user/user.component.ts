import { Component, OnInit } from '@angular/core';
import { UserModule, UserModule1 } from '../Modules/user/user.module';
import { UserService } from '../Services/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //userdisplay:UserModule=new UserModule();
  userdisplay:Array<UserModule >=[]
  userdisplay1:Array<UserModule1 >=[]
  //userdisplay1:UserModule1=new UserModule1();
 // router: any;
 PatientName: any;
 Age:any;
 Sex:any;
 DoctorName:any;
 Time:any;
 Specialization:any;

 post: Array<UserModule >=[]
  
  constructor(private service:UserService,private router: Router) { }

 
  ngOnInit(): void {
    this.service. Appointmentget()
      .subscribe(resp => {
        console.log(resp);
       this.userdisplay = resp;
      }, error => {
        // alert("Something Wrong");
        console.log(error);
      }
      )
console.log(this.userdisplay);
      this.service. Prescriptionget()
      .subscribe(resp => {
        console.log(resp);
       this.userdisplay1 = resp;
      }, error => {
        // alert("Something Wrong");
        console.log(error);
      }
      )

    }

    // cancel(){
      
    //   this.post=this.PatientName,this.Age,this.Sex,this.DoctorName,this.PatientName,this.Specialization;
    //   console.log(this.post)
    //   // this.post.PatientName=this.PatientName;
    //    this.service.CancelAppoint(this.post)
    //    .subscribe(res=>{
    //      alert("Appointment Successfull");
    //    },error=>{
    //      alert("Wrong")
    //    }
    //    )
    //  }

    btnClick=  () => {
      this.router.navigateByUrl('/appointmnet');
    };
      
    logout=  () =>{
      localStorage.removeItem("ID");
      localStorage.removeItem("Name");
      this.router.navigate(['/home'])
    }
    
  }
