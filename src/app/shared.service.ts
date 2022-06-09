import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseServerUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }
  registerUser(user:any) {
    console.log("sharedService")
    return this.http.post("https://localhost:5001/api/User",user)
     
  }
}
