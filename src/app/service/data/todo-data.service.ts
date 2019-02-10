import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from 'src/app/list-todos/list-todos.component';
import { TODO_JPA_API_URL } from 'src/app/app.constants';


@Injectable({
  providedIn: 'root'
})

export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username){
    console.log("retrieveAllTodos");
    //return this.http.get<ToDo[]>(`http://localhost:8080/users/${username}/todos`);    
    return this.http.get<ToDo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
  }

  deleteTodo(username, id) {
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username, id) {
    console.log("retrieveTodox");
    return this.http.get<ToDo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.http.put(
            `${TODO_JPA_API_URL}/users/${username}/todos/${id}`, 
            todo);
  }

  createTodo(username, todo) {
    console.log("createTodo, username: " + username);
    return this.http.post(
            `${TODO_JPA_API_URL}/users/${username}/todos`, 
            todo);
  }

}
