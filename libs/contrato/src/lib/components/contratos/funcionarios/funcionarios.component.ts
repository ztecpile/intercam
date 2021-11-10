import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ContratoService } from '../../../services/contrato.service';

@Component({
  selector: 'intercam-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})


export class FuncionariosComponent implements OnInit {

  displayedColumns: string[] = ['PerId','Nombre','ApPaterno','ApMaterno','RSocial'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  perId : string; //clave de persona 

    constructor(private contratoService: ContratoService) { 
  this.perId = sessionStorage.getItem('perId');

    console.log('perId: ', this.perId);
  }

  ngOnInit(): void {
      this.contratoService.findFuncionarios(this.perId).subscribe(
      then => {
        // console.log(then);
        this.dataSource = new MatTableDataSource(then);
        this.dataSource.paginator = this.paginator;
      },
        error => {
          console.error('error', error);
        }
      );
  }


}