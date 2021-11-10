 import { Component, Input } from '@angular/core';

 @Component({
   selector: 'intercam-tab-dynamic',
   templateUrl:'./tab-dynamic.component.html' ,
    styleUrls: ['./tab-dynamic.component.scss']
 })
 export class TabDynamicComponent {
   @Input('tabTitle') title: string;
   @Input() active = false;
   @Input() isCloseable = false;
   @Input() template;
   @Input() dataContext;
 }