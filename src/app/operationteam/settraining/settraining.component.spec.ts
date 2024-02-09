import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettrainingComponent } from './settraining.component';

describe('SettrainingComponent', () => {
  let component: SettrainingComponent;
  let fixture: ComponentFixture<SettrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
