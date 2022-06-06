import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CierreCasaBolsaService } from '../../services/cierre-casa-bolsa.service';



export class CierreCasaBolsa {
  public tipoPapel: string;
  public plazo: string;
  public efectiva1: string;
  public efectiva2: string;
  public efectiva3: string;
  public efectiva4: string;
  public efectiva5: string;
  public efectivaIlimitado: string;
}

@Component({
  selector: 'cierre-casa-bolsa',
  templateUrl: './cierre-casa-bolsa.component.html',
})

export class CierreCasaBolsaComponent {

  constructor(
    private _cierreCasaBolsaService: CierreCasaBolsaService
  ) {
    this.findTasaLuminaVO();
  }


  findTasaLuminaVO() {
    this._cierreCasaBolsaService.findTasaLuminaVO().subscribe(
      then => {
       this.dataSource=then;
      },
      error => console.error(error)
    );
  }

  displayedColumns: string[] = ['Papel', 'Plazo', 'Efectiva', 'Efectiva1', 'Efectiva2', 'Efectiva3', 'Efectiva4', 'Efectiva5'];
  //displayedColumns: string[] = ['PerId', 'Nombre', 'ApPaterno', 'ApMaterno', 'RSocial'];
  dataSource:CierreCasaBolsa[] =[] ; //new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

}