import { Directive, Input, HostListener, Renderer2, ComponentRef, ElementRef, ViewContainerRef, 
  ComponentFactoryResolver, SimpleChanges, Host, ViewChild, Injector, ApplicationRef, EmbeddedViewRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { FormValidationService } from './form-validation.service';
import { GenerateService } from './generate.service';

@Directive({
  selector: '[idbInput]'
})
export class InputDirective {
  @Input() control : FormControl;
  @Input() controlSibling : FormControl;
  private id = 'ErrorInput';
  private errrorRequired : string;
  private errrorEmail : string;
  private errrorPattern : string;
  private errrorCustomValidator : string;
  componentRef : ComponentRef<any>;
  hasPreviousError = false;
  firstTime  = true;
  nameElement : string;
  service : GenerateService;
  
  constructor(private  el: ElementRef,private renderer : Renderer2, 
    private translocoService : TranslocoService, 
    private viewContainerRef: ViewContainerRef, private resolver: ComponentFactoryResolver,
    private injector: Injector,private app: ApplicationRef,
    private formValidation : FormValidationService) {
  }

  ngAfterViewInit() {
    this.changeStyle();
  }

  @HostListener('keyup', ['$event']) 
  onKeyUp(event: KeyboardEvent) {
    this.service = new GenerateService(this.renderer, this.resolver,this.injector, 
      this.app,this.control, this.formValidation);
    if(!this.service.isSelectType()) {
      this.changeStyle();
    }
    this.service.validacionCampo();
    if(this.controlSibling) {
      this.validateSibling();
    }
  }

  @HostListener('click') 
  onClick() {
    this.control.updateValueAndValidity();
    this.service = new GenerateService(this.renderer, this.resolver,this.injector, 
      this.app,this.control, this.formValidation);
    if(this.service.isSelectType() ||  this.service.isTimer()) {
      this.service.validacionCampo();
      if(this.controlSibling) {
        this.validateSibling();
      }
    }
  }

  validateSibling() {
    this.controlSibling.updateValueAndValidity();
    if(this.controlSibling.valid) {
      const serviceTmp : GenerateService = new GenerateService(this.renderer, this.resolver,this.injector, 
      this.app,this.controlSibling, this.formValidation);
      serviceTmp.validacionCampo();
    }
  }

  changeStyle() {
    if(this.el && this.el != null) {
      if(this.el.nativeElement.value != undefined) {
        if (this.el.nativeElement.value.length >= 1) {
          if(this.el.nativeElement.nextElementSibling) {
            this.renderer.addClass(this.el.nativeElement.nextElementSibling , "fijar");
          }
        } else {
          if(this.el.nativeElement.nextElementSibling) {
            this.renderer.removeClass(this.el.nativeElement.nextElementSibling , "fijar");
          }
        }
      }
    }
  }
}