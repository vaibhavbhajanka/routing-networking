import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  details : any = []
  constructor(private det : TodoService) { }

  ngOnInit(): void {
    this.details = this.det.getDetails();
  }

}
