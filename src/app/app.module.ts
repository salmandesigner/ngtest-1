import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './dashboard1/main/main.component';
import { LeftbarComponent } from './dashboard1/main/leftbar/leftbar.component';
import { MiddlebarComponent } from './dashboard1/main/middlebar/middlebar.component';
import { RightbarComponent } from './dashboard1/main/rightbar/rightbar.component';


@NgModule({
  declarations: [
    AppComponent,
    Dashboard1Component,
    Dashboard2Component,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LeftbarComponent,
    MiddlebarComponent,
    RightbarComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
