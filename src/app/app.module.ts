import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DepartmentsComponent } from './departments/departments.component';
import { UserComponent } from './user/user.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

import { PrivacyStatementsComponent } from './privacy-statements/privacy-statements.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { MedserviceComponent } from './medservice/medservice.component';

import { FooterComponent } from './footer/footer.component';

import { WhyComponent } from './why/why.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { SignupService } from './Services/signup.service';
import { SignupModule } from './Modules/signup/signup.module';
import { AppointmnetComponent } from './appointmnet/appointmnet.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppointmentService } from './Services/appointment.service';
import { AppointmentModule } from './Modules/appointment/appointment.module';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { UserService } from './Services/user.service';
import { UserModule } from './Modules/user/user.module';
import { DocterpageComponent } from './docterpage/docterpage.component';
import { DocSignupComponent } from './doc-signup/doc-signup.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DepartmentsComponent,
    UserComponent,
    PrivacyStatementsComponent,
    TermsAndConditionsComponent,
    MedserviceComponent,
    FooterComponent,
    WhyComponent,
    AboutUsComponent,
    DoctorsComponent,
    DocloginComponent,
    AppointmnetComponent,
    DocterpageComponent,
    DocSignupComponent,
    CommentsComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatMenuModule,
  HttpClientModule,
  MatToolbarModule,
  MatExpansionModule,
  FormsModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatGridListModule,
  MatCardModule
  ],
  providers: [SignupService,
    SignupModule,
    AppointmentService,
    AppointmentModule,
    UserService,
    UserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
