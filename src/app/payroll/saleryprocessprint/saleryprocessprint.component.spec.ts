import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleryprocessprintComponent } from './saleryprocessprint.component';

describe('SaleryprocessprintComponent', () => {
  let component: SaleryprocessprintComponent;
  let fixture: ComponentFixture<SaleryprocessprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleryprocessprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleryprocessprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
