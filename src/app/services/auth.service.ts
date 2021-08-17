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

  async login(username: string, password: string): Promise<void> {
    this.router.navigate(['dashboard']);
  }
}
