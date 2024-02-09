import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBRptComponent } from './form-b-rpt.component';

describe('FormBRptComponent', () => {
  let component: FormBRptComponent;
  let fixture: ComponentFixture<FormBRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
