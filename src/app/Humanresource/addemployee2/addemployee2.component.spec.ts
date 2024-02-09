import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addemployee2Component } from './addemployee2.component';

describe('Addemployee2Component', () => {
  let component: Addemployee2Component;
  let fixture: ComponentFixture<Addemployee2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addemployee2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addemployee2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
