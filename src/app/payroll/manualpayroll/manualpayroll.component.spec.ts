import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualpayrollComponent } from './manualpayroll.component';

describe('ManualpayrollComponent', () => {
  let component: ManualpayrollComponent;
  let fixture: ComponentFixture<ManualpayrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualpayrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualpayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
