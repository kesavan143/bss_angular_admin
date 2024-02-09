import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointTrackRecordslistComponent } from './point-track-recordslist.component';

describe('PointTrackRecordslistComponent', () => {
  let component: PointTrackRecordslistComponent;
  let fixture: ComponentFixture<PointTrackRecordslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointTrackRecordslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointTrackRecordslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
