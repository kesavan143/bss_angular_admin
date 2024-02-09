import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceyearlyComponent } from './attendanceyearly.component';

describe('AttendanceyearlyComponent', () => {
  let component: AttendanceyearlyComponent;
  let fixture: ComponentFixture<AttendanceyearlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceyearlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceyearlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
