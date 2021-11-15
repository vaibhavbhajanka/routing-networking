import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path:'todo-list',component:TodoListComponent},
  {path:'todo-details',component:TodoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
