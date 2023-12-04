import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingAtForComponent } from './using-at-for.component';

describe('UsingAtForComponent', () => {
  let component: UsingAtForComponent;
  let fixture: ComponentFixture<UsingAtForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingAtForComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsingAtForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
