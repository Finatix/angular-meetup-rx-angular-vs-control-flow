import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingRxforComponent } from './using-rxfor.component';
import {By} from "@angular/platform-browser";
import {LIST_SIZE} from "../constants";

import '@mocks/intersection-observer';
import {firstValueFrom} from "rxjs";
import {RX_RENDER_STRATEGIES_CONFIG} from "@rx-angular/cdk/render-strategies";
import {screen, waitFor} from "@testing-library/angular";

describe('UsingRxforComponent', () => {
  let component: UsingRxforComponent;
  let fixture: ComponentFixture<UsingRxforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingRxforComponent],
      providers: [
        {
          provide: RX_RENDER_STRATEGIES_CONFIG,
          useValue: {
            primaryStrategy: 'native',
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingRxforComponent);
    component = fixture.componentInstance;
    // component.listRenderStrategy = 'native';
    fixture.detectChanges();
  });

  it('should contain some items', async () => {
    /**/
    await firstValueFrom(component.itemsRendered$);
    /**/
    const list = fixture.debugElement.queryAll(By.css('ul > li'));
    expect(list).toHaveLength(LIST_SIZE);
  });

  it('should contain items (testing library)', async () => {
    /*
    await waitFor(() => {
      if (screen.queryAllByRole('listitem').length !== LIST_SIZE) {
        throw new Error('Not all items rendered');
      }
    });
    const list = screen.queryAllByRole('listitem');
    /**/

    // const list = await screen.findAllByRole('listitem');

    await firstValueFrom(component.itemsRendered$);
    const list = screen.getAllByRole('listitem');

    expect(list).toHaveLength(LIST_SIZE)
  })
});
