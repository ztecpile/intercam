import { OverlayRef } from '@angular/cdk/overlay';
import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'idb-lightboxConf',
  templateUrl: './lightboxConf.component.html',
  styleUrls: ['./lightboxConf.component.css'],
  
})
export class LightboxConfComponent implements OnInit {
  overlayRef: OverlayRef;
  @Input() ruta: string = "";
  @Input() rutaCancelar: string = "";
  @Input() etiquetaAMostrar: string = "";
  @Output() close = new EventEmitter<boolean>();
  
  constructor(
    private router: Router,
    ) {
  }

  ngOnInit(): void {
    console.log("llega al componente lightboxConf");
    console.log("llega" + this.ruta);
    

  }

  refuse() {
    console.log("refuse");
    this.overlayRef.detach();
    if (this.rutaCancelar !== '') {
    this.router.navigate( [this.rutaCancelar] )
    .catch(this.handleError);
    }
    this.close.emit(false);
  }

  acept() {
    console.log("acept");
    this.overlayRef.detach();
    this.router.navigate( [this.ruta] )
    .catch(this.handleError);
    this.close.emit(true);
  }
  private handleError (error: Response|any) {
//    console.log ("ERROR->", error)
    if (error.status == 401) {
      this.router.navigate(['/path_to_login_page']);
      return error.status;
    }
    this.close.emit(true);
  }
  
}
