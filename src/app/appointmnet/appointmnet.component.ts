import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentModule,DoctorModule1} from '../Modules/appointment/appointment.module';
import { AppointmentService } from '../Services/appointment.service';



@Component({
  selector: 'app-appointmnet',
  templateUrl: './appointmnet.component.html',
  styleUrls: ['./appointmnet.component.css']
})
export class AppointmnetComponent implements OnInit {
  PatientName: any= localStorage.getItem("Name");
  Age: any;
  Sex: any;
  DoctorName: any;
  Time: any;
  Specialization: any;
  count:any;

  post: AppointmentModule = new AppointmentModule();
   doctordisplay:Array<DoctorModule1 >=[]
   specOptions:Array<any>=[]
  constructor(private appointService:AppointmentService,private router: Router ) { }

  ngOnInit(): void {
       this.appointService.DoctorNamesget()
       
        .subscribe(resp => {
          this.doctordisplay = resp;
          this.specOptionsfilter();
          
        }, error => {
           alert("Something Wrong");
          console.log(error);
        }
         )
         
       }
  
  

  display(){
    console.log(this.post)
    this.post.PatientName=this.PatientName;
     this.appointService.AddAppoint(this.post)
     .subscribe(res=>{
       alert("Appointment Successfull");
     },error=>{
       alert("Wrong")
     }
     )
   }

  specOptionsfilter(){
    this.doctordisplay.forEach(element => {
      this.specOptions.push(element.Department)
    });
    this.specOptions = [...new Set(this.specOptions)];
  }

slot(e:any){
console.log(e);
this.appointService.CheckSlot(this.post.DoctorName,this.post.Time)
.subscribe(res=>{
  this.count = res;
  console.log(this.count)
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

