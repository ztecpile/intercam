import { Component, Input } from '@angular/core';

@Component({
  selector: 'idb-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent {
  @Input() url: string;
  @Input() text: string;
  @Input() native = false;
  @Input() fontSize = '15px';
}
