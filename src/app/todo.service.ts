import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  details = [
    {"task":"Go to the gym","priority":3},
    {"task":"Complete OS assignment","priority":1},
    {"task":"Get grocery","priority":2},
    {"task":"Work on Blockchain project","priority":4},
  ]

  getDetails()
  {
    return this.details
  }
  constructor() { }
}
