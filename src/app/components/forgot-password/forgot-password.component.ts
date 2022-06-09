import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    mobile: new FormControl("",[Validators.required,Validators.pattern("[0-9]*"), Validators.minLength(10),Validators.maxLength(10)])
    
  });
  isUserValid: boolean = false;

  forgotSubmited(){
this.forgotAuth
.loginUser(this.forgotForm.value.email)
.subscribe(res => {
  if(res == 'Failure'){
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
  return this.forgotForm.get("email") as FormControl; 
}
get Mobile(): FormControl{
  return this. forgotForm.get("mobile") as FormControl;
}
}
