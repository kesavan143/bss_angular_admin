import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeedetails2Component } from './employeedetails2.component';

describe('Employeedetails2Component', () => {
  let component: Employeedetails2Component;
  let fixture: ComponentFixture<Employeedetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Employeedetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Employeedetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
