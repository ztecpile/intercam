import { MedioEnvioVO } from './MedioEnvioVO';
import { TipoMensajeVO } from './TipoMensajeVO';
export class MensajeVO {
	public menId: number;
	public tipoMensajeVO: TipoMensajeVO;
	public temId: number;
	public medioEnvioVO: MedioEnvioVO;
	public temMensajeEs: string;
	public temMensajesEn: string;
	public menSubject: string;
	public menGrupoPersona: boolean;
	public menOpcional: boolean;
	public menInterno: boolean;
	public menPdfFormat: boolean;
	public menFrom: string;
	/**
	* Constructor de la clase.
	*/
	public constructor() {
		this.tipoMensajeVO = new TipoMensajeVO();
		this.medioEnvioVO = new MedioEnvioVO();
		this.temMensajeEs = '';
		this.temMensajesEn = '';
		this.menSubject = '';
		this.menGrupoPersona = false;
		this.menOpcional = false;
		this.menInterno = false;
		this.menPdfFormat = false;
		this.menFrom = '';
	}

}

