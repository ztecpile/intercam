import { AfterContentInit, Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Const, PipelineBitacoraVO, PipelineVO } from '@intercam/model';
import { ProspeccionService } from '../../../services/prospeccion.service';

@Component({
  selector: 'intercam-dialog-pipeline-bitacora',
  templateUrl: './dialog-pipeline-bitacora.component.html',
  styleUrls: ['./dialog-pipeline-bitacora.component.scss']
})
export class DialogPipelineBitacoraComponent implements AfterContentInit {

  _pipeline : PipelineVO;

  readonly REFERENCIADO_STR:String = "Referenciado";
	readonly REACTIVADO_STR:String = "Reactivado";
	readonly NUEVO_PM:String = "Nuevo / Persona Moral";
	readonly NUEVO_PF:String = "Nuevo / Persona Fisica";

  displayedColumnsBit: string[] = [
    'fase',
    'tconDescripcion',
    'pipObservaciones',
    'usuario',
    'hpiFechaStr',
    'diasFase'
  ];

  arrBitacora: Array<PipelineBitacoraVO>;

  dataSourceBitacora: MatTableDataSource<PipelineBitacoraVO> = new MatTableDataSource();

  @Input() ClasProsp : String;
  @Input() EjecutivoRC : String;
  @Input() EjecutivoCR : String;

  constructor(private prospeccionService: ProspeccionService,
    private dialogRef: MatDialogRef<DialogPipelineBitacoraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    if(data){
      this._pipeline = this.data['pipeline'];

      this.consultaBitacora();
      this.datosRefProsp();
    }
  }
  
  ngAfterContentInit(): void {
  }

  consultaBitacora():void {
    if(this._pipeline != null && this._pipeline.prospectoPersonaVO != null 
      && this._pipeline.prospectoPersonaVO.personaVO != null 
      && !isNaN(this._pipeline.prospectoPersonaVO.personaVO.perId) 
      && this._pipeline.prospectoPersonaVO.personaVO.perId > 0){
        this.prospeccionService.findAllPipelineBitacora(this._pipeline.prospectoPersonaVO.personaVO.perId).subscribe(
          then => {
            this.arrBitacora = then;
            this.arrBitacora.sort((a,b) => (a.epiId < b.epiId? -1 : 1));
            this.arrBitacora.sort((a,b) => (a.tconDescripcion < b.tconDescripcion? -1 : 1));
            this.dataSourceBitacora = new MatTableDataSource(this.arrBitacora);
          },
          error => console.error(error)
        );
    }
  }

  datosRefProsp():void {
    if(this._pipeline != null && this._pipeline.slrTipo != null 
      && this._pipeline.slrTipo == Const.REFERENCIACION_TIP_SOLICITUD_RC){
      this.EjecutivoRC = this._pipeline.nomDueno;
      this.ClasProsp = this.REACTIVADO_STR;
    } else if (this._pipeline != null && this._pipeline.slrTipo != null 
      && this._pipeline.slrTipo == Const.REFERENCIACION_TIP_SOLICITUD_CR) {
      this.EjecutivoCR = this._pipeline.nomDueno;
      this.ClasProsp = this.REFERENCIADO_STR;
    } else if(this._pipeline != null && this._pipeline.prospectoPersonaVO != null && 
      this._pipeline.prospectoPersonaVO.personaVO != null && 
      this._pipeline.prospectoPersonaVO.personaVO.tipoPersonaVO && 
      this._pipeline.prospectoPersonaVO.personaVO.tipoPersonaVO.tpeClave != null && 
      this._pipeline.prospectoPersonaVO.personaVO.tipoPersonaVO.tpeClave == Const.PERSONA_FISICA){
      this.ClasProsp = this.NUEVO_PF;
    } else {
      this.ClasProsp = this.NUEVO_PM;
    }
  }

  close(){
    this.dialogRef.close();
  }
}
