import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationcomplaintlistComponent } from './operationcomplaintlist.component';

describe('OperationcomplaintlistComponent', () => {
  let component: OperationcomplaintlistComponent;
  let fixture: ComponentFixture<OperationcomplaintlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationcomplaintlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationcomplaintlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
