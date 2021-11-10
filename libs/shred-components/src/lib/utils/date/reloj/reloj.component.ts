import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { SegundoService, valorReloj } from '../service/segundo.service';


@Component({
  selector: 'intercam-shared-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

    datos$!: Observable<valorReloj>;
    hora: number;
    minutos!: string;
    dia!: string;
    fecha!: string;
    ampm!: string;
    segundos!: string;
  
  
    constructor(
      private segundo: SegundoService
      ){ 
      console.log('Is Running');
      
    }
  
    ngOnInit() {
      console.log('Is Running');
      this.datos$=this.segundo.getInfoReloj();
      this.datos$.subscribe(x => {
        this.hora = x.hora;
        this.minutos = x.minutos;
        this.dia = x.diadesemana;
        this.fecha = x.diaymes;
        this.ampm = x.ampm;
        this.segundos = x.segundo
      });
    }
  

}
