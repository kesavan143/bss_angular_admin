import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnightreportComponent } from './viewnightreport.component';

describe('ViewnightreportComponent', () => {
  let component: ViewnightreportComponent;
  let fixture: ComponentFixture<ViewnightreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewnightreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnightreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
