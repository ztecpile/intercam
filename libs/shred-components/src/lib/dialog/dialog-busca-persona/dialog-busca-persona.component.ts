import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { ChTiposVO, PersonaContratoVO, TipoContratoVO, UsuarioVO } from '@intercam/model';
import { CatContratoService } from '../services/cat-contrato.service';
import { CatPersonaService } from '../services/cat-persona.service';
import { PersonaContService } from '../services/persona-cont.service';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'intercam-dialog-busca-persona',
  templateUrl: './dialog-busca-persona.component.html',
  styleUrls: ['./dialog-busca-persona.component.scss']
})
export class DialogBuscaPersonaComponent implements OnInit {

  funcForm: FormGroup;

  displayedColumnsPer: string[] = [
    'contratoId',
    'tmpCveLegada',
    'perId',
    'nombreCorto',
    'descripcionTipocontrato',
    'desEjecutivo',
    'statusContratoDescripcion',
    'tpeClave',
    'tipoCuenta',
    'tipoPerfil'
  ];

  usuarioVO : UsuarioVO;

  tconId : number;

  dataSourceConcidencia: MatTableDataSource<PersonaContratoVO> = new MatTableDataSource();

  personaId : Number;

  clvPromotor : String = null;

  arrPersonaCont: PersonaContratoVO [] = [];
  arrTipoContratoIni: TipoContratoVO [] = [];
  hmPerfiles:Object;
  arrTipoCuentas: any []=[];
  selectItem: PersonaContratoVO;

  personaContratoVOLocal : PersonaContratoVO = new PersonaContratoVO();
  
  selectOptIdContrato: boolean = false;
  selectOptNombreRazon: boolean = false;
  selectOptRfc: boolean = false;
  selectOptIdCliente: boolean = false;

  constructor(private _personaContService:PersonaContService,
    private _personaService:PersonaService,
    private _catPersonaService:CatPersonaService,
    private _catContratoService:CatContratoService,
    public dialogRef: MatDialogRef<DialogBuscaPersonaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.cargaCatalogos();

      if(data){
        this.usuarioVO = this.data['usuarioVO'];
        this.tconId = this.data['tconId'];
      }
  }
  
  ngOnInit(): void {
    this.createFunForm();
  }

  async cargaCatalogos() {
    this.arrTipoContratoIni = await this._catContratoService.findTipoContrato().toPromise();
      const tipoNeg : TipoContratoVO = new TipoContratoVO;
      tipoNeg.tconId = 0;
      tipoNeg.tconDescripcion = 'POS';
      this.arrTipoContratoIni.unshift(tipoNeg);

      this.arrTipoCuentas = await this._catPersonaService.getAllTiposCuenta().toPromise();

      this.hmPerfiles = await this._personaService.findPerfiles().toPromise();
  }

  createFunForm(){
    this.funcForm = new FormGroup({
      optIdContrato: new FormControl(''),
      numContrato: new FormControl('', this.validatorInputNumber()),
      cboTipoContratoIni: new FormControl({value: !isNaN(this.tconId) && this.tconId > 0 ? this.tconId:0, disabled:!isNaN(this.tconId) && this.tconId > 0 ? true:false}),
      optNombreRazon: new FormControl(''),
      nombreRazon: new FormControl(''),
      optRfc: new FormControl(''),
      rfc: new FormControl(''),
      optIdCliente: new FormControl(''),
      idCliente: new FormControl('', this.validatorInputNumber())
    });
  }
  
