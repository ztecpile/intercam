import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContratoService } from '../../../services/contrato.service';

@Component({
  selector: 'intercam-mis-clientes',
  templateUrl: './mis-clientes.component.html',
  styleUrls: ['./mis-clientes.component.scss']
})
export class MisClientesComponent implements OnInit {

  displayedColumns: string[] = ['CON ID', 'Nombre', 'Estatus', 'CUENTA', 'PROMOTOR'];
  dataSource = new MatTableDataSource();

  usuUsuario: string;

  constructor(private contratoService: ContratoService) { 
  this.usuUsuario = sessionStorage.getItem('usuUsuario');

  console.log('Usuario: ', this.usuUsuario);
  }

  ngOnInit(): void {
    this.contratoService.findContratosByClvPro('VEN1IMTZ').subscribe(
      then => {
        // console.log(then);
        this.dataSource = new MatTableDataSource(then);
      },
        error => {
          console.error('error', error);
        }
      );
  }


}
