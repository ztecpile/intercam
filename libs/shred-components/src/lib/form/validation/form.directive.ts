import { Directive, HostListener, Input, Renderer2, ViewContainerRef, ComponentFactoryResolver, 
  Injector, ApplicationRef, ElementRef } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { FormValidationService } from './form-validation.service';
import { GenerateService } from './generate.service';

@Directive({
  selector: '[idbForm]'
})
export class FormDirective {
  @Input() formGroup : FormGroup;
  service : GenerateService;

  constructor(private renderer : Renderer2, private viewContainerRef: ViewContainerRef, private resolver: ComponentFactoryResolver,
    private injector: Injector,private app: ApplicationRef, private  el: ElementRef, private formValidation : FormValidationService) { }

  @HostListener("submit")
  onClick() {
    // let control : FormControl;
    // Object.keys(this.formGroup.controls).forEach(nameControl => {
    //   control = <FormControl>this.formGroup.controls[nameControl];
    //   this.service = new GenerateService(this.renderer, this.resolver,this.injector, 
    //     this.app,control, this.formValidation);
    //   this.service.validacionCampo();
    // });
    this.validacontrol(this.formGroup);
  }

  validacontrol(formGrupFake: FormGroup): void {
    Object.keys(formGrupFake.controls).forEach(nameControl => {
      const control: AbstractControl = formGrupFake.controls[nameControl];
      if(control instanceof FormGroup) {
        this.validacontrol(control as FormGroup);
      } else {
        this.service = new GenerateService(this.renderer, this.resolver,this.injector, 
          this.app,control as FormControl, this.formValidation);
        this.service.validacionCampo();
      }
    });
  }
}
