import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdministracionCierreExcepcionService } from '../../services/admin-cierre-excepcion.service';
import { UsuarioVO, CierreExcepVO, ProfesionVO } from '@intercam/model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { SucursalVO } from 'libs/model/src/lib/com/intercam/corporativo/centrocostos/vo/SucursalVO';
@Component({
  selector: 'intercam-administracion-cierre-excepcion',
  templateUrl: './administracion-cierre-excepcion.component.html',
  styleUrls: ['./administracion-cierre-excepcion.component.scss']
})


export class AdministracionCierreExcepcionComponent implements OnInit {

  displayedColumns: string[] = ['idCce', 'perId', 'claveOperador', 'nombre', 'claveSucursal', 'habilitadoCierre'];
  dataSource = new MatTableDataSource<UsuarioVO>();
  funcForm: FormGroup;

  perId: number; //identificador de la persona 
  showBtnDes: boolean;
  showBtn: boolean;
  checksi: boolean = false;
  checkno: boolean = false;
  checked: boolean = false;
  valornombre: string = "";
  cierreExcepVO: CierreExcepVO;
  selectedAdmon: UsuarioVO;
  clave: string;
  idCce: number;
  cceCierreexcep: string;
  mensajeError: string;
  submitted: boolean = false;
  constructor(private ACEService: AdministracionCierreExcepcionService, private formBuilder: FormBuilder) {
    this.perId = Number(sessionStorage.getItem('perId'));

    console.log('perId: ', this.perId);
    this.showBtnDes = true;
    this.showBtn = false;

  }
  onSubmit() {
    this.submitted = true;
    console.log("Guardando...");
    this.funcForm.value;
  }
  filtrar(e: any) {
    console.log(e);
    return this.dataSource.filter = this.funcForm.get("busqueda").value.trim().toLowerCase();
  }

