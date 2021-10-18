import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb :FormBuilder, private authservice:AuthService
               ) { }

  ngOnInit(): void {
  }
  public registerForm=this.fb.group({
    username:[''],
    password:['']
  })
  register(){
   // console.log(this.registerForm.value)
    this.authservice.register(this.registerForm.value)
    .subscribe(
      data=>{alert(data.token)
        localStorage.setItem("token",data.token)
      },
      error=>alert("registration failed")
      
     
    )
  }

}
