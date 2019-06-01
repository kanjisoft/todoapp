import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoComponent } from './todo/todo.component';
import { HabitComponent } from './habit/habit.component';
import { ListHabitsComponent } from './list-habits/list-habits.component';
import { RouteGuardService } from './service/route-guard.service';


// Welcome
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  { path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService]},  
  { path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService]},  
  { path: 'habits', component: ListHabitsComponent, canActivate:[RouteGuardService]},  
  { path: 'habits/:id', component: HabitComponent, canActivate:[RouteGuardService]},  
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
