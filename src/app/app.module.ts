import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/utils/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AuthService } from 'src/app/services/auth.services';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './employee/add/add.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild([{path: '/employee', component: EmployeeComponent}]),
    RouterModule.forChild([{path: '/add', component: AddComponent}])
  ],
  exports: [RouterModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
