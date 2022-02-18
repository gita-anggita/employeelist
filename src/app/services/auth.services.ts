import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

export interface User {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  private user: User[] = [
    {
      email: 'test@gmail.com',
      password: '123456',
    }
  ];

  login(user: User): Observable<User[]> {
    return of(this.user);
  }
}
