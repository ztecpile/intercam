import {
  Directive,
  Input,
  Output,
  ElementRef,
  OnInit,
  HostListener,
  ComponentRef,
  EventEmitter,
} from '@angular/core';
import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
  ConnectedPosition,
  OverlayConfig,
} from '@angular/cdk/overlay';

import { ComponentPortal } from '@angular/cdk/portal';
import { TimepickerComponent } from './timepicker.component';

@Directive({
  selector: '[idbTimepicker]',
})
export class TimepickerDirective implements OnInit {
//  @Input('idbTimepicker') hora = '';
  @Input() hora = '';
  @Output() horaNueva = new EventEmitter<string>();

  private overlayRef: OverlayRef;
  private positions: ConnectedPosition;
  display: boolean = true;
  open : boolean = true;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
  ) {}

  ngOnInit(): void {
console.log("ngOnInit directive hora", this.hora);
    this.positions = {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
      offsetY: 8,
    }

    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([this.positions]);

    const overlayConfig = new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      positionStrategy
    });

    this.overlayRef = this.overlay.create(overlayConfig);
  }

  ngOnDestroy(): void {
    this.open = true;
    this.display = false;
    this.overlayRef.detach();
console.log("ngOnDestroy  hora", this.hora);
  }

  @HostListener('click')
  show(): void {
console.log("HostListener show hora", this.hora);
console.log("HostListener show open", this.open);
console.log("HostListener show display", this.display);
    if(this.open || !this.display) {
      const timepickerComponent: ComponentRef<TimepickerComponent> = this.overlayRef.attach(
        new ComponentPortal(TimepickerComponent)
      );
      timepickerComponent.instance.hora = this.hora;
      timepickerComponent.instance.overlayRef = this.overlayRef
//      this.open = false;
      this.display = true;
      timepickerComponent.instance.horaNueva.subscribe(val => this.horaNueva.emit(val));
    }
  }

}
