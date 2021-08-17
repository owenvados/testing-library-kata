import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this.form = this.formBuilder.group({
			mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
		});
  }

  ngOnInit(): void {
  }

  isValidEmail(): boolean {
    const mail = this.form.get('mail');
    if (!mail) {
      return false;
    }
    return mail.valid && mail.dirty || mail.pristine;
  }

  isValidPassword(): boolean {
    const password = this.form.get('password');
    if (!password) {
      return false;
    }
    return password.valid && password.dirty || password.pristine;
  }

  submit(): void {
    this.authService.login(this.form.get('mail')?.value, this.form.get('password')?.value);
  }
}
