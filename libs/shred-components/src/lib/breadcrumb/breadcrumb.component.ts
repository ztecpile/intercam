import { Component, Input } from '@angular/core';

import { BreadcrumbItem } from './breadcrumb-item.model';

@Component({
  selector: 'idb-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[];
}
