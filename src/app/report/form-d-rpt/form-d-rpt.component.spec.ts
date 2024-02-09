import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDRptComponent } from './form-d-rpt.component';

describe('FormDRptComponent', () => {
  let component: FormDRptComponent;
  let fixture: ComponentFixture<FormDRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
