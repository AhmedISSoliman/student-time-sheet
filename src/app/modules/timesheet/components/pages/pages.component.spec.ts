import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetPageComponent } from './pages.component';

describe('PagesComponent', () => {
  let component: TimesheetPageComponent;
  let fixture: ComponentFixture<TimesheetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimesheetPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