  validatorInputNumber(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean} | null => {
      let value = control.value;
      let number = new RegExp("^([0-9])*$");

      if (!number.test(value)) {
        return { 'soloNumeros': true };
      }
      return null;
    };
  }

  getCtr(name: string, group= ''): FormControl { 
    if (group === '') return this.funcForm.get(name) as FormControl
    else return this.funcForm.controls[group].get(name) as FormControl
  }

  colorByTipo(tipo:Number){
    if(tipo == 1){
        return '#669900 !important';
    }
    else if(tipo == 2){
        return '#3399CC !important';
    }
    else if(tipo == 3){
        return '#FF9900 !important';
    }
    return 0;
  }

  getDescripcionUnica(item : PersonaContratoVO) : String{
    var tipDescri: String = "N/A";
    var tipoMonedaSibamex: String = "";
    var cuentaId: String = item.tipoCuenta ==null? "": item.tipoCuenta;
    var tipoMon: String = item.tipoMoneda ==null? "": item.tipoMoneda;
    
    if(tipoMon == "MN"){
      tipoMonedaSibamex ="01";
    }
    if(tipoMon == "USD"){
      tipoMonedaSibamex ="02";
    }
    if(tipoMon == "EUR"){
      tipoMonedaSibamex ="28";
    }

    this.arrTipoCuentas.forEach(tipoCuenta => {
      if(cuentaId ==  tipoCuenta.tipNumero && tipoMonedaSibamex == tipoCuenta.tipMoneda){
        tipDescri = tipoCuenta.tipDescri;
      }
    });
    
    return tipDescri;
  }
  
  tipoPerfil(item : PersonaContratoVO) : String {
    return 	this.hmPerfiles[item.perfil];
  }

  changeRadioOptIdContrato(event) {
    this.selectedRadio('numContrato');
    if(event){
      this.selectOptIdContrato = true;
    } else {
      this.selectOptIdContrato = false;
    }
  }

  textIdContratoInput(numContrato: string){
    this.selectedRadio('numContrato');
    this.limpiaText('numContrato');
    if(numContrato.length > 0){
      this.selectOptIdContrato = true;
      this.funcForm.get('numContrato').setValidators(this.validatorLogInputNumber());
      this.funcForm.get('numContrato').updateValueAndValidity();
    } else {
      this.selectOptIdContrato = false;
      this.funcForm.get('numContrato').clearValidators();
      this.funcForm.get('numContrato').updateValueAndValidity();
    }
  }

  changeRadioOptNombreRazon(event) {
    this.selectedRadio('nombreRazon');
    if(event){
      this.selectOptNombreRazon = true;
    } else {
      this.selectOptNombreRazon = false;
    }
  }

  textNombreRazonInput(nombreRazon: string){
    this.selectedRadio('nombreRazon');
    this.limpiaText('nombreRazon');
    if(nombreRazon.length > 0){
      this.selectOptNombreRazon = true;
      this.funcForm.get('nombreRazon').setValidators(this.validatorLogInputText());
      this.funcForm.get('nombreRazon').updateValueAndValidity();
    } else {
      this.selectOptNombreRazon = false;
      this.funcForm.get('nombreRazon').clearValidators();
      this.funcForm.get('nombreRazon').updateValueAndValidity();
    }
  }

  changeRadioOptRfc(event) {
    this.selectedRadio('rfc');
    if(event){
      this.selectOptRfc = true;
    } else {
      this.selectOptRfc = false;
    }
  }

  textRfcInput(rfc: string){
    this.selectedRadio('rfc');
    this.limpiaText('rfc');
    if(rfc.length > 0){
      this.selectOptRfc = true;
      this.funcForm.get('rfc').setValidators(this.validatorLogInputText());
      this.funcForm.get('rfc').updateValueAndValidity();
    } else {
      this.selectOptRfc = false;
      this.funcForm.get('rfc').setValidators(this.validatorLogInputText());
      this.funcForm.get('rfc').updateValueAndValidity();
    }
  }

  changeRadioOptIdCliente(event) {
    this.selectedRadio('idCliente');
    if(event){
      this.selectOptIdCliente = true;
    } else {
      this.selectOptIdCliente = false;
    }
  }

  textIdClienteInput(idCliente: string){
    this.selectedRadio('idCliente');
    this.limpiaText('idCliente');
    if(idCliente.length > 0){
      this.selectOptIdCliente = true;
      this.funcForm.get('idCliente').setValidators(this.validatorLogInputText());
      this.funcForm.get('idCliente').updateValueAndValidity();
    } else {
      this.selectOptIdCliente = false;
      this.funcForm.get('idCliente').setValidators(this.validatorLogInputText());
      this.funcForm.get('idCliente').updateValueAndValidity();
    }
  }

  validatorLogInputNumber():ValidatorFn{
    return(control: AbstractControl): { [key:string]: boolean} | null => {
      let value = control.value;
      if(value != undefined && value.length < 3){
        return {'requiereMinimoTresNumeros' : true};
      }
      return null 
    };
  }

  validatorLogInputText():ValidatorFn{
    return(control: AbstractControl): { [key:string]: boolean} | null => {
      let value = control.value;
      if(value != undefined && value.length < 3){
        return {'requiereMinimoTresLetras' : true};
      }
      return null 
    };
  }

  selectedRadio(id:string): void{
    if(id === 'numContrato'){
      this.selectOptNombreRazon = false;
      this.selectOptRfc = false;
      this.selectOptIdCliente = false;
    }
    if(id === 'nombreRazon'){
      this.selectOptIdContrato = false;
      this.selectOptRfc = false;
      this.selectOptIdCliente = false;
    }
    if(id === 'rfc'){
      this.selectOptIdContrato = false;
      this.selectOptNombreRazon = false;
      this.selectOptIdCliente = false;
    }
    if(id === 'idCliente'){
      this.selectOptIdContrato = false;
      this.selectOptNombreRazon = false;
      this.selectOptRfc = false;
    }
  }

  /**
	* Limpia las cajas de texto para iniciar la captura de la busqueda
	*/
  limpiaText(id:string) : void {
    if(id != 'numContrato' && this.funcForm.get('numContrato').value.trim() != ''){
      this.funcForm.get('numContrato').setValue('');
    }
    if(id != 'nombreRazon' && this.funcForm.get('nombreRazon').value.trim() != ''){
      this.funcForm.get('nombreRazon').setValue('');
    }
    if(id != 'rfc' && this.funcForm.get('rfc').value.trim() != ''){
      this.funcForm.get('rfc').setValue('');
    }
    if(id != 'idCliente' && this.funcForm.get('idCliente').value.trim() != ''){
      this.funcForm.get('idCliente').setValue('');
    }
  }

  enterSubmit(event: Event) : void {
    if(event) {
      this.clkBuscaPersona();
    }
  }

  /**
	* Ejecuta la consulta de busqueda de objetos <code>PersonaContrato</code>, dependiendo de los
	* criterios elegidos validando primero si los parametros proporcionados son correctos mediante los validators
	*
	* @param event Evento del mouse al ejecutar la consulta
	*/
  clkBuscaPersona() : void {
		var filtroProspecto:PersonaContratoVO;
		var criteriosValidos : Boolean = false;
		var estatusAdv : Number;
    var fillParameters: any[]=[];
		// Se inicializa, debido a que cuando se tiene la combinacion: Avanzada y solo seleccionados los radios
		//    de Contrato o RFC, no lleva valor (NaN) y en el assembler recupera este parametro levantando una
		//    excepcion de tipo ClassCastException.
		// Esto se acordo con Fredy, para que se resolviera el bug sin impactar en los tiempos
		var tipoProceso : Number = 0;
		var tipoContratoAdv : Number;
		var tipoContrato : Number;
		var grupoDiaAdv : Number = -999;
				
		tipoContrato = Number(this.funcForm.get('cboTipoContratoIni').value);
		
    // NUM CONTRATO
    if(this.selectOptIdContrato){
      if(this.validaNumContrato()){
        criteriosValidos = true;
				tipoProceso = 1;
      }
    }
		// RAZON SOCIAL
		else if(this.selectOptNombreRazon) {
			if(this.validaNombreRazon()){
				criteriosValidos = true;
				tipoProceso = 2;
			}
		}
    // CLID ID
    else if(this.selectOptIdCliente){
      if(this.validaOptIdCliente()){
        criteriosValidos = true;
				tipoProceso = 3;
      }
    }
    // RFC
    else if(this.selectOptRfc){
      if(this.validaOptRfc()){
        criteriosValidos = true;
				tipoProceso = 4;
      }
    }
		//search
		if(criteriosValidos){
      fillParameters.push(tipoProceso);
      fillParameters.push(this.personaId);
      fillParameters.push(this.funcForm.get('nombreRazon').value.toUpperCase());
      fillParameters.push(this.funcForm.get('rfc').value.toUpperCase());
      fillParameters.push(Number(this.funcForm.get('idCliente').value.toUpperCase()));
      fillParameters.push(tipoContrato);
      fillParameters.push(estatusAdv);
      fillParameters.push(grupoDiaAdv);
      fillParameters.push(Number(this.funcForm.get('numContrato').value));
      fillParameters.push(this.funcForm.get('numContrato').value);
      fillParameters.push(tipoContratoAdv);
      fillParameters.push(this.clvPromotor);

      this._personaContService.fill(fillParameters).subscribe(
        then => {
          this.arrPersonaCont = then;
  
          this.dataSourceConcidencia = new MatTableDataSource(this.arrPersonaCont);
        },
        error => console.error(error)
      );
		}
	}

  validaNumContrato():Boolean{
    if(this.funcForm.get('numContrato').value.length < 3){
      return false;
    }
    return true;
  }

  validaOptIdCliente():Boolean{
    if(this.funcForm.get('idCliente').value.length < 3){
      return false;
    }
    return true;
  }

  validaOptRfc():Boolean{
    if(this.funcForm.get('rfc').value.length < 3){
      return false;
    }
    return true;
  }

  validaNombreRazon():Boolean{
    if(this.funcForm.get('nombreRazon').value.length < 3){
      return false;
    }
    return true;
  }

  close(){
    this.dialogRef.close();
  }

  selectedItem(item:PersonaContratoVO){
    this.selectItem = item;
  }

  dblclickItem(item:PersonaContratoVO){
    this.selectItem = item;
    this.envia();
  }

  envia(){
    if(this.selectItem != undefined || this.selectItem != null){
      this.dialogRef.close({data: this.selectItem});
    }
  }
}
