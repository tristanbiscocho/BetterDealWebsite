import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoeWerktDitComponent } from './hoe-werkt-dit.component';

describe('HoeWerktDitComponent', () => {
  let component: HoeWerktDitComponent;
  let fixture: ComponentFixture<HoeWerktDitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoeWerktDitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoeWerktDitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
