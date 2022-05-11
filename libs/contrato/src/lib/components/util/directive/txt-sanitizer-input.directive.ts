import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: 'input[intercamSanitizerTxt]'
})
export class TxtSanitizerDirective{
  
  regexStr = '^[a-zA-Z_ ]*$';
  regexAlpha = '^[a-zA-Z0-9_ ]*$';
  @Input() isAlphaNumeric: boolean;
  
  constructor(private el: ElementRef) { }
  
  @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
  this.validateFields(event);
  }

  @HostListener('input', ['$event']) onInput(event) {
    event.target.value = event.target.value.toUpperCase();
    return new RegExp(this.isAlphaNumeric ? this.regexAlpha : this.regexStr).test(event.key);
  }
  
  validateFields(event) {
    setTimeout(() => {
      this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^A-Za-z_ ]/g,
        '').replace(/\s/g, '');
      this.el.nativeElement.value =  this.el.nativeElement.value.toUpperCase();
      event.preventDefault();
    }, 100)
  }
}