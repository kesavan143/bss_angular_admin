import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationfeedlistComponent } from './operationfeedlist.component';

describe('OperationfeedlistComponent', () => {
  let component: OperationfeedlistComponent;
  let fixture: ComponentFixture<OperationfeedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationfeedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationfeedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
