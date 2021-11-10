import { Component, OnInit, ViewChild } from '@angular/core';
import { initParameter } from 'apps/ismart-pos/src/assets/js/init';
import { AuthService } from '../../core/services/auth.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'intercam-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.scss'],
  providers: [AuthService]
})
export class ContenedorComponent implements OnInit {

  @ViewChild(MenuComponent) menu;

  constructor() {
    
  }

  ngOnInit(): void {
    //console.log('Cargando session...');
    //initParameter();
    
    //this._authService.getUsuarioSession();
  }

  buscarCliente(e:any){
    this.menu.showGetPerson();
  }

  mostrarPrecios(e:any){
    this.menu.showGetPrecios();
  }
  
  logout(e:any){
    this.menu.logout();
  }
}
