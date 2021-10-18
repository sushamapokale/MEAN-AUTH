import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
 public events:any=[]
  constructor(private eventservice:EventsService) { }

  ngOnInit(): void {
    this.eventservice.events().subscribe(
      data=>{this.events=data
        //console.log(this.events[0].title)
      }
    
    )
   
  }

}
