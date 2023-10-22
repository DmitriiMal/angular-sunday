import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamePageComponent } from './hame-page.component';

describe('HamePageComponent', () => {
  let component: HamePageComponent;
  let fixture: ComponentFixture<HamePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HamePageComponent]
    });
    fixture = TestBed.createComponent(HamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
