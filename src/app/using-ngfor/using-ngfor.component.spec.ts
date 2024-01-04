import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingNgforComponent } from './using-ngfor.component';
import {By} from "@angular/platform-browser";
import {LIST_SIZE} from "../constants";

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

  it('should contain some items', () => {
    const list = fixture.debugElement.queryAll(By.css('ul > li'));
    expect(list).toHaveLength(LIST_SIZE);
  });
});
