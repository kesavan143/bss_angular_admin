import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcontractpageComponent } from './viewcontractpage.component';

describe('ViewcontractpageComponent', () => {
  let component: ViewcontractpageComponent;
  let fixture: ComponentFixture<ViewcontractpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcontractpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcontractpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
