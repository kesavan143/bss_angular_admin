import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateqrComponent } from './createqr.component';

describe('CreateqrComponent', () => {
  let component: CreateqrComponent;
  let fixture: ComponentFixture<CreateqrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateqrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
