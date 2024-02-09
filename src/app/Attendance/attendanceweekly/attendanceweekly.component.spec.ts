import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceweeklyComponent } from './attendanceweekly.component';

describe('AttendanceweeklyComponent', () => {
  let component: AttendanceweeklyComponent;
  let fixture: ComponentFixture<AttendanceweeklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceweeklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceweeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
