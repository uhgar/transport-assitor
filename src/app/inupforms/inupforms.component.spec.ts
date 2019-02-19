import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InupformsComponent } from './inupforms.component';

describe('InupformsComponent', () => {
  let component: InupformsComponent;
  let fixture: ComponentFixture<InupformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InupformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InupformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
