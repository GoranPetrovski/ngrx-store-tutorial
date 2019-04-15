import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTutorialsComponent } from './display-tutorials.component';

describe('DisplayComponent', () => {
  let component: DisplayTutorialsComponent;
  let fixture: ComponentFixture<DisplayTutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayTutorialsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
