import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeetrackingComponent } from './employeetracking.component';

describe('EmployeetrackingComponent', () => {
  let component: EmployeetrackingComponent;
  let fixture: ComponentFixture<EmployeetrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeetrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeetrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
