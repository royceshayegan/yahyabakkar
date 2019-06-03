import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleSheathComponent } from './collapsible-sheath.component';

describe('CollapsibleSheathComponent', () => {
  let component: CollapsibleSheathComponent;
  let fixture: ComponentFixture<CollapsibleSheathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsibleSheathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleSheathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
