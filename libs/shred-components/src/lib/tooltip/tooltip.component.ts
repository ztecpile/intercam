import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'idb-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [animate(300, style({ opacity: 0 }))]),
    ]),
  ],
})
export class TooltipComponent {
  @Input() text = '';
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() alignment: 'left' | 'center' | 'right' = 'left';
  public placement_class: string;
  public alignment_class: string;
}
