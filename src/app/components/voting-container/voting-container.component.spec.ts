import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingContainerComponent } from './voting-container.component';

describe('VotingContainerComponent', () => {
  let component: VotingContainerComponent;
  let fixture: ComponentFixture<VotingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
