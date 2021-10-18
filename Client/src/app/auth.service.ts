import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient,private router:Router) { }

  login(user:any):Observable<any>{
    return this.http.post("http://localhost:3002/user/login",user)
  }
  register(user:any):Observable<any>{
    return this.http.post("http://localhost:3002/user/register",user)
  }

  loggedIn(){
    // !! used to get boolean value
    return !!localStorage.getItem('token')
  }
  loggedOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/events'])
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
