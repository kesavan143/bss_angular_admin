import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrainingReoprtComponent } from './view-training-reoprt.component';

describe('ViewTrainingReoprtComponent', () => {
  let component: ViewTrainingReoprtComponent;
  let fixture: ComponentFixture<ViewTrainingReoprtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTrainingReoprtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTrainingReoprtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
