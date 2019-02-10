import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitDataService } from '../service/data/habit-data.service';
import { Habit } from '../list-habits/list-habits.component';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent implements OnInit {

  id: number
  habit: Habit

  constructor(
    private habitService: HabitDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.habit = new Habit(this.id, 'habit', 'desc', 1, 'trigger', 'Good job')
    if (this.id != -1) {
      this.habitService.retrieveHabit('mark', this.id)
        .subscribe(
          data => this.habit = data
        )
    }

  }

  saveHabit() {
    if (this.id == -1) {
      console.log("calling createHabit")
      this.habitService.createHabit('mark', this.habit)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['habits'])
        }
      )    
    } else {
      console.log("calling updateHabit")
      this.habitService.updateHabit('mark', this.id, this.habit)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['habits'])
          }
        )
    }
  }

}
