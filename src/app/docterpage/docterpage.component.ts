import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocterpageModule, DocterpageModule1 } from '../Modules/docterpage/docterpage.module';
import { DocterpageService } from '../Services/docterpage.service';

@Component({
  selector: 'app-docterpage',
  templateUrl: './docterpage.component.html',
  styleUrls: ['./docterpage.component.css']
})
export class DocterpageComponent implements OnInit {
  PatientName: any;
  Age: any;
  DoctorName: any= localStorage.getItem("Name");
  PrescriptionDetails:any;
  Date= new Date();

  //userdisplay:DocterpageModule=new DocterpageModule();
  //userdisplay1:DocterpageModule1=new DocterpageModule1();

  userdisplay1:Array<DocterpageModule1 >=[]
  userdisplay:Array<DocterpageModule>=[]
  post: DocterpageModule = new DocterpageModule();
  constructor(private  docterpageService: DocterpageService,private router: Router) { }

  ngOnInit(): void {
    this.docterpageService. Appointmentget()
      .subscribe(resp => {
        console.log(resp);
       this.userdisplay1 = resp;
      }, error => {
        // alert("Something Wrong");
        console.log(error);
      }
      )

    this.docterpageService. Prescriptionget()
      .subscribe(resp => {
        console.log(resp);
       this.userdisplay = resp;
      }, error => {
        // alert("Something Wrong");
        console.log(error);
      }
      )

    }

    display(){
      this.post.DoctorName = this.DoctorName;
       this.docterpageService.AddPrescription(this.post)
       .subscribe(res=>{
         alert("Prescription Added");
         this.post=new DocterpageModule();
       },error=>{
         alert("Wrong")
       }
       )
     }

     logout=  () =>{
      localStorage.removeItem("ID");
      localStorage.removeItem("Name");
      this.router.navigate(['/home'])
    }
  }
  

