import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
constructor(private http : HttpClient) { }
  registerUser(dataUser : any) : Observable<any>{
    return this.http.post("http://localhost:8000/api/auth/signup", dataUser)
  }
  loginUser(dataUser : any) : Observable<any>{
    return this.http.post("http://localhost:8000/api/auth/signin", dataUser)
  }
  getAllUsers() : Observable<any>{
    return this.http.get("http://localhost:8000/api/auth")
  }
}
