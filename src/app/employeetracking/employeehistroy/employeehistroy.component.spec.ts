import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeehistroyComponent } from './employeehistroy.component';

describe('EmployeehistroyComponent', () => {
  let component: EmployeehistroyComponent;
  let fixture: ComponentFixture<EmployeehistroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeehistroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeehistroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
