import { Component, AfterContentInit, Input } from '@angular/core';

import { Subject } from 'rxjs';

@Component({
  selector: 'idb-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements AfterContentInit {
  @Input() defaultTabId: string;
  private tabSelectedSource = new Subject<string>();

  tabSelected$ = this.tabSelectedSource.asObservable();

  select(tabId: string): void {
    this.tabSelectedSource.next(tabId);
  }

  ngAfterContentInit(): void {
    if (this.defaultTabId) {
      this.select(this.defaultTabId);
    }
  }
}
