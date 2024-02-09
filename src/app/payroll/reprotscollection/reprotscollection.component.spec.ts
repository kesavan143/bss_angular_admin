import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprotscollectionComponent } from './reprotscollection.component';

describe('ReprotscollectionComponent', () => {
  let component: ReprotscollectionComponent;
  let fixture: ComponentFixture<ReprotscollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprotscollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprotscollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
