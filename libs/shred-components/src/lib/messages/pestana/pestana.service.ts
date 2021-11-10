import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector, Renderer2 } from '@angular/core';
import { PestanaComponent } from './pestana.component';
import { PestanaType } from './pestanaType';

@Injectable({
  providedIn: 'root'
})
export class PestanaService {
    public contador : number = 0;
    constructor(private app: ApplicationRef, 
        private resolver: ComponentFactoryResolver, private injector: Injector){}

    public create(type : PestanaType, action : any) :  ComponentRef<PestanaComponent> {
        let componentRef : ComponentRef<PestanaComponent>;
        if(document.getElementById('pestana' + type) == null) {
            let newNode = document.createElement('div');
            newNode.id = 'pestana' +  type;
            
            let div = document.getElementsByTagName("main")[0];
            if(div != null) {
                div.appendChild(newNode);

                let factory = this.resolver.resolveComponentFactory(PestanaComponent);
                componentRef = factory.create(this.injector, [], newNode);
                this.app.attachView(componentRef.hostView);

                componentRef.instance.action = action;
                componentRef.instance.type = type;
            }
        } else {
            console.log("Ya existe una pestana de ese tipo " + type)
        }
        return componentRef;
    }

    public destroy(type : PestanaType) {
        let child = document.getElementById('pestana'+  type );
        if(child) {
            let div = document.getElementsByTagName("main")[0];
            if(div) {
                this.contador -= 1;
                div.removeChild(child);
            }
        }
    }

    public resetContador() {
        this.contador = 0;
    }
}