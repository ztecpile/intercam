import {
  Directive,
  Input,
  ElementRef,
  OnInit,
  HostListener,
  ComponentRef,
} from '@angular/core';
import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
  ConnectedPosition,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[idbTooltip]',
})
export class TooltipDirective implements OnInit {
  @Input('idbTooltip') text = '';
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() alignment: 'left' | 'center' | 'right' = 'center';
  private overlayRef: OverlayRef;
  private positions: ConnectedPosition;
  public placement_class: string;
  public alignment_class: string;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    var positions: ConnectedPosition;
    this.placement_class = "tooltip-"+this.placement;
    this.alignment_class = "alignment_"+this.alignment;
    switch ( this.placement ) {
      case 'top':
        this.positions = {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          offsetY: -8,
        }
        break;
      case 'bottom':
        this.positions = {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
          offsetY: 8,
      }
      break;
      case 'left':
        this.positions = {
          originX: 'end',
          originY: 'center',
          overlayX: 'end',
          overlayY: 'center',
          offsetX: -32,
        }
      break;
      case 'right':
        this.positions = {
          originX: 'start',
          originY: 'center',
          overlayX: 'start',
          overlayY: 'center',
          offsetX: 32,
        }
      break;
    }

    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([this.positions]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseover')
  show(): void {
    const tooltipRef: ComponentRef<TooltipComponent> = this.overlayRef.attach(
      new ComponentPortal(TooltipComponent)
    );
    tooltipRef.instance.text = this.text;
    tooltipRef.instance.placement = this.placement;
    tooltipRef.instance.alignment = this.alignment;
    tooltipRef.instance.placement_class = this.placement_class;
    tooltipRef.instance.alignment_class = this.alignment_class;
  }

  @HostListener('mouseout')
  hide(): void {
    this.overlayRef.detach();
  }
}
