import { Injectable } from '@angular/core';
import { User } from './user';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegister(user: any){
      return this.http.post("http://localhost:8080/v1/users",user,{responseType: 'text' as "json"})
  }

  public getUsers(){
    return this.http.get("http://localhost:8080/v1/users");
  }
}
