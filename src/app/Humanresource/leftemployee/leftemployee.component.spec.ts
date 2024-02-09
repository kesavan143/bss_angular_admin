import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftemployeeComponent } from './leftemployee.component';

describe('LeftemployeeComponent', () => {
  let component: LeftemployeeComponent;
  let fixture: ComponentFixture<LeftemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
