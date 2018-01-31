import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { InviteService } from './invite.service';


@NgModule({
  declarations: [
    AppComponent,
    GroupFormComponent,
    EmployeeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    ],
  providers: [InviteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
