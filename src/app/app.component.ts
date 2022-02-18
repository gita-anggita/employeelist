import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employeelist';

  public form: FormGroup;
  public isLogin = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.initLoginForm();
  }

  private initLoginForm(): void {
    this.form = this.fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ]
      ]
    });
  }

  public login() {
    if (this.form.valid) {
      this.isLogin = true;
      this.authService.login(this.form.value).subscribe(
        (data: any) => {
          this.isLogin = true;
          if (data.success) {
            this.router.navigate(['/employee']);
          } 
        }
      );
    }
  }
}
