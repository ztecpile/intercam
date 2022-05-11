import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'intercam-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
  
  @Output() buscar_cliente = new EventEmitter<any>();
  @Output() mostrar_precios = new EventEmitter<any>();
  @Output() logout = new EventEmitter<any>();
  
  visibleBtnSubMenu : boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem('url')){
      this.visibleBtnSubMenu = false;
    } else {
      this.visibleBtnSubMenu = true;
    }
  }
}
