import { Component, OnInit } from '@angular/core';
import { ForgotService } from 'src/app/services/forgot.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  //constructor(private otpAuth: ForgotService) { }

  ngOnInit(): void {
  }
  // otpForm = new FormGroup({
  //   otp: new FormControl("",Validators.required)
  // });
  // isOtpValid: boolean = false;

  
    

}
