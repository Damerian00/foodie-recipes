import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdfooterComponent } from './fdfooter.component';

describe('FdfooterComponent', () => {
  let component: FdfooterComponent;
  let fixture: ComponentFixture<FdfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
