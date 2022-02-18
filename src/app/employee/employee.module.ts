import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/utils/shared.module';
import { EmployeeComponent } from './employee.component';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    RouterModule.forChild([{path: '/employee', component: EmployeeComponent}]),
    SharedModule
  ],
  declarations: [
    EmployeeComponent,
    AddComponent
  ],
  providers: [],
  entryComponents: [
  ],
  exports: [
    RouterModule,
  ]
})
export class EmployeeModule { }