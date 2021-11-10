import { Injectable, Renderer2, ComponentRef, ElementRef, ApplicationRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormValidationService } from './form-validation.service';
import { ValidationComponent } from './validation.component';

export class GenerateService {

    constructor(private renderer : Renderer2, private resolver: ComponentFactoryResolver,
        private injector: Injector,private app: ApplicationRef, private control : FormControl, 
        private formValidation : FormValidationService) {
          this.nameElement = this.getControlName();//this.el.nativeElement.getAttribute('formControlName')
          this.generateElementRef();
    }

    componentRef : ComponentRef<any>;
    nameElement : string;
    el: Element;

    generateElementRef() {
      let div = document.getElementById('div' +  this.nameElement);
      if(div) {
        this.el = div.children.item(0);
        if(this.el.tagName == "DIV") {
          this.el = this.el.children.item(0);
        }
      }
    }

    getControlName(): string | null {
      var parent = this.control["_parent"];
      let controlName : string;
      if (parent instanceof FormGroup) {
        Object.keys(parent.controls).forEach((name) => {
            if (this.control === parent.controls[name]) {
                controlName = name;
            }
        });
      }
      return controlName;
    }

    validacionCampo() : boolean{
      let exito = true;
        if(!this.el) {
          return false;
        }
        let error;
        if(!this.control.valid) {
          exito = false;
          error = this.checkErrors(this.control);
          try {
            this.createComponent(error);
            if(this.el.tagName != "SELECT" && this.el.tagName !='IDB-CALENDARIO') {
              this.renderer.addClass(this.el, "color_rojo");
            }
            this.formValidation.accommodateComponent(this.nameElement);
          } catch(error) {}
        } else {
          try {
            this.renderer.removeChild(document.getElementById('div'+  this.nameElement ), document.getElementById('error' +  this.nameElement));
            if(this.el.tagName != "SELECT") {
             this.renderer.removeClass(this.el, "color_rojo");
            }
          } catch(error) {}
        }
      return exito;
    } 
      
    createComponent(message) {
        if(document.getElementById('error' +  this.nameElement) != null) {
            this.renderer.removeChild(document.getElementById('div'+  this.nameElement ), document.getElementById('error' +  this.nameElement));  
        }
        let newNode = document.createElement('div');
        newNode.id = 'error' +  this.nameElement;
        document.getElementById('div' +  this.nameElement).appendChild(newNode);
        let factory = this.resolver.resolveComponentFactory(ValidationComponent);
        this.componentRef = factory.create(this.injector, [], newNode);
        this.app.attachView(this.componentRef.hostView);
        this.componentRef.instance.message = message;
    }

    isSelectType() : boolean {
      return this.el.tagName == "SELECT";
    }

    isTimer() : boolean {
      return this.el.tagName == "NGX-TIMEPICKER-FIELD"
    }
 
    checkErrors(control : FormControl) : string {
      let error = "";
      Object.keys(control.errors).every(function(element, index) {
        error = element;
        return false;
      })
      error = "Validation." + error;
      return error;
    }
}