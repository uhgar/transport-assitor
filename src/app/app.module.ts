import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InupformsComponent } from './inupforms/inupforms.component';

import {RouterModule}  from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { FormsModule } from '@angular/forms';
import { WorkComponent } from './work/work.component';
import { ReportComponent } from './report/report.component';
import { Afterloghomepage1Component } from './afterloghomepage1/afterloghomepage1.component';
import { TrailComponent } from './trail/trail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InupformsComponent,
    SignupComponent,
    ForgetComponent,
    WorkComponent,
    ReportComponent,
    Afterloghomepage1Component,
    TrailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'' , component: HomePageComponent },
      { path:'login' ,component:InupformsComponent },
      { path:'signup' , component:SignupComponent },
      { path:'works', component:WorkComponent},
      { path:'report',component:ReportComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
