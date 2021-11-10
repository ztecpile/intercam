import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[intercam-dynamic-tabs]'
})
export class DynamicTabsDirective {
  constructor(public viewContainer: ViewContainerRef) {}
}
