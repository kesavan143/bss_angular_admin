import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettrainingvideosComponent } from './settrainingvideos.component';

describe('SettrainingvideosComponent', () => {
  let component: SettrainingvideosComponent;
  let fixture: ComponentFixture<SettrainingvideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettrainingvideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettrainingvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
