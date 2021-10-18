import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
  public events:any=[]
  constructor(private eventservice:EventsService,private router:Router) { }

  ngOnInit(): void {
    this.eventservice.special().subscribe(
      data=>this.events=data,
      err=>{
        if(err instanceof HttpErrorResponse)
        this.router.navigate(['/login'])
      }
    )
  }

}
