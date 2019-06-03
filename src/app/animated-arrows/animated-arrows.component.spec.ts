import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedArrowsComponent } from './animated-arrows.component';

describe('AnimatedArrowsComponent', () => {
  let component: AnimatedArrowsComponent;
  let fixture: ComponentFixture<AnimatedArrowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedArrowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
