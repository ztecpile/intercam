import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[idbPop]'
  })
  export class PopDirective {
    @Input("idbPop") id : string;
    private element : any;
    private dragOffset;
    private isDown;
    
    constructor(private  el: ElementRef,private renderer : Renderer2) {
    }

    ngOnInit() {}

    @HostListener('mousedown', ['$event']) 
    mousedown(event : MouseEvent){ 
        this.element = document.getElementById(this.id);
        this.isDown = true;
        this.dragOffset = [ 
            this.element.offsetLeft - event.clientX,
            this.element.offsetTop - event.clientY
        ]
    }

    @HostListener('window:mouseup', ['$event']) 
    mouseup(event : MouseEvent){ 
        this.isDown = false;
    }

    @HostListener('window:mousemove', ['$event']) 
    mousemove(event : MouseEvent){ 
        event.preventDefault();
        if (this.isDown){
             var mousePosition = {
                 x : event.clientX,
                 y : event.clientY
             };

             this.element.style.left = (mousePosition.x + this.dragOffset[0]) + 'px';
             this.element.style.top  = (mousePosition.y + this.dragOffset[1]) + 'px';
        }
    }
}