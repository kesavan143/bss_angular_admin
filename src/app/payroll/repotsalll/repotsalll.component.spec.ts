import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepotsalllComponent } from './repotsalll.component';

describe('RepotsalllComponent', () => {
  let component: RepotsalllComponent;
  let fixture: ComponentFixture<RepotsalllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepotsalllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepotsalllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
