import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingRxforComponent } from './using-rxfor.component';

describe('UsingRxforComponent', () => {
  let component: UsingRxforComponent;
  let fixture: ComponentFixture<UsingRxforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingRxforComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsingRxforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
