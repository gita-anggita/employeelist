import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  group: string;
  date: string;
}

@Injectable()
export class EmployeeService {
  private data: Employee[] = [
    {
      firstName: 'Tannya',
      lastName: 'Kurniasari',
      email: 'tk@gmail.com',
      group: 'Development',
      date: '28 Agustus 1994',
    },
  ];
  

  getList(): Observable<Employee[]> {
    return of(this.data);
  }
}
