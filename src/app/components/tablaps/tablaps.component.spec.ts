import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablapsComponent } from './tablaps.component';

describe('TablapsComponent', () => {
  let component: TablapsComponent;
  let fixture: ComponentFixture<TablapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
