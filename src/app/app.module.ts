import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Jobform4Component } from './shared/componetns/jobform4/jobform4.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { CdkScrollableModule } from "@angular/cdk/scrolling";

@NgModule({
  declarations: [
    AppComponent,
    Jobform4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatSnackBarModule,
    FormsModule,
    CdkScrollableModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
