import { IfStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PestanaService } from './pestana.service';
import Pestanas from './pestanas';

@Component({
  selector: 'idbPestana',
  templateUrl: './pestana.component.html',
  styleUrls: ['./pestana.component.css']
})
export class PestanaComponent implements OnInit {
  private  base : number = 120;
  private  incrementos : number = 120;
  @Input() registro : string;
  _top : string;
  @ViewChild("element") element : ElementRef;

  button : boolean = false;
  _action : any;
  data : [];
  
  @Input() set action(value : any) {
    this._action = value;
    if(typeof(value) == "function") {
      this.button = true;
    } else {
      value.subscribe(mensaje => {
        if(mensaje !=  "FINISH") {
          this.registro = JSON.parse(mensaje).registro;
        }
      });
    } 
  }
  @Input() set type (value : string) {
    this.data = Pestanas[value];
    let contador : number = 0;
    if(this.data['top_type'] == 1) {
      this.data['pestana_contador'] = this.pestanaService.contador;
      this.pestanaService.contador += 1;
      contador = this.data['pestana_contador'];
    } else if(this.data['top_type'] == 2) {
      let tmp = Pestanas[this.data['top_pestana']];
      let numeroPestana = tmp['pestana_contador'];
      contador = numeroPestana;
    }
    let tmp = this.base + (contador * this.incrementos);
    this._top = tmp + "px";
  }

  constructor(private pestanaService : PestanaService, private router: Router) { }

  ngOnInit(): void {
  }

  expand() {
    this.element.nativeElement.classList.toggle("recorrer")
  }

  execute() {
    this._action();
  }

}
