import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TabsComponent } from '../tabs.component';

@Component({
  selector: 'idb-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css'],
})
export class TabContentComponent implements OnInit, OnDestroy {
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
}
