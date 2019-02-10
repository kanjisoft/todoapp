import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHabitsComponent } from './list-habits.component';

describe('ListHabitsComponent', () => {
  let component: ListHabitsComponent;
  let fixture: ComponentFixture<ListHabitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHabitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
