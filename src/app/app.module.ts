import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {MaterialModule} from './material/material.module';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {AuthService} from './core/services/auth.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    AppRoutingModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
