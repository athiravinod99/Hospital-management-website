import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { MedserviceComponent } from './medservice/medservice.component';
import { PrivacyStatementsComponent } from './privacy-statements/privacy-statements.component';
import { SignupComponent } from './signup/signup.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { WhyComponent } from './why/why.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AppointmnetComponent } from './appointmnet/appointmnet.component';
import { UserComponent } from './user/user.component';
import { DocterpageComponent } from './docterpage/docterpage.component';
import { DocSignupComponent } from './doc-signup/doc-signup.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signUp',
    component:SignupComponent
  },
  {
    path:'departments',
    component:DepartmentsComponent
  },
  
  {
    path:'Privacy',
    component:PrivacyStatementsComponent
  },
  {
    path:'Terms',
    component:TermsAndConditionsComponent
  },
  {
    path:'medservice',
    component:MedserviceComponent
  },
  
  {
    path:'why',
    component:WhyComponent
  },
  {
    path:'about',
    component:AboutUsComponent 
  },
  {
    path: 'doctors',
    component:DoctorsComponent
  },
  {
    path: 'doclogin',
    component:DocloginComponent
  },
  {
    path: 'appointmnet',
    component:AppointmnetComponent
  },
  {
    path: 'docsignup',
    component:DocSignupComponent
  },
  {
    path: 'user',
    component:UserComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'comments',
    component:CommentsComponent
  },
  {
    path:'doctorpage',
    component:DocterpageComponent
  },

  {
    path:'',
    component:HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
