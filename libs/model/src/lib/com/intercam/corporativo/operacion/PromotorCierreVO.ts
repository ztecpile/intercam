import { ComisionInstrumentoVO } from "../../cambios/vo/ComisionInstrumentoVO";
import { ClavePromLegadoVO } from "../../seguridad/vo/ClavePromLegadoVO";
import { GrupoRolVO } from '../../seguridad/vo/GrupoRolVO';
import { UsuarioVO } from "../../seguridad/vo/UsuarioVO";

export class PromotorCierreVO {

    public  perId: number;

	public  operaFwd: boolean;

	public  cierreExcepcion: boolean;

	public  promotorSucursal : boolean;

	public  lstClavePromLeg : ClavePromLegadoVO [] = new Array();


	public  clavePromLegDefaultBanco: ClavePromLegadoVO;

	public  clavePromLegDefaultCb: ClavePromLegadoVO;

	public lstComision: ComisionInstrumentoVO [] = new Array();

	public  maxMontoTarjeta: string;

	public estatusPromCierre: string [] = new Array();

	public  lstInstrumentoCierre: string [] = new Array()

	public  numOpSinDoctos: string;

	public  maxMontoDolares: number;

	public  oriProCheqDev: string;

	public  parametroPromCliente: boolean;

	public  grupoRolVO: GrupoRolVO;

	public  grupoRolInmtzVO: GrupoRolVO;

	public  usuarioMesaVO: UsuarioVO;

	public  usuarioVO: UsuarioVO;

	public sucursalUVentanilla:boolean;
    constructor(){

    }
}
