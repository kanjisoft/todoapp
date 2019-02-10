import { TestBed } from '@angular/core/testing';

import { HabitDataService } from './habit-data.service';

describe('HabitDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HabitDataService = TestBed.get(HabitDataService);
    expect(service).toBeTruthy();
  });
});
