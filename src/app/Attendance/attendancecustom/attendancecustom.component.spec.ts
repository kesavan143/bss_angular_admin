import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancecustomComponent } from './attendancecustom.component';

describe('AttendancecustomComponent', () => {
  let component: AttendancecustomComponent;
  let fixture: ComponentFixture<AttendancecustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendancecustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancecustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
