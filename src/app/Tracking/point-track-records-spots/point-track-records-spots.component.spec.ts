import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointTrackRecordsSpotsComponent } from './point-track-records-spots.component';

describe('PointTrackRecordsSpotsComponent', () => {
  let component: PointTrackRecordsSpotsComponent;
  let fixture: ComponentFixture<PointTrackRecordsSpotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointTrackRecordsSpotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointTrackRecordsSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
