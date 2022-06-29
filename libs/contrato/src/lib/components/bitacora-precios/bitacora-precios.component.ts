import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BitacoraPreciosService } from '../../services/bitacora-precios.service';
import { MatTableModule } from '@angular/material/table'
import { InstrumentoVO, MapeoDivisa, MesasOperacionVO, TipoCambioBitacoraVO, UsuarioVO } from '@intercam/model';
import { FormControl, FormGroup } from '@angular/forms';
import { ConsultaInfoGralEvent } from '../../util/ConsultaInfoGralEvent';
import Swal from 'sweetalert2';


export class bp {
  posicion: number;
  instrumento: string;
  compra: string;
  venta: string;
  compra1: string;
  venta1: string;
  compra2: string;
  venta2: string;
  compra3: string;
  venta3: string;
  compra4: string;
  venta4: string;
}

export class listPromotor {
  promotor: string;
  sucursal: string;
  mesa: number
}

const ELEMENT_DATA: bp[] = [
  { posicion: 1, instrumento: 'TRANSFER', compra: '0.000000', venta: '0.000000', compra1:' 0.000000', venta1: '0.000000', compra2: '0.000000', venta2: '0.000000', compra3: '0.000000', venta3: '0.000000', compra4: '0.000000', venta4: '0.000000' },
  { posicion: 2, instrumento: 'EFECTIVO', compra: '0.000000', venta:'0.000000', compra1: '0.000000', venta1: '0.000000', compra2: '0.000000', venta2: '0.000000', compra3: '0.000000', venta3: '0.000000', compra4: '0.000000', venta4: '0.000000' },
  { posicion: 3, instrumento: 'MEX', compra: '0.000000', venta: '0.000000', compra1: '0.000000', venta1: '0.000000', compra2: '0.000000', venta2: '0.000000', compra3: '0.000000', venta3: '0.000000', compra4: '0.000000', venta4: '0.000000' },
  { posicion: 4, instrumento: 'CASH BACK', compra: '0.000000', venta: '0.000000', compra1: '0.000000', venta1: '0.000000', compra2: '0.000000', venta2: '0.000000', compra3: '0.000000', venta3: '0.000000', compra4: '0.000000', venta4: '0.000000' },
  { posicion: 5, instrumento: 'REMESA', compra: '0.000000', venta: '0.000000', compra1: '0.000000', venta1: '0.000000', compra2: '0.000000', venta2: '0.000000', compra3: '0.000000', venta3: '0.000000', compra4: '0.000000', venta4: '0.000000' },
  { posicion: 6, instrumento: 'CHEQUE', compra: '0.000000', venta: '0.000000', compra1: '0.000000', venta1: '0.000000', compra2: '0.000000', venta2: '0.000000', compra3: '0.000000', venta3: '0.000000', compra4: '0.000000', venta4: '0.000000' },
  { posicion: 7, instrumento: 'TARJETA', compra: '0.000000', venta: '0.000000', compra1: '0.000000', venta1: '0.000000', compra2: '0.000000', venta2: '0.000000', compra3: '0.000000', venta3: '0.000000', compra4: '0.000000', venta4: '0.000000' },
];


@Component({
  selector: 'intercam-bitacora-precios',
  templateUrl: './bitacora-precios.component.html',
})
export class BitacoraPreciosComponent implements OnInit {

  displayedColumns: string[] = ['instrumento', 'compra', 'venta', 'compra2', 'venta2', 'compra3', 'venta3', 'compra4', 'venta4', 'compra5', 'venta5'];
  dataSource = new MatTableDataSource<bp>();
  // dataSource = ELEMENT_DATA;  

