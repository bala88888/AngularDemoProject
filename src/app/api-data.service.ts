import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  url = "https://localhost:7213/api/Authorize/RegisterUser"
  ull1 = "https://localhost:7213/api/Authorize/GenerateToken"

  constructor(private http: HttpClient) { }
// Regstration api -------------------------------------------------------------------------------------------------------------
  sendLogData(data: any) {

    return this.http.post(this.url, data)
  }

  // Generation token api---------------------------------------------------------------------------------------------------------

  loginInfo(data: any) {
    console.log(this.ull1,data);
    
    return this.http.post(this.ull1, data)
   
  }

  // getting All information----------------------------------------------------------------------------------------------------

  showAllEmploy(){
    return this.http.get('https://localhost:7213/api/Customer/GetAll')
  }

  // Adding employee in database table------------------------------------------------------------------------------------------

  createEmployee(dataInfo:any){
    console.log("https://localhost:7213/api/Customer/Create",dataInfo);
    
    return this.http.post("https://localhost:7213/api/Customer/Create",dataInfo)
  }

  // remove the employeee-----------------------------------------------------------------------------------------------------

  removeEmp(code:any){
    return this.http.delete("https://localhost:7213/api/Customer/Remove?code="+code)
  }

// update the Employeee-------------------------------------------------------------------------------------------------------
  
  upDateEmp(data:any){
    console.log("https://localhost:7213/api/Customer/Update?code="+data.code ,data);
    
    return this.http.put("https://localhost:7213/api/Customer/Update?code="+data.code ,data)
  }


 
  
}
