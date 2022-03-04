import { Observable } from 'rxjs';
import { Login } from './../models/login';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl='https://www.icibot.net/p_login';

  constructor(private httpClient:HttpClient) { }

  login(loginModel:Login){
    console.log(loginModel);
    return this.httpClient.post(this.apiUrl,loginModel);
  }

  isAuthenticated(){
    if(localStorage.getItem("token"))
      return true;
    return false;
  }
}
