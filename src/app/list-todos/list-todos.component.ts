import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class ToDo {
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate: Date
  ){ }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos : ToDo[];
  message : string;


  constructor(
    private todoService:TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.refreshTodos(); 
  }

refreshTodos(){
  this.todoService.retrieveAllTodos('mark').subscribe (
    response => {
      console.log(response)
      this.todos = response; 
     }
  )
}

deleteTodo(id){
    this.todoService.deleteTodo('mark', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of todo id ${id} Successful`
        this.refreshTodos(); 
      }
    )
    console.log(`delete todo ${id}`);
  }

  updateTodo(id){
    console.log(`update ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }
}
