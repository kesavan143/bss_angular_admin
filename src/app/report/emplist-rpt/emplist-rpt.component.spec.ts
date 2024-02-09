import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistRptComponent } from './emplist-rpt.component';

describe('EmplistRptComponent', () => {
  let component: EmplistRptComponent;
  let fixture: ComponentFixture<EmplistRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplistRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplistRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
