import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ApiDataService } from '../api-data.service';
import { AuthserService } from '../authser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private apidata: ApiDataService, private auth: AuthserService, private router: Router) { }

  ngOnInit(): void {
  }
  // reactive form set up..........................................................

  SignupForm = new FormGroup(
    {
      'email': new
        FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'name': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.required]),
      'role': new FormControl(null, [Validators.required]),
      'code': new FormControl(null, [Validators.required]),
      'username': new FormControl(null, [Validators.required]),
    })

  loginUser() {
    console.log(this.SignupForm)
    console.log(this.SignupForm.value)
    this.ngOnInit();
    this.apidata.sendLogData(this.SignupForm.value).subscribe(res => {
      console.log(res)
      this.SignupForm.reset();
      // On condition navigatin on the login page.....................................
      this.router.navigate(["login"]);


    })
  }

  // It set up for the error massage show in the format..............................

  get Email() {
    return this.SignupForm.get("email")
  }
  get Pssword() {
    return this.SignupForm.get("password")
  }

  get Phone() {
    return this.SignupForm.get("phone")
  }

  get Name() {
    return this.SignupForm.get("name")
  }

  get Role() {
    return this.SignupForm.get("role")
  }

  get Code() {
    return this.SignupForm.get("code")
  }

}
