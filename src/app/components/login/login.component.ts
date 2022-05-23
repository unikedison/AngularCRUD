import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private auth: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    })
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(["admin"]);
    }
  }

  login(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe((result) => {

        this.router.navigate(["admin"]);
      },
        (error: Error) => {
          alert(error.message);
        })
    } else {
      alert("invalid form!")
    }
  }

}
