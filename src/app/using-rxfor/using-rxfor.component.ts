import { RxFor } from '@rx-angular/template/for';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LIST_SIZE } from '../constants';
import { PrintTimeDiffComponent } from "../print-time-diff/print-time-diff.component";
import { createList } from '../utils';

@Component({
    selector: 'mee-using-rxfor',
    standalone: true,
    template: `
  <mee-print-time-diff/>
  <ul class="flex flex-wrap" >
    <li *rxFor="let item of items; trackBy: 'id'; strategy: 'normal'" class="tile">
      <strong>{{ item.id }}:</strong> <img [ngSrc]="'https://placehold.co/600x' + item.value" width="600" [height]="item.value" alt=""><mee-print-time-diff/>
    </li>
  </ul>
  <mee-print-time-diff/>
  `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RxFor, NgOptimizedImage, PrintTimeDiffComponent]
})
export class UsingRxforComponent {
  items = createList();
}
