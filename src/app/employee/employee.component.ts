import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  public displayedColumns = ['id', 'first_name', 'email', 'group', 'date', 'employeeId'];
  public dataSource = new MatTableDataSource();

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.employeeService.getList().subscribe((data) => (this.dataSource.data = data));
  }

  add(): void {
    this.router.navigate(['/add']);
  }
}
