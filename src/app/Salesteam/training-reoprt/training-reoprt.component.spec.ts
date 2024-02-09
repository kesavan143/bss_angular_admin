import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingReoprtComponent } from './training-reoprt.component';

describe('TrainingReoprtComponent', () => {
  let component: TrainingReoprtComponent;
  let fixture: ComponentFixture<TrainingReoprtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingReoprtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingReoprtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
