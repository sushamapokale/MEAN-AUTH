import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private fb :FormBuilder,private authservice:AuthService,private router:Router) { }

  
  ngOnInit(): void {
  }
  public loginForm=this.fb.group({
    username:[''],
    password:['']
  })

  login(){
    //console.log(this.loginForm.value)
    this.authservice.login(this.loginForm.value)
    .subscribe(
      data=>{
        localStorage.setItem("token",data.token)
        this.router.navigate(['/special'])
      },
      error=>alert(error.msg),
    )
  }
}
