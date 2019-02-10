import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habit } from 'src/app/list-habits/list-habits.component';
import { HABIT_JPA_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class HabitDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllHabits(username){
    console.log("retrieveAllHabits");
    //return this.http.get<ToDo[]>(`http://localhost:8080/users/${username}/todos`);    
    return this.http.get<Habit[]>(`${HABIT_JPA_API_URL}/users/${username}/habits`);

  }

  retrieveHabit(username, id) {
    console.log("retrieveHabit");
    return this.http.get<Habit>(`${HABIT_JPA_API_URL}/users/${username}/habits/${id}`);
  }

  deleteHabit(username, id) {
    return this.http.delete(`${HABIT_JPA_API_URL}/users/${username}/habits/${id}`);
  }

  updateHabit(username, id, habit) {
    return this.http.put(
            `${HABIT_JPA_API_URL}/users/${username}/habits/${id}`, 
            habit);
  }

  createHabit(username, habit) {
    console.log("createHabit, username: " + username);
    return this.http.post(
            `${HABIT_JPA_API_URL}/users/${username}/habits`, 
            habit);
  }


}
