import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LIST_SIZE } from '../constants';
import { PrintTimeDiffComponent } from "../print-time-diff/print-time-diff.component";
import { createList } from '../utils';

@Component({
    selector: 'mee-using-at-for-and-defer',
    standalone: true,
    template: `
    <mee-print-time-diff/>
    <ul class="flex flex-wrap overflow-auto h-[30vh]" #ul>
    @for (item of items; track item.id) {
      @defer (on viewport(ul)) {
        <li class="tile" #li>
          <strong>{{ item.id }}:</strong> <img [ngSrc]="'https://placehold.co/600x' + item.value" width="600" [height]="item.value" alt=""><mee-print-time-diff/>
        </li>
      } @placeholder (minimum 100ms) {
        <li class="tile"><strong>{{ item.id }}: <div class="animate-pulse w-full h-8 bg-gray-300"></div></strong></li>
      } @loading (minimum 100ms) {
        <li class="tile"><strong>{{ item.id }}: <div class="w-full h-8 bg-red-900"></div></strong></li>
      } @error {
        Something went wrong :(
      }
    }
  </ul>
  <mee-print-time-diff/>
  `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgOptimizedImage, PrintTimeDiffComponent]
})
export class UsingAtForAndDeferComponent {
  items = createList();
}
