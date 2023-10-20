import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  allEmployee: any;
  updateDataAll:any
  constructor(private apidata: ApiDataService) { }


  ngOnInit(): void {
    this.apidata.showAllEmploy().subscribe(x => {
      console.log(x)
      this.allEmployee = x;
    })
  }

  // Employee add form logic---------------------------------------------------------------------------------------------------------------

  EmployeeAdd = new FormGroup(
    {
      'email': new
        FormControl(null, [Validators.required]),
      'taxcode': new FormControl(null, [Validators.required]),
      'name': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.required]),
      'statusname': new FormControl(null, [Validators.required]),
      'code': new FormControl(null, [Validators.required]),
      'creditlimit': new FormControl(null, [Validators.required]),
    })

  get Email() {
    return this.EmployeeAdd.get("email")
  }
  get Taxcoed() {
    return this.EmployeeAdd.get("taxcode")
  }

  get Phone() {
    return this.EmployeeAdd.get("phone")
  }

  get Name() {
    return this.EmployeeAdd.get("name")
  }

  // get Statusname() {
  //   return this.EmployeeAdd.get("statusname")
  // }
  get Code() {
    return this.EmployeeAdd.get("code")
  }
  get Creditlimit() {
    return this.EmployeeAdd.get("creditlimit")
  }

  loginUser() {
    console.log(this.EmployeeAdd)
    console.log(this.EmployeeAdd.value)
    this.apidata.createEmployee(this.EmployeeAdd.value).subscribe(y => {
      console.log(y)
      this.EmployeeAdd.reset();
      this.ngOnInit()
      alert("Sucessfully added the Employee")
    })
  }

  RemoveEmp(data:any){
    this.apidata.removeEmp(data).subscribe(k=>{
      console.log(k)
      this.ngOnInit()
    })
  }

  
//  Update form for the take tata from database--------------------------------------------------------------------------------------------

  updateaa(datainfo:any){
console.log(datainfo,"====");
this.updateDataAll=datainfo;

this.UpdateForm = new FormGroup(
  {
    'email': new
      FormControl(this.updateDataAll.email, [Validators.required, Validators.email]),
    'name': new FormControl(this.updateDataAll.name, [Validators.required]),
    'phone': new FormControl(this.updateDataAll.phone, [Validators.required]),
    'role': new FormControl(this.updateDataAll.statusname, [Validators.required]),
    'code': new FormControl(this.updateDataAll.code, [Validators.required]),
  })

  }

  // Update form of Employee-----------------------------------------------------------------------------------------------------

  UpdateForm = new FormGroup(
    {
      'email': new
        FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'name': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.required]),
      'role': new FormControl(null, [Validators.required]),
      'code': new FormControl(null, [Validators.required]),
    })

    updateUser1() {
      console.log(this.UpdateForm)
      console.log(this.UpdateForm.value)
    this.apidata.upDateEmp(this.UpdateForm.value).subscribe(k=>{
      console.log(k)
     
    })
    }

    get Email12() {
      return this.UpdateForm.get("email")
    }
    get Pssword1() {
      return this.UpdateForm.get("password")
    }
  
    get Phone1() {
      return this.UpdateForm.get("phone")
    }
  
    get Name1() {
      return this.UpdateForm.get("name")
    }
  
    get Role(){ 
      return this.UpdateForm.get("role")
    }
    get code1(){ 
      return this.UpdateForm.get("code")
    }

}








