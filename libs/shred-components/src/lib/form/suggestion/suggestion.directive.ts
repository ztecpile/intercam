import { ConnectedPosition, Overlay, OverlayConfig, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { HttpClient } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';
import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { SuggestionComponent } from './suggestion.component';
import { SuggestionService } from './suggestion.service';

@Directive({
  selector: '[idbSuggestion]'
})
export class SuggestionDirective implements OnInit {
  private overlayRef: OverlayRef;
  private positions: ConnectedPosition;
  private suggestionComponent : ComponentRef<SuggestionComponent> | null = null;
 
  @Input("idbSuggestion") table : string;
  @Input() subject : Subject<boolean>;
  @Input() control : FormControl;

  constructor(private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private http: HttpClient,
    private service : SuggestionService) { }

  ngOnInit(): void {
    this.positions = {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
          offsetY: 0,
          offsetX: 0,
    }
    const positionStrategy = this.overlayPositionBuilder
                            .flexibleConnectedTo(this.elementRef)
                            .withPositions([this.positions]);
      
    const overlayConfig = new OverlayConfig({
          scrollStrategy: this.overlay.scrollStrategies.reposition(),
          positionStrategy
    });

    this.overlayRef = this.overlay.create(overlayConfig);
    this.subject.subscribe(value => {
      let search : string = this.elementRef.nativeElement.value;
        if(search.length > 0){
          this.overlayRef.detach();
          this.http.post<any>(`api/utils/createSuggestion` , {"data" : search , "table" : this.table} )
          .pipe(map(response => {
              return response;
          })).pipe(first()).subscribe(data=>{},error=>{console.log(error)})
      }
    });
  }

  ngOnDestroy(): void {
    this.overlayRef.detach();
  }

  @HostListener('focus')
  showFocus(): void {
   this.show();
  }

  @HostListener('keyup')
  showkeyup(): void {
   this.show();
  }

  @HostListener('blur')
  blur(): void {
    if(!this.service.onMouse) {
      this.overlayRef.detach();
    }
  }

  show() {
    let firstTime : boolean = false;
    if(!this.overlayRef.hasAttached()) {
      this.suggestionComponent = this.overlayRef.attach(
        new ComponentPortal(SuggestionComponent)
      );
      this.suggestionComponent.instance.elementRef = this.elementRef;
      this.suggestionComponent.instance.overlayRef = this.overlayRef;
      this.suggestionComponent.instance.table = this.table;
      this.suggestionComponent.instance.subject = this.subject;
      this.suggestionComponent.instance.control = this.control;
      firstTime = true;
    } 
    this.suggestionComponent.instance.refreshData(firstTime);
  }
}
