import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LIST_SIZE } from '../constants';
import { PrintTimeDiffComponent } from "../print-time-diff/print-time-diff.component";
import { createList } from '../utils';

@Component({
    selector: 'mee-using-at-for',
    standalone: true,
    template: `
    <mee-print-time-diff/>
    <ul class="flex flex-wrap overflow-auto h-[30vh]" >
    @for (item of items; track item.id) {
      <li class="tile"><strong>{{ item.id }}:</strong> <img [ngSrc]="'https://placehold.co/600x' + item.value" width="600" [height]="item.value" alt=""> <mee-print-time-diff/></li>
    }
    </ul>
    <mee-print-time-diff/>
  `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgOptimizedImage, PrintTimeDiffComponent]
})
export class UsingAtForComponent {
  items = createList();
}
