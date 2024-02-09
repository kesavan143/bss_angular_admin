import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurenumberComponent } from './configurenumber.component';

describe('ConfigurenumberComponent', () => {
  let component: ConfigurenumberComponent;
  let fixture: ComponentFixture<ConfigurenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
