import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Afterloghomepage1Component } from './afterloghomepage1.component';

describe('Afterloghomepage1Component', () => {
  let component: Afterloghomepage1Component;
  let fixture: ComponentFixture<Afterloghomepage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Afterloghomepage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Afterloghomepage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
