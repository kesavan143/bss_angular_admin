import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProftaxformRptComponent } from './proftaxform-rpt.component';

describe('ProftaxformRptComponent', () => {
  let component: ProftaxformRptComponent;
  let fixture: ComponentFixture<ProftaxformRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProftaxformRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProftaxformRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
