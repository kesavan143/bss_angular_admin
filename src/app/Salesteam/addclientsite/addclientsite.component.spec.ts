import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclientsiteComponent } from './addclientsite.component';

describe('AddclientsiteComponent', () => {
  let component: AddclientsiteComponent;
  let fixture: ComponentFixture<AddclientsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddclientsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclientsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