  perId: string; //clave de operador 
  promotor: string;
  sucursal: string;
  mesaselect: string;
  dataDivisas: MapeoDivisa[];
  dataCatMesas: MesasOperacionVO[];
  listInst: InstrumentoVO[];
  funcForm: FormGroup;
  cboMesaDisabled: boolean;
  dir: string = 'ini';
  campoHora: any;
  splitHora: any;
  hora: any;
  min: any;
  seg: any;
  usuarioVO: UsuarioVO;
  fechaActual = new Date();
  horaActual: string;
  paginador: boolean;
  listpromo: listPromotor[] = []
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private bPService: BitacoraPreciosService) {
    this.perId = sessionStorage.getItem('perId');
    this.usuarioVO = JSON.parse(sessionStorage.getItem("usuarioVO")) as UsuarioVO;
    console.log(this.usuarioVO);
    for (const clavesLegadas of this.usuarioVO.clavesLegadas) {
      if (clavesLegadas.tconId == 5) {
        let list = new listPromotor;
        console.log(clavesLegadas.tconId, clavesLegadas.idVO.clvPro, clavesLegadas.idVO.clvSuc);
        list.promotor = clavesLegadas.idVO.clvPro;
        list.sucursal = clavesLegadas.idVO.clvSuc;
        list.mesa = Number(clavesLegadas.clvMesa);
        this.listpromo.push(list);
      }
    }
    console.log(this.listpromo);
    this.cboMesaDisabled = true;

  }


  ngOnInit(): void {
    this.createFunForm();

    if (this.listpromo.length == 0) {
      this.mostrarMensaje('El promotor no tiene clave legada para este negocio', 'error');
    }
    if (this.listpromo.length != 0) {
      this.obtenerListInstumento();
      this.obtenerPerfil(this.listpromo[0].promotor, this.listpromo[0].sucursal);
      this.obtenerCatalogMesa();
      this.obtenerDivisas();

      this.mesaselect = String(this.listpromo[0].mesa);
      this.funcForm.get('cboMesa').setValue(this.mesaselect);
      this.funcForm.get('cboDivisa').setValue('USD');
      this.obtenerFecha();

      this.funcForm.get('fecha').setValue(this.fechaActual);
      this.funcForm.get('hora').setValue(this.horaActual);
      setTimeout(() => {
        this.obtenerBitacora();
      }, 5500);

    }

  }


  mostrarMensaje(mensaje: string, tipoMensaje: any) {
    const _this = this;
    Swal.fire({
      confirmButtonText: 'Aceptar',
      buttonsStyling: false,
      customClass: {
        title: 'sweet-title',
        confirmButton: 'button button1',
        denyButton: 'button button1',
        popup: 'sweet-modal',
        container: '',
      },
      icon: tipoMensaje,
      showCloseButton: true,
      showConfirmButton: true,
      text: mensaje,
      background: 'linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6))'
    }).then(function (result) {
      if (result.isConfirmed) {
      }
    });
  }
  getCtr(name: string, group = ''): FormControl {
    if (group === '') return this.funcForm.get(name) as FormControl
    else return this.funcForm.controls[group].get(name) as FormControl
  }
  createFunForm() {

    this.funcForm = new FormGroup({
      cboMesa: new FormControl(''),
      cboDivisa: new FormControl(''),
      fecha: new FormControl(''),
      hora: new FormControl('')

    });
  }
  obtenerFecha() {
    this.bPService.getFechaActual().subscribe(
      then => {
        console.log(then);
        const splitfechaActual = then.split(' ');
        this.fechaActual = new Date(splitfechaActual[0]);
        this.horaActual = splitfechaActual[1];
        this.funcForm.get('hora').setValue(this.horaActual);
      },
      error => {
        console.log('error', error);
      }
    )
  }

  obtenerDivisas() {
    this.bPService.getDivisas().subscribe(
      then => {
        console.log(then);
        this.dataDivisas = then;
      },
      error => {
        console.log('error', error);
      }

    )
  }

  obtenerCatalogMesa() {
    this.bPService.getCatalogoMesas().subscribe(
      then => {
        console.log(then);
        this.dataCatMesas = then;
      },
      error => {
        console.log('error', error);
      }
    )
  }

  obtenerPerfil(clvPro: string, clvSuc: string) {
    this.bPService.getPerfilUsuario(clvPro, clvSuc).subscribe(
      then => {
        console.log(then);
        if (then = '1') {
          this.cboMesaDisabled = false;
          this.funcForm.get('cboMesa').enable();
        }
      },
      error => {
        console.log('error', error);
      }
    )
  }

  obtenerListInstumento() {
    this.bPService.getListInstrumentos().subscribe(
      then => {
        console.log(then);
        const listInst: InstrumentoVO[] = [];
        for (const data of then) {
          let inst = new InstrumentoVO;
          if (data.insId != 7 && data.insId != 8 && data.insId != 9) {
            inst.conSelected = data.conSelected;
            inst.insConfigura = data.insConfigura;
            inst.insDescripcion = data.insDescripcion;
            inst.insEstatus = data.insEstatus;
            inst.insId = data.insId;
            inst.insNombre = data.insNombre;
            inst.insOrden = data.insOrden;
            listInst.push(inst);

          }
        }
        this.listInst = listInst;
        console.log(this.listInst);
      },
      error => {
        console.log('error', error);
      }
    )
  }



  obtenerBitacora() {
    this.separarHora();
    const fecha = new Date(this.funcForm.get('fecha').value);
    
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getUTCDate();
    const anio = fecha.getFullYear();
    const body = {
      "clvMesa": this.funcForm.get('cboMesa').value,
      "divId": this.funcForm.get('cboDivisa').value,
      "fecha": String(dia+'/'+mes+'/'+anio),
      "horas": [this.hora, this.min, this.seg],
      "dir": this.dir,
      "baseDir": "ini"

    }
    console.log(body);
    this.bPService.getBitacora(body).subscribe(
      then => {
        console.log(then);
        const dataPro: bp[] = [];
        for (const data of then) {
          let mattab = new bp;
          for (const inst of this.listInst) {
            if (data.insId == inst.insId) {
              mattab.instrumento = inst.insNombre;
            }
          }
          mattab.compra = String(data.tcCompra);
          mattab.venta = String(data.tcVenta);
          mattab.compra1 = '0.000000';
          mattab.venta1 = '0.000000';
          mattab.compra2 = '0.000000';
          mattab.venta2 = '0.000000';
          mattab.compra3 = '0.000000';
          mattab.venta3 = '0.000000';
          mattab.compra4 = '0.000000';
          mattab.venta4 = '0.000000';

          dataPro.push(mattab);
        }
        this.dataSource = new MatTableDataSource(dataPro);
        this.paginador = true;
        this.dataSource.paginator = this.paginator;

        document.getElementById('paginadorDiv').removeAttribute('hidden');

      },
      error => {
        console.log('error', error);
      }
    )
  }

  regSig() {
    this.separarHora();
    console.log(this.seg, ',', this.min, ',', this.hora);
    this.dir = 'sig'
    if (this.seg == '59') {
      this.seg = '0';
      if (this.min == '59') {
        this.min = '0';
        if (this.hora == '00') {
          this.hora = '1';
        } else {
          this.hora = Number(this.hora) + 1;
        }
      } else {
        this.min = Number(this.min) + 1;
      }
    } else {
      this.seg = Number(this.seg) + 1;
    }

    this.funcForm.get('hora').setValue(this.hora + ':' + this.min + ':' + this.seg);
    this.obtenerBitacora();


  }

  regAnt() {
    this.separarHora();
    this.dir = 'back'
    if (this.seg == '59') {
      this.seg = '0';
      if (this.min == '59') {
        this.min = '0';
        if (this.hora == '00') {
          this.hora = '1';
        } else {
          this.hora = Number(this.hora) - 1;
        }
      } else {
        this.min = Number(this.min) - 1;
      }
    } else {
      this.seg = Number(this.seg) - 1;
    }
    this.funcForm.get('hora').setValue(this.hora + ':' + this.min + ':' + this.seg);
    this.obtenerBitacora();
  }

  separarHora() {
    this.campoHora = this.funcForm.get('hora').value;
    console.log(this.campoHora);
    this.splitHora = this.campoHora.split(':');
    this.hora = this.splitHora[0];
    this.min = this.splitHora[1];
    this.seg = this.splitHora[2];
  }

}