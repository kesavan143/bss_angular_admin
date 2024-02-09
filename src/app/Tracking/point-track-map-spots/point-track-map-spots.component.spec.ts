import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointTrackMapSpotsComponent } from './point-track-map-spots.component';

describe('PointTrackMapSpotsComponent', () => {
  let component: PointTrackMapSpotsComponent;
  let fixture: ComponentFixture<PointTrackMapSpotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointTrackMapSpotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointTrackMapSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
