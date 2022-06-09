import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }
  baseServerUrl = 'https://localhost:5001/api/';

  // loginUser(data:any): Observable<any>{
    
  //   return this.http.post(`https://localhost:5001/api/Login`,data);
    
  // }

  loginUser(loginInfo: any){
    return this.http.post("https://localhost:5001/api/Login",{
      Email: loginInfo[0],
      Pwd: loginInfo[1]
    },
    {
      responseType: "text",
    }
    );
  }
}
