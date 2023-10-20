import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiDataService } from '../api-data.service';
import { Router } from '@angular/router';
import { AuthserService } from '../authser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  info: any
  constructor(private apidata: ApiDataService, private router: Router, private auth: AuthserService) {

  }

  ngOnInit(): void {
  }


  SignupForm = new FormGroup(
    {
      'username': new
        FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),

    })

  tokenInfo: any;

  loginUserinfo() {
    console.log(this.SignupForm.value)
    this.apidata.loginInfo(this.SignupForm.value).subscribe(x => {
      console.log(x);
      this.info = x;
      console.log(this.info);
      this.auth.getUserToken(this.SignupForm.value).subscribe(result => {
        console.log(result)
        this.tokenInfo = result
        // alert('done')
 // Block for the Token generation----------------------------------------------------------------------------------------------------------
        localStorage.setItem("token", this.tokenInfo.token)
        this.router.navigate(["dashboard"])

      })
// Token base logic for Redirection-------------------------------------------------------------------------------------------------------
      if (this.info.token) {
        // alert('correct')
        this.router.navigate(["dashbord"])

      } else {
        console.log('Incorrect value')
      }
    })
  }
//Error mess show block---------------------------------------------------------------------------------------------------------------------
  get Username() {
    return this.SignupForm.get("username")
  }
  get Pssword() {
    return this.SignupForm.get("password")
  }

}
