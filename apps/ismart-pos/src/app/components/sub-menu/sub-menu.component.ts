import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'intercam-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {

  ismart: string = '/ismart-pos';
  urlImgIndicadores: string = '../assets/menu/indicadores.png';
  urlImgBuscar: string = '../assets/menu/buscar.png';
  urlImglogout: string = '../assets/menu/salir.png';
  
  @Output() buscar_cliente = new EventEmitter<any>();
  @Output() mostrar_precios = new EventEmitter<any>();
  @Output() buscar_documento = new EventEmitter<any>();
  @Output() logout = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
    
  }

  getUrlButton(prcIcono:string){
    return prcIcono = prcIcono.replace(/[..]*/i,this.ismart);
  }
}
