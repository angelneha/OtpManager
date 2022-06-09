import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as crypto from "crypto-js";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginAuth: AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    pwd: new FormControl("",[Validators.required, Validators.minLength(6),Validators.maxLength(10)]),
  });
  isUserValid: boolean = false;

//   loginSubmited(){
// this.loginAuth
// .loginUser( this.loginForm.value)
// .subscribe(res => {
//   console.log(res)
//   if(res == 'failed'){
//     this.isUserValid = false;
//     alert("Login Unsuccessful");
//   }else{
//     this.isUserValid = true;
//     alert('Login Successful');
//     this.router.navigateByUrl('home')
//   }
// });
loginSubmited(){
  this.loginAuth
  .loginUser([
    this.loginForm.value.email,
    crypto.SHA256(this.loginForm.value.pwd).toString()
  ])
  .subscribe(res => {
    // console.log(res)
    if(res == "Failure"){
      this.isUserValid = false;
      alert("Login Unsuccessful");
    }else{
      this.isUserValid = true;
      alert('Login Successful');
      this.router.navigateByUrl('home')
    }
  });
  }

  get Email(): FormControl{
    return this.loginForm.get("email") as FormControl;
  }
  get Pwd(): FormControl{
    return this.loginForm.get("pwd") as FormControl;
  }
}
