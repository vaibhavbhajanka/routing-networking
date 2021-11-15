import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  details : any = []
  constructor(private det : TodoService) { }

  ngOnInit(): void {
    this.details = this.det.getDetails();
  }

}
