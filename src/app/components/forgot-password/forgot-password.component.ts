import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as crypto from "crypto-js";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private forgotAuth: AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  forgotForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    pwd: new FormControl("",[Validators.required, Validators.minLength(6),Validators.maxLength(10)]),
    
  });
  isUserValid: boolean = false;

  forgotSubmited(){
this.forgotAuth 
.forgotUser([this.forgotForm.value.email,
  crypto.SHA256(this.forgotForm.value.pwd).toString()])
.subscribe(res => {
  //console.log(res)
  if(res == 'failure'){
    this.isUserValid = false;
    alert("Paasword Reset Unsuccessful");
  }else{
    this.isUserValid = true;
    alert('Password Reset Successful');
    this.router.navigateByUrl('home')
  }
});

}
get Email(): FormControl{
  return this.forgotForm.get("email") as FormControl; 
}
get Pwd(): FormControl{
  return this.forgotForm.get("pwd") as FormControl; 
}

}
