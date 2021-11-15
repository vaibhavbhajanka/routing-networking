import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.css']
})
export class SpaceXComponent implements OnInit {

  @Input() data : any
  constructor() { }

  ngOnInit(): void {
  }

}
