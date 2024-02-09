import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleryprocessstatementComponent } from './saleryprocessstatement.component';

describe('SaleryprocessstatementComponent', () => {
  let component: SaleryprocessstatementComponent;
  let fixture: ComponentFixture<SaleryprocessstatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleryprocessstatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleryprocessstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
