import { AfterContentInit, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Const, DireccionVO, PersonaFisicaVO, ProspeccionUtil, UsuarioContratoVO, UsuarioVO } from '@intercam/model';
import { PersonaService } from '../../../services/persona.service';

@Component({
  selector: 'intercam-dialog-busqueda-coincidencias',
  templateUrl: './dialog-busqueda-coincidencias.component.html',
  styleUrls: ['./dialog-busqueda-coincidencias.component.scss']
})
export class DialogBusquedaCoincidenciasComponent implements AfterContentInit {

  usuarioVO : UsuarioVO;

  arrCoincidencias: Array<PersonaFisicaVO>;
  
  dataSourceConcidencia: MatTableDataSource<PersonaFisicaVO> = new MatTableDataSource();

  dataSourceContratos: MatTableDataSource<UsuarioContratoVO> = new MatTableDataSource();
  
  displayedColumnsPer: string[] = [
    'perId',
    'perNomCorto',
    'pefFNacimientoStr',
    'perRfc',
    'perEstatus',
  ];
  
  displayedColumnsCtros: string[] = [
    'contrato'
  ];

  coincidencia = Const.coincidenciaColor1 + '\n' + Const.coincidenciaColor2 + '\n' + Const.coincidenciaColor3;

  /**
  * Nombre de la persona a buscar, formado con el nombre, apellido paterno y materno utilizados en la 
  * busqueda. Simula el perNomCorto que tendria la persona a buscar.
  */
  _nombreCorto : String;

  valor: String;
  nombre: String;
  paterno: String;
  materno: String;
  tipo: String;
  perId: Number;

  estatusBntAlta: Boolean = true;

  /**
  * La lista de permisos sobre el usuario.
  */
  _permisos : String[] = [Const.GRUPO_CONTROL_INTERCAM];

  /**
  * valor que indica si el boton de alta estara habilitado, 
	* si existe algun registro color naranja en el grid el valor es true solo para control,
	* si existe algun registro color rojo en el grid el valor es false para todos,
	* negro habilitado para todos
	*/
  enableBtnAltaPromo:Boolean = true;
  enableBtnAltaControl:Boolean = false;
  
  arrContratos: UsuarioContratoVO[];

  contratoSel: UsuarioContratoVO;

  constructor(
    private _personaService: PersonaService,
    public dialogRef: MatDialogRef<DialogBusquedaCoincidenciasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
    
    if(data){
      this.usuarioVO = this.data['usuarioVO'];
      this.valor = this.data['valor'];
      this.tipo = this.data['tipo'];
      this.nombre = this.data['nombre'];
      this.paterno = this.data['apPaterno'];
      this.materno = this.data['apMaterno'];
      this.perId = -1;

      this.nombreDataField();
      this.buscarCoincidencias();
    }
  }

  ngAfterContentInit(): void {
    if(this.enableBtnAltaPromo){
      this.estatusBntAlta = true;
    } else if(this.enableBtnAltaControl && this.usuarioVO.hasGrupo([Const.GRUPO_CONTROL_INTERCAM])){
      this.estatusBntAlta = true;
    }
  }

  buscarCoincidencias () : void {
    this._nombreCorto = ProspeccionUtil.buildPerNomCorto(this.paterno, this.materno, this.nombre);
    
    this._personaService.findCoincidencias(this.nombre,this.paterno,this.tipo,this.valor).subscribe(
      then => {
        this.arrCoincidencias = then;

        let esLongitud : Boolean = this.tipo === Const.RFC ? this.valor.length == 13 : true;
        if(!this.arrCoincidencias || this.arrCoincidencias.length == 0){
          this.estatusBntAlta = true;
          this.enviarResultado(false);
          return;
        } else {
          var i = 0;
          var persona = new PersonaFisicaVO;
          while (this.estatusBntAlta && i < this.arrCoincidencias.length) {
            persona = Object.assign(PersonaFisicaVO, this.arrCoincidencias[i]);
            if (persona.perId == this.perId) {
              this.arrCoincidencias.splice(i,1);
            } else if (esLongitud && (persona.perRfc === this.valor || 
              persona.pefNss === this.valor || persona.pefNoFm3 === this.valor)) {
              this.estatusBntAlta = false;
              this.arrCoincidencias.splice(0,0,this.arrCoincidencias.splice(i,1)[0]);
              if (this.usuarioVO == null) {
                  this.enviarResultado(true, persona.perId);
              }
            } else if ((persona.perRfc != null && persona.perRfc.substring(0, 10) === this.valor.substring(0, 10)) 
              || (persona.pefNss != null && persona.pefNss.substring(0, 10) === this.valor.substring(0, 10)) || 
              (persona.pefNoFm3 != null && persona.pefNoFm3.substring(0, 10) === this.valor.substring(0, 10))) {
              this.arrCoincidencias.splice(0,0,this.arrCoincidencias.splice(i,1)[0]);
              this.estatusBntAlta = this._nombreCorto === persona.perNomCorto && this.usuarioVO? 
                  ProspeccionUtil.isInGrupoPermisos(this._permisos.toString(), this.usuarioVO.gruposVO) : true;
            }
            i++;
          }
        }

        this.dataSourceConcidencia = new MatTableDataSource(this.arrCoincidencias);
      },
      error => console.error(error)
    );
  }
  