  limpiarFormulario(e: any) {
    console.log('limpiarFormulario');
    this.funcForm.get("perNom").setValue('');
    this.funcForm.get("optSi").setValue(false);
    this.funcForm.get("optNo").setValue(false);
    document.getElementById('tabla').removeAttribute('selected');
    this.atributosElemento();
    this.deshabilitarCampos();
    this.submitted = false;
  }
  getCtr(name: string, group = ''): FormControl {
    if (group === '') return this.funcForm.get(name) as FormControl
    else return this.funcForm.controls[group].get(name) as FormControl
  }
  onchange() {
    document.getElementById('save').removeAttribute('disabled');
    document.getElementById('deshacer').removeAttribute('disabled');
    document.getElementById('deshacer').setAttribute('class', 'deshacer-button btn-img');
    document.getElementById('save').setAttribute('class', 'save-button btn-img');
    this.submitted = true;
    this.funcForm.valid;
  }
  selected(element: any) {
    console.log(element);
    this.selectedAdmon = element;

    let userSelec: UsuarioVO = element;
    this.perId = userSelec.idPersona;
    this.idCce = userSelec.cierreExcep.idCce;
    this.funcForm.get('perNom').setValue(userSelec.perNomCorto);
    if (userSelec.cierreExcep.cceCierreexcep == 'Si') {
      this.checksi = true;
      this.funcForm.get('optSi').setValue(true);
      this.checkno = false;
      this.funcForm.get('optNo').setValue(false);
      this.cceCierreexcep = 'V';
    } else if (userSelec.cierreExcep.cceCierreexcep == 'No') {
      this.checkno = true;
      this.funcForm.get('optNo').setValue(true);
      this.checksi = false;
      this.funcForm.get('optSi').setValue(false);
      this.cceCierreexcep = 'F';
    } else {
      this.funcForm.get('optNo').setValue(false);
      this.checkno = false;
      this.checksi = false;
      this.funcForm.get('optSi').setValue(false);
      this.cceCierreexcep = '';
    }
    this.funcForm.get("perNom").enable();
    this.funcForm.get("optNo").enable();
    this.funcForm.get("optSi").enable();


  }
  atributosElemento() {
    document.getElementById('save').setAttribute('disabled', '');
    document.getElementById('deshacer').setAttribute('disabled', '');
    document.getElementById('deshacer').setAttribute('class', 'deshacer-button-des btn-img');
    document.getElementById('save').setAttribute('class', 'save-button-des btn-img');
  }
  updateAce(el: any): void {
    this.submitted = true;
    console.log(el);
    console.log(this.perId);
    console.log(this.clave);
    console.log(this.checksi);
    console.log(this.checkno);
    let cierreExcepVO = new CierreExcepVO;
    console.log(cierreExcepVO);
    cierreExcepVO.idCce = this.idCce;
    cierreExcepVO.perId = Number(this.perId);
    cierreExcepVO.cceUsuabre = this.clave;
    cierreExcepVO.cceUsucierra = this.clave;
    
    if (this.funcForm.get("optSi").value == true) {
      cierreExcepVO.cceCierreexcep = 'V';
    } 
    if(this.funcForm.get("optNo").value == true) {
      cierreExcepVO.cceCierreexcep = 'F';
    }
    if(this.funcForm.valid){
    this.ACEService.getActualizarOperador(cierreExcepVO).subscribe(
      then => {
        this.mostrarMensaje('Actualización Exitosa', 'info');
        this.limpiarFormulario(el);

      },
      error => {
        console.error(error);
        this.onchange();
      }
    )
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
        _this.consulta();
        _this.atributosElemento();
      }
    });
  }
  changeRadioSi(e: any) {
    console.log(e);
    this.selectedRadio('si')
    this.onchange();
    if (e) {
      this.checksi = true;
      this.funcForm.get('optSi').setValue(true);
    }
  }

  changeRadioNo(e: any) {
    console.log(e);
    this.selectedRadio('no')
    this.onchange();
    if (e) {
      this.checkno = true;
      this.funcForm.get('optNO').setValue(true);
    }
  }

  selectedRadio(id: string): void {
    if (id === 'si') {
      this.checkno = false;
      this.funcForm.get('optNO').setValue(false);
    }
    if (id === 'no') {
      this.checksi = false;
      this.funcForm.get('optSi').setValue(false);
    }
  }
  createFunForm() {
    this.funcForm = this.formBuilder.group({
      perNom: new FormControl('', [Validators.maxLength(50), Validators.pattern(/^[a-z\s]*$/i)]),
      optSi: new FormControl(false),
      optNo: new FormControl(false),
      claveOperador: new FormControl(''),
      busqueda: new FormControl('')
    });
  }

  consulta() {
    const listaResponse: UsuarioVO[] = [];
    this.ACEService.findAdministracionCierreExcepcion().subscribe(
      then => {
        for (let data of then) {
          const datos: UsuarioVO = new UsuarioVO;
          const datosCierre: CierreExcepVO = new CierreExcepVO;
          const datosSucursalVo: SucursalVO = new SucursalVO;

          datosCierre.idCce = data.cierreExcep.idCce
          datos.cierreExcep = datosCierre;
          datos.idPersona = data.idPersona;
          datos.perEmpleadoUsuario = data.perEmpleadoUsuario;
          datos.perNomCorto = data.perNomCorto;
          datosSucursalVo.sucSica = data.sucursalVO.sucSica;
          datos.sucursalVO = datosSucursalVo;

          if (data.cierreExcep.cceCierreexcep == 'V') {
            datos.cierreExcep.cceCierreexcep = 'Si'
          } else {
            datos.cierreExcep.cceCierreexcep = 'No'
          }
          listaResponse.push(datos);
        }
        this.dataSource = new MatTableDataSource(listaResponse);
      },
      error => {
        console.error('error', error);
      }
    );
  }
 deshabilitarCampos(){
  this.funcForm.get("perNom").disable();
  this.funcForm.get("optNo").disable();
  this.funcForm.get("optSi").disable();
 }
  ngOnInit(): void {

    this.createFunForm();
    this.deshabilitarCampos();
    this.consulta();
    this.atributosElemento();
  }

}
