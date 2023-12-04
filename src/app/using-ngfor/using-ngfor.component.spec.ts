import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingNgforComponent } from './using-ngfor.component';

describe('UsingNgforComponent', () => {
  let component: UsingNgforComponent;
  let fixture: ComponentFixture<UsingNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingNgforComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsingNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
