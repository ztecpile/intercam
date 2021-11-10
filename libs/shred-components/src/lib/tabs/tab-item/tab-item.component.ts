import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { TabsComponent } from '../tabs.component';

@Component({
  selector: 'idb-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css'],
})
export class TabItemComponent implements OnInit, OnDestroy {
  @Input() tabId: string;

  active = false;

  private tabSelectedSubscription: Subscription;

  constructor(private tabsComponent: TabsComponent) {}

  ngOnInit(): void {
    this.tabSelectedSubscription = this.tabsComponent.tabSelected$.subscribe(
      (tabId) => (this.active = this.tabId === tabId)
    );
  }

  ngOnDestroy(): void {
    if (this.tabSelectedSubscription) {
      this.tabSelectedSubscription.unsubscribe();
    }
  }

  onClick(event: MouseEvent): void {
    event.preventDefault();
    this.tabsComponent.select(this.tabId);
  }
}
