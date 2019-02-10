import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { ToDo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: ToDo

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new ToDo(this.id, '', false, new Date())
    if (this.id != -1) {
      this.todoService.retrieveTodo('mark', this.id)
        .subscribe(
          data => this.todo = data
        )
    }

  }

  saveTodo() {
    
    if (this.id == -1) {
      console.log("calling createTodo")
      this.todoService.createTodo('mark', this.todo)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )    
    } else {
      console.log("calling updateTodo")
      this.todoService.updateTodo('mark', this.id, this.todo)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todos'])
          }
        )
    }
  }



}
