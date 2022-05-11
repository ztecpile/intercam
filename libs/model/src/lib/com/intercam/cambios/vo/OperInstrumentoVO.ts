import { DivisasVO } from '../../corporativo/contrato/vo/DivisasVO';
import { FechaValorVO } from '../../corporativo/operacion/FechaValorVO';
import { InstrumentoVO } from '../../corporativo/operacion/InstrumentoVO';
import { Const } from '../../utils/Const';
import { SolicitudPxAVO } from './SolicitudPxAVO';
import { PagoOperacionVO } from './PagoOperacionVO';
import { CatPagoVO } from './CatPagoVO';
import { FacturaOperacionVO } from './FacturaOperacionVO';
import { OperTarjetaVO } from './OperTarjetaVO';
import { InfoOpeLO, OperFwdVO, OperTransferVO } from '@intercam/model';

export class OperInstrumentoVO {
  /**
   * Identificador de la operacion
   */
  public opiId: number;
  /**
   * Instrumento de la operacion
   */
  public insIdVO: InstrumentoVO;
  /**
   * Identificador de la operacion
   */
  public opeId: number;
  /**
   * Identificador de la operacion
   */
  public proId: number;
  /**
   * Tipo de operacion, C compra, V venta
   */
  public opiTipo: string;
  /**
   * Monto de la operacion
   */
  public opiMonto: number;
  /**
   * tipo de costo
   */
  public opiTcosto: number;
  /**
   * Tipo de cambio
   */
  public opiTcambio: number;
  /**
   * Lista de pagos de la operacion
   */
  public pagosOpeVO: Array<PagoOperacionVO>;
  /**
   * Fecha valor
   */
  public fechaValorVO: FechaValorVO;
  /**
   * Divisa en la que se cerro la operacion
   */
  public divisasVO: DivisasVO;
  /**
   * Estatus de la operacion
   */
  public opiEstatus: number;
  /**
   * Comision
   */
  public opiComision: number;
  /**
   * Iva
   */
  public opiIva: number;
  /**
   * fecha de vencimiento
   */
  public opiFvenci: Date;
  /**
   * Observaciones
   */
  public opiObserva: string;
  /**
   * Tipo de iva que aplicara, D desglozado, A agregado
   */
  public opiAplicaIva: string;
  /**
   * Clave de la operacion proveniente de SICA
   */
  public tmpDealsica: number;
  /**
   * Identificador del operacion instrumento padre
   */
  public opiIdPadre: number;
  /**
   *
   */
  public bapOpe: string;
  /**
   *
   */
  public barOpe: string;
  /**
   * Tipo de pago
   */
  public pagoVO: CatPagoVO;
  /**
   * id de tipo pago
   */
  public tipCtap: string;
  /**
   *
   */
  public corCtap: string;
  /**
   *
   */
  public tipCtar: string;
  /**
   *
   */
  public corCtar: string;
  /**
   * Beneficiario
   */
  public opiBeneficiario: string;
  /**
   * Identificar del area de liquidacio
   */
  public opiAreaLiq: number;
  /**
   *
   */
  public opiAucLiq: string;
  /**
   *
   */
  public opiSolicitoPxa: string;

  public solicitudPxAVO: SolicitudPxAVO;
  /**
   * Campo que guarda si procede de repetitiva
   */
  public opiRepetitiva: boolean;
  /**
   * Monto original en caso de que sea modificado
   */
  public opiMontoOriginal: number;
  /**
   * lista de operaciones de transferencias
   */
  public operTransferVO: OperTransferVO[];
  /**
   * Lista de operaciones de tarjeta
   */
  public operTarjetaVO: Array<OperTarjetaVO>;
  /**
   * Lista de facturas
   */
  public facturasVO: Array<FacturaOperacionVO>;
  /**
   * Monto de la operacion en pesos, requerido para la persistencia del valor de Pesos en Flex, no se persiste en Java
   **/
  public opiPesos: number;
  /**
   * Clave legada del cliente en Sica ,requerida para la persistencia del valor de Pesos en Flex, no se persiste en Java
   **/
  public tmpCveClieSica: string;
  /**
   * Nombre corto del titular, requerido para la persistencia del valor de Pesos en Flex, no se persiste en Java
   **/
  public perNomCortoTitular: string;
  /**
   * Fecha de la operacion, requerido para las pantallas de consulta y resumen, no se persiste en Java
   **/
  public opeFechaStr: string;
  /**
   * Bandera para determinar si se copia o no el tipo Costo al tipo Cambio.
   *    Se utiliza en el alta de Canjes (cierreCanjeComponent).
   * True: copia el valor; False: no copia el valor
   * Nota: Cuando se modifique el valor del tipo de Cambio por edicion en dicho campo, o en el monto o
   *       en los pesos, se debe deshabilitar esta bandera.
   **/
  public copyCosto: boolean = true;
  /**
   * Bandera para determinar si se copia o no el tipo Costo al tipo Cambio en FWD.
   * True: copia el valor; False: no copia el valor
   * Nota: Cuando se modifique el valor del tipo de Cambio por edicion en dicho campo, o en el monto o
   *       en los pesos, se debe deshabilitar esta bandera.
   **/
  public copyCostoFwd: boolean = true;
  /**
   * Indica si ya pagaron pesos
   */
  public opiPagaronPesos: string;
  /**
   * Liga a la img de pesos
   */
  public opiSrcPesos: string;
  /**
   * Indica si ya pagaron divisa
   */
  public opiPagaronDivisa: string;
  /**
   * Liga a la img de divisa
   */
  public opiSrcDivisa: string;
  /**
   * Correo para reenvio de confirmacion
   */
  public opiEmail: string;

