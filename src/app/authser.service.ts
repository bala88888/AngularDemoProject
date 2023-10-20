import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserService {

  constructor(private http:HttpClient) { }

  url="https://localhost:7213/api/Authorize/GenerateToken"

  getUserToken(data:any){
    return this.http.post("https://localhost:7213/api/Authorize/GenerateToken",data)
  }

  sLoggedIn()
  {
      let token = localStorage.getItem("token");
      if(token ==undefined || token===''||token==null){
        return false;
      }else{
        return true;
      }
  }
}
