import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[intercamDynamicTabsContenedor]'
})
export class DynamicTabsContenedorDirective {

  constructor(public viewContainer: ViewContainerRef) { }

}