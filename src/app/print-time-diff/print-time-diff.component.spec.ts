import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTimeDiffComponent } from './print-time-diff.component';

describe('PrintTimeDiffComponent', () => {
  let component: PrintTimeDiffComponent;
  let fixture: ComponentFixture<PrintTimeDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintTimeDiffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintTimeDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
