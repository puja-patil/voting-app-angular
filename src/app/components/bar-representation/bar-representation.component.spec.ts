import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarRepresentationComponent } from './bar-representation.component';

describe('BarRepresentationComponent', () => {
  let component: BarRepresentationComponent;
  let fixture: ComponentFixture<BarRepresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarRepresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
