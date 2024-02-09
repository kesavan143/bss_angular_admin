import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsiformatRptComponent } from './esiformat-rpt.component';

describe('EsiformatRptComponent', () => {
  let component: EsiformatRptComponent;
  let fixture: ComponentFixture<EsiformatRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsiformatRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsiformatRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
