import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../../../../services/contrato.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CargoFuncionarioVO, PaisVO, TipoPersonaVO, BolsaVO, CategPersonaVO } from '@intercam/model';
import { DireccionService } from '../../../../services/direccion.service';
import { PersonaService } from '../../../../services/persona.service';

@Component({
  selector: 'intercam-funcionario-abc',
  templateUrl: './funcionario-abc.component.html',
  styleUrls: ['./funcionario-abc.component.scss']
})
export class FuncionarioAbcComponent implements OnInit {

  accion = 'Funcionarios';
  public funcForm: FormGroup;
  tpeSelected: string;
  fechaActual = new Date();
  arrPais: PaisVO[] = [];
  arrPaisesFiscales: PaisVO[] = [];
  arrTipoPer: TipoPersonaVO[] = [];
  arrCargos: CargoFuncionarioVO[] = [];
  arrCategoria: CategPersonaVO[] = [];

  arrTipo: any[] = [
    { id: 'CA', data: 'Consejo de Administraci\u00F3n' },
    { id: 'FU', data: 'Funcionario' },
    { id: 'AC', data: 'Accionista' }
  ];

  arrBolsa: BolsaVO[] = [
    { bolId: 1, bolNomb: 'BMV', bolDesc: 'BOLSA MEXICANA DE VALORES', bolEstatus: 'AC', paisVO: this.getPais(2) },
    { bolId: 2, bolNomb: 'NASDAQ', bolDesc: 'NATIONAL ASSOCIATION OF SECURI', bolEstatus: 'AC', paisVO: this.getPais(2) },
    { bolId: 3, bolNomb: 'NYSE', bolDesc: 'NEW YORK STOCK EXCHANGE', bolEstatus: 'AC', paisVO: this.getPais(31) },
    { bolId: 4, bolNomb: 'BVC', bolDesc: 'BOLSA DE VALORES DE CARACAS', bolEstatus: 'AC', paisVO: this.getPais(77) },
    { bolId: 5, bolNomb: 'JPX', bolDesc: 'JAPAN EXCHANGE GROUP', bolEstatus: 'AC', paisVO: this.getPais(266) },
    { bolId: 6, bolNomb: 'AMP', bolDesc: 'BOLSA DE MADRID', bolEstatus: 'AC', paisVO: this.getPais(266) },
    { bolId: 6, bolNomb: 'IGBM', bolDesc: 'BOLSA DE MADRID', bolEstatus: 'AC', paisVO: this.getPais(57) },
    { bolId: 7, bolNomb: 'SSEC', bolDesc: 'BOLSA DE SHANGAHI', bolEstatus: 'AC', paisVO: this.getPais(2) },
    { bolId: 9, bolNomb: 'GSG', bolDesc: 'CASTLE GOLD CORP', bolEstatus: 'AC', paisVO: this.getPais(2) },
    { bolId: 10, bolNomb: 'AR', bolDesc: 'ARGONAUT GOLD', bolEstatus: 'AC', paisVO: this.getPais(2) },
  ];

  constructor(private _contratoService: ContratoService,
    private _direccionService: DireccionService,
    private _personaService: PersonaService) {
      this.tpeSelected = '';
     }

  ngOnInit(): void {
    this.createFunForm();
    this.cargaCatalogos();
  }

  getPais(id: number): PaisVO {
    const pais = new PaisVO();
    pais.paiClave = id;
    return pais;
  }
  cargaCatalogos() {
    this._direccionService.findAllPaises().subscribe(
      then => {
        this.arrPais = then;
        this.arrPaisesFiscales = then.filter(pais => pais.paiFiscal);
      },
      error => console.error(error)
    )

    this._personaService.findTipoPersona().subscribe(
      then => this.arrTipoPer = then,
      error => console.error(error)
    )
  }

  createFunForm() {
    this.funcForm = new FormGroup({
      cboTipo: new FormControl('', [Validators.required]),
      cboCargo: new FormControl('', [Validators.required]),
      cboTipoPersona: new FormControl('', [Validators.required]),
      cboCatPer: new FormControl('', [Validators.required]),
      cboPais: new FormControl('', [Validators.required]),
      perRfc: new FormControl('', [Validators.required]),
    });
  } 

  createFormPerFForm():FormGroup {
    return new FormGroup({
      perNom: new FormControl('', [Validators.required]),
      apePaterno: new FormControl('', [Validators.required]),
      apeMaterno: new FormControl(''),
      curp: new FormControl(''),
      fNac: new FormControl('', Validators.required)
    });
  }

  createFormPerMForm():FormGroup {
    return new FormGroup({
      perRazonSocial: new FormControl('', [Validators.required]),
    });
  }

  getCtr(name: string, group= ''): FormControl { 
    if (group === '') return this.funcForm.get(name) as FormControl
    else return this.funcForm.controls[group].get(name) as FormControl
   }

  onSubmit() {
    console.log("Guardando...");
  }

  changeTipo(tipo: string): void {
    console.log('TipoCargo: ', tipo);
    
    if (tipo && tipo.length > 0) {
      this._personaService.findCargoFuncionario(tipo).subscribe(
        then => {
          this.arrCargos = then;
        },
        error => console.error(error)
      )
    }
  }

  changeTipoPer(tpeClave: string) {
    if (tpeClave && tpeClave.length > 0) {
      this.tpeSelected = tpeClave;
      this._personaService.findCategPersonaByTipoPersona(tpeClave).subscribe(
        then => {
          this.arrCategoria = then;
        },
        error => console.error(error)
      );

      if (tpeClave === 'F') {
        this.funcForm.removeControl('perMForm');
        this.funcForm.addControl("perFForm", this.createFormPerFForm());
      } else {
        this.funcForm.removeControl('perFForm');
        this.funcForm.addControl("perMForm", this.createFormPerMForm());
      }
    }
  }

  fechaSeleccionada(event):void {
    console.log('fecha', event);
    
  }
}