  chooseColor(item: PersonaFisicaVO) {
    let color:String;
    let esLongitud : Boolean = this.tipo === Const.RFC ? this.valor.length == 13: true;
    if (esLongitud && (item.perRfc === this.valor || item.pefNss === this.valor || item.pefNoFm3 === this.valor)) {
      this.enableBtnAltaPromo = false;
      this.enableBtnAltaControl = false;
      color = '#FF0000 !important';
    } else if (this.tipo === Const.RFC && item.perRfc && item.perRfc.substring(0, 10) == this.valor.substring(0, 10)){
      let c : String = item.perNomCorto.trim() == this._nombreCorto ? '#F38737 !important' : '#0A0096 !important';
      color = c;
      if(c === '#F38737 !important'){
        this.enableBtnAltaPromo = false;
        this.enableBtnAltaControl = this.usuarioVO.hasGrupo([Const.GRUPO_CONTROL_INTERCAM]) ? true: false;
      }
    }
    return color; 
  }

  labelEstatus(item: PersonaFisicaVO){
    return item.perEstatus ? 'ACTIVO' : 'SUSPENDIDO';
  }

  /**
  * Determina la etiqueta
  */
  configurarEtiqueta() {
    var etiqueta : String = Const.RFC;
    switch (this.tipo) {
        case Const.NSS: 
            etiqueta = Const.NSS;
            break;
        case Const.DOCUMENTO_MIGRATORIO_FM3:
            etiqueta = Const.DOCUMENTO_MIGRATORIO_FM3;
            break;
    }
    return etiqueta;
  }

  nombreDataField(){
    this.displayedColumnsPer.forEach((item) =>{
      if(this.tipo === Const.NSS && item === 'perRfc'){
        item = 'pefNss';
      } else if(this.tipo === Const.DOCUMENTO_MIGRATORIO_FM3 && item === 'perRfc'){
        item = 'pefNoFm3';
      } else if(item === 'perRfc') {
        item = 'perRfc';
      }
    });
  }

  campoValor(item:PersonaFisicaVO) {
    var valor : String = item.perRfc;
    switch (this.tipo) {
        case Const.NSS: 
            valor = item.pefNss;
            break;
        case Const.DOCUMENTO_MIGRATORIO_FM3:
          valor = item.pefNoFm3;    
            break;
    }
    return valor;
  }

  setValue(item: PersonaFisicaVO) {
    this.contratoSel = null;
    this._personaService.getContratosByPerId(item.perId).subscribe(
      then => {
        this.arrContratos = then;
        this.dataSourceContratos = new MatTableDataSource(this.arrContratos);
      },
      error =>{
        console.error(error);
       }
    );
  }

  /**
  * En caso de estar un valor seleccionado envia el resultado.
  */
  enviarResultadoItem(item: PersonaFisicaVO) {
    this.enviarResultado(true, item.perId, item.ejecutivoId);
  }

  /**
  * Envia el evento que informa si la coincidencia existe o no, dependiendo del valor recibido.
  */
  enviarResultado (existe : Boolean, perId : Number = 0, ejecutivoId:Number = 0) {
    let datos = new Object;
    datos['existe'] = existe;
    datos['perId'] = perId;
    datos['ejecutivoId'] = ejecutivoId;
    
    this.dialogRef.close({data: datos});
  }
  
  selectUsuContrato(item: UsuarioContratoVO): void {
    this.contratoSel = item;
  }
}
