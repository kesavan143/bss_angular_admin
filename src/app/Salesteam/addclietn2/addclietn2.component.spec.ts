import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addclietn2Component } from './addclietn2.component';

describe('Addclietn2Component', () => {
  let component: Addclietn2Component;
  let fixture: ComponentFixture<Addclietn2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addclietn2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addclietn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
