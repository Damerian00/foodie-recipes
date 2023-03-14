import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdheaderComponent } from './fdheader.component';

describe('FdheaderComponent', () => {
  let component: FdheaderComponent;
  let fixture: ComponentFixture<FdheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
