import { Directive, HostListener, ComponentRef, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { OverlayRef, ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { RestringeFechaHoraComponent } from './restringe-fecha-hora.component';

@Directive({
    selector: '[idbRestringeFechaHora]',
})
export class RestringeFechaHoraDirective implements OnInit {
    @Input() data: any;
    @Input() titulos: any;
    @Output() close = new EventEmitter<boolean>();
    private overlayRef: OverlayRef;
    private positions: ConnectedPosition;
    open : boolean = true;

    constructor(
        private overlay: Overlay,
        private overlayPositionBuilder: OverlayPositionBuilder,
        private elementRef: ElementRef
    ) {}

    ngOnInit(): void {
        this.positions = {
            originX: 'center',
            originY: 'bottom',
            overlayX: 'center',
            overlayY: 'top',
            offsetY: -20,
            offsetX: 10,
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
        this.overlayRef.detach();
    }

    @HostListener('click')
    show(): void {
        if(this.open || !this.data.display) {
            const restringeComponent: ComponentRef<RestringeFechaHoraComponent> = this.overlayRef.attach(
                new ComponentPortal(RestringeFechaHoraComponent)
                );
            restringeComponent.instance.data = this.data;
            restringeComponent.instance.titulos = this.titulos;
            restringeComponent.instance.overlayRef = this.overlayRef
            this.open = false;
            this.data.display = true;
            restringeComponent.instance.close.subscribe(val => this.close.emit(val));
//        } else {
//            this.open = true;
//            this.overlayRef.detach();
        }
        
    }
}