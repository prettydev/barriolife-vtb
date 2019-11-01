import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VervoerComponent } from './vervoer.component';

describe('VervoerComponent', () => {
  let component: VervoerComponent;
  let fixture: ComponentFixture<VervoerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VervoerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VervoerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
