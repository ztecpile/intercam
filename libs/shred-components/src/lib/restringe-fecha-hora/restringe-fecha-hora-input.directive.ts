import { Directive, HostListener, ComponentRef, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { OverlayRef, ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { RestringeFechaHoraComponent } from './restringe-fecha-hora.component';

@Directive({
    selector: '[idbRestringeFechaHoraInput]',
})
export class RestringeFechaHoraInputDirective implements OnInit {
    @Input() data: any;
    @Input() titulos: any;
    private overlayRef: OverlayRef;
    @Input() positions: ConnectedPosition;
    @Output() close = new EventEmitter<boolean>();
    open : boolean = true;

    constructor(
        private overlay: Overlay,
        private overlayPositionBuilder: OverlayPositionBuilder,
        private elementRef: ElementRef
    ) {}

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        if(this.overlayRef) {
            this.open = true;
            this.overlayRef.detach();
        }
    }

    @HostListener('focus')
    show(): void {
        if(this.open || !this.data.display) {
             const positionStrategy = this.overlayPositionBuilder
            .flexibleConnectedTo(this.elementRef)
            .withPositions([this.positions]);
        
            const overlayConfig = new OverlayConfig({
                scrollStrategy: this.overlay.scrollStrategies.reposition(),
                positionStrategy
            });

            this.overlayRef = this.overlay.create(overlayConfig);

            const restringeComponent: ComponentRef<RestringeFechaHoraComponent> = this.overlayRef.attach(
                new ComponentPortal(RestringeFechaHoraComponent)
                );
            restringeComponent.instance.data = this.data;
            restringeComponent.instance.titulos = this.titulos;
            restringeComponent.instance.overlayRef = this.overlayRef
            this.open = false;
            this.data.display = true;
            restringeComponent.instance.close.subscribe(val => this.close.emit(val));
        }
    }        
}
