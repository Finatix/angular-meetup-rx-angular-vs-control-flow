import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingAtForAndDeferComponent } from './using-at-for-and-defer.component';

import '@mocks/intersection-observer';
import {By} from "@angular/platform-browser";
import {LIST_SIZE} from "../constants";

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

  it('should contain some items', () => {
    const list = fixture.debugElement.queryAll(By.css('ul > li'));
    expect(list).toHaveLength(LIST_SIZE);
  });
});
