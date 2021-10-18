import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor( private authservice:AuthService) { }
  //must define method in order to implement interface
  intercept(req:any , next:any) {
    let tokenizeReq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${this.authservice.getToken()}`
      }
    })
    return next.handle(tokenizeReq)
  }
}
