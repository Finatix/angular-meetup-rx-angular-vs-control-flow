import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingAtForAndDeferComponent } from './using-at-for-and-defer.component';

describe('UsingAtForAndDeferComponent', () => {
  let component: UsingAtForAndDeferComponent;
  let fixture: ComponentFixture<UsingAtForAndDeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingAtForAndDeferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsingAtForAndDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
