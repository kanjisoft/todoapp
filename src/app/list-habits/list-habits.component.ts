import { Component, OnInit } from '@angular/core';
import { HabitDataService } from '../service/data/habit-data.service';
import { Router } from '@angular/router';

export class Habit {
  constructor(
    public id : number,
    public habitname : string,
    public description : string,
    public priority : number,
    public reminder : string,
    public reward: string
  ){ 

  }
}
@Component({
  selector: 'app-list-habits',
  templateUrl: './list-habits.component.html',
  styleUrls: ['./list-habits.component.css']
})
export class ListHabitsComponent implements OnInit {

  habits : Habit[];
  message : string;


  constructor(
    private habitService:HabitDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.refreshHabits(); 
  }


  refreshHabits(){
    this.habitService.retrieveAllHabits('mark').subscribe (
      response => {
        console.log(response)
        this.habits = response; 
       }
    )
  }

  deleteHabit(id){
    this.habitService.deleteHabit('mark', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of todo id ${id} Successful`
        this.refreshHabits(); 
      }
    )
    console.log(`delete habit ${id}`);
  }

  updateHabit(id){
    console.log(`update habit ${id}`);
    this.router.navigate(['habits',id]);
  }

  addHabit(){
    console.log(`addHabit`);
    this.router.navigate(['habits', -1])
  }


}
