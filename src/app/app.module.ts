import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminLayoutModule } from './AdminLayout/admin-layout/admin-layout.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SingUpComponent,
    SignInComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
