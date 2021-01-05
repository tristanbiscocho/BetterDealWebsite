import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WieZijnWijComponent } from './wie-zijn-wij.component';

describe('WieZijnWijComponent', () => {
  let component: WieZijnWijComponent;
  let fixture: ComponentFixture<WieZijnWijComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WieZijnWijComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WieZijnWijComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
