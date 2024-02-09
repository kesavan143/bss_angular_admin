import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitMasterSalaryDetailsComponent } from './unit-master-salary-details.component';

describe('UnitMasterSalaryDetailsComponent', () => {
  let component: UnitMasterSalaryDetailsComponent;
  let fixture: ComponentFixture<UnitMasterSalaryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitMasterSalaryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitMasterSalaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
