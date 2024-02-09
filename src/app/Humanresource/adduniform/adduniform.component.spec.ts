import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduniformComponent } from './adduniform.component';

describe('AdduniformComponent', () => {
  let component: AdduniformComponent;
  let fixture: ComponentFixture<AdduniformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdduniformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduniformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
