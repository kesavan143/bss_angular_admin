import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterUnitRateComponent } from './master-unit-rate.component';

describe('MasterUnitRateComponent', () => {
  let component: MasterUnitRateComponent;
  let fixture: ComponentFixture<MasterUnitRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterUnitRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterUnitRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
