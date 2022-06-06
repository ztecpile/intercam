
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {  TipoInversionVO, PersonaContratoVO, UsuarioVO } from '@intercam/model';
import { DialogBuscaEjecutivoComponent } from 'libs/shred-components/src/lib/dialog/dialog-busca-ejecutivo/dialog-busca-ejecutivo.component';
import { DialogBuscarClienteComponent } from 'libs/shred-components/src/lib/dialog/dialog-buscar-cliente/buscar-cliente.component';
import { ClienteService } from 'libs/shred-components/src/lib/dialog/services/clientes.service';
import { CierreBancoInversionesServices } from '../../services/cierre-banco-inversiones.services';




export class ConsultaMatrizTasasVO {
  public monto_inferior: string;
  public monto_superior: string;
  public dias: string;
}


@Component({
  selector: 'cierre-banco-inversiones',
  templateUrl: './cierre-banco-inversiones.component.html'
})

export class CierreBancoInversiones {
  displayedColumns: string[] = ['monto_inferior', 'monto_superior', '1_a_6_dias', '7_a_13_dias', '14_a_26_dias',
    '27_a_34_dias', '35_a_40_dias', '41_a_82_dias', '83_a_86_dias', '87_a_91_dias', '92_a_174_dias', '175_a_184_dias', '185_a_365_dias'];
  accion = 'Cierre Banco Inversion';
  public funcForm: FormGroup;
  dataSource = [];
  monto_superior = "";
  dias = "";
  arrTipoInversion: TipoInversionVO[] = [];
  tipo_persona: string = "";
  moneda: string = "";
  tipo_inversion: string = "";
  nombreCliente: string = "";
  saldoInicial: string = "";
  claveCliente: string = "";
  fecha:string="";
  constructor(private _cierreBancoInversiones: CierreBancoInversionesServices, private dialog: MatDialog, private _clienteService: ClienteService) {
    this.findTipoInversionVO();
    this.findFecha();

  }
  findFecha(){
    this._cierreBancoInversiones.findFechaAperturaPorSucursal().subscribe(
      then=>{
        this.fecha=then.substring(0,10);
      },
      error => console.error(error)
    );
  }

  findTipoInversionVO() {
    this._cierreBancoInversiones.findTipoInversionVO().subscribe(
      then => {
        this.arrTipoInversion = then;
      },
      error => console.error(error)
    );

  }

  findConsultaMatrizTasasVO() {
    this._cierreBancoInversiones.findConsultaMatrizTasasVO(this.tipo_persona,this.moneda,this.tipo_inversion).subscribe(
      then => {
        //this.dataSource = then;
        let dataSourc = {};
        let dataSource2=[];
        for (let item of then) {




          let rangoInferior = item["monto"].rangoInferior;
          if (dataSourc[rangoInferior] == undefined)
            dataSourc[rangoInferior] = {};
          dataSourc[rangoInferior]["rangoInferior"] = item["monto"].rangoInferior;
          dataSourc[rangoInferior]["rangoSuperior"] = item["monto"].rangoSuperior;
          dataSourc[rangoInferior]["plazoInferior" + item["plazo"].plazoInferior] = (item["tasa"].tasa)+"00";
          dataSourc[rangoInferior]["numPlazo"]=item["tasa"].numPlazo;




        }
        for (let i in dataSourc) {
          dataSource2.push(dataSourc[i]);
        }
        this.dataSource=dataSource2;
        console.log(this.dataSource);

      },
      error => console.error(error)
    );
  }

  buscaCliente() {
    const dialogRef = this.dialog.open(DialogBuscarClienteComponent, {
      disableClose: true,
      autoFocus: true
    }).afterClosed()
      .subscribe(response => {
        if (response != null) {

          this.consultarSaldo(response);
        }



      });
    ;
  }
  consultarSaldo(personaContratoVO: PersonaContratoVO) {
    console.log(personaContratoVO.nombreCorto);
    this.claveCliente = personaContratoVO.contratoId + "";
    this.nombreCliente = personaContratoVO.nombreCorto + "";
    console.log(this.nombreCliente);
    let usuarioVO = JSON.parse(sessionStorage.getItem("usuarioVO")) as UsuarioVO;
    this._clienteService.findConsultaSaldoVO(personaContratoVO.tmpCveLegada, usuarioVO.usuClave).subscribe(then => {
      this.saldoInicial = then.saldo + "";
    });
  }


  getRecord(row) {
    console.log(row);
    this.monto_superior = row.rangoSuperior;
    this.dias = row.numPlazo;
  }





}