import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfullpaymentsComponent } from './viewfullpayments.component';

describe('ViewfullpaymentsComponent', () => {
  let component: ViewfullpaymentsComponent;
  let fixture: ComponentFixture<ViewfullpaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfullpaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfullpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
