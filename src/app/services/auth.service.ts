import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
  ) {

  }

  async login(email: string, password: string): Promise<void> {
    console.log('Login for user: ', email);
    this.router.navigate(['dashboard']);
  }
}
