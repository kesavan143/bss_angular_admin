import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationReadedComponent } from './notification-readed.component';

describe('NotificationReadedComponent', () => {
  let component: NotificationReadedComponent;
  let fixture: ComponentFixture<NotificationReadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationReadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationReadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
