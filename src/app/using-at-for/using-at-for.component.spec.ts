import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingAtForComponent } from './using-at-for.component';
import {By} from "@angular/platform-browser";
import {LIST_SIZE} from "../constants";

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

  it('should contain some items', () => {
    const list = fixture.debugElement.queryAll(By.css('ul > li'));
    expect(list).toHaveLength(LIST_SIZE);
  });
});
