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
  showAll: boolean = false;


  constructor(
    private todoService:TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.refreshTodos(); 
  }

refreshTodos(){
  this.todoService.retrieveAllTodos('mark', this.showAll).subscribe (
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


  toggleDone(id){
    this.todoService.toggleTodo('mark', id).subscribe(
      response => {
        console.log(response);
        this.message = `Toggle of todo id ${id} Successful`
        this.refreshTodos(); 
      }
    )
    console.log(`toggle todo ${id}`);
  }
  
  updateTodo(id){
    console.log(`update ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }

  toggleShowAll(){
    console.log("this.showAll: " + this.showAll)
    if (this.showAll){
      this.showAll = false; 
    }
    else {
      this.showAll = true; 
    }
    this.refreshTodos(); 
  }
  toggleShowAll2(){
    if (this.showAll){
      this.showAll = false; 
    }
    else {
      this.showAll = true; 
    }
    console.log("this.showAll: " + this.showAll)
  }
}
