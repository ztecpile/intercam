import { ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Output } from '@angular/core';
import { Directive, Input, OnInit, EventEmitter, HostListener, ComponentRef, ElementRef } from '@angular/core';
import { LightboxConfComponent } from './lightboxConf.component';


@Directive({
  selector: '[idblightboxConf]',
})
export class LightboxConfDirective implements OnInit {

  @Input() hora = '';
  private overlayRef: OverlayRef;
  private positions: ConnectedPosition;
  @Input() ruta: string = "";
  @Input() rutaCancelar: string = "";
  @Input() etiquetaAMostrar: string = "";
  @Output() close = new EventEmitter<boolean>();

  constructor(private overlay: Overlay, private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {
    console.log("llega al Directiva lightboxConf ");
    this.positions = {
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'top',
      offsetY: 0,
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

  ngOnDestroy(): void { }

  @HostListener('click')
  show(): void {
    console.log("Lightbox Directive click");
    
    const lightboxConfComponent: ComponentRef<LightboxConfComponent> = this.overlayRef.attach(
      new ComponentPortal(LightboxConfComponent)
    );
    lightboxConfComponent.instance.overlayRef = this.overlayRef
    lightboxConfComponent.instance.ruta = this.ruta;
    lightboxConfComponent.instance.rutaCancelar = this.rutaCancelar;
    lightboxConfComponent.instance.etiquetaAMostrar = this.etiquetaAMostrar;
    lightboxConfComponent.instance.close.subscribe(val => this.close.emit(val));
  }
}
