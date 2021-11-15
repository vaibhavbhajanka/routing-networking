import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  currentData : any

  link = 'https://api.spacexdata.com/v3/missions'

  constructor(private http:HttpClient){

  }

  ngOnInit():void{
    this.http.get(this.link).subscribe((responseData:any)=>{
      this.currentData = responseData
    })
  }
}
