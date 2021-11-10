import { PersonaVO } from '../../corporativo/persona/vo/PersonaVO';
import { UsuarioVO } from '../../seguridad/vo/UsuarioVO';
import { PromClienteVO } from '../legacy/PromClienteVO';
import { OperInstrumentoVO } from './OperInstrumentoVO';
import { InfoFechaHabilVO } from '../../seguridad/vo/InfoFechaHabilVO';
import { SolicitudRemesaVO } from './SolicitudRemesaVO';

export class OperacionVO {
  public opeId: number;

  public ejecutivoId: number;

  public conId: number;

  public tmpClvPro: string;

  public opeFechaStr: string;

  public opeHoraStr: string;

  public instrumentosOpeVO: OperInstrumentoVO[] = [];

  //	public  listOperHijos : [] = new Array();

  //Se usan para el save de la operacion en sica, esta clave no existe en el pojo
  public tmpCveSucLegada: string;

  public tmpCveClieSica: string;

  public mailCte: string;

  public ccoClave: number;

  public opeCveMesa: number;

  public perNomCortoTitular: string;

  public opeVienevamos: string;

  public dirVamos: string;

  public clvMesa: string;

  public promClienteVO: PromClienteVO;

  public clienteVO: PersonaVO;

  public usuarioVO: UsuarioVO;

  public difHor: number;

  //Estas propiedades solo se usan en flex
  public parametros: Array<string>;

  public valorFix: number;

  public tmpMontoOriginal: number;

  public tmpCteOriginal: string;

  public tmpOrgOpe: string;

  public requierePagoAnt: string;

  public sucDesc: string; //sucursal cco. de la op.

  public msgTipo: string = '';

  public opeConfirmacion: string;
  public opeCanje: string;
  public dondeViene: number;

  public opeDirCalle: string;
  public opeDirColonia: string;
  public opeDirNumInt: string;
  public opeDirMunicipio: string;
  public opeDirNumExt: string;
  public opeDirEntidad: string;
  public opeDirCodigoPostal: string;

  /**
   * Nombre del promotor
   */
  public desPro: string;

  /**
   * Bandera que indica que es una remesa sin datos
   */
  public remSinDatos: boolean;

  /**
   * Track de Auditoria en SICA
   */
  public audOpe: string;

  /**
   * Almacena co1_obs de la tabla obseoper
   * (campo solo para la pantalla de inicio de dia)
   */
  public contraValor: string;

  /**
   * Almacena ant_estatus de la taba m03solicpxa
   * (campo solo para la pantalla de inicio de dia)
   */
  public solPxAEstatus: string;

  /**
   * Almacena ref_numero de m03referen
   * (campo solo para la pantalla de inicio de dia)
   */
  public referencia: string;

  /**
   * Clave (Id) del usuario, requerida para generar la bitacora
   */
  public usuId: number;

  /**
   * Clave del sistema, requerida para generar la bitacora
   */
  public sisId: number;

  /**
   * Objeto para respaldar los valores originales de la operacion
   */
  public operacionOrgVO: OperacionVO;

  /**
   * Almacena si ya paso por la pantalla uno del wizard
   */
  public viajaWizard: string;

  /**
   * Fecha de registro de la operacion
   */
  public opeFechaRegistroStr: string;

  /**
   * Email asociado al contrato
   */
  public emailContrato: string;

  /**
   * Usuario POS
   **/
  public usuUsuario: string;

  /**
   * Origen de la operacion
   */
  public opeOrigen: string;

  /**
   * iable temporal.
   * Determina la sucursal origen para la busqueda de los bancos,
   * la cual se asocia a CtaBan.oriPro
   */
  public sucOrgBancos: string;

  /**
   * Indica si el contrato puede capturar Addenda
   * Propiedad no persistida, se utiliza para el wizard de la operacion
   */
  public conAddenda: boolean;

  /**
   * Operacion pactada con AutoHedge
   * V = Si
   * F = No
   */
  public opeAutoHedge: string;

  /**
   * Bandera que indica si la operacion la va a distribuir el cliente desde ICambiosPro
   * True =  La operacion sera distribuida por el cliente desde ICambiosPro.
   * False = La operacion NO sera distribuida por el cliente desde ICambiosPro
   */
  public opeDistET: boolean;

  public cuentaEnlaceFwd: string;

  public observaciones: string;

  public nombrePromotor: string;

  /**
   * Indica que el cliente tiene cuentas SPID activas y con MN, puede operar SPID
   */
  public cteOperSpid: boolean;

  /**
   * Objeto con la Devolucion SPID
   */
  //	public  devolucionVO:DevolucionSPIDVO;

  /**
   * Clave legada contrato Banco
   */
  public tmpClaveLegadaBanco: string;

  /**
   * Determina si esta permitido el cambio de instrumento de la operaci&oacute;n.
   * Propieedad no persistida
   **/
  public isChangeInstru: boolean = false;
  public isViewChgInstruEfec: boolean = false;

  /**
   * Motivo del rechazo (cheque)
   */
  public motRechazo: string;
  /**
   * Tipo de devolucion
   */
  public tipoDev: string;

  /**
   * Almacena la IP del Cliente.
   */
  public clienteIP: string;

  /**
   * Total de paginas, solo para iCambiosPro
   */
  public pagTotales: number;

  /**
   * Total de resultados, solo para iCambiosPro
   */
  public totalRes: number;

  /**
   * Pago
   */
  public fPago: string;

  /**
   * Abono o cargo que se le hara a la cuenta para
   * cubir la garantia
   */
  public cargoAbonoGarantiaStr: string;

  /**
   * Abono o cargo que se le hara a la cuenta para
   * cubir la garantia
   */
  public cargoAbono: number;

  /**
   * Almacena el id de la operacion remante, atributo solo contendra un valor cuando se
   * maneje la operacion de tipo vencimiento, esto solo aplica para los ven parciales
   * */
  public opeIdRemanente: number = 0;

  public utilidadMXN: number;

  public infoFechaHabilVO: InfoFechaHabilVO;

  /**
   * Almacena solicitud de remesa.
   * <i>Esta propiedad no se persiste.</i>
   **/
  public solicitudRemesaVO: SolicitudRemesaVO;

  /*
   *Fecha de operacion
   */
  public opeFecha: Date;

  /**
  * Hora de alta de la operacion
  */
  public opeHora: Date;
  constructor() {}
}
