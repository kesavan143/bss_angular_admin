import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddassignComponent } from './addassign.component';

describe('AddassignComponent', () => {
  let component: AddassignComponent;
  let fixture: ComponentFixture<AddassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
