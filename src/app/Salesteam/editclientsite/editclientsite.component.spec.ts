import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditclientsiteComponent } from './editclientsite.component';

describe('EditclientsiteComponent', () => {
  let component: EditclientsiteComponent;
  let fixture: ComponentFixture<EditclientsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditclientsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditclientsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
