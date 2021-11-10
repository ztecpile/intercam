import { Directive, HostListener, ElementRef, Renderer2, ViewContainerRef, ComponentFactoryResolver, 
  ComponentRef, Input, ApplicationRef, Injector } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
//import { InstructionsComponent } from '../components/instructions/instructions.component';
import Instructions from './instructions';
import { FormControl } from '@angular/forms';
import { InstructionComponent } from '../instruction/instruction.component';
import { FormValidationService } from '../validation/form-validation.service';

@Directive({
  selector: '[idbInstructions]'
})
export class InstructionsDirective {
  @Input() type : string;
  @Input() control : FormControl;
  show : boolean = true;
  componentRef : any;//ComponentRef InstructionsComponent
  nameElement : string;

  constructor(private  el: ElementRef, private renderer : Renderer2,
    private translocoService : TranslocoService,
    private viewContainerRef: ViewContainerRef, private resolver: ComponentFactoryResolver,
    private injector: Injector,private app: ApplicationRef, private formValidation : FormValidationService) { }

  @HostListener("focus")
  onFocus() {
    //this.createComponent();
  }

  @HostListener("keyup")
  onKeyUp() {
    this.createComponent();
  }

  @HostListener("blur")
  onBlur() {
    if(document.getElementById('instrucciones'+  this.nameElement )) {
      this.renderer.removeChild(document.getElementById('div'+  this.nameElement ), document.getElementById('instrucciones' +  this.nameElement));
    }
  }

  ngOnInit() {
    this.nameElement = this.el.nativeElement.getAttribute('formControlName')
  }

  createComponent() {
    if(document.getElementById('instrucciones' +  this.nameElement) == null) {
      let newNode = document.createElement('div');
      newNode.id = 'instrucciones' +  this.nameElement;
      document.getElementById('div' +  this.nameElement).appendChild(newNode);
      let factory = this.resolver.resolveComponentFactory(InstructionComponent);
      this.componentRef = factory.create(this.injector, [], newNode);
      this.app.attachView(this.componentRef.hostView);
    }
    let _instructions = this.getInstructions();
    this.componentRef.instance.formControl = this.control;
    this.componentRef.instance.instructions = _instructions;
    this.formValidation.accommodateComponent(this.nameElement);
  }

  getInstructions() : string[] {
    return Instructions[this.type];
  }
}