  /**
   * Muestra el monto de la deuda a liquidar en la operacion
   * solo se usa en SICA
   */
  public opiMontoDeuda: number;
  /**
   * Divisa correspondiente al monto de la deuda a liquidar
   * solo se usa en SICA
   */
  public opiDivisaDeuda: string;
  /**
   * Muestra la lista de cobros relizados para las deudas no pagas
   * solo se usa en SICA
   */
   public  cobrosDeuda:any[];
  /**
   * Contiene los datos del banco del pago que entregamos en Abono
   */
  public cveBanxicoAbono: string;
  /**
   * Indica si checkbox esta seleccionado en mixto, solo para flex
   */
  public sinDatosMixto: boolean = false;
  /**
   * Bandera que indica si se registran las cuentas origen para la factura
   */
  public opiCueOrigen: boolean = false;
  /**
   * Bandera que indica si se registran las Addendas para la factura
   */
  public opiAddenda: boolean = false;

  /**
   * Deal de la operacion generada en la plataforma ET de Reuters
   *    En caso de distribucion, se concatena el consecutivo de la operacion que forma la disribucion (deal|consecutivo)
   */
  public dealET: string;

  /**
   * Numero inicial para establecer el consecutivo de las faturas
   * Valor que se utiliza para conser la informacion cuando se navega en el wizard del cierre de la operacion
   */
  public consecFact;

  /**
   * Lista de Identificadoes de facturas a eliminar
   * Valor que se utiliza para identificar las facturas que se eliminaron en el dgFacturas en la pantalla
   * FacturasInmfo del wizard y que corresponden a un proceso de modificacion de la operacion
   */
  public arrFacIdEliminar: Array<number> = new Array<number>();

  /**
   * Numero inicial para establecer el consecutivo de los pagos de tipo Entrega
   * Valor que se utiliza para conser la informacion cuando se navega en el wizard del cierre de la operacion
   */
  public consecPagoEntrega: number;

  /**
   * Numero inicial para establecer el consecutivo de los pagos de tipo Recepcion
   * Valor que se utiliza para conser la informacion cuando se navega en el wizard del cierre de la operacion
   */
  public consecPagoRecepcion: number;

  /**
   * Este tributo hace referencia al tipo de contrato 1=C.Bolsa, 5=Banco. Actualmente este campo se persiste  desde
   * el objeto OperacionVO, en esta clase solo se utiliza como auxiliar para no agregar un campo mas a los metodos
   * que pasan como parametro este objeto.
   */
  public tconId: number;

  /**
   * Lista de operaciones de Forward
   */
  public operacionesFwdVO: OperFwdVO[] = [];

  /**
   * Clasificacion de las Operaciones por Libro
   * P - Libro Propietario
   * C - Libro de operaciones clientes Market Making
   */
  public opiLibro: string;

  /**
   *
   */
  public opiOpEstrategia: string;

  /**
   *
   */
  public opiCobeEstrategia: string;

  /**
   * Monto de la utilidad de la operacion.
   * Requerido para la persistencia del valor en Flex, no se persiste en Java.
   **/
  public utilidad: number;

  /**
   * Porcentaje de garantia definida en el contrato para calcular el monto de la garantia requerida.
   * Requerido para la persistencia del valor en Flex, no se persiste en Java.
   **/
  public garantiaDef: number;

  /**
   * Monto de la garantia requerida para cubrir la operacion.
   * Requerido para la persistencia del valor en Flex, no se persiste en Java.
   **/
  public garantiaReq: number;

  /**
   * Indica si se realizo el bloqueo a la cuenta en pesos, el monto de la operacion
   */
  public opiCargoCta: boolean;

  /**
   * Clave de la operacion proveniente de SICA asociada a la operacion original a reversar
   */
  public opiDealReversar: number;

  /**
   * Bandera que indica si la operacion consume o no línea de operaci&oacute;n.
   */
  public opiLinea: boolean;

  /**
   * Causa por la cual no aplica la linea de operacion, si es el caso.
   */
  public opiLineaCausa: string;

  /**
   * Origen del proceso de la validacion de la linea de operacion.
   */
  public opiLineaOrigen: string;

  /**
   * Bandera que indica si se aplic&oacute; cargo a cuenta.
   */
  public aplicoCargoCuenta: boolean;

  /**
   * Informacion de los Montos acumulados para la linea de operacion
   * Informacion en el estado de cuenta de la linea de operacion y en el cierre de loa operacion
   * Campo no persistido
   */
  public infoOpeLO: InfoOpeLO;

  /**
   * Contiene el monto doralizado en base a ultimo fix
   * este campo solo se usa para pantalla de inicio del dia "findOperacionSicaBy"
   */
  public montoDolFix: number;

  /**
   * Indica si el pago de una operacion ET realizará un cargo a cuenta del cliente
   */
  public cargoCuentaET: boolean;

  /**
   * Tipo de operacion del reverso
   *      REVA: Reversa
   *      SUST: Sustituta
   */
  public opiTipoReverso: string;

  /**
   *
   */
  public opiStardocId: string;

  // ***************************************************** //
  //  Constructor de la clase
  // ***************************************************** //
  constructor() {
    this.opiSolicitoPxa = 'F';
    this.insIdVO = new InstrumentoVO();
    this.divisasVO = new DivisasVO();
    this.pagosOpeVO = [];
    this.fechaValorVO = new FechaValorVO();
    this.consecPagoEntrega = 0;
    this.consecPagoRecepcion = 0;
  }
}
