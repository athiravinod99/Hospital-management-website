import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorModule } from '../Modules/doctor/doctor.module';
import { DoctorService } from '../Services/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html', 
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctor:DoctorModule= new DoctorModule();
  doctordisplay:Array<DoctorModule>=[]

  // DoctorName:any;
  // Specialization :any;
  // department :any;
  // time:string ="";
  // doctordisplay: DoctorModule=new DoctorModule()
  


 constructor(private service:DoctorService,private router: Router) { }

  ngOnInit(): void {
    this.service.Doctorget()
      .subscribe(resp => {
        console.log(resp);
       this.doctordisplay = resp;
      }, error => {
         alert("Something Wrong");
        console.log(error);
      }
      )
  }

  navSec(section: string){
    window.location.hash='';
    window.location.hash= section;
  }

  // btnClick=  () => {
  //   this.router.navigateByUrl('/appointmnet');
  // };
}
