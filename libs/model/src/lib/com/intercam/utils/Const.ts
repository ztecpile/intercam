import { ConstPerfiles } from './ConstPerfiles';
export abstract class Const {
  //     public static readonly NOMBRE_PARAMETRO: string = "TABMAX";

  //     /**
  //      * PARTE A para contratos de banco que operan derivados
  //      */
  //     public static readonly PARTE_A: string = "A";
  //     /**
  //      * PARTE B para contratos de banco que operan derivados
  //      */
  //     public static readonly PARTE_B: string = "B";

  //     public static readonly FUERA_HORARIO: string = "FueraHorario.swf";

  //     public static readonly OPERATION_GET_SESSION: string = "getSession";

  //     public static readonly OPERATION_GET_PARAM_VALUE: string = "getParamValue";

  //     public static readonly OPERATION_GET_USUARIO_IN_SESSION: string = "getUsuarioInSession";

  //     public static readonly OPERATION_REGISTRA_LOGIN_EXITOSO: string = "registraLoginExitoso";

  //     public static readonly OPERATION_GET_FLEX_MENU: string = "getFlexMenu";

  //     public static readonly OPERATION_GET_PROCESS_USER: string = "getProcessUser";

  //     public static readonly OPERATION_CONSTRUYE_URL_LOGOUT: string = "construyeUrlLogout";

  //     public static readonly IS_ACCESS_ALLOWED: string = "isAccessAllowed";

  //     //-- Tipos de mensajes para los PopUps
  //     public static readonly ERROR_MESSAGE: string = "error";
  //     public static readonly INFO_MESSAGE: string = "info";
  //     public static readonly WARNING_MESSAGE: string = "warning";
  //     //--

  //     /**
  //      *
  //      */
  //     public static readonly URL_CUESTIONARIO: string = "Cuestionario.swf";

  //     /**
  //      * Identificador del evento que centra los pop-up's
  //      */
  //     public static readonly CENTRA_POPUP_EVENT: string = "centraPopUpEvent"

  //     /**
  //      * Tipo de evento para enviar un PopUp dentro de un PopUp.
  //      */
  //     public static readonly SEND_POPUP: string = "sendPopUp";

  //     /**
  //      * Tipo de evento enviado al cerrar el PopUp; para eliminar "listeners".
  //      */
  //     public static readonly CLOSE_POPUP: string = "closePopUp";

  //CONSTANTES DE COLORES
  public static readonly NARANJA: number = 0xF38737;  //   53  188   06
  public static readonly ROJO: number = 0xFF0000;     //   53  188   06
  public static readonly VERDE: number = 0x008000;    //   00  128   00
  public static readonly AZUL: number = 0x0A0096;     //   10   00  150
  public static readonly AZUL_02: number = 0x0000CC;  //   00   00  204
  public static readonly GRIS: number = 0x585858;     //  135  135  135
  public static readonly NEGRO: number = 0x000000;    //   00   00   00

  /**
   * Nombre del color gris
   */
  public static readonly GRIS_DESC: string = 'gris';

  /**
   * Nombre del color anaranjado
   */
  public static readonly NARANJA_DESC: string = 'naranja';

  /**
   * Nombre del color verde
   */
  public static readonly VERDE_DESC: string = 'verde';

  /**
   * Nombre del color verde
   */
  public static readonly VERDEC_DESC: string = 'verde_claro';

  /**
   * Nombre del color rojo
   */
  public static readonly ROJO_DESC: string = 'rojo';

  /**
   * Nombre del color rojo
   */
  public static readonly AMARILLO_DESC: string = 'amarillo';

  /**
   * Nombre del color rojo
   */
  public static readonly MORADO_DESC: string = 'morado';

  //     /**
  //      * Constante de "*" en color rojo para indicar campos requeridos
  //      */
  //     public static readonly ASTERISCO_ROJO: string  = "<font color='#ff0000'>* </font>";

  //     /**
  //      * Color Rojo para resaltar texto
  //      */
  //     public static readonly COLOR: string  = "<font color='#ff003c'>X</font>";

  //     //CONSTANTES GLOBALES PARA CAMBIOS
  //     public static readonly ESTATUS_OPERACION_CAMBIOS_PENDIENTE: number = 0;
  public static readonly ESTATUS_OPERACION_CAMBIOS_POR_REV_CONTROL: number = 1;
  public static readonly ESTATUS_OPERACION_CAMBIOS_PENDIENTE: number = 0;
  //     public static readonly ESTATUS_OPERACION_CAMBIOS_POR_REV_CONTROL: number = 1;
  //     public static readonly ESTATUS_OPERACION_CAMBIOS_CANCELADA: number = 3;
  //     public static readonly ESTATUS_OPERACION_CAMBIOS_OTRAS: number = 999;

  //     // cuestionario de servicios de inversion para clientes sofisticados fisicas
  //     public static readonly TIPO_CUEST_SOF_CB_PF: number = 27;
  //     // cuestionario de servicios de inversion para clientes no sofisticados fisicas
  //     public static readonly TIPO_CUEST_NO_SOF_CB_PF: number = 28;
  //     // cuestionario de servicios de inversion para clientes sofisticados morales
  //     public static readonly TIPO_CUEST_SOF_CB_PM: number = 29;
  //     // cuestionario de servicios de inversion para clientes no sofisticados morales
  //     public static readonly TIPO_CUEST_NO_SOF_CB_PM: number = 30;
  //     // cuestionario SPID
  //     public static readonly TIPO_CUEST_SPID = 32;

  //     /**
  //      * tipo cliente sofisticado para servicios de inversion
  //      */
  //     public static readonly TIPO_CLIENTE_SOFISTICADO_SI = 4;

  //     /**
  //      * tipo cliente Otro para servicios de inversion
  //      */
  //     public static readonly TIPO_CLIENTE_OTRO_SI = 5;

  //     /**
  //      * tipo Servicio Asesoria para servicios de inversion
  //      */
  //     public static readonly TIPO_SERVICIO_ASESORIA_SI = 5;

  //     /**
  //      * tipo Servicio Gestion para servicios de inversion
  //      */
  //     public static readonly TIPO_SERVICIO_GESTION_SI = 6;

  //     /**
  //      * Estatus de las operaciones con banco asignadO
  //      */
  //     public static readonly ESTATUS_OPERACION_BANCO_ASIGNADO: number = 4;

  /**
   * Estatus de las operaciones facturadas
   */
  public static readonly ESTATUS_OPERACION_FACTURADA: number = 5;

  /**
   * Estatus cancelado de las facturas de una operacion
   */
  public static readonly ESTATUS_FACTURA_CANCELADA: number = 3;

  /**
   * Estatus alta del pago de una operacion
   */
   public static readonly ESTATUS_PAGO_ACTIVO: string = '1';

   /**
    * Estatus cancela del pago de una operacion
    */
   public static readonly ESTATUS_PAGO_CANCELADO: string = '2';

  /**
   * Constante para indicar folio vacio.
   */
  public static readonly FOLIO_VACIO: number = 0;

  /**
   * Constante que indica que a todos los folios asociados a un DEAL se les enviara correo.
   */
  public static readonly SERIE_FACTURA: string = "TODOS";

  /**
   * Constante para indicar que la factura electronica solo se enviara por correo electronico.
   */
  public static readonly CLAVE_IMPRESORA: string = "NO-IMPRESORA";

  /**
   * Codigo de respuesta exitosa del servicio de reimpresion de factura electronica.
   */
  public static readonly RESPUESTA_EXITOSA: string = "OKS000";

  //     /**
  //      *
  //      */
  //     public static readonly ORIGEN_OPERACION_CASACAMBIO: string = "C";

  //     /**
  //      * Origen de la operaci&oacute;n es POS.
  //      */
  //     public static readonly ORIGEN_OPE_POS: string = "P";

       /**
        * Origen de la Operaci&oacute;n generada en I-Cambios PRO (ET-Reuters).
        */
       public static readonly ORIGEN_OPERACION_ET: string = "E";

       /**
        * Origen de la operaci&oacute;n TRADER.
        */
       public static readonly ORIGEN_OPERACION_TRADER: string = "T";

       /**
        * El Origen de la operaci&oacute;n es un Forward.
        */
       public static readonly ORIGEN_OPERACION_FWD: string = "W";

       /**
        * El Origen de la operaci&oacute;n es un Reverso.
        */
       public static readonly ORIGEN_OPERACION_REVERSO: string = "O";

  //     //-- Estan repetidos estos
  public static readonly TIPO_CONTRATO_CAMBIOS: number = 1;
  //     public static readonly TIPO_CONTRATO_FONDOS: number = 2;
  //     public static readonly TIPO_CONTRATO_CASA_BOLSA: number = 3;
  public static readonly TIPO_CONTRATO_BANCO: number = 4;
  public static readonly TIPO_CONTRATO_DIVISAS_BANCO: number = 5;
  //     public static readonly TIPO_CONTRATO_DIVISAS_BANCO: number = 5;
  //     public static readonly TIPO_CONTRATO_FIDEICOMISO: number = 7;

  //     public static readonly URL_DOCTOS: string = "http://inte-app-xpdnt:8080/estado/ViewDoc.jsp?file=";
  //     public static readonly URL_DOCTOS_SUC: string = "/estado/ViewDoc.jsp?file=";
  //     public static readonly URL_DOCTOS_SUC_FWD: string = "/estado/ViewDocFwd.jsp?file=";
  //     public static readonly URL_DOCTOS_FWD: string = "http://inte-app-xpdnt:8080/estado/ViewDocFwd.jsp?file=";

  //     public static readonly URL_DOCTOS_AQ: string = "http://inte-app-xpdnt:8080/estado/ViewDocAQ.jsp?file=";
  //     public static readonly URL_DOCTOS_SUC_AQ: string = "/estado/ViewDocAQ.jsp?file=";

  //     /**
  //      * Indica el tipo de solicitud cancelacion
  //      */
  //     public static readonly TIPO_SOLICITUD_CAN: string = 'CAN';

  //     /**
  //      * Indica el tipo de solicitud modificación
  //      */
  //     public static readonly TIPO_SOLICITUD_MOD: string = 'MOD';

  //     /**
  //      * Indica estatus inicial de una solicitud de cancelacion/modificacion
  //      */
  //     public static readonly ESTATUS_SOLI: string = 'SOLI'

  //     /**
  //      * Constante para las solicitudes de remesas sin deal.
  //      */
      public static readonly MOTIVO_SOLICITUD_REM: string = 'REM';

  //     /**
  //      * Grupo al que se le habilitara la opcion de solicitar una modificacion o
  //      * cancelacion de una operacion
  //      */
  //     public static readonly GRUPO_SOLICITUD_CANCELACION: string = "CANCELAPOS";

  /**
   * Factor excel para el calculo correcto del redondeo
   */
  public static readonly excelFactor: number = 0.00000001;

  //     /**
  //      *
  //      */
      public static readonly REMESA_SIN_ABA: string = "000000000";

  //     //CONSTANTES PARA INGRESOS
  //     public static readonly URL_FACTURA: string = "../FacturaServlet?ingresoId=";

  //     public static readonly TIPO_MERCADO_MERCADO_DINERO: number = 1;

       public static readonly LIMITE_RANGO_SUPERIOR: number = 0.015;
       public static readonly LIMITE_RANGO_INFERIOR: number = 0.015;
  //     public static readonly LIMITE_OPERACION_TARJETA_SUPERIOR: number = 10000;
  //     public static readonly LIMITE_OPERACION_TARJETA_INFERIOR: number = 100;

       public static readonly PAIS_MEXICO: string = 'MEXICO';
  //     public static readonly PAIS_ESTADOS_UNIDOS: string = "ESTADOS UNIDOS";
  //     public static readonly PAIS_EURO_ALEMANIA: string = "ALEMANIA";


  public static readonly PAIS_CLAVE_MEXICO: number = 1;
  public static  readonly PAIS_CLAVE_US: number = 3;

  //     public static readonly MEXICO_ISO_CODE: string = "MX";
  //     public static readonly US_ISO_CODE: string = "US";

  //     /**
  //      * Clave para otro pais.
  //      */
  //     public static readonly OTROS_PAISES_CODE: string = "OT";

  //     /**
  //      * Tipos de factura.
  //      */
  //     public static readonly TIPOS_FACTURA:any[] =
  //         [
  //             {cveTpoFac:'D', descTpoFac:'DIVISAS'},
  //             {cveTpoFac:'A', descTpoFac:'ADMINISTRATIVAS'}
  //         ];

  // CONSTANTES GLOBALES PARA DIVISAS
  public static readonly ID_DOLAR_AMERICANO: string = 'USD';
  public static readonly ID_EURO: string = 'EUR';

  /**
   * Id de la divisa de Pesos Mexicanos
   */
  public static readonly ID_PESO_MEX: string = 'MXN';
  public static readonly ID_PESO: string = 'MN';
  //     public static readonly ID_PESO_: string = 'MN ';
  //     public static readonly ID_YEN: string = 'JPY';
  //     public static readonly ID_DOLAR_AUSTRALIANO : string  = 'AUD';
  //     public static readonly ID_DOLAR_CANADIENSE: string = 'CAD';
  //     public static readonly ID_LIBRA_ESTERLINA: string = 'GBP';

  //     public static readonly divisaUSD_MXN: string = "USD/MXN";

  public static readonly ESQUEMA_MESA_MATRIZ: string = "MATRIZ";
  //     public static readonly ESQUEMA_MESA_RELACIONADA: string = "RELACI";
  //     public static readonly ESQUEMA_MESA_TODAS: string = "TODAS";
  //     public static readonly ESQUEMA_MESA_PROPIO: string = "PROPIO";
  //     public static readonly CTA_BANCOMER_REF: string = "CTA_BANCOMER_REF";

  //     /**
  //      * Esquema de los precios automaticos.
  //      */
  //     public static readonly ESQUEMA_AUTOMATICO: string = "A";

  //     /**
  //      * Esquema de los precios manuales.
  //      */
  //     public static readonly ESQUEMA_MANUAL: string = "M";

       public static readonly PRO_CLI_MESA: string = "PRO_CLI_MESA";

  //     public static readonly OPERADOR_DIVISION: string = "/";

  //     public static readonly OPERADOR_MULTIPLICACION: string = "*";

  //  Constantes de pantallas generales pana navegar en el wizard 
  public static readonly WZ_INFO_GRAL: string = 'infoGral';
  public static readonly WZ_FROMA_PAGO: string = 'formaPago';
  public static readonly WZ_FACTURAS: string = 'facturas';
  public static readonly WZ_SOL_PxA: string = 'solPxA';
  public static readonly WZ_RESUMEN_OPER: string = 'resumenOper';
  public static readonly WZ_RESUMEN_CANJE: string = 'resumenCanjes';
  public static readonly WZ_COMPRA_TRANSFER: string = 'compraTransfer';
  public static readonly WZ_VENTA_TRANSFER: string = 'ventaTransfer';
  public static readonly WZ_COMPRA_VENTA_MEX: string = 'compraVentaMex';
  public static readonly WZ_COMPRA_REMESA: string = 'compraRemesa';
  public static readonly WZ_COMPRA_VOUCHER: string = 'compraVoucher';


  //-- Constantes globales de Instrumentos
  /**
   * Id del instrumento Transfer
   */
  public static readonly ID_INSTRUM_TRANSFER: number = 1;

  /**
   * Id del instrumento Efectivo
   */
  public static readonly ID_INSTRUM_EFECTIVO: number = 2;

  /**
   * Id del instrumento Mex
   */
  public static readonly ID_INSTRUM_MEXDOLAR: number = 3;

  /**
   * Id del instrumento Cash Back
   */
  public static readonly ID_INSTRUM_VOUCHER: number = 4;

       /**
        * Id del instrumento Remesa
        */
       public static readonly ID_INSTRUM_REMESA: number = 5;

       /**
        * Id del instrumento Cheque
        */
       public static readonly ID_INSTRUM_CHEQUE: number = 6;

  //     /**
  //      * Id del instrumento Envios
  //      */
       public static readonly ID_INSTRUM_ENVIOS: number = 7;

  /**
   * Id del instrumento Tarjeta
   */
  public static readonly ID_INSTRUM_TARJETA: number = 8;

  //     /**
  //      * Id del instrumento Peso Peso
  //      */
       public static readonly ID_INSTRUM_PESOPESO: number = 9;

  //     /**
  //      * Id del instrumento Canje
  //      */
       public static readonly ID_INSTRUM_CANJE: number = 10;

  //     /**
  //      * Descripcion del instrumento Transfer
  //      */
  //     public static readonly STR_INSTRUM_TRANSFER: string = "TRANSFER";

  //     /**
  //      * Descripcion del instrumento Efectivo
  //      */
  //     public static readonly STR_INSTRUM_EFECTIVO: string = "EFECTIVO";

  //     /**
  //      * Descripcion del instrumento Mex
  //      */
  //     public static readonly STR_INSTRUM_MEX: string = "MEX";

  //     /**
  //      * Descripcion del instrumento
  //      */
  //     public static readonly STR_INSTRUM_CASHBACK: string = "CASH BACK";

  //     /**
  //      * Descripcion del instrumento Remesa
  //      */
  //     public static readonly STR_INSTRUM_REMESA: string = "REMESA";

  //     /**
  //      * Descripcion del instrumento Cheque
  //      */
  //     public static readonly STR_INSTRUM_CHEQUE: string = "CHEQUE";

  //     /**
  //      * Descripcion del instrumento Envios
  //      */
  //     public static readonly STR_INSTRUM_ENVIOS: string = "ENVIOS";

  //     /**
  //      * Descripcion del instrumento Tarjeta
  //      */
  //     public static readonly STR_INSTRUM_TARJETA: string = "TARJETA";

  //     /**
  //      * Descripcion del instrumento Peso Peso
  //      */
  //     public static readonly STR_INSTRUM_PESOPESO: string = "PESO PESO";

  //     /**
  //      * Descripcion del instrumento Canje
  //      */
  //     public static readonly STR_INSTRUM_CANJE: string = "CANJE";
  //     //--

  //     /**
  //      * Id tipo de Tarjeta Cash Pass
  //      */
    public static readonly ID_TIPO_TARJETA_CASH_PASS: number = 1;

  //     /**
  //      * Id tipo de Tarjeta VTM Debito
  //      */
     public static readonly ID_TIPO_TARJETA_VTM_DEBITO: number = 2;

  //     /**
  //      * Id tipo de Tarjeta Multi Divisas
  //      */
    public static readonly ID_TIPO_TARJETA_MULTIDIVISAS: number = 3;

  //     //CUENTAS CLASIFICADOREAS DE DIVISAS Y METALES PARA CASA DE BOLSA
  //     public static readonly CTA_ID_DIVISAS_DIV: string = '1710';
  //     public static readonly CTA_ID_DIVISAS_METAL: string = '1711';
  //     public static readonly CTA_ID_DIVISAS_METAL2: string = '1712';

  //     //CUENTAS CLASIFICADORAS DE DIVISAS Y METALES PARA BANCO
  //     public static readonly CTA_BAN_DIVISAS_DIV: string = '5005';
  //     public static readonly CTA_BAN_DIVISAS_METAL: string = '5003';
  //     public static readonly CTA_BAN_DIVISAS_METAL2: string = '5004';

  //CONSTANTES DE STATUS REMESA
  public static readonly REMESA_CAPTURADO: number = 1;
  public static readonly REMESA_FONDOS: number = 2;
  public static readonly REMESA_CANCELADO: number = 3;
  public static readonly REMESA_AUTORIZADO: number = 4;
  public static readonly REMESA_RECHAZADO: number = 5;

  // CONSTANTES PARA EL CIERRE DE OPERACION
  //     public static readonly PERSONA_INTERCAM: number = 1;
  //     public static readonly BENEFICIARIO_INTERCAM: string = 'INTERCAM CASA DE CAMBIO';
  public static readonly TIPO_RECEPCION: string = "R";
  public static readonly TIPO_ENTREGA: string = "E";
  public static readonly TIPO_COMPRA: string = "C";
  public static readonly TIPO_VENTA: string = "V";  

  //CatPago POS
  public static readonly CAT_PAGO_ABONO: number = 1;
  public static readonly CAT_PAGO_CHEQUE: number = 2;
  public static readonly CAT_PAGO_SINFLUJO: number = 3;
  public static readonly CAT_PAGO_MIXTO: number = 4;
  public static readonly CAT_PAGO_EFECTIVO: number = 5;
  public static readonly CAT_PAGO_CANJE: number = 6;
  public static readonly CAT_PAGO_SPID: number = 7;
  public static readonly CAT_PAGO_CHEQ_DEPO: number = 8;
  public static readonly CAT_PAGO_ABONO_INTERCAM: number = 9;

  //CatPago SICA
  public static readonly CAT_PAGO_ABONOTMP: number = 6;
  public static readonly CAT_PAGO_CHEQUETMP: number = 3;
  public static readonly CAT_PAGO_MIXTOTMP: number = 7;
  public static readonly CAT_PAGO_EFECTIVOTMP: number = 2;
  public static readonly CAT_PAGO_CANJETMP: number = 5;


  //     public static readonly PAGO_EFECTIVO : string = "E";
  //     public static readonly PAGO_CHEQUE: string = "C";
  //     public static readonly PAGO_ABONO: string = "A";

  //     public static readonly CANJE_MONTO_BASE_OPERACION: number = 50000;
  //     public static readonly CANJE_LIMITE_SUPERIOR_OPERACION: number = 3;
  //     public static readonly CANJE_LIMITE_INFERIOR_OPERACION: number = 0.5;

  //     //CONSTANTES GLOBALES PARA PERSONA
  //     public static readonly ESTADO_CIVIL_CASADO: number = 1;

  //     public static readonly ID_TIPO_REL_AUTORIZADO: number = 33;
  //     public static readonly ID_TIPO_REL_APODERADO: number = 1;

  //     public static readonly PERSONA_CASA_DE_BOLSA: number=2;
  //     public static readonly PERSONA_FONDOS_DE_INVERSION : number =3;
  public static readonly PERSONA_FISICA_CON_ACTIVIDAD : number = 5;

  //     /**
  //      * Id para persona fisica extranjera
  //      */
  //     public static readonly PERSONA_FISICA_EXTRANJERA: number = 6;

  //     /**
  //      * Id para persona fisica nacional
  //      */
  //     public static readonly PERSONA_FISICA_NACIONAL : number = 7;
  //     public static readonly LONG_CTA_BAN :number = 11;
  //     public static readonly STATUS_EJECUTADO : string = 'EJ';

  /**
   * Modo alta del controlador
   */
  public static readonly MODO_ALTA: string = 'A';

  //     /**
  //      * Modo de actualizacion del controlador
  //      */
  //     public static readonly MODO_ACTUALIZACION : string = 'C';

  //     /**
  //      * Modo de consulta
  //      */
  //     public static readonly MODO_CONSULTA : string = 'CO';

  //     /**
  //      * Modo de eliminar del controlador
  //      */
  //     public static readonly MODO_BORRAR : string = 'B';

  /**
   * Mapa con la descripcion del tipo de contrato (negocio) al que pertenece una operacion
   */
  public static readonly MAPA_TIPO_CONTRATO: any = {
    1: 'descDivisas1',
    2: '',
    3: '',
    4: '',
    5: 'descDivisas5',
  };

  //CONSTANTES PARA LOS TIPOS DE CONTRATOS
  public static readonly TCON_CASA_CAMBIOS: number = 1;
  public static readonly TCON_DIVISAS_BANCO: number = 5;

  //     public static readonly result : number = 0;
  //     // gjesus 17/12/13 valor para el Logo de la entrevista de un prospecto
  //     public static readonly TCON_PROSPECTO : number = 0;
  public static readonly TCON_FONDOS : number = 2;
  public static readonly TCON_CASA_BOLSA : number = 3;
  //     public static readonly TCON_SECURITIES : number = 7;
  public static readonly TCON_FIDEICOMISO : number = 7;
  //     public static readonly TCON_EXTRANJERA : number = 6;//Este valor no corresponde con el del catalogo, se copian los valores
  public static readonly TCON_BANCO: number = 4;
  //     public static readonly TCON_DIVISAS_CASA_BOLSA : number = 5;
  //     public static readonly TCON_DIVISAS_BANCO_RESUTIOPE : number = 31;
  //     public static readonly TCON_DIVISAS_CB_RESUTIOPE : number = 1;
  //     public static readonly TCON_PROSPECTO_OTROS : number = 0;
  public static readonly EXPID_NO_APLICA : number = 0;

  //     public static readonly TITULAR_CAMBIOS_FISICA : number = 3;
  //     public static readonly TITULAR_CAMBIOS_MORAL : number = 1;
  //     public static readonly TITULAR_FONDOS_FISICA : number = 7;
  //     public static readonly TITULAR_FONDOS_MORAL : number = 13;
  //     public static readonly TITULAR_BOLSA_FISICA : number = 20;
  //     public static readonly TITULAR_BOLSA_MORAL : number = 23;
  //     public static readonly TITULAR_SECURITIES_FISICA : number = 32;
  //     public static readonly TITULAR_SECURITIES_MORAL : number = 33;
  //     public static readonly TITULAR_BANCO_FISICA : number = 31;
  //     public static readonly TITULAR_BANCO_MORAL : number = 37;
  //     public static readonly TITULAR_DIVISAS_BANCO_FISICA : number = 65;
  //     public static readonly TITULAR_DIVISAS_BANCO_MORAL : number = 63;
  //     public static readonly TITULAR_DIVISAS_CB_FISICA : number = 65;
  //     public static readonly TITULAR_DIVISAS_CB_MORAL : number = 63;

  //     public static readonly BENEFICIARIO_FONDOS : number = 10;
  //     public static readonly BENEFICIARIO_BOLSA : number = 19;
  //     public static readonly BENEFICIARIO_BANCO_FISICA : number = 33;
  //     public static readonly PROVEDOR_RECURSOS_BANCO_FISICA : number =34;
  //     public static readonly PROVEDOR_REAL_BANCO_FISICA : number = 35;
  //     public static readonly TERCER_AUTORIZADO_BANCO_FISICA : number = 36;
  //     public static readonly APODERADO_BANCO_MORAL : number = 38;
  //     public static readonly PROVEDOR_RECURSOS_BANCO_MORAL : number = 39;
  //     public static readonly PROVEDOR_REAL_BANCO_MORAL : number = 40;
  //     public static readonly TERCER_AUTORIZADO_BANCO_MORAL : number = 41;

  //     public static readonly COTITULAR_FONDOS_FISICA : number = 9;
  //     public static readonly COTITULAR_BOLSA_FISICA : number = 18;
  //     public static readonly COTITULAR_SECURITIES_FISICA : number = 34;
  //     public static readonly COTITULAR_BANCO_FISICA : number = 32;

  //     public static readonly AUTORIZADA_FONDOS_FISICA : number = 8;
  //     public static readonly AUTORIZADA_FONDOS_MORAL : number = 14;

  //     public static readonly APODERADO_BOLSA_MORAL : number = 24;
  //     public static readonly AUTORIZADA_BOLSA_MORAL : number = 26;

  //     public static readonly DRECURSOS_BOLSA_FISICA : number = 22;
  //     public static readonly DRECURSOS_BOLSA_MORAL : number = 25;
  //     public static readonly APODERADO_FONDOS_MORAL : number = 16;
  //     public static readonly PROVEDOR_RECURSOS_FONDOS_FISICA : number = 80;
  //     public static readonly PROP_REAL_FONDOS_FISICA : number = 76;
  //     public static readonly PROP_REAL_BANCO_FISICA : number = 35;
  //     public static readonly PROVEDOR_RECURSOS_BOLSA_FISICA : number = 22;
  //     public static readonly PROP_REAL_BOLSA_FISICA : number = 79;
  //     public static readonly APODERADO_DIVISAS_BANCO_MORAL : number = 64;
  //     public static readonly PROVEDOR_RECURSOS_DIVISAS_BANCO_FISICA : number = 75;
  //     public static readonly PROP_REAL_RECURSOS_DIVISAS_FISICA : number = 73;
  //     public static readonly TIPO_CONTRATO_DERIVADOS : number = 82;

  //     /**
  //      * Valor por default para el envio de estado de cuenta de los contratos.
  //      * */
  //     public static readonly CON_ENVIO_EDOCTA : string = 'EN';

  //     /**
  //      * Tipos de envio Principales Oficinas
  //      */
  //     public static readonly TIPOS_ENVIO_PRINCIPALESOFIC : number[] = [24,26,27,28,29,30];

  //     /**
  //      * Tipos de envio Otros
  //      */
  //     public static readonly TIPOS_ENVIO_OTROS : number[] = [9,10,11,16,20,23];

  //     /**
  //      * categorias de persona que solicitan direccion con tipo de envio principales oficinas
  //      */
  //     public static readonly CATEGORIAS_PF_TIPOENV_PRINCIPALES_OFIC: number[] = new Array(Const.PERSONA_FISICA_CON_ACTIVIDAD);

  //     //PERFIL DIVISAS
  //     public static readonly TERCERO_DIVISAS_FISICA : number = 29;
  //     public static readonly TERCERO_DIVISAS_MORAL : number = 30;

  //     /**
  //      * IDENTIFICADOR PARA EL PERFIL DE TERCERO AUTORIZADO PARA DIVISAS BANCO
  //      **/
  //     public static readonly TERCERO_DIV_BANCO_FISICA : number = 68;

  //     /**
  //      * IDENTIFICADOR PARA EL PERFIL DE TERCERO AUTORIZADO PARA DIVISAS BANCO
  //      **/
  //     public static readonly TERCERO_DIV_BANCO_MORAL : number = 69;

  public static readonly ESTATUS_ACTIVO : string = "AC"
  public static readonly ESTATUS_SUSPENDIDO : string = "SU"
  //     public static readonly ESTATUS_SOLICITUD : string = "SO"
  //     public static readonly ESTATUS_MIGRADO : string = "MI";
  //     public static readonly ESTATUS_REV_CONTROL : string = "R";

  //     /**
  //      * Estatus de solicitud aceptado
  //      */
      public static readonly SOLICITUD_ACEPTADO : string = "ACEP";

  //     /**
  //      * Estatus de solicitud rechazado
  //      */
  //     public static readonly SOLICITUD_RECHAZADO : string = "RECH";

  //     /**
  //      * Estatus de solicitud en solicitud
  //      */
      public static readonly SOLICITUD_SOLICITUD : string = "SOLI";

  //     /**
  //      * Estatus de solicitud para reverso
  //      */
  //     public static readonly SOLICITUD_REVERSO : string = "REVE";

  //     /**
  //      * Estatus de solicitud en proceso
  //      */
  //     public static readonly SOLICITUD_PROCESO : string = "PROC";

  //     public static readonly TIPO_TEL_FISCAL : number = 1;
  //     public static readonly TIPO_TEL_PARTICULAR : number = 2;
  //     public static readonly TIPO_TEL_OTRO : number = 6;
  //     public static readonly TIPO_TEL_FAX : number = 4;
  //     //public static readonly ID_REPETITIVA : string = "®";
  //     //public static readonly ID_REP_TARJETA : string = "©";
  //     public static readonly ID_REPETITIVA : string = "000000";
  //     public static readonly ID_REP_TARJETA : string = "999999";
  //     public static readonly MESA_MATRIZ : string = "1";

  //     //Fondos
  //     public static readonly TIPO_ORDEN_ABONO_CUENTA_FONDOS : number = 11;
  //     public static readonly TIPO_ORDEN_ABONO_CUENTA_TERCERO_FONDOS : number = 14;

  //     public static readonly TIPO_ORDEN_EFECTIVO_FONDOS : number = 13;
  //     public static readonly TIPO_ORDEN_EFECTIVO_TERCERO_FONDOS : number = 16;
  //     public static readonly TIPO_ORDEN_CHEQUE_FONDOS : number = 12;
  //     public static readonly TIPO_ORDEN_CHEQUE_TERCERO_FONDOS : number = 15;

  //     public static readonly TIPO_OPERACION_FONDOS_VENTA : number = 5;
  //     public static readonly TIPO_OPERACION_FONDOS_COMPRA : number = 6;

  //     public static readonly TIPO_OPERACION_FONDOS_VENTA_LEGADO : number  = 10;
  //     public static readonly TIPO_OPERACION_FONDOS_COMPRA_LEGADO : number  = 5;
  //     public static readonly TIPO_CUENTA_BANCO_OPER : number  = 5;
  //     /**
  //      * URL para la generacion del estado de cuenta en fondos
  //      */
  //     public static readonly URL_DFONDOS: string = "../EdoCuentaFondosWSFrame.jsp?anioMesContrato=";
  //     public static readonly URL_CONTRATOS: string = "http://ifondos/PDF/";

  //     public static readonly URL_IMPRIME_CONTRATO: string = "../ContratoFrame.jsp?conId=";
  //     public static readonly URL_IMPRIME_CONT_SECURITIES: string = "../SecuritiesFrame.jsp?conId=";

  //     public static readonly URL_SOOLICITUD_CUENTA: string= "../SolicitudCuenta.jsp?conId=";

  //     public static readonly URL_IMPRIME_SOLICITUD: string = "../SolicitudFrame.jsp?conId=";

  //     /**
  //      * URL para la generacion de la carta declaratoria para titulares con catgeoria de extranjeros
  //      */
  //     public static readonly URL_IMPRIME_CARTA_DECLARATORIA: string = "../CartaDeclaratoriaFrame.jsp?conId=";

  //     /**
  //      * URL para la generacion del contrato prenda bursatil
  //      */
  //     public static readonly URL_IMPRIME_CTTO_PRENDA_BURSATIL: string = "../CttoPrendaBursatilFrame.jsp?conId=";

  //     /**
  //      * URL para la generacion del anexo contrato prenda bursatil
  //      */
  //     public static readonly URL_IMPRIME_ANEXO_CTTO_PRENDA_BURSATIL: string = "../AnexoCttoPrendaBursatilFrame.jsp?conId=";

  //     /**
  //      * URL para la generacion del contrato global garantias
  //      */
  //     public static readonly URL_IMPRIME_CTTO_GLOBAL_GARANTIAS: string = "../CttoGlobalGarantiasFrame.jsp?conId=";
  //     /**
  //      * URL para la generacion del contrato marco operaciones
  //      */
  //     public static readonly URL_IMPRIME_CTTO_MARCO_OPERACIONES: string = "../CttoMarcoOperacionesFrame.jsp?conId=";
  //     /**
  //      * URL para la generacion del reporte suplemento al contrato marco operaciones
  //      */
  //     public static readonly URL_IMPRIME_SUPCTTO_MARCO_OPERACIONES: string = "../SupCttoMarcoOperacionesFrame.jsp?conId=";
  //     /**
  //      * URL para la generacion del reporte de anexos forwards
  //      */
  //     public static readonly URL_IMPRIME_ANEXOS_FORWARDS: string = "../AnexosForwardsFrame.jsp?conId=";

  //     /**
  //      * URL para la generacion del reporte de conv modificatorio sin garantias
  //      */
  //     public static readonly URL_IMPRIME_CONVMOD_SIN_GARANTIAS: string = "../ConvModificatorioSinGarantiasFrame.jsp?conId=";
  //     /**
  //      * URL para la generacion del reporte de conv modificatorio con garantias
  //      */
  //     public static readonly URL_IMPRIME_CONVMOD_CON_GARANTIAS: string = "../ConvModificatorioConGarantiasFrame.jsp?conId=";

  //     /**
  //      * URL para obtener las solicitudes de banca por telefono.
  //      */
  //     public static readonly URL_IMPRIME_SOLICITUD_BANCAXTELEFONO: string = "../SolicitudBancaPorTelefonoFrame.jsp?conId=";

  //     public static readonly URL_IMPRIME_MARCO_DERIVADOS_FORWARD: string = "../ReporteForward.jsp?conId=";
  //     /**
  //      * URL para Cargar Imagen de cuestionario.
  //      **/
  //     public static readonly URL_CARGA_IMAGEN: string = "AwsCargaImagen.jsp";
  //     public static readonly URL_SERVLET_IMAGENES = "AwsServlet";

  //     public static readonly URL_REPORTE : string  = "&reporte=";

  //     public static readonly URL_IMPRIME_CONTRATO_MARCO_DERIVADOS_FORWARDS: string = "../ReporteForwardMarcoDerivados.jsp?conId=";

  //     public static readonly URL_IMPRIME_CONTRATO_CLIENTE_SOFISTICADO_FORWARDS: string = "../ReporteForwardMarcoDerivados.jsp?conId=";

  //     public static readonly URL_IMPRIME_CONTRATO_CLIENTE_SERVICIO_EJEC_OPER_FORWARDS: string = "../ReporteForwardMarcoDerivados.jsp?conId=";

  //     public static readonly URL_IMPRIME_CONTRATO_PRENDA_DERIVADOS: string = "../ReporteForwardMarcoDerivados.jsp?conId=";

  //     public static readonly URL_IMPRIME_CONTRATO_SUPLEMENTO_DERIVADOS: string = "../ReporteForwardMarcoDerivados.jsp?conId=";

  //     public static readonly URL_IMPRIME_CONTRATO_BANCO_SOLICITUD_CONTRATO: string="../ContratoBancario.jsp?conId=";

  //     public static readonly URL_IMPRIME_CONTRATO_ICAMBIOSPRO: string = "../ContratoICambiosPro.jsp?conId=";

  //     public static readonly URL_REPORTES_XDOC: string = "../ReporteXDoc.jsp?conId=";

  //     /**
  //      * Vistas imagenes cuestionario
  //      **/
  //     public static readonly VISTA_AEREA: string = "A";
  //     public static readonly VISTA_CALLE: string = "C";
  //     public static readonly BUCKET_IMAGENES_CUESTIONARIO = "BUCKETIMGENT";

  //     public static readonly MENU_AYUDA_POS2 = "AyudaPos2";
  //     public static readonly CARGA_AYUDA_POS2 = "upAyudaPos2";
  //     public static readonly URL_AYUDA_POS2 = "AwsView.jsp";
  //     public static readonly BUCKET_AYUDA_POS2 = "BUCKETAYUDAPOS2";

  //     public static readonly URL_CONSULT_CONFIRM: string = "../ConsultConfirm.jsp?clvOpe=";
  //     public static readonly URL_IMPRIME_ANEXO: string = "../AnexoServlet?pepId=";

  //     public static readonly CONN_NAME_POSICION: string = "connPosicion";

  //     public static readonly ENVIO_ORDEN_SIIF : number = 1;
  //     public static readonly ENVIO_ORDEN_SICA : number = 2;
  //     public static readonly ENVIO_ORDEN_DISTRIBUIDO : number = 3;

  //     public static readonly EMISION_ID_DOLARES_SIIF : string = "DOLARES";
  //     public static readonly EMISION_ID_EFECTIVO_SIIF : string = "EFECTIVO";

  //     public static readonly DIVISA_ID_USD_SIIF : number = 20;
  //     public static readonly DIVISA_ID_MX_SIIF : number = 5;

  //     public static readonly INSTRUCCION_FONDOS_TESORERIA : number = 25;
  //     public static readonly OPERADORA_INTERCAM_FONDOS : string = "1027";
  //     public static readonly CLASIFICACION_ORDEN_NORMAL : number = 1;
  //     public static readonly ORDEN_ESTATUS_ACTIVA_FONDOS : number = 2;
  //     public static readonly TIPO_INVERSION_OTROS_FONDOS : number = 4;
  //     public static readonly MERCADO_SOCIEDADES_INVERSION : number = 2;
  //     public static readonly TIPO_ORDEN_FONDOS_VENTA : number = 5;
  //     public static readonly TIPO_ORDEN_FONDOS_COMPRA : number = 6;
  //     public static readonly LIQUIDACION_DEPOSITO_SIIF : number = 5;
  //     public static readonly SERVICIO_GESTION_INVERCION : number = 4;
  //     public static readonly GESTION_INVERCION_ESTRATEGIAS : number = 1;
  //     public static readonly COMISION_OPERACION_DEFAULT : number = 1.0;

  //     public static readonly USU_CLAVE_FONDOS_SIIF : string = "POS";

  /**Catalogo descripcion i00perfil*/
  public static readonly PERF_TITULAR_DESC: string = 'TITULAR';
  //     public static readonly PERF_COTITULAR_DESC : string = 'COTITULAR';
  //     public static readonly PERF_BENEFICIARIO_DESC : string = 'BENEFICIARIO';
  //     public static readonly PERF_APODERADO_DESC : string = 'APODERADO';
  //     public static readonly PERF_PROV_RECURSOS_DESC : string = 'PROVEEDOR RECURSOS';
  //     public static readonly PERF_PROP_REAL_DESC : string = 'PROPIETARIO REAL';
  //     public static readonly PERF_TERCERO_AUTORIZADO_DESC : string ='TERCERO AUTORIZADO';
  //     public static readonly PERF_CONTACTO_DESC : string ='CONTACTO';
  //     public static readonly PERF_TERCEROS_DESC : string ='TERCEROS';
  //     public static readonly PERF_ADICIONAL_DESC : string ='ADICIONAL';
  //     public static readonly PERF_FIDEICOMISARIO_DESC : string ='FIDEICOMISARIO';
  //     public static readonly PERF_FIDEICOMITENTE_DESC : string ='FIDEICOMITENTE';

  //     /**Catalogo descripcion i00division_contrato**/
  //     public static readonly DIVISION_CONTRATO_INDIVIDUAL_DESC : string = 'INDIVIDUAL';
  //     public static readonly DIVISION_CONTRATO_MANCOMUNADO_DESC : string = 'MANCOMUNADO';
  //     public static readonly DIVISION_CONTRATO_COLECTIVA_DESC : string = 'ESPECIAL';
  //     public static readonly DIVISION_CONTRATO_SOLIDARIO_DESC : string = 'SOLIDARIO';

  //     public static readonly FIRMA_INDIVIDUAL : number = 5;
  //     public static readonly FIRMA_BANCO_FISICA_MANCOMUNADO :number = 15;
  //     public static readonly FIRMA_BANCO_FISICA_ESPECIAL :number = 17;
  //     public static readonly FIRMA_BOLSA_FISICA_INDIVIDUAL :number = 5;
  //     public static readonly FIRMA_BOLSA_FISICA_MANCOMUNADO :number = 6;
  //     public static readonly FIRMA_BOLSA_FISICA_SOLIDARIO :number = 7;

  //     /**
  //      * Url accesible desde servlet para PDF del Simulador
  //      */
  //     public static readonly URL_PDF_SIMULADOR : string = "../SimuladorFrame.jsp";

  //     //Calificacion
  //     public static readonly URL_UPLOAD_FILE : string = "../SubeArchivoServlet";

       /**
        * Identificador del rolId del Wizard de Modifica operacion.
        */
       public static readonly ROL_ID_MODIFICA_OPERACION_WIZARD:number= 349;
  //     /**
  //      * Identificador del rolId del Wizard de Modifica operacion.
  //      */
  //     public static readonly ROL_ID_VERIFICACION_FONDOS:number= 360;
  //     /**
  //      * Identificador del rolid de cuestionario
  //      */
  //     public static readonly ROL_ID_CUESTIONARIO:number= 259;

  //     //Distribucion
  //     public static readonly URL_MODIFICA_DISTRIBUCION_FILE : string = "DistribucionOperacion.swf";

       //EXPRESIONES REGULARES DE RFC
       /**
        * Expresion regular del formato del RFC de una persona Fisica
        */
       public static readonly EXP_REG_RFC_FISICA : RegExp = /(^([a-zñA-ZÑ]{4})(\d){6}([a-zñA-ZÑ0-9]{3})$)|(^([a-zñA-ZÑ]{4})(\d){6}$)/;
       /**
        * Expresion regular del formato del RFC de una persona Moral
        */
       public static readonly EXP_REG_RFC_MORAL : RegExp = /(^([a-zñA-Z&Ñ]{3})(\d){6}([a-zñA-Z0-9&Ñ]{3})$)/;

  //     /**
  //      * Longitud minima del RFC para persona fisica
  //      **/
  //     public static readonly LONG_MIN_RFC_FISICA:number = 10;

  //     /**
  //      * Longitud minima del RFC para persona moral
  //      **/
  //     public static readonly LONG_MIN_RFC_MORAL:number = 12;

  //     //CONSTATES PARA EL TIPO PERSONA
  public static readonly PERSONA_MORAL : string= 'M';
  public static readonly PERSONA_FISICA : string= 'F';

  //     public static readonly ANNOS_MAXIMOS : number = 110;
  //     public static readonly TIPO_EJECUTIVO : number = 1;

  //     public static readonly ESTATUS_CON_DECISION_COMITE : number = 5;
  //     public static readonly ESTATUS_CON_QUEBRANTO_RECHAZO : number = 8;

       //CONSTANTES PARA LA CATEGORIA DE PERSONA
       /**
        * Identificador de la categoria asociada a una persona física extranjera
        */
       public static readonly ID_PERSONA_FISICA_EXTRANJERA : number = 6;
       /**
        * Identificador de la categoria asociada a una persona moral extranjera
        */
       public static readonly ID_PERSONA_MORAL_EXTRANJERA : number = 9;
       /**
        * Identificador de la categoria asociada a una entidad financiera extranjera
        */
       public static readonly ID_ENTIDAD_FINANCIERA_EXTERIOR : number = 3;
  //     /**
  //      * Identificador de la categoria asociada a una persona moral nacional
  //      */
  //     public static readonly ID_PERSONA_MORAL_NACIONAL : number = 10;

  //     //APODERADO
  //     public static readonly ID_TIPO_ACTA_PODER_NOTARIAL : number = 10;
  //     public static readonly ID_TIPO_ACTA_NOMBRAMIENTO : number = 15;
  //     public static readonly ID_TIPO_ACTA_CARTA_AUTORIZACION : number = 20;

  //     //CALIFICACION
  //     public static readonly CALIFICACION_ESTATUS_ALTA : number = 1;
  //     public static readonly CALIFICACION_ESTATUS_BAJA : number = 2;
  //     public static readonly CALIFICACION_ESTATUS_CAMBIO : number = 3;

  //     //UAIR
  //     public static readonly AVISO : string = 'AV';
  //     public static readonly ALERTA : string = 'AL';
  //     public static readonly DIVISAS_ORO : string = "DIVIZAORO";
  //     public static readonly DIVISAS_PLATA : string = "DIVIZAPLATA";
  //     public static readonly DIVISA_OLI : string = "OLI";
  //     public static readonly DIVISA_PLI : string = "PLI";

  //     //CONSTANTES PARA EL TIPO DE DOCUMENTO
  //     public static readonly TIPO_DOCTO_IDENTIF_OFICIAL : number = 1;
  //     public static readonly TIPO_DOCTO_CEDULA_IDENTIF_FISCAL : number = 8;

  //     //CONSTANTES PARA ENEXO DOS (SECURITIES)
  //     //Constantes subdivision CONTRATO
  //     public static readonly INDIVIDUAL :  number =12;
  //     public static readonly JOINT_TENANT_ACCOUNT :  number =13;
  //     public static readonly TRUST :  number =14;
  //     public static readonly TRANSFER_ON_DEATH_INDIVIDUAL :  number =15;
  //     public static readonly TRANSFER_ON_DEATH_JOINT :  number =16;
  //     public static readonly POWER_OF_ATTORNEY :  number =17;
  //     public static readonly CUSTODIAN_FOR_MINOR :  number =18;
  //     public static readonly ESTATE :   number =19;
  //     public static readonly CORPORATE :    number =20;
  //     public static readonly CORPORATION : number =22;
  //     public static readonly GOVERMENT :    number =23;

  //     //GRUPO DE CONTROL DE MATRIZ
  //     public static readonly GRUPO_DE_CONTROL_DE_MATRIZ : string = 'CONTROLMATRIZ';
  //     //GRUPO DE CONTROL DE MATRIZ
  //     public static readonly GRUPO_DE_CONTROL_DIV_CB : string = 'CONTROLDIVCB';
  //     //GRUPO DE CONTROL DE MATRIZ
  //     public static readonly GRUPO_RECURSOSHUMANOS : string = 'RECURSOSHUMANOS';
  //     //GRUPO DE CONTROL DE MATRIZ
  //     public static readonly GRUPO_ENROLADOR_BIOMETRICO : string = 'ENROLADORBIOMETRICO';
  //     //
  /**
  * GRUPO CONTROL INTERCAM
  */
  public static readonly GRUPO_CONTROL_INTERCAM : string = 'CONTROLINTERCAM';
  //     public static readonly GRUPO_CONTROL_DIVBANCO: string = 'CONTROLDIVBANCO';
  //     public static readonly TIPO_DOCTO_CARTA_LIBERACION : number = 20;
  //     public static readonly LIMITE_OPERADOR : string ="OPE";
  //     public static readonly LIMITE_SUCURSAL :  string ="SUC";
  //     public static readonly GRUPO_CONTROL_BURSATIL: string = 'CONTROLBURSATIL';

  //     public static readonly GRUPO_MEXDOLAR : string = 'MEXDOLAR';

  //     /**
  //      * Grupo de autorizaciones para MESA
  //      */
  //     public static readonly GRUPO_MESA : string = 'MESA';

  //     /**
  //      * Grupo de control para autorizaciones
  //      */
  //     public static readonly GRUPO_CONTROLSOL : string = 'CONTROLSOL';

  //     /**
  //      * Grupo Mesa Matriz.
  //      */
  //     public static readonly GRUPO_MESA_MATRIZ: string = "MESAMATRIZ";

  //     /**
  //      * Grupo Mesa Sucursal.
  //      */
  //     public static readonly GRUPO_MESA_SUCURSAL: string = "MESASUC";

  //     /**
  //      * Grupo Reuters Sucursal.
  //      */
  //     public static readonly GRUPO_REUTERS_SUCURSAL: string = "REUTERSSUCURSAL";

  //     /**
  //      * Grupo Trader matriz.
  //      */
  //     public static readonly GRUPO_TRADER_MATRIZ: string = "TRADERMATRIZ";

      /**
        * Id direccion Fiscal
        * */
       public static readonly DIRECCION_FISCAL :  number =1;
  //     /**
  //      * Id direccion Particular
  //      * */
  //     public static readonly DIRECCION_PARTICULAR :  number = 2;
  //     /**
  //      * Id direccion Extranjera
  //      * */
  //     public static readonly DIRECCION_EXTRANJERA : number = 7;
  //     /**
  //      * Identificador de direccion para reptitiva
  //      */
  //     public static readonly DIRECCION_REPETITIVA : number = 8;
  //     /**
  //      * Identificador de direccion para reptitiva para divisas banco
  //      */
  //     public static readonly DIRECCION_REPETITIVA_DIV_BANCO : number = 19;

       public static readonly URL_ROL_CIERRE_OPERACION : string = "CierreOperacion.swf";

  //     /**
  //      * Clave del rol para el alta de cierre rapido de divisas.
  //      * */
  //     public static readonly ROL_CLAVE_CIERRE_OPERACION : number = 315;

  //     /**
  //      * Clave del rol para el cierre de canjes.
  //      * */
  //     public static readonly ROL_CLAVE_CIERRE_CANJE : number = 351;

  //     public static readonly URL_ROL_DISTRIBUCION_OPERACION : string = "DistribucionOperacion.swf";

  //     /**
  //      * Clave del rol para distribucion de operaciones.
  //      * */
  //     public static readonly ROL_CLAVE_DISTRIBUCION_OPE : number = 318;

  public static readonly ACTIVIDAD_AGENCIA_ADUANAL: number = 868;

       /**
        * Identificador de la actividad no clasificada
        * */
       public static readonly ACT_NO_CLASIFICADA : number = 1101;

       /**
        * Identificador de la actividad no asignada
        * */
       public static readonly ACT_NO_ASIGNADA : number  = 1105;

  //     /** * Grupo de Matriz para operar divisas (Default)
  //      */
  //     public static readonly PROM_DIV_INMTZ : string = "PROMDIVINMTZ";
  //     /**
  //      * Nombre inicial para construccion de Rol Promotores sucursales
  //      */
  //     public static readonly PROMDIV : string = "PROMDIV";
  //     /**
  //      * Clave del grupo para el cierre de Cheques Devueltos.
  //      * */
  //     public static readonly GPO_CHEQUES_DEVUELTOS : number = 415;
       /**
        * Grupo para operar Cheques Devueltos
        */
       public static readonly CHEQUES_DEVUELTOS : string = "CHEQUESDEVUELTOS";

  //     /**
  //      * Grupo para operar iCambiosPro
  //      */
  //     public static readonly I_CAMBIOS_PRO : string = "OPERAET";
       /**
        * Mensaje resp cuando no existe Fed Reference en la tabla cobro
        */
       public static readonly NO_ENC_FED_REF : string = " RECORD NOT IN TABLE: Cobro";
       /**
        * Mensaje resp cuando el Fed Reference no ha sido cargado, existe el registro pero aud_cob = null.
        */
       public static readonly FED_NOT_LOADED : string = "FED NOT LOADED";
  //     /**
  //      * Mensaje resp cuando no existe Registro de la trasnsfer en la tabla m03adictran
  //      */
  //     public static readonly NO_ENC_REG_TRANS : string = " RECORD NOT IN TABLE: m03adictran";

  /**
   * Identificadores de la Fecha valor para Divisas
   */
  public static readonly FECHA_VALOR_HOY: number = 0;
  //     public static readonly FECHA_VALOR_24: number = 24;
       public static readonly FECHA_VALOR_48 : number = 48;
  //     public static readonly FECHA_VALOR_72: number = 72;
  //     public static readonly FECHA_VALOR_96: number = 96;
  //     public static readonly FECHA_VALOR_48_STR : string = "48 HRS";

  public static readonly SUC_MATRIZ : string = 'INMTZ';
  //     public static readonly ESTATUS_LEGADO_SIFF :  number =  5;

  //     public static readonly CUENTA_MEXDOLAR  : string = 'M';

  //     public static readonly CUENTA_TRANSFER : string = 'T';

  //      public static readonly REGIMEN_INVERSION : any[] = [
  //         {regInv:"B", descripcion:"Bloqueado"}, {regInv:"A", descripcion:"Abierto"},
  //         {regInv:"D", descripcion:"Dep. Efvo. R.F."}, {regInv:"R", descripcion:"Restringido"},
  //         {regInv:"I", descripcion:"Congelada x Jurid"}, {regInv:"V", descripcion:"Dep. Efvo. R.F. R.V."},
  //         {regInv:"M", descripcion:"Mancomunada"}, {regInv:"C", descripcion:"Inactivo Baja x Sist"}];

  //     public static readonly MENU_SICA : number= 60;

  //CONSTATES PARA CUENTAS ABC
  public static readonly CLV_BANXICO_BBVBCMER: string = "40012";

  //     /**
  //      * Número trece de tipo "int".
  //      */
  //     public static readonly INT_13 :number = 13;
  // Constantes numéricas
  /**
   * Número cero de tipo "int".
   */
  public static readonly INT_0: number = 0;
  //     /**
  //      * Número cero de tipo "int".
  //      */
  //     public static readonly INT_0 :number = 0;
  //     /**
  //      * Numero 1 de tipo "int".
  //      */
       public static readonly INT_1 :number = 1;

  /**
  * Numero 2 de tipo "int".
  */
  public static readonly INT_2 :number = 2;

  /**
  * Numero 3 de tipo "int".
  */
  public static readonly INT_3 :number = 3;

  /**
  * Numero 4 de tipo "int".
  */
  public static readonly INT_4 :number = 4;

  //     /**
  //      * Numero 5 de tipo "int".
  //      */
  //     public static readonly INT_5 :number = 5;

       /**
        * Numero 6 de tipo "int".
        */
       public static readonly INT_6 :number = 6;
  //     /**
  //      * Numero 7 de tipo "int".
  //      */
  //     public static readonly INT_7 :number = 7;

  //     /**
  //      * Numero 8 de tipo "int".
  //      */
  //     public static readonly INT_8 :number = 8;

  //     /**
  //      * Numero 9 de tipo "int".
  //      */
  //     public static readonly INT_9 :number = 9;

  //     /**
  //      * Numero 10 de tipo "int".
  //      */
  //     public static readonly INT_10 :number = 10;
  //     /**
  //      * Numero 11 de tipo "int".
  //      */
  //     public static readonly INT_11 :number =11;

  /**
  * Numero -1 de tipo "int".
  */
  public static readonly INT_menos1 :number = -1;
  /*
   * Número trece de tipo "int".
   */
  public static readonly INT_13: number = 13;
    
       /**
        * Parámetro para definir si las repetitivas se autorizan.
        */
       public static readonly AUTORIZA_REPETITIVA : string = "AUTORIZA_REPETIT";

 /**
  * Parámetro para definir si las repetitivas se autorizan.
  */
 public static readonly TRANSFER_REQUIRE : string = "TRANSFER_REQUIRE";

  //     /**
  //      * Parámetro para definir el rango permitido para modificar el monto de una operacion
  //      */
  //     public static readonly RANGO_MODIFICA_MONTO_OPE : string = "RANGO_A_MOD";

  /**
   * Cadena para la letra V.
   */
  public static readonly STRING_V: string = 'V';

  /**
   * Cadena para la letra F.
   */
  public static readonly STRING_F: string = "F";

    /**
   * Cadena para la letra E.
   */
     public static readonly STRING_E: string = "E";

       /**
   * Cadena para la letra R.
   */
  public static readonly STRING_R: string = "R";

  //     /**
  //      * El archivo con las propiedades de localización de los idiomas.
  //      */
  //     public static readonly RESOURCE : string = "recursosLenguaje";

  //     /**
  //      * El archivo con las propiedades de localización de los idiomas para bitacora de cambios.
  //      */
  //     public static readonly RESOURCE_BITACORA : string = "recursosBitacora";

  //     /**
  //      * El archivo con las propiedades de localización de los idiomas para seguridad.
  //      */
  //     public static readonly RESOURCE_SEGURIDAD : string = "SeguridadFlex";

  //     /**
  //      * Formato para fecha.
  //      */
      public static readonly DATE_FORMAT : string = "dd/MM/YYYY";
  //     /**
  //      * Banco para pagos mixtos
  //      */
  //     public static readonly BANCO_MIXTO : string = "VARIO";

  //     //Tipos de Pago para Repetitivas de Cuentas
       /**
        * Constante asociad al tipo de cuenta Abono
        */
       public static readonly TIPO_ABONO : string = 'A';

      /**
       * Constante asociad al tipo de cuenta Convenio
       */
      public static readonly TIPO_CONVENIO : string = 'C';

      /**
       * Constante asociad a las Referencias
       */
      public static readonly TIPO_REFERENCIA : string = 'R';

      /**
       * Constante asociad al tipo de cuenta SPEI
       */
      public static readonly TIPO_SPEI : string = 'S';

  //     /**
  //      * Constante asociad al tipo de cuenta SPID
  //      */
  //     public static readonly TIPO_SPID : string = 'D';

      /**
       * Constante asociad al Titular o Beneficiario
       */
      public static readonly TIPO_TITULAR : string = 'T';

  //     /**
  //      * Constante para obtener la IP y el puerto de la tabla i03parametro_general, que se requiere en el metodo
  //      * para encriptar el codigo de alta de las repetitivas de cuenta para clientes de banco.
  //      */
  //     public static readonly ENCRYPT_IP : string = 'DATOS_IP';

  //     /**
  //      * Constante para obtener la IP y el puerto de la tabla i03parametro_general, que se requiere en el metodo
  //      * para encriptar el codigo de alta de las repetitivas de cuenta para clientes de banco.
  //      */
  //     public static readonly CLAVE_INTERBANCO : string = 'INTERBANCO';

  //     /**
  //      * Ancho por defecto para los botones de las alertas
  //      */
  //     public static readonly ALERT_BTN_WIDTH : number = 74;

  //     /**
  //      * Identificador para el tipo de cliente corporativo para los contratos de SABI.
  //      **/
  //     public static readonly ID_CLIENTE_CORPORATIVO_CB : number = 3;

  //     /**
  //      * Indicadores segun la tabla de i15edoctainidicadores
  //      */
  //     public static readonly ORDEN_TCFIX_USD :number = 1;
  //     public static readonly ORDEN_IPC :number = 2;
  //     public static readonly ORDEN_DOW_JONES :number = 3;
  //     public static readonly ORDEN_S_AND_P_500 :number = 4;
  //     public static readonly ORDEN_CETES_28_DIAS :number = 5;
  //     public static readonly ORDEN_PORCENT_INFLACION :number = 6;
  //     public static readonly DESCRIPCION_TCFIX_USD : string = 'TCFIX USD';
  //     public static readonly DESCRIPCION_IPC : string = 'IPC';
  //     public static readonly DESCRIPCION_DOW_JONES : string = 'DOW JONES';
  //     public static readonly DESCRIPCION_S_AND_P_500 : string = 'S&P 500';
  //     public static readonly DESCRIPCION_CETES_28_DIAS : string = 'CETES 28';
  //     public static readonly DESCRIPCION_PORCENT_INFLACION : string = 'INFLACION';

  //     public static readonly DOCUMENTO_MIGRATORIO_FM2 : string = 'FM2';
  public static readonly DOCUMENTO_MIGRATORIO_FM3 : string = 'FM3';
  public static readonly RFC : string = 'RFC';
  public static readonly NSS : string = 'NSS';

  //     public static readonly CAL_INMIGRADO_S : string = 'S';
  //     public static readonly CAL_INMIGRADO_N : string = 'N';
  //     /**
  //      * Tipo de Envios definidos en la tabla i00tipo_envio_edo para estado contrato banco
  //      * */
  //     public static readonly TENID_CONTRATO_BANCO : number = 12;
  //     /**
  //      * Tipo de Envios definidos en la tabla i00tipo_envio_edo para estado cuenta banco
  //      * */
  //     public static readonly TENID_ESTADO_CUENTA_BANCO : number = 13;
  //     /**
  //      * Tipo de Envios definidos en la tabla i00tipo_envio_edo para tdc
  //      * */
  //     public static readonly TENID_ESTADO_TDC : number = 22;
  //     /**
  //      * Tipo de Envios definidos en la tabla i00tipo_envio_edo para trabajo banco
  //      * */
  //     public static readonly TENID_TRABAJO_BANCO : number = 14;
  //     /**
  //      * Tipo de Envios definidos en la tabla i00tipo_envio_edo para extranjero banco
  //      * */
  //     public static readonly TENID_EXTRANJERO_BANCO : number = 15;
  //     /**
  //      * Tipo de Envios definidos en la tabla i00tipo_envio_edo para otros banco
  //      * */
  //     public static readonly TENID_OTROS_BANCO : number = 16;
  //     /**
  //      * Descripcion para el tipo de Envio  definidos en la tabla i00tipo_envio_edo para otros banco
  //      * */
     public static readonly TEN_DESCRIP_FACTURA : string = "FACTURA";

  /**
   * Constante de la clave BANXICO para el banco  BANREGIO
   **/
  public static readonly CLV_BANXICO_BANREGIO: string = '40058';

      /**
       * Constante de la clave BANXICO para el banco  BANNORTE
       **/
      public static readonly CLV_BANXICO_BANORTE : string = '40072';

  /**
   * Constante de la clave BANXICO para el banco  INTERBANCO
   **/
  public static readonly CLV_BANXICO_INTERBANCO: string = '40136';

  //     /**
  //      * Codigo de error por cambios/autorizaciones pendientes.
  //      **/
  //     public static readonly ID_ERROR_CAMBIOS_PENDIENTES : string = "3014";

  //     /**
  //      * Codigo de error por cambios/autorizaciones pendientes.
  //      **/
  //     public static readonly ID_ERROR_REQUERIDOS_CONTRATO : string = "3021";

      /**
        * Clave InterBanco sica
        **/
       public static readonly CLV_INTERBANCO_SICA : string = 'INBMN';

  //     /**
  //      * Tipo de Envios definidos en la tabla i00tipo_envio_edo para estado cuenta SEGUROS
  //      * */
  //     public static readonly TENID_ESTADO_CONTRATO_SEGURO : number = 31;
  //     /**
  //      * Tipo de Envios definidos en la tabla i00tipo_envio_edo para OTROS cuenta SEGUROS
  //      * */
  //     public static readonly TENID_ESTADO_OTROS_SEGURO : number = 32;

  //     /**
  //      * Clave InterBanco Dolares
  //      **/
    public static readonly CLV_INTERBANCO_USD : string = 'INBUS';

  //     /**
  //      * Clave
  //      S
  //      **/
    public static readonly CLV_INTERBANCO_EUR : string = 'INBEU';

  //     /**
  //      * Obtiene la deascripcion de los estatus de las solicitudes de pago por adelantado
  //      */
  //     // public static descSolPxAdelantado(estatus : Number) : string {
  //     //     var desEstatus: string;
  //     //     switch(estatus){
  //     //         case 0:
  //     //             desEstatus = ResourceManager.getInstance().getString(Const.RESOURCE, 'solicitud.auto');
  //     //             break;
  //     //         case 1:
  //     //             desEstatus = ResourceManager.getInstance().getString(Const.RESOURCE, 'proceso.auto');
  //     //             break;
  //     //         case 2:
  //     //             desEstatus = ResourceManager.getInstance().getString(Const.RESOURCE, 'autorizado');
  //     //             break;
  //     //         case 3:
  //     //             desEstatus = ResourceManager.getInstance().getString(Const.RESOURCE, 'rechazado');;
  //     //             break;
  //     //     }

  //     //     return  desEstatus;
  //     // }

  //     /**************************************************
  //      * Constanes de Reportes
  //      ***************************************************/
  //     /**
  //      *
  //      **/
  //     public static readonly REPORTE_BANCO_REGISTRO_FIRMA : number = 41
  //     /**
  //      *
  //      **/
  //     public static readonly REPORTE_BANCO_CLIENTE : number = 42;
  //     /**
  //      *
  //      **/
  //     public static readonly REPORTE_BANCO_FORMATO_CONOCIMIENTO_CLIENTE : number = 43;
  //     /**
  //      *
  //      **/
  //     public static readonly REPROTE_BANCO_SOLICITUD_CUENTA : number = 44;

  //     // CODIGOS DE MENSAJES DE ERROR
  //     /**
  //      * Clave del archivo mensajessistema.properties.
  //      * Hace referencia al mensaje "Error al generar la BITACORA" con un par&aacute;metro de entrada.
  //      */
  //     public static readonly ERROR_BITACORA_1 : string = "116";

  //     //CONSTANTES GENERALES
  //     /**
  //      * Codigo abreviado para NO (N)
  //      */
  //     public static readonly NO : string = "N";
  //     /**
  //      * Codigo abreviado para SI (S)
  //      */
    public static readonly SI : string = "S";

  //     /**
  //      * Formato de letra en color rojo
  //      */
  //     public static readonly FONT_ROJO: string  = "<font color='#FF0000'>X</font>";

  //     /**
  //      * Formato de letra en color verde
  //      */
  //     public static readonly FONT_VERDE: string  = "<font color='#008000'>X</font>";

  //     /**
  //      * Formato de letra en color negro
  //      */
  //     public static readonly FONT_NEGRO: string  = "<font color='#000000'>X</font>";

  //     /**
  //      * Lista de meses del Año
  //      */
  //     public static readonly LST_MESES: any[] = [{clvMes : 1, descMes : 'ENERO'},
  //         {clvMes : 2, descMes : 'FEBRERO'}, {clvMes : 3, descMes : 'MARZO'}, {clvMes : 4, descMes : 'ABRIL'},
  //         {clvMes : 5, descMes : 'MAYO'}, {clvMes : 6, descMes : 'JUNIO'}, {clvMes : 7, descMes : 'JULIO'},
  //         {clvMes : 8, descMes : 'AGOSTO'}, {clvMes : 9, descMes : 'SEPTIEMBRE'}, {clvMes : 10, descMes : 'OCTUBRE'},
  //         {clvMes : 11, descMes : 'NOVIEMBRE'}, {clvMes : 12, descMes : 'DICIEMBRE'}];

  //     /**
  //      * Lista de negocios para el reporte de comisiones
  //      */
  //     public static readonly LST_NEGOCIOS_COM:any[] = [{clvNeg : 1, descNeg : 'DIVISAS'},
  //         {clvNeg : 2, descNeg : 'BONO FONDOS'}, {clvNeg : 3, descNeg : 'BONO PATRIMONIAL'},
  //         {clvNeg : 4, descNeg : 'INTEGRAL'},{clvNeg : 5, descNeg : 'BONO SEGUROS'},{clvNeg : 6, descNeg : 'TODOS'},
  //         {clvNeg : 7, descNeg : 'FONDOS BANCO'}];

  //     /**
  //      * Url accesible desde servlet para el reporte de comisiones
  //      */
  //     public static readonly URL_REPORT_COMISIONES : string = "../ReportComisionesFrame.jsp";

  /**
  * Cadena vacia
  */
  public static readonly STR_EMPTY : string = "";
  //     /**
  //      * Caracter separador para los mensajes del store procedures
  //      * */
  //     public static readonly SEPARADOR_STORE_PROCEDURES : string = ';';
  //     /**
  //      * Archivo con las propiedades de los nombres de pantalla y nombres de campos
  //      * */
  //     public static readonly RESOURCE_PANTALLAS : string = "camposPantallas";

  /**
   * Numero de digitos de la cuenta origen que se imprimen en la factura.
   */
  public static readonly TAMANIO_CUENTA_ORIGEN: number = 4;

  /**
   * Numero de caracteres que puede contener la Cadena Original que se presenta en la factura
   */
  public static readonly MAX_LONG_CAD_FORMA_PAGO: string = 'MAX_CAD_FORMAPAG';


  /**
   * 
   */

  public static readonly BCO_NO_EXIGE_CTA: string ='BCO_NO_EXIGE_CTA';

  /**
   * Numero de caracteres que puede contener la Cadena de instrucciones
   */
  public static readonly MAX_LONG_CAD_INSTRUCCIONES: number = 148;

  /**
   * Longitud de la cadena de impresion forzada
   */
  public static readonly LONG_CAD_IMPRESION_F: number = 17;

  //     /**
  //      * Descripción del DS para InterBanco
  //      */
  //     public static readonly BANCODS : string = "SICCBD";

  /**
   * Clave de la tabla de tablas para identificar registros de clientes registrados con pagos pendientes
   */
  public static readonly CLV_TAB_PAGOS_PENDIENTES: number = 920;

  /**
   * Clave del estatus activo de los registros de las tablas de tablas
   */
  public static readonly STA_TAB_ACTIVO: string = '1';

  //     /**
  //      * Imagen usada para la entrevista de prospecto.
  //      */
  //     public static readonly IMAGEN_PROSPECTO : string = '../assets/entrevistaProspecto.jpg';

  //     /**
  //      * gjesus 17/12/13
  //      * Parametro para opbtener el tipo de cuestionario P fisica de i09parametro
  //      **/
  //     public static readonly PerFisicaEntrevista : string = "ENT_UNICA_PFISIC";

  //     /**
  //      *  gjesus 17/12/13
  //      * Parametro para opbtener el tipo de cuestionario P Moral de i09parametro
  //      **/
  //     public static readonly PerMoralEntrevista : string = "ENT_UNICA_PMORAL";

  /**
   * Constante que indica dentro del campo "codigo" en ResultadoVO(Usado en Cargo/Abono Banco),
   * cuando la operación en el StoredProcedure fué exitosa.
   */
  public static readonly CODIGO_CORRECTO: string = '000000';

  //     /**
  //      * Constante que indica dentro del campo "codigo" en ResultadoVO(Usado en Cargo/Abono Banco),
  //      * cuando la operación en el StoredProcedure fué liquidada.
  //      */
  public static readonly CODIGO_LIQUIDACION : string = '000007';

  //     /**
  //      * Constatntes de tipos de movimiento en Instrucciones de Liquidación.
  //      * Estos valores pueden estar presentes en el atributo tipMov de OperacionInstruccionVO.
  //      */
       public static readonly ID_ABONO_CUENTA : number = 1;
       public static readonly ID_CARGO_CUENTA : number = 2;
       public static readonly ID_TRASPASO : number = 3;
       public static readonly ID_CARGO_SPEI : number = 4;
       public static readonly ID_CARGO_SERVICIO : number = 5;
       public static readonly ID_CARGO_PAGO_SERVICIO : number = 6;
       public static readonly ID_CARGO_TAE : number = 8;
       public static readonly ID_TRASFER_INTER : number = 9;
			public static readonly ID_TRANSFER_POR_ARCHIVO : number = 10;
			public static readonly ID_CARGO_OPERACION_DIVISA : number = 11;

  //     /**
  //      * Clave de la entidad cuando sea una persona moral extranjera y
  //      * estos campos sean editables.
  //      */
  //     public static readonly ID_ENT_CLAVE : number = 99;

  //     /**
  //      * Clave por defecto de la Localidad o Municipio cuando sea una persona moral extranjera y
  //      * estos campos sean editables.
  //      */
  //     public static readonly ID_PEM_LOCALIDAD : string = '99999999';

  //     /**================================================
  //      * CONSTATNTES USADAS EN TESORERIA
  //      ================================================*/
  public static readonly GRUPO_ESTATUS_TESO: string = 'TE';

  public static readonly INSTRUCCION_AUTORIZADA: string = 'IA';
  public static readonly INSTRUCCION_PENDIENTE: string = 'IP';
  public static readonly INSTRUCCION_CANCELADA: string = 'IC';
  public static readonly INSTRUCCION_LIQUIDADA: string = 'IL';
  public static readonly INSTRUCCION_GENERADA: string = 'IG';
  public static readonly INSTRUCCION_DETENIDA: string = 'ID';
  public static readonly INSTRUCCION_DEVUELTA: string = 'IV';
  public static readonly INSTRUCCION_REVISION: string = 'IR';
  public static readonly INSTRUCCION_MODIFICADA: string = 'IM';
  public static readonly INSTRUCCION_PROTEGIDO: string = 'IO';
  public static readonly INSTRUCCION_CUMPLIMIENTO: string = 'IU';
  public static readonly INSTRUCCION_ENMIENDA: string = 'IE';
  public static readonly INSTRUCCION_PRE_AUTORIZADA: string = 'AP';
  public static readonly INSTRUCCION_SOL_ENMIENDA: string = 'IN';
  public static readonly FORMATO_TRASPASO: string = 'INTERBANCO TRASPASOS';

  public static readonly TRANSPASO_FIN_DE_DIA: string = 'TF';
  public static readonly REFRESCAR_FIN_DE_DIA: string = 'RF';
  public static readonly REASIGNACION_FIN_DE_DIA: string = 'RFD';

  //     public static readonly ALTA_CUENTA : string = 'ALTA_CUENTA';

  /**
   * Estatus activo para la tabla de tablas
   */
  public static readonly AUT_ACTIVO: number = 1;

  /**
   * Estatus inactivo para la tabla de tablas
   */
  public static readonly AUT_INACTIVO: number = 3;

  /**
   * Id del Formato de Salida de la configuracion del layout para Spei Participante a Tercero.
   */
  public static readonly FORMATO_ID_SPEI: number = 17;

  //     /**
  //      * Id del Formato para generar el layout de Movimientos Intercam.
  //      */
  //     public static readonly FORMATO_ID_MOVIMIENTOS_INTERCAM : number = 105;

  //     /**
  //      * Id de cargo, de la columna MovNatura.
  //      */
  //     public static readonly MOV_NATURA_CARGO : string = "1";

  //     /**
  //      * Id de cargo, de la columna MovNatura.
  //      */
  //     public static readonly MOV_NATURA_ABONO : string = "2";

  //     /**
  //      * Id de tipo de Consulta C1.
  //      */
  //     public static readonly TIPO_DE_CONSULTA_C1 : string = "C1";

  //     /**
  //      * Id de tipo de Consulta C2.
  //      */
  //     public static readonly TIPO_DE_CONSULTA_C2 : string = "C2";

  //     /**
  //      * PerId Interbanco.
  //      */
  //     public static readonly PER_ID_INTERBANCO : number = 354944;
  /**
   * Identificador de empresa Banco Intercam
   */
  public static readonly EMPRESA_INTERCAM_BANCO: number = 292662;
      /**
       * IDENTIFICADOR INTERBANCO.
       */
  public static readonly BANCO_INTERBANCO: number = 46;

  //     /**
  //      * Constante para encontrar la descripcion de FONDOS en la tabla i03empresas.
  //      */
  //     public static readonly EMP_FONDOS : string = 'EMP_FONDOS';

  /**
   * ESTATUS AUTORIZACION MANUAL
   */
  public static readonly AUTORIZACION_MANUAL: string = 'AUTMAN';

  /**
   * Valor del BANXICO
   * */
  public static readonly BANCO_BANXICO: number = 1;

  //     /**
  //      * Valor del BANXICO
  //      * */
  //     public static readonly BANCO_STANDARCHARTERED : number = 95;

  /**
   * Divisa para reasignacion de transferencias
   * */
  public static readonly DIVISA_USD_TRANSFERENCIAS : string = 'USD';

  //     /**
  //      * Divisa para transferencianumberernacional Euro
  //      * */
  //     public static readonly DIVISA_EUR_TRANSFERENCIAS : string = 'EUR';

  //     /**
  //      * Nombre del evento lanzado para un movimiento de tesoreria.
  //      * Principalmente para guardarlos (Abono, Retiro, Traspaso ...).
  //      */
  //     public static readonly EVENT_MOVIMIENTOS : string = 'movimientosTesoreria';
  //     public static readonly NO_OPERATIVA : string = 'F';
  //     public static readonly OPERATIVA : string = 'V';

  //     /**
  //      * Remesas
  //      * */
  public static readonly OPERACION_REMESA: string = 'REM';

  //     /**
  //      * Valor de cadena "SI"
  //      * */
  //     public static readonly SI_CADENA : string = "SI";

  //     /**
  //      * Valor de cadena "NO"
  //      * */
  //     public static readonly NO_CADENA : string = "NO";

  //     /**
  //      * Numero Puesto de la tabla CLPUESTO para JUBILADO/PENSIONADO
  //      * */
  //     public static readonly JUBILADO_PENSIONADO : string = "006";
  //     /**
  //      * Numero Generico indicando que no tiene un puesto de CLPUESTO
  //      * */
  //     public static readonly SIN_PUESTO : string = "000";

  //     //Tipos de Perfil Operador para LUMINA
  //     public static readonly PERFIL_SUPERVISOR : string = "SUPERVISOR";
  //     public static readonly PERFIL_CLIENTE : string = "CLIENTE";
  //     public static readonly PERFIL_CUENTA_PROPIA : string = "CUENTA PROPIA";
  //     public static readonly PERFIL_FORMADOR_MERCADO : string = "FORMADOR DE MERCADO";
  //     /**
  //      * Valor del ID de la tabla i00canal para BACKOFFICE
  //      * */
  //     public static readonly CANAL_BACKOFFICE : number = 2;
  //     /**
  //      * Clave postfijo para LUMINA
  //      * */
  //     public static readonly POSTFIJO_LUMINA : string = "IMTZ2";
  //     //Tipos Reporte y Notificacion para LUMINA
  //     public static readonly TIPO_NOTIFICATION : string = "NOTIFICATION";
  //     public static readonly TIPO_REPORT : string = "REPORT";
  //     public static readonly TIPO_NOTIFICATION_ESP : string = "NOTIFICACION";
  //     public static readonly TIPO_REPORT_ESP : string = "REPORTE";
  //     /**
  //      * Separador para varias direcciones de e-mail
  //      * */
  //     public static readonly SEPARADOR_EMAIL : string = ';';
  //     //Lenguajes para Notificaciones LUMINA
  //     public static readonly SPANISH : string = "SPANISH";
  //     public static readonly ENGLISH : string = "ENGLISH";
  //     public static readonly SPANISH_ESP : string = "ESPAÑOL";
  //     public static readonly ENGLISH_ESP : string = "INGLES";
  //     //Tipos de Medios LUMINA
  //     public static readonly MEDIO_MAIL : string = "MAIL";
  //     public static readonly MEDIO_FAX : string = "FAX";
  //     public static readonly MEDIO_PRINTER : string = "PRINTER";
  //     public static readonly MEDIO_NONE : string = "NONE";
  //     public static readonly MEDIO_MAIL_ESP : string = "CORREO";
  //     public static readonly MEDIO_FAX_ESP : string = "FAX";
  //     public static readonly MEDIO_PRINTER_ESP : string = "IMPRESO";
  //     public static readonly MEDIO_NONE_ESP : string = "NINGUNO";

  //     // Catalogos Generales de la aplicacion
  //     public static readonly CAT_TIPO_LIQUIDACION: string = "CAT_TIPO_LIQUIDACION";
  //     public static readonly CAT_DIVISAS: string = "CAT_DIVISAS";
  //     public static readonly CAT_TIPO_CUENTA: string = "CAT_TIPO_CUENTA";
  //     public static readonly CAT_PAISES: string = "CAT_PAISES";
  //     public static readonly CAT_PERSONAS: string = "CAT_PERSONAS";
  //     public static readonly CAT_CATEGORIA_EXTRANJERA: string = "CAT_CATEGORIA_EXTRANJERA";
  //     public static readonly CAT_ENTIDADES: string = "CAT_ENTIDADES";
  //     public static readonly CAT_PERFILES: string = "CAT_PERFILES";
  //     public static readonly CAT_CLASIF_GENERAL: string = "CAT_CLASIF_GENERAL";
  //     public static readonly CAT_PUESTO: string = "CAT_PUESTO";
  //     public static readonly CAT_MOT_APERTURA: string = "CAT_MOT_APERTURA";
  //     public static readonly CAT_CATEG_CTTO: string = "CAT_CATEG_CTTO";

  //     /**
  //      * Categoria ISR de Exento (campo categoryName)
  //      * */
  //     public static readonly ID_ISR_EXENTO : string = "86";
  //     /**
  //      * Categoria ISR de Exento Nacional (campo categoryName)
  //      * */
  //     public static readonly ID_ISR_EXENTO_NACIONAL : string = "02";

  //     /**
  //      * Grupo CINTERNO de POS
  //      * */
  //     public static readonly GRUPO_CINTERNO : string = "CINTERNO";
  //     /**
  //      * Grupo CRIESGO de POS
  //      * */
  //     public static readonly GRUPO_CRIESGO : string = "CRIESGO";

  //     /**
  //      * Grupo CRIESGO de POS
  //      * */
  //     public static readonly GRUPO_RIESGO : string = "RIESGO";

  //     /**
  //      * tipo impresion valores de administracion
  //      * */
  //     public static readonly TIPO_IMPRESION_VALORES : string = "V";
  //     /**
  //      * tipo impresion liquidable al vencimiento
  //      * */
  //     public static readonly TIPO_IMPRESION_LIQUIDABLE : string = "L";

  //     //-------------------------
  //     //    Prospeccion
  //     //-------------------------

  //     /**
  //      *    Constante <code>Const.PERSONA_FISICA</code> define el valor de
  //      *  la propiedad <code>tipoPersona</code> para persona Fisica.
  //      **/
  //     public static readonly OPCION_PERSONA_FISICA: string = "FISICA";

  //     /**
  //      *    Constante <code>Const.PERSONA_MORAL</code> define el valor de
  //      *  la propiedad <code>tipoPersona</code> para persona Moral.
  //      **/
  //     public static readonly OPCION_PERSONA_MORAL: string = "MORAL";

  //     /**
  //      *    Constante <code>Const.PERSONA_FISICA_MORAL</code> define el valor de
  //      *  la propiedad <code>tipoPersona</code> para ambos tipos de persona.
  //      **/
  //     public static readonly OPCION_PERSONA_FISICA_MORAL: string = "FISICA/MORAL";

  //     /**
  //      *    Constante <code>Const.OPCION_CASA_BOLSA</code> define el valor de
  //      *  la propiedad <code>tipoNegocio</code> para el negocio Casa de Bolsa.
  //      **/
  //     public static readonly OPCION_CASA_BOLSA: string = "CASA DE BOLSA";

  //     /**
  //      *    Constante <code>Const.OPCION_DIVISAS</code> define el valor de
  //      *  la propiedad <code>tipoNegocio</code> para el negocio Divisas.
  //      **/
  //     public static readonly OPCION_DIVISAS: string = "DIVISAS";

  //     /**
  //      *    Constante <code>Const.OPCION_FONDOS_INVERSION</code> define el valor de
  //      *  la propiedad <code>tipoNegocio</code> para el negocio Fondos de Inversion.
  //      **/
  //     public static readonly OPCION_FONDOS_INVERSION: string = "FONDOS DE INVERSION";

  /**
  *  Constante <code>Const.OPCION_BANCO</code> define el valor de
  *  la propiedad <code>tipoNegocio</code> para el negocio Banco.
  **/
  public static readonly OPCION_BANCO: string = "BANCO";

  //     /**
  //      *  Constante <code>Const.OPCION_FIDEICOMISO</code> define el valor de
  //      *  la propiedad <code>tipoNegocio</code> para el negocio FIDEICOMISO.
  //      **/
  //     public static readonly OPCION_FIDEICOMISO: string = "FIDEICOMISO";

  //     /**
  //      *    Constante <code>Const.PERSONA_FISICA_MORAL</code> define el valor de
  //      *  la propiedad <code>idTipoPersonaFisicaMoral</code>.
  //      **/
  //     public static readonly PERSONA_FISICA_MORAL: string= 'FM';

  /**
   *    Constante <code>Const.ESTATUS_NEGOCIO_LIBRE</code> define el valor de
   *  la propiedad <code>estatusNegocioLibre</code>.
   **/
  public static readonly ESTATUS_NEGOCIO_LIBRE: string = 'LIBRE';

  //     /**
  //      * Constante <code>Const.ID_TIPO_DIRECCION_OTRO</code>.
  //      * Define el valor de la propiedad <code>TipoDireccionVO.tdiId</code> para el
  //      * tipo <code>OTRO</code>.
  //      **/
  //     public static readonly ID_TIPO_DIRECCION_OTRO:number = 6;

  /**
  * Constante <code>Const.ID_ESTADO_PIPELINE_PROSPECTO</code>.
  * Define el valor de la propiedad <code>EdoPipelineVO.epiId</code> para el
  * estatus <code>PROSPECTO</code>.
  **/
  public static readonly ID_ESTADO_PIPELINE_PROSPECTO: number = 1;

  //     /**
  //      * Estado del prospecto visitado en el pipeline
  //      */
  //     public static readonly ID_ESTADO_PIPELINE_VISITADO: number = 2;

  /**
  * Estado del prospecto cliente en el pipeline
  */
  public static readonly ID_ESTADO_PIPELINE_CLIENTE: number = 3;

  //     /**
  //      * Estado del prospecto cerro operacion en el pipeline
  //      */
  //     public static readonly ID_ESTADO_PIPELINE_CERRO: number = 4;

  //     /**
  //      * Estado del prospecto no prospero en el pipeline
  //      */
  //     public static readonly ID_ESTADO_PIPELINE_NO_PROSPERO: number = 5;

  /**
  * Estado del contrato 13 Revision Promotor
  */
  public static readonly ID_ESTADO_CONTRATO_REV_PROMOTOR: number = 13;

  /**
   * Constante <code>Const.CHAR_SPLIT_PUESTO</code>.
   * Define el caracter separador de los puestos almacenados en el campo "puesto" de la tabla "i00catmanager"
   **/
  public static readonly CHAR_SPLIT_PUESTO: string = ",";

  //     /**
  //      * Cadena de coma y espacio.
  //      */
      public static readonly STRING_COMMA_SPACE = ", ";

  //     /**
  //      * Cadena con un espacio.
  //      */
      public static readonly STRING_SPACE = " ";

  //     /**
  //      * Constante <code>Const.STATUS_UNO_BOTON</code>.
  //      * Define el status gardar de un boton
  //      **/
  //     public static readonly STATUS_UNO_BOTON: string = "GUARDAR";

  //     /**
  //      * Constante <code>Const.STATUS_DOS_BOTON</code>.
  //      * Define el status actualizar de un boton
  //      **/
  //     public static readonly STATUS_DOS_BOTON: string = "ACTUALIZAR";

  //     /**
  //      * Constante <code>Const.TIPO_USUARIO_PROVEDOR</code>.
  //      * Define el TIPO DE USUARIO  PROVEEDOR
  //      **/
  //     public static readonly TIPO_USUARIO_PROVEEDOR : number = 1;

  //     /**
  //      * Constante <code>Const.TIPO_USUARIO_EMPLEADO</code>.
  //      * Define el TIPO DE USUARIO EMPLEADO
  //      **/
  //     public static readonly TIPO_USUARIO_EMPLEADO : number = 2;

  //     /**
  //      * Constante <code>Const.TIPO_USUARIO_CLIENTE</code>.
  //      * Define el TIPO DE USUARIO CLIENTE
  //      **/
  //     public static readonly TIPO_USUARIO_CLIENTE : number = 3;

  //     /**
  //      * Constante <code>Const.TIPO_MANAGER_COMITE</code>.
  //      * Define el TIPO DE MANAGER COMITE
  //      **/
  //     public static readonly TIPO_MANAGER_COMITE : number = 1;

  //     /**
  //      * Constante <code>Const.TIPO_MANAGER_COMITE</code>.
  //      * Define el TIPO DE MANAGER MARSHALL
  //      **/
  //     public static readonly TIPO_MANAGER_MARSHALL : number = 2;

  //     /**
  //      * Constante <code>Const.TIPO_MANAGER_COACH</code>.
  //      * Define el TIPO DE MANAGER COACH
  //      **/
  //     public static readonly TIPO_MANAGER_COACH : number = 3;

  //     //Estatus del contrato para bloquear/cancelar la cuenta
  //     public static readonly TIPO_OPER_BLOQUEO : number = 3; //INACTIVO
  //     public static readonly TIPO_OPER_CANCELACION : number = 8; //BAJA AUTORIZADA
  //     public static readonly TIPO_OPER_ACTIVACION : number = 1; //ACTIVO
  //     public static readonly TIPO_OPER_PROSPECTO : number = 0; //POSPECTO
  //     public static readonly TIPO_OPER_CICLICO : number = 2; //CICLICO
  //     public static readonly TIPO_OPER_OFAC : number = 4; //OFAC
  //     public static readonly TIPO_OPER_COMITE : number = 5; //COMITE
  //     public static readonly TIPO_DISPONIBLES : number = 6; //DISPONIBLE
  //     public static readonly TIPO_OPER_NO_OPERABLE : number = 7; //NO OPERABLE
  //     public static readonly TIPO_OPER_DEPURACION : number = 9; //DEPURACION
  //     public static readonly TIPO_OPER_REV_CONTROL : number = 11; //REV CONTROL
  //     public static readonly TIPO_OPER_BAJA_AUTORIZADA : number = 8; //BAJA AUTORIZADA

  //     /**
  //      * grupos para la administracion de precios REUTERS
  //      */
  //     public static readonly GPOS_ADMON_PRECI : string = "GPOS_ADMON_PRECI";

  //     /**
  //      * grupos para la administracion de Metales
  //      */
  //     public static readonly GPO_ADMON_METALES: string = "GPO_ADMON_METALE";

  //     /**
  //      * grupos para la administracion de Divisas
  //      */
  //     public static readonly GPO_ADMON_DIVISAS: string = "GPOS_DIVISAS";

  //     //CONSTANTES CON RESPECTO A LOS DIFERENTES ESTATUS FIX QUE MANEJA PRECIOS REUTERS
  //     /**
  //      * Contante que especifica que el estatus es activo
  //      */
  //     public static readonly REUTERS_ACTIVO : string = "Activo";
  //     /**
  //      * Contante que especifica que el estatus es sin conexion
  //      */
  //     public static readonly REUTERS_SIN_CONEXION : string = "noConexion";
  //     /**
  //      * Contante que especifica que el estatus es desconectado
  //      */
  //     public static readonly REUTERS_DISCONNECT : string = "Desconectado";
  //     /**
  //      * Contante que especifica que el ric (divisa) a consumir o
  //      * contribuir no esta dado de alta en Reuters
  //      */
  //     public static readonly REUTERS_NO_EXISTE : string = "noExiste";
  //     /**
  //      * Constante que especifica que el estatus de ese ric (divisa)
  //      * por el momento no esta disponible
  //      */
  //     public static readonly REUTERS_SUSPENDIDA : string = "suspendida";

  //     /**
  //      *
  //      **/
  //     public static readonly FIX_ACTIVO: string = "Active";

  //     /**
  //      *
  //      **/
  //     public static readonly FIX_SIN_CONEXION: string = "sinConexion";

  //     /**
  //      *
  //      **/
  //     public static readonly FIX_DISCONNECT: string = "Disconnect";

  //     /**
  //      *
  //      **/
  //     public static readonly ACTION_REQUEST_CONEXION: string = "Connect";

  //     /**
  //      *
  //      **/
  //     public static readonly ACTION_REQUEST_DISCONNECT: string = "Disconnect";

  //     /**
  //      *
  //      **/
  //     public static readonly ACTION_REQUEST_STATE: string = "StateActionRequest";

  //     /**
  //      *
  //      **/
  //     public static readonly STATE_REQUEST_CONEXION: string = "Connect";

  //     //***********************
  //     //
  //     //  ESTATUS REFERENCIACION
  //     //
  //     //***********************
  //     /**
  //      *Constante que especifica que el estatus de la solicitud es "SOLICITUD CLIENTE REFERENCIADO"
  //      */
  //     public static readonly REFERENCIACION_EDO_SOLICITUD_CR :number = 1;
  /**
  *Constante que especifica que el estatus de la solicitud es "SOLICITUD REFERENCIACION CLIENTE "
  */
  public static readonly REFERENCIACION_EDO_SOLICITUD_RC :number = 2;
  /**
  *Constante que especifica que el estatus de la solicitud es "TOMADO"
  */
  public static readonly REFERENCIACION_EDO_TOMADO :number = 3;
  //     /**
  //      *Constante que especifica que el estatus de la solicitud es "NO PROSPERO"
  //      */
       public static readonly REFERENCIACION_EDO_NO_PROSPERO :number = 4;

  //     //*********************************************************************************
  //     //
  //     // ESTADO SOLICITUD PROCESADO - NO PROCESADO
  //     //
  //     //*********************************************************************************
  //     /***
  //      *Constante que especifica que el estatus_proceso no se ha realizado
  //      */
  //     public static readonly REFERENCIACION_NO_PROCESADO :number = 0;

  /***
  *Constante que especifica que el estatus_proceso se ha realizado
  */
  public static readonly REFERENCIACION_PROCESADO :number = 1;

  //     //*********************************************************************************
  //     //
  //     // TIPO SOLICITUD
  //     //
  //     //*********************************************************************************

  /**
  *Constante que especifica que el tipo de solicitud es "SOLICITUD CLIENTE REFERENCIADO"
  */
  public static readonly REFERENCIACION_TIP_SOLICITUD_CR : string = "CR";
  //     /**
  //      *Constante que especifica que el tipo de solicitud es "SOLICITUD REFERENCIACION CLIENTE "
  //      */
  //     public static readonly REFERENCIACION_TIP_SOLICITUD_RC : string = "RC";

  //     /**
  //      * Constante que especifica que el proceso de respuesta fue hecho por el promotor
  //      */
  //     public static readonly REFERENCIACION_PROCESADO_PROM : string = "PROM";
  //     /**
  //      * Evento que se propaga cuando alguno de los componentes ha cambiado o ha sido seleccionado o modificado.
  //      * Utilizado para los componentes que se crean de forma dinamica, como los de Cuestionario y Contrato.
  //      */
  //     public static readonly CHANGE_EVENT : string = 'changeEvent';

  //     /**
  //      * Evento utilizado para indicar que un objeto ha sido guardado.
  //      */
  //     public static readonly SAVE_EVENT : string = 'saveEvent';

  //     public static readonly SAVE_EVENT_PERFILSI : string = 'saveEventPerfilSI';

  //     public static readonly NUM_INTENTOS_CUESTIONARIO: number = 3;

  //     /**
  //      * Especifica las categorias extranjeras para PM.
  //      */
  //     public static readonly CATEGORIAS_EXTRANJERAS : Array<number> =
  //         [Const.ID_PERSONA_MORAL_EXTRANJERA,Const.ID_ENTIDAD_FINANCIERA_EXTERIOR];

  //     /**
  //      * Url accesible desde servlet para carta de condiciones crediticias
  //      */
  //     public static readonly URL_CARTA_CONDICIONES_CREDITO : string = "../CartaCondCredito.jsp";

  //     /**
  //      * Perfil en i00perfil_inversion para <<No opera mercado de dinero>> de Banco.
  //      */
  //     public static readonly NO_OPERA_MD :number = 7;
  //     /**
  //      * Tipo de Cuenta CLIC EXPRESS de Banco INTERCUENTA EXPRESS
  //      */
  //     public static readonly TIPO_CUENTA_CLIC_EXPRESS : string = 'INTERCUENTA EXPRESS';
  //     /**
  //      * Tipo de Cuenta CLIC EXPRESS de Banco en USD INTERCUENTA EXPRESS USD
  //      */
  //     public static readonly TIPO_CUENTA_CLIC_EXPRESS_USD : string = 'INTERCUENTA EXPRESS USD';
  //     /**
  //      * Tipo de Cuenta CLIC EXPRESS de Banco =INTERCUENTA EXPRESS
  //      */
  //     public static readonly ID_TIPO_CUENTA_CLIC_EXPRESS : string = '19';

  //     /**
  //      * Tipo de Cuenta ENLACE de Banco en USD =INTERCUENTA ENLACE USD
  //      */
  //     public static readonly TIPO_CUENTA_ENLACE_USD : string = 'INTERCUENTA ENLACE USD';

  /**
   * Tipo de Cuenta SERVICIO FX PESOS
   */
  public static readonly TIPO_CUENTA_SERVICIO_FX_PESOS : string = "16";

  //     /**
  //      * ORIGEN CASA DE BOLSA
  //      */
  //     public static readonly MEDIO_ORIGEN_CASABOLSA : number = 10;

  //     /**
  //      * ORIGEN BANCO
  //      */
  //     public static readonly MEDIO_ORIGEN_BANCO : number = 5;

  //     /**
  //      * Parametro para obtener el tconId predertimnado.
  //      */
  //     public static readonly TCON_ID_PREDETER: string = "TCON_ID_PREDETER";

  //     /**
  //      * Parametro para obtener las cuentas que pueden operar SPEI Movil
  //      */
  //     public static readonly CUENTAS_SPEI_MOVIL: string = "CTAS_SPEI_MOV";

  //     /**
  //      * Parametro para obtener ids de cuentas FX
  //      */
  //     public static readonly CUENTAS_FX: string = "CTAS_FX";

  //     /**
  //      * Parametro para obtener las cuentas Enlace
  //      */
  //     public static readonly CUENTAS_ENLACE: string = "CTAS_ENLACE";

  //     /**
  //      * corresponsales
  //      * */
  //     /**
  //      * formas de liquidacion para corresponsales Divisas Banco
  //      */
  //     public static readonly FORMAS_LIQ_CORRESP : any[] =
  //         [
  //             {cveLiq:1, descFormaLiq:'Efectivo'},
  //             {cveLiq:2, descFormaLiq:'Abono en cuenta'}
  //         ];

  //     /**
  //      * Tipos de negocio para corresponsales
  //      */
  //     public static readonly TIPO_NEGOCIO_CORRESP: any[] =
  //         [
  //             {cveTipoNegocio:82, descTipoNegocio:'Comercio'},
  //             {cveTipoNegocio:83, descTipoNegocio:'Dutty Free'},
  //             {cveTipoNegocio:80, descTipoNegocio:'Hotel'}
  //         ];

  //     /**
  //      * Causa de baja de corresponsales
  //      */
  //     public static readonly CAUSA_BAJA_CORRESP : any[] =
  //         [
  //             {cveCausaBaja:1, descCausaBaja:'Cierre de Operaciones del Administrador'},
  //             {cveCausaBaja:2, descCausaBaja:'Incumplimiento del contrato de Comision Mercantil'},
  //             {cveCausaBaja:3, descCausaBaja:'Vencimiento del contrato de Comision Mercantil'}
  //         ];

  //     /**
  //      * Tipos de bitacoras
  //      */
  //     public static readonly TIPOS_BITACORA: any[] =
  //         [
  //             {cveTipoBitacora:1, descTipoBitacora:'BITACORA DE OPERACIONES'},
  //             {cveTipoBitacora:2, descTipoBitacora:'CAMBIO DE CONTRATO'},
  //             {cveTipoBitacora:3, descTipoBitacora:'CAMBIO DE CONTRATO BANCO'},
  //             {cveTipoBitacora:4, descTipoBitacora:'CAMBIO DE CONTRATO/DIRECCION'},
  //             {cveTipoBitacora:5, descTipoBitacora:'CAMBIO DE CONTRATO/PERSONA'},
  //             {cveTipoBitacora:6, descTipoBitacora:'CAMBIO DE CUENTA (CONTRATO)'},
  //             {cveTipoBitacora:7, descTipoBitacora:'CAMBIO DE EMPLEADO (CONTRATO)'},
  //             {cveTipoBitacora:8, descTipoBitacora:'CAMBIO DE DIRECCION (CONTRATO)'},
  //             {cveTipoBitacora:9, descTipoBitacora:'CAMBIO DE PERSONA FISICA'},
  //             {cveTipoBitacora:10, descTipoBitacora:'CAMBIO DE PERSONA FISICA (CONTRATO)'},
  //             {cveTipoBitacora:11, descTipoBitacora:'CAMBIO DE PERSONA MORAL'},
  //             {cveTipoBitacora:12, descTipoBitacora:'CAMBIO DE PERSONA MORAL (CONTRATO)'},
  //             {cveTipoBitacora:13, descTipoBitacora:'CAMBIO DE EXPEDIENTE'},
  //             {cveTipoBitacora:14, descTipoBitacora:'CAMBIO DE CUESTIONARIO'},
  //             {cveTipoBitacora:15, descTipoBitacora:'CAMBIO DE CONTRATO'}
  //         ];

  //     /**
  //      * Status float
  //      */
  //     public static readonly STATUS_FLOAT: string = '1';
  //     public static readonly STATUS_CANCELADO: string = '2';
  //     public static readonly STATUS_COBRADO: string = '3';
  //     public static readonly STATUS_RECOMPRA: string = '4';
  //     public static readonly STATUS_STOPPAYMENT: string = '5';
  //     public static readonly STATUS_FOLIORECOMPRA: string = '6';
  //     public static readonly HABILITA_FLOAT: string = '7';
  //     public static readonly STATUS_MARCADO: string = 'X';
  //     public static readonly STATUS_NO_MARCADO: string = 'N';
  //     public static readonly STATUS_TODOS: string = 'T';

  //     ///////////////////////// Constantes para el modulo de carga de archivos de Cheques Float //////////////////////
  //     /**
  //      * Estatus "Cargado"
  //      */
  //     public static readonly FLT_ESTATUS_CARGADO = "CA";

  //     /**
  //      * Estatus "Procesado"
  //      */
  //     public static readonly FLT_ESTATUS_PROCESADO = "PR";
  //     ///////////////////////////// Fin Constantes para el modulo de carga de Cheques Float /////////////////////////

  //     /**
  //      * Identificador del evento que indica que se cargaron los precios de una divisa en la lista de <TipoCambioVO>
  //      **/
  //     public static readonly EVENT_TIPO_CAMBIO_DIVISA : string = "eventTipoCambioDivisa"

  //     /*--------------------Indices para tasas Foward-------------------*/
  //     /**
  //      * Indice de la tasa de 24-0
  //      */
  //     public static readonly INDX_TASAFWD_HOY : number = 0;
  //     /**
  //      * Indice de la tasa de 48-24
  //      */
  //     public static readonly INDX_TASAFWD_24 : number = 1;
  //     /**
  //      * Indice de la tasa de 48
  //      */
  //     public static readonly INDX_TASAFWD_48 : number = 2;
  //     /**
  //      * Indice de la tasa de 72-48
  //      */
  //     public static readonly INDX_TASAFWD_72 : number = 3;
  //     /**
  //      * Indice de la tasa de 96-72
  //      */
  //     public static readonly INDX_TASAFWD_96 : number = 4;

  //     /**
  //      *
  //      */
  //     public static readonly SWIFT_EXCEP_CAMPO_72: string = '/REC/NCH'

  //     /*Cargo Abonos Banco*/
  //     public static readonly TARJETA_CREDITO_INTERCAM_BUSSINES_CLASS : string = '08';
  //     public static readonly TARJETA_CREDITO_OTRO_BANCO : string = '09';

  //     ///////////////////////// Constantes para el modulo de carga de archivos de TPV /////////////////////////
  //     /**
  //      * Divisa Pesos
  //      */
       public static readonly ID_DIV_PESO : string = "MN"

  //     /**
  //      * Divisa Pesos Tesoreria
  //      */
  //     public static readonly ID_DIV_MXP : string = "MXP"

  //     /**
  //      * Parametro para obtener el layout Posre USD
  //      */
  //     public static readonly TPV_POSRE04 : number = 100;

  //     /**
  //      * Parametro para obtener el layout Posre MXP
  //      */
  //     public static readonly TPV_POSRE06 : number = 101;

  //     /**
  //      * Parametro para obtener el layout NetPay
  //      */
  //     public static readonly TPV_MASTERDCC: number = 102;

  //     /**
  //      * Parametro para obtener el layout NetPay
  //      */
  //     public static readonly TPV_NETPAYMXN: number = 108;

  //     /**
  //      * Parametro para obtener el layout Sica
  //      */
  //     public static readonly TPV_SICA : number = 103;

  //     /**
  //      * Parametro para obtener el layout Sicmor0200
  //      */
  //     public static readonly TPV_SICMOR : number = 104;

  //     /**
  //      * Parametro para obtener el layout Stat06
  //      */
  //     public static readonly TPV_STAT06 : number = 105;

  //     /**
  //      * Parametro para obtener el layout Stat07
  //      */
  //     public static readonly TPV_STAT07 : number = 106;

  //     /**
  //      * Ruta del servlet para la carga de datos TPV de archivo tipo NETPAY
  //      */
  //     public static readonly PROCESADOR_NETPAY = 'com.intercam.tesoreria.servlet.tpv.ProcesadorNetPay';

  //     /**
  //      * Ruta del servlet para la carga de datos TPV de archivo tipo MASTERCARD DCC
  //      */
  //     public static readonly PROCESADOR_MASTERCARD = 'com.intercam.tesoreria.servlet.tpv.ProcesadorMasterCard';

  //     /**
  //      * Ruta del servlet para la carga de datos TPV de archivo tipo POSRE Dólares
  //      */
  //     public static readonly PROCESADOR_POSRE04 = 'com.intercam.tesoreria.servlet.tpv.ProcesadorPosre04';

  //     /**
  //      * Ruta del servlet para la carga de datos TPV de archivo tipo POSRE Pesos
  //      */
  //     public static readonly PROCESADOR_POSRE06 = 'com.intercam.tesoreria.servlet.tpv.ProcesadorPosre06';

  //     /**
  //      * Ruta del servlet para la carga de datos TPV de archivo tipo SICMOR0200
  //      */
  //     public static readonly PROCESADOR_SICMOR = 'com.intercam.tesoreria.servlet.tpv.ProcesadorSicmor0200';

  //     /**
  //      * Ruta del servlet para la carga de datos TPV de archivo tipo STAT6
  //      */
  //     public static readonly PROCESADOR_STAT6 = 'com.intercam.tesoreria.servlet.tpv.ProcesadorStat6';

  //     /**
  //      * Ruta del servlet para la carga de datos TPV de archivo tipo STAT7
  //      */
  //     public static readonly PROCESADOR_STAT7 = 'com.intercam.tesoreria.servlet.tpv.ProcesadorStat7';

  //     /**
  //      * Estatus de operacion TPV no conciliada.
  //      */
  //     public static readonly OPE_ESTATUS_NO_CONC = 'NC';

  //     /**
  //      * Estatus de operacion TPV conciliada.
  //      */
  //     public static readonly OPE_ESTATUS_CONC = 'CO';

  //     /**
  //      * Estatus de operacion TPV liquidada (pagada a comercio).
  //      */
  //     public static readonly OPE_ESTATUS_LIQ = 'OL'

  //     /**
  //      * Estatus de operacion TPV pre-conciliada.
  //      */
  //     public static readonly OPE_ESTATUS_PRECON = 'PR';

  //     /**
  //      * Estatus de operacion TPV pendiente
  //      */
  //     public static readonly OPE_ESTATUS_PEND = 'CP';

  //     ///////////////////////// Fin Constantes para el modulo de carga de archivos de TPV /////////////////////////

       public static readonly MONEDA_PESOS         : string = 'PESOS';
       public static readonly MONEDA_DOLARES       : string = 'DOLARES';
       public static readonly MONEDA_EUROS       : string = 'EUROS';
       public static readonly MONEDA_EURO_ID       : string = 'EURO';
  //     /**
  //      * REQUIERE OTRA FIRMA
  //      */
  //     public static readonly OTRA_FIRMA : string = 'Requiere otra firma';

  //     /**'Otros Bancos'
  //      **/
  //     public static readonly OTRO_BANCO : string = 'Otros Bancos';

  //     public static readonly NIVEL_FIRMA_B    : string ='B';
  //     public static readonly ID_TRASPASO_CVD  : string ='CVD';

  //     // /**
  //     //  * validaciones de cuentas con Spid
  //     //  **/
  //     // public static  cuentasSpidOpera(cuentas:Array,contrato:ContratoFolderFondosVO):Boolean {
  //     //     readonly valid:Boolean = false;
  //     //     readonly index:number = 0;

  //     //     if (cuentas && cuentas.length > 0 && contrato && contrato.contratoVO &&
  //     //         (contrato.contratoVO is ContratoBancoVO)) {
  //     //         for (index;index < cuentas.length; index++) {
  //     //             if (ContratoBancoVO(contrato.contratoVO).ccbnTipoCuenta == cuentas[index]) {
  //     //                 valid = true;
  //     //             }
  //     //         }
  //     //     }

  //     //     return valid;
  //     // }

  //     /**
  //      * Certificado
  //      **/
  //     public static readonly CERTIFICADO_AMIB: number = 1;
  //     public static readonly CERTIFICADO_MEXDER: number = 2;
  //     public static readonly CERTIFICADO_INTERNA: number = 3;
  //     public static readonly CERTIFICADO_SIN_CETIFICACION: number = 4;

  //     /**
  //      * ID del documento relacionado a la certificacion mexder
  //      */
  //     public static readonly CERTIFICACION_MEXDER_ID_DOC = 202;

  //     /**
  //      * ID del documento relacionado a la certificacion amib
  //      */
  //     public static readonly CERTIFICACION_AMIB_ID_DOC = 201;

  //     /**
  //      * ID del documento relacionado a la certificacion amib
  //      */
  //     public static readonly CERTIFICACION_INTERNA_ID_DOC = 200;

  //     /**
  //      * Parametro para FWS
  //      **/
  //     public static readonly TIPO_NUM_CUENTA_FWS: string = "99";

  //     /**
  //      * Parametro para FWS SERVICIOS
  //      **/
  //     public static readonly TIPO_NUM_CUENTA_FWS_SERV: string = "90";

  //     /**
  //      * Cuenta de devoluciones spid
  //      **/
  //     public static readonly TIPO_CUENTA_DEVOLUCIONES_SPID : string = '15'

       /**
       * Parametro Tipo Cuenta Intercuenta enlace
       **/
       public static readonly TIPO_NUM_CENTA_ENLACE: string = "07";
  //     /**
  //      * Parametro Tipo Cuenta Intercuenta enlace usd
  //      **/
  //     public static readonly TIPO_NUM_CENTA_ENLACE_USD: string = "09";

  //     /**
  //      * Especifica el tipo de cuenta para Servicio Empresarial FX.
  //      **/
  //     public static readonly TIPO_CUENTA_EMPRESARIAL_FX: string = "16";

  //     /**
  //      * Parametro de i09parametro para determinar si se validará que el promotor este apoderado para operar
  //      */
  //     public static readonly PARAM_VALIDA_APODERAMIENTO = 'VALIDAPODER';

  //     /**
  //      * Clave de puesto de un enlace
  //      */
  //     public static readonly CLAVE_PUESTO_ENLACE = '000052';

       public static readonly ID_CARGO_SPID : number = 7;

  //     //-------------------------
  //     // Precios Forwards
  //     //-------------------------
  //     /**
  //      * Constante que identifica al Spot
  //      **/
  //     public static readonly CTE_SP: string = 'SP';
  //     /**
  //      * Constante que identifica al SN
  //      **/
  //     public static readonly CTE_SN: string = 'SN';
  //     /**
  //      * Constante que identifica al SW
  //      **/
  //     public static readonly CTE_SW: string = 'SW';
  //     /**
  //      * Constante que identifica al 1M
  //      **/
  //     public static readonly CTE_1M: string = '1M';
  //     /**
  //      * Constante que identifica al 2M
  //      **/
  //     public static readonly CTE_2M: string = '2M';
  //     /**
  //      * Constante que identifica al 3M
  //      **/
  //     public static readonly CTE_3M: string = '3M';
  //     /**
  //      * Constante que identifica al 6M
  //      **/
  //     public static readonly CTE_6M: string = '6M';
  //     /**
  //      * Constante que identifica al 9M
  //      **/
  //     public static readonly CTE_9M: string = '9M';
  //     /**
  //      * Constante que identifica al 1Y
  //      **/
  //     public static readonly CTE_1Y: string = '1Y';
  //     /**
  //      * Constante que identifica al 2Y
  //      **/
  //     public static readonly CTE_2Y: string = '2Y';

  //     //-------------------------
  //     // Operacion Forwards
  //     //-------------------------

  //     /**
  //      * Monitor de Operaciones.
  //      */
  //     public static readonly MONITOR_OPERACIONES: string = "monitorOperaciones";

  //     /**
  //      * Monitor de Mesa de control.
  //      */
  //     public static readonly MONITOR_MESA_CONTROL: string = "monitorMesaControl";

  //     /**
  //      * Monitor de Riesgos.
  //      */
  //     public static readonly MONITOR_RIESGOS: string = "monitorRiesgos";

  //     /**
  //      * Monitor de Operaciones canceladas por falta de garantias.
  //      */
  //     public static readonly MONITOR_OPERACIONES_CANCELADAS: string = "monitorOperacionesCanceladas";

  //     /**
  //      * Monitor de Garantias.
  //      */
  //     public static readonly MONITOR_GARANTIAS: string = "monitorGarantias";

  //     /**
  //      * Monitor de Llamada de margen.
  //      */
  //     public static readonly MONITOR_LLAMADA_MARGEN: string = "monitorLlamadaMargen";

  //     /**
  //      * Monitor de Vencimientos anticipados.
  //      */
  //     public static readonly MONITOR_VENCIMIENTOS_ANTICIPADOS: string = "monitorVencimientosAnticipados";

  //     /**
  //      * Autorizar Transaccion (Tarea) Forward.
  //      **/
  //     public static readonly AUTORIZAR_TRANSACCION: string = "A";

  //     /**
  //      * Rechazar Transaccion (Tarea) Forward.
  //      **/
  //     public static readonly RECHAZAR_TRANSACCION: string = "R";

  //     /**
  //      * Cancelar Transaccion (Tarea) Forward.
  //      **/
  //     public static readonly CANCELAR_TRANSACCION: string = "N";

  //     /**
  //      * Constante que identifica a la sucursal para Forwards (92-Derivados)
  //      */
  //     public static readonly SUCURSAL_FWD:number= 92;

       /**
        * Id Instrumento Forward
        */
      public static readonly INSTRUMENTO_FORWARD:number= 9;

  //     /**
  //      * Identificador de la fecha valor forward
  //      */
       public static readonly FECHA_VALOR_FORWARD: number = 984;

  //     /** Rol para realizar Vencimientos Anticipados de FWD */
  //     public static readonly ROL_VENCIM_ANTICIPADO:number = 721;

  //     /**
  //      * Estatus del credito
  //      */
  //     public static readonly CREDITO_BLOQUEADO : string = 'M';

  //     /**
  //      * Clave de la sucursal para FWD
  //      */
  //     public static readonly CLAVE_SUC_FORWARD: string = "INDER";

  //     /**
  //      * # Tipo FWD
  //      **/
  //     public static readonly TIPO_FORWARD = '99';

  //     /**
  //      * Define el valor de la propiedad <code>gpuClave</code> para el <code>Grupo</code>:
  //      * Riesgos Forward.
  //      */
  //     public static readonly GPO_RIESGO_FWD:number= 465;

  //     /**
  //      * Define el valor de la propiedad <code>gpuNombre</code> para el <code>Grupo</code>:
  //      * Riesgos Forward.
  //      */
  //     public static readonly RIESGO_FWD: string = "RIESGOFWD";

  //     /**
  //      * Define el valor de la propiedad <code>gpuClave</code> para el <code>Grupo</code>:
  //      * Mesa de control Forward.
  //      */
  //     public static readonly GPO_MESA_CTRL_FWD:number= 464;

  //     /**
  //      * Define el valor de la propiedad <code>gpuNombre</code> para el <code>Grupo</code>:
  //      * Mesa de control Forward.
  //      */
  //     public static readonly MESA_CTRL_FWD: string = "MESACTROLFWD";

  //     /**
  //      * Define el valor de la propiedad <code>gpuClave</code> para el <code>Grupo</code>:
  //      * Mesa de operaci&oacute;n Forward.
  //      */
  //     public static readonly GPO_MESA_OPER_FWD:number= 463;

  //     /**
  //      * Define el valor de la propiedad <code>gpuNombre</code> para el <code>Grupo</code>:
  //      * Mesa de operaci&oacute;n Forward.
  //      */
  //     public static readonly MESA_OPER_FWD: string = "MESAOPEFWD";

  //     /**
  //      * Define el valor de la propiedad <code>gpuClave</code> para el <code>Grupo</code>:
  //      * Operador Nocturno Forward.
  //      */
  //     public static readonly GPO_OPER_NOCTURNO:number= 479;

  //     /**
  //      * Define el valor de la propiedad <code>gpuNombre</code> para el <code>Grupo</code>:
  //      * Operador nocturno Forward.
  //      */
  //     public static readonly OPER_NOCTURNO_FWD: string = "OPNOCTFWD";

  //     /**
  //      * Identificador de la mesa para FWD
  //      */
  //     public static readonly ID_MESA_FORWARD: number = 15;

  //     /**
  //      * Cadena COMPRA
  //      */
  //     public static readonly STR_COMPRA: string = "COMPRA";

  //     /**
  //      * Cadena VENTA
  //      */
  //     public static readonly STR_VENTA: string = "VENTA";

  //     /**
  //      * Cadena Posicion inicial
  //      */
  //     public static readonly POS_INICIAL: string = "999";

  //     /**
  //      * Define el valor de la propiedad <code>bprEstatus</code> para la <code>BitacoraProceso</code>
  //      * </br>Especifica el estatus del Proceso forward, ejecuci&oacute;n termin&oacute; con error.
  //      */
  //     public static readonly ESTATUS_PROC_ERROR: string = "ERR";

  //     /**
  //      * Define el valor de la propiedad <code>bprEstatus</code> para la <code>BitacoraProceso</code>
  //      * </br>Especifica el estatus del Proceso forward, ejecutado con &eacute;xito.
  //      */
       public static readonly ESTATUS_PROC_EXITO: string = "OK";

  //     /**
  //      * Especifica el estatus del Proceso forward, ejecuci&oacute;n no termin&oacute;.
  //      */
  //     public static readonly ESTATUS_PROC_INCOMPLETO: string = "INCOMPLETO";

  //     /**
  //      * Especifica el estatus del Proceso forward, no se ha ejecutado.
  //      */
  //     public static readonly ESTATUS_PROC_NO_EJECUTADO: string = "NO EJECUTADO";

  //     /**
  //      * Especifica que la ejecucion del proceso es Normal.
  //      */
  //     public static readonly PROCESO_NORMAL: string = "PRC";

  //     /**
  //      * Especifica que la ejecucion del proceso es un Re-proceso.
  //      */
  //     public static readonly RE_PROCESO: string = "REPRC";

  //     /**
  //      * Define el valor de la propiedad <code>prfTipo</code> para el <code>ProcesoFwd</code></br>
  //      * Especifica el tipo de Proceso forward de Apertura.
  //      */
  //     public static readonly TIPO_PROC_APERTURA: string = "APE";

  //     /**
  //      * Define el valor de la propiedad <code>prfTipo</code> para el <code>ProcesoFwd</code></br>
  //      * Especifica el tipo de Proceso forward de Cierre.
  //      */
  //     public static readonly TIPO_PROC_CIERRE: string = "CIE";

  //     /**
  //      * Define el valor de la propiedad <code>prfTipo</code> para el <code>ProcesoFwd</code></br>
  //      * Especifica el tipo de Proceso forward de Pre-cierre.
  //      */
  //     public static readonly TIPO_PROC_PRECIERRE: string = "PCI";

  //     /**
  //      * Define el valor de la propiedad <code>prfTipo</code> para el <code>ProcesoFwd</code></br>
  //      * Especifica el tipo de Proceso forward para el monitornumbererno
  //      */
  //     public static readonly TIPO_PROC_AP_MON_IN: string = "MOI";

  //     /**
  //      * Define el valor de la propiedad <code>prfTipo</code> para el <code>ProcesoFwd</code></br>
  //      * Especifica el tipo de Proceso forward para el monitornumbererno y el monitor apertura
  //      */
  //     public static readonly TIPO_PROC_AP_MON_IN_APE: string = "MOA";

  //     /**
  //      * Define el valor de la propiedad <code>prfId</code> para el <code>ProcesoFwd</code></br>
  //      * Especifica el Id del Proceso de Valuaci&oacute;n de operaciones.
  //      */
  //     public static readonly ID_PROC_VALUACION:number= 8;

  //     /**
  //      * Define el valor de la propiedad <code>prfId</code> para el <code>ProcesoFwd</code></br>
  //      * Especifica el Id del Proceso de Llamada de margen.
  //      */
  //     public static readonly ID_PROC_LLAMADA_MARGEN:number= 11;

  //     /**
  //      * Define el valor de la propiedad <code>prfId</code> para el <code>ProcesoFwd</code></br>
  //      * Especifica el Id del Proceso de Vencimientos.
  //      */
  //     public static readonly ID_PROC_VENCIMIENTOS:number= 13;

  //     /**
  //      * Especifica los procesos requeridos para permitir operar Forward.
  //      **/
  //     public static readonly PROCESOS_REQ_OPERAR:Array<number> = [
  //         Const.ID_PROC_LLAMADA_MARGEN,
  //         Const.ID_PROC_VENCIMIENTOS
  //     ];

  //     /**
  //      * Define valores de tipo Operacion original que venci&oacute;</br>
  //      * NO esta en cat&aacute;logo
  //      */
  //     public static readonly VENCIMIENTO_ORIGINAL: number = 0;

  //     /**
  //      * Define valores de tipo vencimiento Fwd Anticipado Total
  //      */
  //     public static readonly VENCIMIENTO_ANTICIPADO_TOTAL: number = 1;

  //     /**
  //      * Define valores de tipo vencimiento Fwd Anticipado Parcial
  //      */
  //     public static readonly VENCIMIENTO_ANTICIPADO_PARCIAL: number = 2;

  //     /**
  //      * Define valores de tipo vencimiento Fwd Por Incumplimiento
  //      */
  //     public static readonly VENCIMIENTO_POR_INCUMPLIMIENTO: number = 3;

  //     /**
  //      * Define valores de tipo vencimiento Fwd Normal
  //      */
  //     public static readonly VENCIMIENTO_NORMAL: number = 4;

  //     /**
  //      * Define el valor de la propiedad <code>clcId</code> para el <code>LimiteContraparte</code></br>
  //      * Especifica el l&iacute;mite de Mesa.
  //      **/
  //     public static readonly LIMITE_MESA:number= 1;

  //     /**
  //      * Define el valor de la propiedad <code>clcId</code> para el <code>LimiteContraparte</code></br>
  //      * Especifica el l&iacute;mite de Trader.
  //      **/
  //     public static readonly LIMITE_TRADER:number= 2;

  //     /**
  //      * Define el valor de la propiedad <code>clcId</code> para el <code>LimiteContraparte</code></br>
  //      * Especifica el l&iacute;mite de Contraparte.
  //      **/
  //     public static readonly LIMITE_CONTRAPARTE:number= 3;

  //     /**
  //      * Define el valor de la propiedad <code>clcId</code> para el <code>LimiteContraparte</code></br>
  //      * Especifica el l&iacute;mite de plazo m&aacute;ximo.
  //      **/
  //     public static readonly LIMITE_PLAZO:number= 4;

  //     /**
  //      * Define el valor de la propiedad <code>clcId</code> para el <code>LimiteContraparte</code></br>
  //      * Especifica el l&iacute;mite de fecha de vencimiento.
  //      **/
  //     public static readonly LIMITE_VENCIMIENTO:number= 5;

       /**
        * Define el valor de la propiedad <code>fwdTipoOp</code> para la <code>OperFwd</code></br>
        * Especifica el tipo de Operaci&oacute;n Forward normal.
        */
       public static readonly TIPO_OPER_FORWARD: string = "F";

  //     /**
  //      * Define el valor de la propiedad <code>fwdTipoOp</code> para la <code>OperFwd</code></br>
  //      * Especifica el tipo de Operaci&oacute;n Forward simulada.
  //      */
  //     public static readonly TIPO_OPER_FWD_SIMULADA: string = "S";

  //     /**
  //      * Define el valor de la propiedad <code>fwdTipoOp</code> para la <code>OperFwd</code></br>
  //      * Especifica el tipo de Operaci&oacute;n Forward vencida.
  //      */
  //     public static readonly TIPO_OPER_FWD_VENCIMIENTO: string = "V";

  //     /**
  //      * Define el valor de la propiedad <code>plazoVencFwd</code> para el objeto
  //      * <code>InfoFechaVenFwdVO</code></br>
  //      * Especifica el n&uacute;mero de d&iacute;as naturales entre la fecha de solicitud
  //      * y la fecha de vencimiento de una operaci&oacute;n FWD.
  //      **/
  //     public static readonly PLAZO_VENCIMIENTO_FWD:number= 120;

  //     /**
  //      * Especifica la clave para el motivo de Excepci&oacute;n Tradicional.
  //      **/
  //     public static readonly MOTIVO_EXC_TRADICIONAL:number= 1;

  //     /**
  //      * Especifica la clave para el motivo de Excepci&oacute;n Cash FWD.
  //      **/
  //     public static readonly MOTIVO_EXC_CASH_FWD:number= 2;

  //     /**
  //      * Especifica el parametro l&iacute;mite inferior de operaci&oacute;n de la mesa FWD.
  //      **/
  //     public static readonly LIMITE_INFERIOR_FWD: string = "LIM_INF_FWD";

  //     /**
  //      * Especifica el parametro l&iacute;mite superior de operaci&oacute;n de la mesa FWD.
  //      **/
  //     public static readonly LIMITE_SUPERIOR_FWD: string = "LIM_SUP_FWD";

  //     // CONTRATO TARJETA DE CREDITO

  //     /**
  //      *
  //      **/
  //     public static readonly TCON_TDC: number = 6;

  //     /**
  //      *
  //      **/
  //     public static readonly TENID_OTROS_TDC: number = 23;

  //     /**
  //      *
  //      **/
  //     public static readonly TENID_EDOCTA_TDC: number = 22;

  //     // GRUPOS TARJETA DE CREDITO

  //     /**
  //      * Grupo de usuarios Autorizacion credito
  //      */
  //     public static readonly GRUPO_CREDITO: string = "CREDITO";

  //     /**
  //      * Grupo de usuarios Autorizacion mesa
  //      */
  //     public static readonly GRUPO_MESA_CONTROL: string = "mesacontrol";

  //     /**
  //      * Tareas Contrato
  //      **/
  //     public static readonly STEP_CONTROL_BANCO : string = "Revisa Control Banco";
  //     public static readonly STEP_CONTROL : string = "Revisa Control";
  //     public static readonly STEP_VALIDA_BANXICO : string = "Valida ID Banxico";
  //     public static readonly STEP_DESCARTE : string = "Descarte";
  //     public static readonly STEP_FWD_RIESGO : string = "Riesgo Forward";
  //     public static readonly STEP_FWD_CREDITO : string = "Credito Forward";

  //     public static readonly LAST_PROPERTY_STEAP : string = "lastStep";
  //     public static readonly PROPERY_DECISIONSCREAM : string = "decision_screen";
  //     public static readonly LAST_PROPERY_DECISIONSCREAM : string = "last_deicion_screen";

  //     public static readonly DECISION_SCREEN_CONTRATO : string = "decisionContrato";
  //     public static readonly DECISION_SCREEN_DESCARTE: string = "decisionDescarte";
  //     public static readonly DECISION_SCREEN_CONTRATO_ACTUALIZACION : string = "decisionUpdateContract";

  //     public static readonly DECISION_SCREEN_VALIDA_BANXICO : string = "decisionValidaBanxico";
  //     public static readonly DECISION_TDC: string = "DecisionCreditoTC";
  //     public static readonly DECISION_SCREEN_FWD_SGRO : string = "decisionSobreGiro";
  //     public static readonly DECISION_SCREEN_FWD_CRD : string = "decisionCtrRiesgo";

  //     /**
  //      * Cadena para la letra D, operaciones con origen Mesa divisa
  //      */
  //     public static readonly STRING_D : string = "D";

  //     // STATUS ENVIO MASIVO EMAIL API CONSTANT CONTACT
  //     /**
  //      * Status Activo para la lista
  //      * */
  //     public static readonly STATUS_AC : string = "ACTIVE";
  //     /**
  //      * Error al crear una lista ya existente en la API Constant Contact
  //      * */
  //     public static readonly ERROR_CONFLICTO_LISTA : string = "409 Conflict"

  //     /**
  //      * string SPEI
  //      */
  //     public static readonly PagoSPEI: string = "Pago por SPEI";

  //     /**
  //      * string SPID
  //      */
  //     public static readonly PagoSPID: string = "Pago por SPID";

  //     /**
  //      * string ANTAD
  //      */
  //     public static readonly PagoServicio: string = "Pago de Servicios";
  //     /**
  //      * string url SPID
  //      */
  //     public static readonly urlSPID: string = "https://www.banxico.org.mx/cep-spid/go?i=";

  //     /**
  //      * string url SPEI
  //      */
  //     public static readonly urlSPEI: string = "https://www.banxico.org.mx/cep/go?i=";

  //     /**
  //      * Clave IVA
  //      */
  //     public static readonly IVA: string = "IVA";

  //     /**
  //      * string Comision
  //      */
  //     public static readonly COMISION: string = "Comision";

  //     /**
  //      * string Movimi
  //      */
  //     public static readonly MOV_GENERALES: string = "Movimientos Generales";

  //     /**
  //      * string GN
  //      */
  //     public static readonly GN: string = "GN";

  //     /**
  //      * Tipo de liquidacion ABONO de una cuenta de banco (cuentaBancoVO)
  //      */
  //     public static readonly CUE_TIPO_LIQ_ABONO: number = 1;
  //     /**
  //     /**
  //      * Tipo de liquidacion SPEI de una cuenta de banco (cuentaBancoVO)
  //      */
  //     public static readonly CUE_TIPO_LIQ_SPEI: number = 2;
       /**
        * Tipo de liquidacion SPID de una cuenta de banco (cuentaBancoVO)
        */
     public static readonly CUE_TIPO_LIQ_SPID: number = 3;

  //     /**
  //      * Se establece el "catalogo" de Tipo liquidacion para las repetitivas de cuentas
  //      * @param divId     Identificador de la repetitiva
  //      * @param strDivMexSpid     cadena con la informacion del parametro con las divisas que pueden operar SPID
  //      * @param isCtaBanco        Indica si la cuenta se asocia a un contrato de Banco (true) o de divisas (false)
  //      * @param isCatPerMexSpid   Indica si la categoria de la persona corresponde a las que pueden (true)
  //      *                                  o no (false) operar SPID
  //      * @param isOnlyAbono       Indica si solo se puede presentar la opcion de abono (true) o dependiendo de
  //      *                                  las demas consiciones la se SPID/SPEI (false)
  //      * @param isContratoFWS     Indica si el contrato esta habilitado papa operar FWDs
  //      *
  //      * @return arrego de objetos TipoLiquidaVO con las opciones de liquidacion permitidas para la divisa dada
  //      **/
  //     // public static function getTipoLiquida(divId: String, strDivMexSpid: String, isCtaBanco: Boolean,
  //     //                                       isCatPerMexSpid: Boolean, isOnlyAbono: Boolean,
  //     //                                       isContratoFWS: Boolean): ArrayCollection {
  //     //     readonly arrTipoLiquidaVO: ArrayCollection = new ArrayCollection;
  //     //     readonly tipoLiquidaVO: TipoLiquidaVO;
  //     //     tipoLiquidaVO = new TipoLiquidaVO();
  //     //     // Cuando la cuenta seleccionada:
  //     //     //      NO es de banco, se permite Abono
  //     //     //      SI es de banco y opera FWS
  //     //     if (isCtaBanco || !isCtaBanco || isContratoFWS || divId == Const.ID_EURO) {
  //     //         tipoLiquidaVO.cdValor = 1;
  //     //         tipoLiquidaVO.deValor = "ABONO";
  //     //         arrTipoLiquidaVO.addItem(tipoLiquidaVO);
  //     //     }
  //     //     if (!isOnlyAbono) {
  //     //         if (divId == Const.ID_PESO_) {
  //     //             tipoLiquidaVO = new TipoLiquidaVO();
  //     //             tipoLiquidaVO.cdValor = 2;
  //     //             tipoLiquidaVO.deValor = "SPEI";
  //     //             arrTipoLiquidaVO.addItem(tipoLiquidaVO);
  //     //         } else if (strDivMexSpid.indexOf(divId) != -1 && isCatPerMexSpid) {
  //     //             tipoLiquidaVO = new TipoLiquidaVO();
  //     //             tipoLiquidaVO.cdValor = 3;
  //     //             tipoLiquidaVO.deValor = "SPID";
  //     //             arrTipoLiquidaVO.addItem(tipoLiquidaVO);
  //     //         }
  //     //     }
  //     //     return arrTipoLiquidaVO;
  //     // }

  //     /**
  //      * string Estatus SPID Devoluciones Pendientes
  //      */
  //     public static readonly SPID_ESTATUS_PENDIENTE: string = "P";

  /**
   * Nombre del color AZUL
   */
  public static readonly AZUL_DESC: string = 'azul';

  //     /**
  //      * Estatus operacion forward Garantia Cubierta.
  //      */
  //     public static readonly FWD_ESTATUS_GARANTIA_CUBIERTA:number= 6;

        /**
       * Estatus del contrato 6 "DISPONIBLE"
       */
        public static readonly ESTATUS_CONTRATO_DISPOBIBLE : number = 6;

  //     /**
  //      * Estatus del contrato 1 "ACTIVO"
  //      */
  //     public static readonly ESTATUS_CONTRATO_ACTIVO : number = 1;
  //     /**
  //      * Estatus del contrato 1 "ACTIVO"
  //      */
  //     public static readonly ESTATUS_CONTRATO_INACTIVO : number = 3;
  //     /**
  //      * Estatus del contrato 1 "ACTIVO"
  //      */
  //     public static readonly ESTATUS_CONTRATO_REVPROM : number = 13;
  //     /**
  //      * Estatus del contrato 1 "ACTIVO"
  //      */
  //     public static readonly ESTATUS_CONTRATO_ALTAREC : number = 12;

  //     /**
  //      * Estatus del contrato 1 "REVISION POR CONTROL"
  //      */
  //     public static readonly ESTATUS_CONTRATO_REVISION: number = 11;

  //     /**
  //      * ESTATUS DE CONTRATO 14 Suplantacion
  //      * */
  //     public static readonly ESTATUS_CONTRATO_SUPLANTACION: number = 14;

  //     /**
  //      * Descripcion tipo contrato divisa bando 5
  //      */
  //     public static readonly TCON_DIVISAS_BANCO_DESC : string = "DIVISAS BANCO";
  //     /**
  //      * Limite de caractere para cuarta linea de TDC
  //      */
  //     public static readonly LENGTH_CUARTA_LINEA = 21;

  /**
   * Estatus operacion forward Cancelada.
   */
  public static readonly FWD_ESTATUS_CANCELADA: number = 7;

  /**
   * Estatus operacion forward Rechazada.
   */
  public static readonly FWD_ESTATUS_RECHAZADA: number = 8;

  //     /**
  //      * Estatus operacion forward por vencer.
  //      */
  //     public static readonly FWD_ESTATUS_POR_VENCER:number= 9;

  //     // Non Delivery Forward
  //     public static readonly TAREA_FWD_FIX : string = "TAREA_FIX";
  //     public static readonly NATURAL : string = "Natural";
  //     // Non Delivery Forward

  //     //Resumen Posicion Op FWD
  //     public static readonly anioInicial = 2019;

  //     public static readonly PROCESO_VAL: number = 8;
  //     /**
  //      * Parametro para obtener el numero maximo de resultados
  //      * para paginar pantalla inicio del dia con iCambiosPro
  //      */
  //     public static readonly MAX_RES_PAG_ICAMBIOSOPRO: string = "MAXIMO_RESULT_PAG_ICAMBIOSPRO";
  //     /**
  //      * Url accesible desde servlet para el reporte de COVA comisiones
  //      */
  //     public static readonly URL_COVAREPORT_COMISIONES : string = "../COVAReportComisiones.jsp";

  //     /**
  //      * Empresa Intercam CS
  //      */
  //     public static readonly RAZON_INTERCAM_CASA_BOLSA : string= "INTERCAM CASA DE BOLSA S.A. DE C.V";

  //     /**
  //      * Empresa Intercam Banco
  //      */
  //     public static readonly RAZON_INTERCAM_BANCO : string = "INTERCAM BANCO S.A INSTITUCION DE BANCA MULTIPLE INTERCAM GR";

  //     public static readonly TIPO_COM_68: string = "000168";

  //     public static readonly TIPO_COM_16 : string = "000116";

  //     public static readonly TIPO_COM_18 : string = "000118";

  //     public static readonly TIPO_ORDEN_CHEQUE_COMPRA_SIIF: number = 0;

  //     /**
  //      * Id de tipo de liquidacion de fondo en fondosPOS
  //      */
  //     public static readonly FONDO_MISMO_DIA : number = 7;

  //     /**
  //      * Estatus por autorizar de la Orden
  //      */
  //     public static readonly ORDEN_ESTATUS_EN_AUTORIZACION_FONDOS : number = 11;

  //     public static readonly GRUPO_NIVEL_1_AUTORIZACION_FONDOS : string = "MESACTRLGPO1";

  //     public static readonly GRUPO_NIVEL_2_AUTORIZACION_FONDOS : string = "MESACTRLGPO2";

  //     public static readonly  TIPO_RIESGO_CLIENTE : number = 1;
  //     public static readonly  TIPO_RIESGO_SPID : number = 2;
  //     public static readonly  RIESGO_BAJO : number = 1;

  //     public static readonly RIESGO_CLIENTE_ALTO : string = 'ALTO';
  //     public static readonly RIESGO_CLIENTE_MEDIO : string = 'MEDIO';
  //     public static readonly RIESGO_CLIENTE_BAJO : string = 'BAJO';


       /**
        * Cadena vacia
        */
       public static readonly  STRING_EMPTY : string = "";


  //     public static readonly RIESGO_CLIENTE_ALTO_NUM : number = 3;
  //     public static readonly RIESGO_CLIENTE_MEDIO_NUM  : number = 2;
  //     public static readonly RIESGO_CLIENTE_BAJO_NUM  : number = 1 ;

  //     /**
  //      * Constante catalogo sisId de POS
  //      */
  //     public static readonly SIS_ID_POS = 1;

  //     /**
  //      * Tipos de riesgo para clientes
  //      */
  //     public static readonly TRIESGO_CLIENTE_BANCO_PM: number=1;
  //     public static readonly TRIESGO_CLIENTE_BANCO_PF: number=7;
  //     public static readonly TRIESGO_CLIENTE_BANCO_PFA: number=16;

  //     public static readonly TRIESGO_CLIENTE_DIVBANCO_PM: number=8;
  //     public static readonly TRIESGO_CLIENTE_DIVBANCO_PF: number=9;
  //     public static readonly TRIESGO_CLIENTE_DIVBANCO_PFA: number=17;

  //     public static readonly TRIESGO_CLIENTE_CB_PM: number=10;
  //     public static readonly TRIESGO_CLIENTE_CB_PF: number=11;
  //     public static readonly TRIESGO_CLIENTE_CB_PFA: number=18;

  //     public static readonly TRIESGO_CLIENTE_FONDOS_PM: number=12;
  //     public static readonly TRIESGO_CLIENTE_FONDOS_PF: number=13;
  //     public static readonly TRIESGO_CLIENTE_FONDOS_PFA: number=19;

  //     public static readonly TRIESGO_CLIENTE_TC_PM: number=14;
  //     public static readonly TRIESGO_CLIENTE_TC_PF: number=15;
  //     public static readonly TRIESGO_CLIENTE_TC_PFA: number=20;

  //     /**
  //      * Url accesible desde servlet para reportes de aclaraciones
  //      */
  //     public static readonly URL_REPORTES_ACLARACIONES : string = "../ReportesAclaraciones.jsp";
  //     /**
  //      * Url accesible desde servlet para reportes de aquejas/sugerencias
  //      */
  //     public static readonly URL_REPORTES_QUEJAS_SUGERENCIAS : string = "../ReportesQuejasSugerencias.jsp";

  //     /**
  //      * Tipos de cuestionario de Riesgo
  //      * */
  //     public static readonly CUESTIONARIO_RIEGO_MEDIO_PF : number = 23;
  //     public static readonly CUESTIONARIO_RIEGO_ALTO_PF : number = 24;
  //     public static readonly CUESTIONARIO_RIEGO_MEDIO_PM : number = 25;
  //     public static readonly CUESTIONARIO_RIEGO_ALTO_PM : number = 26;

  //     /**
  //      * Tipos de cuestionario del contrato
  //      * */
  //     public static readonly CUESTIONARIO_DIVISAS_PF : number = 9;
  //     public static readonly CUESTIONARIO_DIVISAS_PM : number = 10;
  //     public static readonly CUESTIONARIO_FONDOS_PF : number = 1;
  //     public static readonly CUESTIONARIO_FONDOS_PM : number = 2;
  //     public static readonly CUESTIONARIO_CB_PF : number = 5;
  //     public static readonly CUESTIONARIO_CB_PM : number = 6;
  //     public static readonly CUESTIONARIO_BANCO_PF : number = 12;
  //     public static readonly CUESTIONARIO_BANCO_PM : number = 13;
  //     public static readonly CUESTIONARIO_DIVBANCO_PF : number = 17;
  //     public static readonly CUESTIONARIO_DIVBANCO_PM : number = 18;
  //     public static readonly CUESTIONARIO_TDC_PF : number = 19;
  //     public static readonly CUESTIONARIO_TDC_PM : number = 20;

  //     /**
  //      * Url accesible desde servlet para el reporte de pagos D.A.
  //      */
  //     public static readonly URL_REPORTE_PAGOS : string = "../ReporteDePagos.jsp";

       public static readonly REG_TRANS_DIVISA : string = "REGCLIC";
       public static readonly REG_TRANS_CLICEXPRESS : string = "REGCEXP";

  //     //Id layout honorarios
  //     public static readonly NOM_HON_SEG : number = 13;

       //Perfiles para el menu de cova
       public static readonly ADMIN: string = "ADMINCOVA";
       public static readonly OPER: string = "OPERADORCOVA";
       public static readonly BASIC: string = "BASICOCOVA";

       //parametros para consulta
       public static readonly PARAM_ADMIN: string = "ADMIN";
       public static readonly PARAM_OPER: string = "OPER";
       public static readonly PARAM_BASIC: string = "BASIC";

  //     /**
  //      * Parametro con el valor constante para operacion ANTAD TAE
  //      */
  //     public static readonly VAL_OPERACION_TAE : string = "000033";

  //     /** 460	TOKEN CORRECTO PARA OPERACION SPEI*/
  //     public static readonly ID_BITACO_BT_460: string = "454";
  //     /** 461	TOKEN INCORRECTO PARA OPERACION SPEI*/
  //     public static readonly ID_BITACO_BT_461: string = "455";

  //     /** 469	TOKEN CORRECTO*/
  //     public static readonly ID_BITACO_BT_469: string = "453";
  //     /** 306	TOKEN INCORRECTO*/
  //     public static readonly ID_BITACO_BT_306: string = "306";

  //     /** XXX	CUESTIONARIO CORRECTO BxT*/
  //     public static readonly ID_BITACO_BT_XXX: string = "458";
  //     /** XXX	CUESTIONARIO INCORRECTO BxT*/
  //     public static readonly ID_BITACO_BT_YYY: string = "459";

  //     /** 474	TOKEN CORRECTO PARA OPERACION SPID*/
  //     public static readonly ID_BITACO_BT_474: string = "460";
  //     /** 475	TOKEN INCORRECTO PARA OPERACION SPID*/
  //     public static readonly ID_BITACO_BT_475: string = "461";

  //     /**
  //      *Cuestionario
  //      */
  //     public static readonly MSG_VALIDA_CUESTIONARIO: string = "Validación de Cuestionario";

  //     public static readonly MSG_VALIDA_TOKEN: string = "Validación con Token móvil";
  //     /**
  //      * Tipo de Orden Compra Fondos SIIF
  //      */
  //     public static readonly TIPO_ORDEN_ELECTRONICO_COMPRA_SIIF : number = 18;

  //     /**
  //      * Contrato_Id SIIF
  //      */
  //     public static readonly CONTRATO_SIIF_DEPOSITOS_NO_IDENTIFICADOS : string = '1054';

  //     /**
  //      * Monto valida emision a comprar
  //      */
  //     public static readonly MONTO_VALIDA_NO_IDENTIFICADO_FONDOS : number = 1000000;

  //     /**
  //      * ID de Fondo +TASA  M1
  //      */
  //     public static readonly ID_FONDO_MAS_TASAM1 : number = 85;

  //     /**
  //      * ID de Fondo +TASA  M2
  //      */
  //     public static readonly ID_FONDO_MAS_TASAM2 : number = 90

  //     /**
  //      * Clave del registro a insertar en al tabla de Auto para la Confirmacion Interbancaria
  //      */
  //     public static readonly CVEAUTOMARINT = 200;

  //     /**
  //      * Descripcion Clave act a poner en la tabla de auto
  //      */
  //     public static readonly CVEAUTCVEACMARINT = 'MESA';

  //     /**
  //      * Monto de posicion
  //      */
  //     public static readonly MONTO_CIEN : number = 100;

  //     /**
  //      * Nombre del icono posicion CERO
  //      */
  //     public static readonly CERO_DESC : string = 'cero';
  //     /**
  //      * Nombre del icono posicion UP
  //      */
  //     public static readonly UP_DESC: string = 'up';
  //     /**
  //      * Nombre del icono posicion DOWN
  //      */
  //     public static readonly DOWN_DESC: string = 'down';

  //     /**
  //      * Tipo de notificacion para el envio de estado de cuenta fisico
  //      */
  //     public static readonly TIPO_NOTIFICACION_EDO_CTA_FISICO : string = "ECUENTAFISICO";

  //     /**
  //      * tipo notificacion envio estado de cuenta
  //      * */
  //     public static readonly ECUENTAFISICO : string = "ECUENTAFISICO";
  //     public static readonly CORREOTRADICIONAL : string = "CORREOTRADICIONAL";
  //     public static readonly NOIMPRIMIR  : string = "NOIMPRIMIR";

  //     public static readonly ECUENTAEMAIL : string = "ECUENTAEMAIL";
  //     public static readonly ENVIAR : string = "ENVIAR";
  //     public static readonly NOENVIAR : string = "NOENVIAR";

  //     /**
  //      * Constante de autorizacion monitor cumplimiento
  //      */
       public static readonly AUT_CUMPLIMIENTO : string = "JA";

  //     /**
  //      * Constante de rechazo monitor cumplimiento
  //      */
       public static readonly RECHAZA_CUMPLIMIENTO : string = "RA";

         /**
          * Constante de rechazo monitor cumplimiento
          */
          public static readonly PENDIENTE_CUMPLIMIENTO : string = "PD";
        
          /**
           * Constante de espera de informacion monitor cumplimiento
           */
          public static readonly ESPERA_INFORMACION : string = "EI";
         
          /**
           * Constante de rechazo monitor cumplimiento
           */
          public static readonly ANALISIS_CUMPLIMIENTO : string = "AL";

  //     /**
  //      * Constante de rechazo monitor cumplimiento
  //      */
       public static readonly ASIGNA_ALERTA : string = "Inicia analisis";

  //     /**Constante para identificar el grupo de DNI etrejo*/
  //     public static readonly GRUPO_ESTATUS_DNI : string = 'DI';
  //     /**Constante para identificar el grupo de DNI etrejo*/
  //     public static readonly GRUPO_ESTATUS_ACREEDOR : string = 'AC';

  //     /**
  //      * Constante que identifica transferencia Internacional
  //      **/
       public static readonly ID_CARGO_TRANSFERINTER : number = 10;

  //     /**
  //      * Constante que identifica el tipo de Cuenta Mancomunado de Fondos PF
  //      */
  //     public static readonly TIPO_CUENTA_PF_MANCOMUNADO_ID_FONDOS : number = 2;
  //     /**
  //      * Constante que identifica el tipo de Cuenta Mancomunado de Fondos PM
  //      */
  //     public static readonly TIPO_CUENTA_PM_MANCOMUNADO_ID_FONDOS : number = 11;
  //     /**
  //      * Grupo para Monitor Area Fondos
  //      */
  public static readonly GRUPO_MONITOR_AREA_FONDOS: string =
    'MONITORAREAFONDOS';
  //     /**
  //      * Nivel de autorizacion Fondos para Contratos Mancomunados
  //      */
  //     public static readonly NIVEL_AUTORIZACION_FONDOS_1 : number = 1;
  //     /**
  //      * Evento que se propaga cuando se da click a un button
  //      **/
  //     public static readonly CLICK_MOUSEEVENT : string = 'btnClick';

  //     /**
  //      * Biometricos
  //      **/
  //     public static readonly ROL_CLIENTE: string = '0';
  //     public static readonly ROL_OPERADOR: string = '1';
  //     public static readonly ROL_CLIENTE_UPDATE: string = '10';
  //     public static readonly ROL_OPERADOR_UPDATE: string = '11'

  //     /**
  //      * DATOS FAKE INE FIMPE
  //      * */
  //     public static readonly AN_REGISTRO: number = 2010;
  //     public static readonly AN_EMISION: number = 2010;
  //     public static readonly CLAVE_ELECTOR: string = 'XX00XX00XX00XX00XX';
  //     public static readonly NUM_EMISION: number = 2;
  //     public static readonly CIC: string = '00XX00XX00';

  //     /**
  //      * Constante que identifica transferencia Internacional
  //      **/
  //     public static readonly CVE_TRANS_INT : string = "16";

  //     /**
  //      * Tipo mesa para los precios para banca movil y en linea
  //      */
  //     public static readonly TIPO_MESA_MOV: string = "MOVIL";

  //     /**
  //      * Tipo de Divisa alojada en tabla i09Parametros
  //      */
  //     public static readonly DIVISAS_MOVIL: string = "DIVISA_MOVIL";

  public static readonly CERO: number = 0;

  //     //Id layout factura asimilados
  //     public static readonly NOM_FACT_ASIM : number = 15;

  //     // servicios de inversion

  //     /**
  //      * Tipo de Cliente sofisticado para servicios de inversión
  //      */
  //     public static readonly TCSI_SOFISTICADO: string ="SOFISTICADO";

  //     /**
  //      * Tipo de Cliente Otro para servicios de inversión
  //      */
  //     public static readonly TCSI_OTRO: string ="OTRO";

  //     /**
  //      * Tipo de Servicio de inversion Asesoria
  //      **/
  //     public static readonly TSI_ASESORIA: string ="ASESORIA";
  //     /**
  //      * Tipo de Servicio de inversion Gestion
  //      **/
  //     public static readonly TSI_GESTION: string ="GESTION";

  //     /**
  //      * Tipo de Servicio de inversion Ejecucion
  //      **/
  //     public static readonly TSI_EJECUCION: string ="EJECUCION";

  //     /**
  //      * Tipo Cuestionario CB Sofisticado PF
  //      */
  //     public static readonly TCU_ID_CB_SOFISTICADO_PF: number = 27;
  //     /**
  //      * Tipo Cuestionario CB Sofisticado PF
  //      */
  //     public static readonly TCU_ID_CB_NO_SOFISTICADO_PF: number = 28;
  //     /**
  //      * Tipo Cuestionario CB Sofisticado PM
  //      */
  //     public static readonly TCU_ID_CB_SOFISTICADO_PM: number = 29;
  //     /**
  //      * Tipo Cuestionario CB Sofisticado PM
  //      */
  //     public static readonly TCU_ID_CB_NO_SOFISTICADO_PM: number = 30;

  //     /**
  //      * Cuestionarios SI Fondos
  //      * */
  //     public static readonly TCU_ID_SI_FONDOS_PF: number = 42;
  //     public static readonly TCU_ID_SI_FONDOS_PM: number = 43;

  //     /**
  //      *Perfil apoderado CAsa de bolsa
  //      */
  //     public static readonly PERF_APODERADO_CB: number = 24;

  //     /**
  //      * Devuelve el tipo de cuestionario a capturar para calcular un perfil de inversion
  //      */
  //     // public static getTipoCuestionarioSI(contrato:ContratoFolderFondosVO): number{

  //     //     readonly contratoServicioInvVO: ContratoServicioInvVO = contrato.contratoServicioInvVO;
  //     //     readonly tpeClave: string = contrato.getTitular().personaVO.tipoPersonaVO.tpeClave;
  //     //     readonly tconId: number = contrato.contratoVO.tipoContratoVO.tconId;
  //     //     readonly tipoCuesSI: number = 0;
  //     //     try {
  //     //         if (tconId == TCON_CASA_BOLSA) {
  //     //             if (tpeClave == PERSONA_MORAL) {
  //     //                 if(contratoServicioInvVO.tipoClienteSInversionVO.tciDesc.toUpperCase() == TCSI_SOFISTICADO &&
  //     //                     (contratoServicioInvVO.tipoServicioInversionVO.tsiDesc.toUpperCase() == TSI_ASESORIA ||
  //     //                         contratoServicioInvVO.tipoServicioInversionVO.tsiDesc.toUpperCase() == TSI_GESTION)){
  //     //                     tipoCuesSI = TCU_ID_CB_SOFISTICADO_PM;
  //     //                 }else if (contratoServicioInvVO.tipoClienteSInversionVO.tciDesc.toUpperCase() == TCSI_OTRO &&
  //     //                     (contratoServicioInvVO.tipoServicioInversionVO.tsiDesc.toUpperCase() == TSI_ASESORIA ||
  //     //                         contratoServicioInvVO.tipoServicioInversionVO.tsiDesc.toUpperCase() == TSI_GESTION)){
  //     //                     tipoCuesSI = TCU_ID_CB_NO_SOFISTICADO_PM;
  //     //                 }
  //     //             } else {
  //     //                 if(contratoServicioInvVO.tipoClienteSInversionVO.tciDesc.toUpperCase() == TCSI_SOFISTICADO &&
  //     //                     (contratoServicioInvVO.tipoServicioInversionVO.tsiDesc.toUpperCase() == TSI_ASESORIA ||
  //     //                         contratoServicioInvVO.tipoServicioInversionVO.tsiDesc.toUpperCase() == TSI_GESTION)){
  //     //                     tipoCuesSI = TCU_ID_CB_SOFISTICADO_PF;
  //     //                 }else if (contratoServicioInvVO.tipoClienteSInversionVO.tciDesc.toUpperCase() == TCSI_OTRO &&
  //     //                     (contratoServicioInvVO.tipoServicioInversionVO.tsiDesc.toUpperCase() == TSI_ASESORIA ||
  //     //                         contratoServicioInvVO.tipoServicioInversionVO.tsiDesc.toUpperCase() == TSI_GESTION)){
  //     //                     tipoCuesSI = TCU_ID_CB_NO_SOFISTICADO_PF;
  //     //                 }
  //     //             }
  //     //         }
  //     //         if (tconId == TCON_FONDOS) {
  //     //             /**
  //     //              * GDEJESUS
  //     //              * Validacion
  //     //              * Discresional = SI
  //     //              * TIPO CLIENTE =  OTRO
  //     //              * TIPO INVERSION = ASESORIA / GESTION
  //     //              * */
  //     //             if (contratoServicioInvVO.tipoClienteSInversionVO.tciDesc.toUpperCase() == TCSI_OTRO &&
  //     //                 (contratoServicioInvVO.tipoServicioInversionVO.tsiDesc.toUpperCase() == TSI_ASESORIA ||
  //     //                     contratoServicioInvVO.tipoServicioInversionVO.tsiDesc.toUpperCase() == TSI_GESTION)) {
  //     //                 if (tpeClave == PERSONA_MORAL) {
  //     //                     tipoCuesSI = TCU_ID_SI_FONDOS_PM;
  //     //                 } else {
  //     //                     tipoCuesSI  = contrato.getTitular().personaVO.cpeId == PERSONA_FISICA_CON_ACTIVIDAD ?
  //     //                         TCU_ID_SI_FONDOS_PM : TCU_ID_SI_FONDOS_PF;
  //     //                 }
  //     //             }
  //     //         }
  //     //     } catch(e: Error) {
  //     //         return 0;
  //     //     }
  //     //     return tipoCuesSI;

  //     // }
  //     /**
  //      * Tipo de Cuenta Inversion Fondos
  //      */
  //     public static readonly ID_CUENTA_INVERSION_FONDOS : number = 6;

  //     /**
  //      * TITULOS MEDIO POR EL QUE SE LIQUIDA LA ORDEN DE FONDOS
  //      */
  //     public static readonly LIQUIDA_ORDEN_POR_TITULOS : string = 'T';

  //     /**
  //      * IMPORTE MEDIO POR EL QUE SE LIQUIDA LA ORDEN DE FONDOS
  //      */
  //     public static readonly LIQUIDA_ORDEN_POR_IMPORTE : string = 'I';

  //     /*
  //     * Tipos de clientes para servicios de inversion
  //     */
  //     public static readonly CLIENTE_ISNTITUCIONAL : string = 'Institucional';

  //     /**
  //      * Categ Contratos
  //      * */
  //     public static readonly TIPO_CAT_FIDEICOMISO: number = 23;
  //     public static readonly TIPO_CAT_CAJA_AHORRO = 24;
  //     public static readonly TIPO_CAT_FONDO_AHORRO = 27;

  //     /**
  //      * grupo para identificar observaciones que se requieran en motor cumplimiento
  //      */
       public static readonly GRUPO_OBS : string = 'OB';
  //     /**
  //      *  grupo para identificar motivos que se requieran en motor cumplimiento
  //      */
       public static readonly GRUPO_MOTIVOS : string = 'MO';

  //     /**
  //      *  grupo para identificar motivos de asignacion
  //      */
  //     public static readonly GRUPO_ASIGNACION : string = 'UL';

  //     /**
  //      * Grupo para Consulta Operaciones Dispersion Fondos
  //      */
  //     public static readonly GRUPO_CONSULTA_OPE_FONDOS : string = "CONSULTAOPEFONDOS";

  //     //numeros para indicar de que base consultar las nominas
  //     public static readonly NOMINAS_POS : number = 1;
  //     public static readonly NOMINAS_BAIN : number = 2;

  //     //numero de negocio FORWARDS Y SEGUROS
  //     public static readonly CLV_NEGOCIO_DIVISAS : number = 1;
  //     public static readonly CLV_NEGOCIO_PATRIMONIAL : number = 3;
  //     public static readonly CLV_NEGOCIO_SEGUROS : number = 4;
  //     public static readonly CLV_NEGOCIO_FORWARDS : number = 5;
  //     public static readonly CLV_NEGOCIO_CREDITOS : number = 6;
  //     public static readonly CLV_NEGOCIO_SOFOME : number = 7;
  //     public static readonly CLV_NEGOCIO_DERIVADOS : number = 8;

  //     //ID  de producto forward en derivados
  //     public static readonly DER_PRODUCTO_FORWARD : number = 6;

  //     //numero de tipo de pago
  //     public static readonly CLV_TIPOPAGO_TRADER : string = "3";

  //     //numero de modo de pago
  //     public static readonly CLV_MODOPAGO_NOM : number = 1;
  //     public static readonly CLIENTE_INSTITUCIONAL_EQ : string = 'Institucional equiparable';

  //     //numero de clave de apoderado
  //     public static readonly CLV_APODERADO_IF : number = 1;

  //     public static readonly ALTPERFCOM: string  = "ALTPERFCOM";
  //     public static readonly UPDPERFCOM: string  = "UPDPERFCOM";
  //     public static readonly DELPERFCOM: string  = "DELPERFCOM";

  //     public static readonly CLV_NEGOCIO_FONDOS : number = 2;
  //     public static readonly NOMINAS_SICC : number = 3;
  //     public static readonly TABLAS_BAIN : number = 1;
  //     public static readonly TABLAS_SICC : number = 2
  //     /**
  //      * Valor del parametro para consultar cuentas que requieren token, para homologacion FX vs Enlace
  //      */
  //     public static readonly TIPO_CUENTAS_VALIDAN_TOKEN : string = "CUENTAS_CON_TOKEN";

       public static readonly USUARIO_BT: string = "000671";

  //     public static readonly DIRECTOR_SUCURSAL: string = '000233';
  //     public static readonly DIRECTOR_REGIONAL: string = '000460';

  public static readonly NEGOCIO_BANCO: number = 1;
  public static readonly NEGOCIO_CASA_BOLSA: number = 2;
  public static readonly NEGOCIO_FORWARDS: number = 3;

  //     public static readonly PLANTILLA_OPER_INTER : string = 'https://www.ieb.com.mx/NB/documentos/formatos/Plantilla_Operaciones_INTB.xlsm';
  //     public static readonly PLANTILLA_OPER_SPEI : string = 'https://www.ieb.com.mx/NB/documentos/formatos/Plantilla_Operaciones_SPEI.xlsm';
  //     public static readonly PLANTILLA_OPER_SPID : string = 'https://www.ieb.com.mx/NB/documentos/formatos/Plantilla_Operaciones_SPID.xlsm';
  //     public static readonly PLANTILLA_OPER_SPEI_FIS : string = 'https://www.ieb.com.mx/NB/documentos/formatos/Generador.xls';
  //     public static readonly PLANTILLA_SPID : string = 'https://www.ieb.com.mx/NB/documentos/formatos/Plantilla_Alta_SPID.xlsm';
  //     public static readonly PLANTILLA_OPER_TI : string = 'https://www.ieb.com.mx/NB/documentos/formatos/Plantilla_Operaciones_TI.xlsm';
  //     public static readonly PLANTILLA_REPT_TI : string = 'https://www.ieb.com.mx/NB/documentos/formatos/Plantilla_Repetitivas_TI.xlsm';
  //     public static readonly NUM_SERV_ANTAD_TELMEX: string = '00002';
  //     public static readonly NUM_SERV_ANTAD_SKY: string = '00003';
  //     public static readonly NUM_SERV_ANTAD_CFE: string = '00001';
  //     public static readonly NUM_SERV_ANTAD_SIAPA: string = '00015';

  //     public static readonly TIPO_CARGA_M : string = "Masiva";
  //     public static readonly TIPO_CARGA_I : string = "Individual";
  //     public static readonly TIPO_CARGA_CAR : string = "Carrito";
  //     public static readonly FECHA_SIBAMEX_BT = "La Fecha no corresponde con la de SIBAMEX";

  //     public static readonly TIPO_CTA_BT : string = "PROPIA";

  //     /**
  //      *Id del cuestionario de preclasificacion de credito capital de trabajo
  //      */
  //     public static readonly CUESTIONARIO_CAPITALTRABAJO : number = 31;
  /**
   *  grupo ADMINISTRADOR MONITOR SIM
   */
  public static readonly GPO_ADMON_SIM: string = 'ADMONSIM';

  //     /**
  //      *  grupo ADMINISTRADOR UPF
  //      */
  //     public static readonly GPO_ADMON_UPF : string = 'ADMONUPF';

  //     /**
  //      * AREA PLD
  //      */
       public static readonly AREA_PLD : string = 'PLD';

  //     /**
  //      * AREA UPF
  //      */
  //     public static readonly AREA_UPF : string = 'UPF';

  //     /**
  //      * AREA DE AUTORIZACION UPF
  //      */
  //     public static readonly AREA_AUTORIZA_UPF : number = 2;

  //     /**
  //      * AREA DE AUTORIZACION PLD
  //      */
       public static readonly AREA_AUTORIZA_PLD : number = 1;

  //     public static readonly REPORT_AUT_BUR: string  = "ReporteAutBursatil";
  //     public static readonly REPORT_AUT_DIR: string  = "ReporteAutDirector";
  //     public static readonly REPORT_PAGO_BUR: string  = "RepotePagoBursatil";
  //     public static readonly REPORT_BUR_POR_PROM: string  = "ReporteBursatilPorPromotor";
  //     public static readonly REPORT_BONIF_DESC: string  = "ReporteBonifDescuentos";

  //     /**
  //      * Estatus orden enviada a SIIF
  //      */
  //     public static readonly ORDEN_ESTATUS_AUTORIZADA_FONDOS : number = 12;

  //     /**
  //      * Estatus orden cancelada
  //      */
  //     public static readonly ORDEN_ESTATUS_CANCELADA_FONDOS : number = 9;

  //     /**
  //      * SUCURSAL MATRIZ FONDOS
  //      */
  //     public static readonly SUC_DFMATRIZ : string = 'DFMTZ';

  //     /**
  //      * Nivel de autorizacion Fondos No frecuente
  //      */
  //     public static readonly NIVEL_AUTORIZACION_FONDOS_2 : number = 2;

  //     /**
  //      * ban_id de BBVA
  //      */
  //     public static readonly BAN_ID_BBVA : number = 9;

  //     /**
  //      * Estatus orden rechazada
  //      */
  //     public static readonly ORDEN_ESTATUS_RECHAZADA_FONDOS : number = 13;

  //     public static readonly REPORT_PRODUC_COMI: string  = "ReporteProductividadComisiones";

  //     /////// Spid con Linea y PxA
  //     /**
  //      * Parametro del tipo de cuenta empresarial
  //      */
  //     public static readonly CTA_EMPRESARIAL_FX : string = 'CtaEmpresarialFX';

  //     /**
  //      * Clave legada de la forma de pago Abono
  //      */
  //     public static readonly LEGADA_FORMA_PAGO_ABONO : string = '6';
  /**
   * Clave de la sucursal generica "GENER"
   */
   public static readonly SUCURSAL_GENER : string = "GENER";

   
  //     /**
  //      * Identifica que el pago es Recepcion
  //      */
  //     public static readonly PAGO_RECEPCION : string = "R";
  //     /////// FIN Spid con Linea y PxA

  //     /**
  //      * Estatus PENDIENTE
  //      */
  //     public static readonly PLD_PENDIENTE : string = 'PB';
  //     /**
  //      * Estatus ANALISIS
  //      */
  //     public static readonly PLD_ANALISIS : string = 'AB';
  //     /**
  //      * Estatus DIGITALIZACION
  //      */
  //     public static readonly PLD_DIGITALIZACION : string = 'DI';
  //     /**
  //      * Estatus ENVIO CUESTIONARIO
  //      */
  //     public static readonly PLD_CUESTIONARIO : string = 'CU';
  //     /**
  //      * Estatus SOLICITUD DE APROBACION
  //      */
  //     public static readonly PLD_SOLICITUD_APROBACION : string = 'SA';
  //     /**
  //      * Estatus CORRECCION DE ERRORES
  //      */
  //     public static readonly PLD_CORRECCION_ERRORES : string = 'CR';
  //     /**
  //      * Estatus JUSTIFICO GERENTE
  //      */
  //     public static readonly PLD_JUSTIFICO_GERENTE : string = 'JG';
  //     /**
  //      * Estatus COMITE GERENTE
  //      */
  //     public static readonly PLD_COMITE_GERENTE : string = 'CG';
  //     /**
  //      * Estatus DIGITALIZACION_COMITE
  //      */
  //     public static readonly PLD_DIGITALIZACION_COMITE : string = 'DC';
  //     /**
  //      * Estatus CORRECCION_ANALISIS_ESPECIALIZADO
  //      */
  //     public static readonly PLD_CORRECCION_ANALISIS_ESPECIALIZADO : string = 'ES';
  //     /**
  //      * Estatus ANALISIS_PARCIALMENTE_REPORTADO
  //      */
  //     public static readonly PLD_PARCIALMENTE_REPORTADO : string = 'RP';
  //     /**
  //      * Estatus JUSTIFICADO COMITE
  //      */
  //     public static readonly PLD_JUSTIFICADO_COMITE : string = 'JC';
  //     /**
  //      * Estatus REPORTE GENERADO
  //      */
  //     public static readonly PLD_REPORTE_GENERADO : string = 'GE';
  //     /**
  //      * Estatus COMPLEMENTADO PARA REPORTE
  //      */
  //     public static readonly PLD_COMPLEMENTADO_REPORTE : string = 'CM';

  //     public static readonly PLD_JUSTIFICA_ANALISTA : string = 'JB';

  //     public static readonly PLD_COMITE_ANALISTA : string = 'CB';

  //     public static readonly PLD_PROPIETARIO_REAL : string = 'PR';

  //     public static readonly PLD_TITULAR : string = 'TI';

  //     public static readonly PLD_FUNCIONARIO : string = 'FU';

  //     public static readonly PLD_OTRO :  string = 'OT';

  //     public static readonly PLD_BUSQUEDA_MAPS : string = 'GM';

  //     public static readonly PLD_BUSQUEDA_INTERNET : string = 'BG';

  //     public static readonly PLD_CUESTIONARIO_CONTESTADO : string = 'CO';

  //     public static readonly PLD_CUESTIONARIO_RECHAZADO : string = 'RE';

  //     public static readonly PLD_CUESTIONARIO_ENVIADO : string = 'EN';

  //     public static readonly PLD_CUESTIONARIO_SAPROBACION : string = 'SA';

  //     public static readonly PLD_CUESTIONARIO_SEGUIMIENTO: string = 'SE';

  //     public static readonly PLD_ID_PROPIETARIO : string = 'PLD_ID_PROPIETARIO_REAL';

  //     public static readonly PLD_ID_FUNCIONARIO : string = 'PLD_ID_FUNCIONARIOS';

  //     public static readonly PLD_ID_APODERADO : string = 'PLD_ID_APODERADO';

  //     public static readonly PLD_ID_COTITULAR : string = 'PLD_ID_COTITULAR';

  //     public static readonly PLD_ID_TITULAR : string = 'PLD_ID_TITULAR';

  //     public static readonly ID_TIP_REP_INUSUAL :number = 2;

  //     public static readonly ID_TIP_REP_PREOCUPANTE :number = 3;

  //     /**
  //      * Especifica el Factor de c&aacute;lculo del Consumo contraparte.
  //      **/
  //     public static readonly FACTOR_CONSUMO_CONT: number = 0.08;

  //     /**
  //      * Identifica el documento para monitor batch pld
  //      */
  //     public static readonly PLD_DOC_MONITOR : number = 148;
  //     /**
  //      * Identifica el documento para cuestionario
  //      * monitor batch pld
  //      */
  //     public static readonly PLD_DOC_CUESTIONARIO : number = 149;

  //     /**
  //      * Raiz de los parametros asociados a las divisas a excluir
  //      */
  //     public static readonly PARAM_DIV_EXC: string = 'DIVISA_EXC';
  //     /**
  //      * Bandera para determinar que la busqueda de divisa excluya o no las divisas especificadas en los
  //      * parametros DIVISA_EXC_xxx de la tabla i9parametro
  //      *      True:  Excluye
  //      *      False: Incluye
  //      **/
  //     public static readonly BAND_DIV_EXC:boolean = false;

  //     /**
  //      * Parametro para obtener la lista de negocios de divisas que pueden realizar Reversos.
  //      **/
  //     public static readonly PARAM_NEGOCIOS_REVERSO: string = "NEGOCIOS_REVERSO";

  //     /**
  //      * Lista de causas que no deben igualar tipos de costo
  //      */
  //     public static readonly PARAM_CAUSAS_NO_IGUALA_TCOSTO: string = "CAUSAS_NO_IGUALA_TCOSTO";

  //     /**
  //      * Tipo de Causa Reversos
  //      **/
  //     public static readonly TIPO_CAUSA_REVERSO: string = "REV";

  //     /**
  //      * Tipo de Causa Recompra
  //      **/
  //     public static readonly TIPO_CAUSA_RECOMPRA: string = "REC";

  //     /**
  //      * Parametro para el identificador del ROl del modulo de cierre de reversos para promocion.
  //      *      (rol_id de CIERRE REVERSOS PROM)
  //      */
  //     public static readonly ROL_ID_CIERRE_REV_PROM: string = 'ROL_ID_CIERRE_REV_PROM';

  //     /**
  //      * Grupo Promotor Divisas
  //      **/
  //     public static readonly GRUPO_PROM_DIVISAS: string = 'PROMOTORDIVISAS';

  //     /**
  //      * Grupo de Control para solicitar y monitorear reversos
  //      **/
  //     public static readonly GRUPO_REVERSOS_CONTROL: string = 'REVERSOSCONTROL';

  //     /**
  //      * Grupo de la Mesa para autorizacion de reversos
  //      **/
  //     public static readonly GRUPO_REVERSOS_MESA: string = 'REVERSOSMESA';

  //     /**
  //      * Grupo de Tesoreria para autorizacion de reversos
  //      **/
  //     public static readonly GRUPO_REVERSOS_TESORERIA: string = 'REVERSOSTESORERIA';

  //     /**
  //      * Estatus Solicitud para Validar por Tesoreria (ST)
  //      */
  //     public static readonly EDO_SOL_TESO: number = 3;

  //     /**
  //      * Estatus Solicitud Autorizada por Tesoreria (AT)
  //      */
  //     public static readonly EDO_AUTO_TESO: number = 4;

  //     /**
  //      * Estatus de Solicitud Rechazada por Tesoreria (RT)
  //      */
  //     public static readonly EDO_RE_TESO: number = 6;

  //     /**
  //      * Estatus Solicitud para Validar por la Mesa (SM)
  //      */
  //     public static readonly EDO_SOL_MESA: number = 1;

  //     /**
  //      * Estatus de Solicitud Autorizada por la Mesa (AM)
  //      */
  //     public static readonly EDO_AUTO_MESA: number = 2;

  //     /**
  //      * Estatus de Solicitud Rechazada por la Mesa (RM)
  //      */
  //     public static readonly EDO_RE_MESA: number = 5;

  //     /**
  //      * Estatus de Reverso Aplicado (AP)
  //      */
  //     public static readonly EDO_APLICA: number = 7;

  //     /**
  //      * Estatus Solicitud de Reverso Cancelada (CA)
  //      */
  //     public static readonly EDO_CANCEL: number = 8;

  //     /**
  //      * Estatus Solicitud de Reverso Cancelada por Tesoreria/Control (CT)
  //      */
  //     public static readonly EDO_CANCEL_TESO: number = 9;

  //     /**
  //      * Estatus Solicitud de Reverso "Solicitud" (SO: SM y ST)
  //      */
  //     public static readonly EDO_SOLICITUD: number = 102;

  //     /**
  //      * Estatus Solicitud de Reverso "Autorizada" (AU: AM y AT)
  //      */
  //     public static readonly EDO_AUTORIZADA: number = 101;

  //     /**
  //      * Estatus Solicitud de Reverso "Todas" (TD: SM, AM, ST, AT, RM. RT, AP, CA y CT)
  //      */
  //     public static readonly EDO_TODAS : number = 100;

  //     /**
  //      * Identificador de la causa de reverso: Tipo Cambio
  //      */
  //     public static readonly ID_CAUSA_TIPO_CAMBIO: number = 1;

  //     /**
  //      * Identificador de la causa de reverso: Monto
  //      */
  //     public static readonly ID_CAUSA_MONTO: number = 2;

  //     /**
  //      * Identificador de la causa de reverso: Comision
  //      */
  //     public static readonly ID_CAUSA_COMISION: number = 3;

  //     /**
  //      * Identificador de la causa de reverso: Fecha Valor
  //      */
  //     public static readonly ID_CAUSA_FECHA_VALOR: number = 4;

  //     /**
  //      * Identificador de la causa de reverso: Tipo Operacion
  //      */
  //     public static readonly ID_CAUSA_TIPO_OPERACION: number = 5;

  //     /**
  //      * Identificador de la causa de reverso: Instrumento
  //      */
  //     public static readonly ID_CAUSA_INSTRUMENTO: number = 6;

  //     /**
  //      * Identificador de la causa de reverso: Beneficiario
  //      */
  //     public static readonly ID_CAUSA_BENEFICIARIO: number = 7;

  //     /**
  //      * Identificador de la causa de reverso: Liquidacion
  //      */
  //     public static readonly ID_CAUSA_LIQUIDACION: number = 8;

  //     /**
  //      * Identificador de la causa de reverso: Clave Cliente
  //      */
  //     public static readonly ID_CAUSA_CLIENTE: number = 9;

  //     /**
  //      * Identificador de la causa de reverso: Refoliacion
  //      */
  //     public static readonly ID_CAUSA_REFOLIACION: number = 10;

  //     /**
  //      * Identificador de la causa de reverso: Politica 72 Hrs.
  //      */
  //     public static readonly ID_CAUSA_POLITICA_72H: number = 11;

  //     /**
  //      * Identificador de la causa de reverso: Solicitud de Cumplimiento
  //      */
  //     public static readonly ID_CAUSA_SOL_CUMPLIMIENTO: number = 12;

  //     /**
  //      * Identificador de la causa de reverso: Cancela Cliente
  //      */
  //     public static readonly ID_CAUSA_CANCELA_CLIENTE: number = 13;

  //     /**
  //      * Valor del document.className para la pantalla de autorizacion de reverso
  //      */
  //     public static readonly PANTALA_AUT_REVERSO: string = "AutorizarReverso";

  //     /**
  //      * Indica si el reverso de la operacion es una operacion sustituta
  //      */
  //     public static readonly TIPO_OPER_REVERSO_SUST: string = "SUST";

  //     /**
  //      * Indica si el reverso de la operacion es una operacion reversa
  //      */
  //     public static readonly TIPO_OPER_REVERSO_REVA: string = "REVA";

  //     /**
  //      * Indicador para pagos correspondientes a la Divisa
  //      **/
       public static readonly TIPO_PAGO_DIVISA: string = "PAG_DIV";

  //     /**
  //      * Indicador para pagos correspondientes a los Pesos
  //      **/
  //     public static readonly TIPO_PAGO_PESOS: string = "PAG_MN";

  //     /**
  //      * Nombre del parametro que indica el permiso para realizar solicitudes de reverso
  //      *      NO: Sin permisos (Modulo deshabilitado)
  //      *      SI: Permiso para todos los promotores del grupo PROMOTORDIVISAS (Modulo  habilitado)
  //      *      Lista de usuUsuario: Lista de los promotores que tienen habilitado el modulo (Modulo habilitado)
  //      */
  //     public static readonly PARAM_REVERSO_OPERAR_SOLREV: string = "REVERSO_OPERAR_SOLREV";

  //     /**
  //      * Nombre del parametro con el tipo de costo para reverso remesa
  //      */
  //     public static readonly PARAM_REVERSO_REMESA: string = "REVERSO_REMESA";

  //     /**
  //      * Nombre del parametro con el tipo de costo para reverso cash back
  //      */
  //     public static readonly PARAM_REVERSO_CASH_BACK: string = "REVERSO_CASH_BACK";

  //     /**
  //      * Clave del banco para COBIN
  //      */
  //     public static readonly CLV_BAN_COBIN: string = "COBIN";

  //     public static readonly REPORT_OPERADORES: string  = "ReporteOperadores";
  //     public static readonly REPORT_AUT_OPERADORES: string  = "ReporteAutOperadores";
  //     public static readonly REPORT_PAGOS_OPERADORES: string  = "ReportePagosOperadores";

  //     //Identificador para layout factura de negocio bursatil
  //     public static readonly FACT_BUR : number = 17;

  //     /**
  //      * Identifica el tipo de documento para Validacion RFC en cta SPID
  //      */
  //     public static readonly SPID_VALIDA_RFC : number = 169;

  //     /**
  //      * Identifica el tipo de documento para Autorizacion repetitiva
  //      */
  //     public static readonly TIP_DOC_SOLICITUD_REPETITIVA : number = 170;

  //     /**
  //      * Catalogo de Ventanillas en SICA
  //      **/
  //     public static readonly CAT_VENT_SICA : number =116;

  //     public static readonly CUESTIONARIO_LISTAS_NEGRAS_PF : number = 44;
  //     public static readonly CUESTIONARIO_LISTAS_NEGRAS_PM : number = 45;
  //     public static readonly CUESTIONARIO_ACTIVIDAD_VULNERABLE : number = 46;
  //     public static readonly CUESTIONARIO_ADICIONAL : number = 47;
  //     public static readonly INTEGER_1 : number = 1;
  //     public static readonly INTEGER_2 : number = 2;
  //     public static readonly INTEGER_3 : number = 3;
  //     public static readonly INTEGER_4 : number = 4;
  //     /**Constante para identificar el grupo de DNI etrejo*/
  //     public static readonly GRUPO_TIPO_BUSQ : string = 'AM';
  //     public static readonly GRUPO_TIPO_MOV : string = 'MC';

  //     //Nombres de los reportes del negocio seguros
  //     public static readonly REPORT_BONO_INDIVIDUAL: string = "ReporTBonoIndividual";
  //     public static readonly REPORT_AUT_BONO: string = "ReporAutBono";
  //     public static readonly REPORT_PAGOS_SEGUROS_PROM: string = "ReportPagosSeguros";
  //     public static readonly REPORT_PAGOS_ENLACE: string = "ReportPagosEnlace";
  //     public static readonly REPORT_AUT_ENLACE: string = "ReportAutEnlace";

  //     //Identificadores para las pantallas
  //     public static readonly PANTALLA_PROMOTORES: string = "Promotores";
  //     public static readonly PANTALLA_ENLACE: string = "Enlace";

  //     /**
  //      * PARAMETROS CVE PUESTO DIRECTIVOS Y ASISTENTES SUCURSAL
  //      */
  //     public static readonly CVE_PUESTO_DIRECTOR_ASISTENTE_SUCURSAL : string = 'CVE_PUESTO_DIR_ASIST_SUCURSAL';

  //     /**
  //      * CLAVE DE PUESTO PARA PRMOTORES BANCO
  //      */
  //     public static readonly CVE_PUESTO_PROMOTORES : string = 'CVE_PUESTO_PROMOTORES';

  //     //Constante para el Desmarque de concilias
  //     public static readonly TIPO_GUIA_CONCILIA = 'C';
  //     public static readonly TIPO_GUIA_REMESA = 'R';
  //     public static readonly NO_EXISTE_BANCO = 'NO EXISTE EL BANCO';

  //     public static readonly DOCUMENTO1 : number = 82;
  //     public static readonly DOCUMENTO2 : number = 172;
  //     public static readonly DOCUMENTO3 : number = 173;
  //     public static readonly DOCUMENTO4 : number = 72;

  //     /**
  //      * Tipo de operacion SPID
  //      */
       public static readonly TIPO_MOV_SPID : number = 7;

  //     /**
  //      * Identifica el tipo de documento para Cancelar repetitiva
  //      */
  //     public static readonly TIP_DOC_CANCELA_REPETITIVA : number = 175;
  //     /**
  //      *
  //      */
  //     public static readonly URL_FILE: string = "/estado/File.jsp?file=";

  //     //Identificadores para las pantallas de gestion cova
  //     public static readonly PANTALLA_TIPO_CONCEPTOS: string = "tipoConceptos";
  //     public static readonly PANTALLA_CONCEPTOS: string = "conceptos";
  //     public static readonly PANTALLA_TIPO_APLIC: string = "tipoAplicacion";
  //     public static readonly PANTALLA_PORCENT_APLIC: string = "porcentAplic";
  //     public static readonly PANTALLA_AGRUPADORES: string = "agrupadores";
  //     public static readonly PANTALLA_PERFGESTION: string = "perfilGestion";

  //     public static readonly PARAM_BASE_COMISION : string = "BASECOMISION";
  //     public static readonly PARAM_UTILIDADCON_TRIBUIDA : string  = "UTILIDADCONTRIBUIDA";

  //     //Id layout honorarios/factura gestion
  //     public static readonly NOM_HONFAC_GEST : number = 21;
  //     //Id layout factura asimilados gestion
  //     public static readonly NOM_FACTASIM_GEST : number = 23;

  public static readonly criterio : string = "Criterio: ";
  public static readonly MOV_DESCRIP_TRANSFERINTER =
    'Cargo a Cuenta con Salida Transferencia Internacional';
  public static readonly MOV_DESCRIP_TRANSFER_CTAS_MXN =
    'Transferencia entre Cuentas (PESOS)';
  public static readonly MOV_DESCRIP_TRANSFER_CTAS_USD =
    'Transferencia entre Cuentas (DOLARES)';
  public static readonly MOV_DESCRIP_TRANSFER_CTAS_EUR =
    'Transferencia entre Cuentas (EUROS)';

  public static readonly CLV_PROM_FX_TRASPASO = '156';

  public static readonly CLV_PROM_SERVICIO_FX_TRA = '1';

  public static readonly GRUPO_NIVEL_DIRECTORES_ASISTENTES: string =
    'CONSULTADIRECTORES';

  //     /**
  //      * Repetitiva capturada en POS FX
  //      */
  //     public static readonly ORI_REPET_POS_FX: string = "FX";

  //     //comisiones TPV
  //     /**
  //      * string Movimi
  //      */
  //     public static readonly BONIFICACION: string = "Bonificacion";

  //     /**
  //      * Url de Serlvlet para Reportes de Banco
  //      */
  //     public static readonly URL_REPORTES_BANCO_XDOC: string = "../ReporteXDocBanco.jsp?conId=";
  //     /**
  //      * ID DEL DOCUMENTO REPORTE REPETITIVAS SPID
  //      */
  //     public static readonly XDOC_ID_REPORTE_REPETITIVA_SPID : number = 16;

  //     public static readonly PARAM_PER_HOMOLOGACION = 'EMAIL_HOMOLOGACION';

  //     /**
  //      * Id para imagen frente de imagen cheque
  //      */
      public static readonly FRENTE_CHEQUE: number = 1;

  //     /**
  //      * Id para imagen reverso de imagen cheque
  //      */
      public static readonly REVERSO_CHEQUE: number = 2;

  //     /**
  //      * Clave <code>3087</code> del archivo msgSistemaResource.properties
  //      * Hace referencia al mensaje de Alerta al generar una solicitud de remesa sin DEAL
  //      *      por coincidencias en listas negras, con 1 parametro
  //      * "La remesa sin deal fue guardada\nLa Solicitud para el cliente {0},\n se est\u00E1 evaluando por Coincidencias en Listas Negras"
  //      */
  //     public static readonly MSG_REM_SIN_DEAL_EN_LISTAS_NEGRAS_1: string = "3087";

  //     //Constantes solicitudes de transfer sin deal
       public static readonly TRANSFER_AUTORIZADO: number = 2;
       public static readonly TRANSFER_RECHAZADO: number = 3;
       public static readonly TRANSFER_CAPTURADO: number = 1;
       public static readonly TIPO_CUENTA_PROPIETARIO: string = "P";
       public static readonly TIPO_CUENTA_TERCERO: string = "T";

  //     /**
  //      * etrejor
  //      * BIC_MT199
  //      */
  //     public static readonly BIC_MT199: string = "BIC_MT199";
  //     /**
  //      * etrejor
  //      * BIC_MT199
  //      */
  //     public static readonly BIC_INTERMT199: string = "BIC_INTERMT199";
  //     /**
  //      * etrejor
  //      * BIC_MT199
  //      */
  //     public static readonly ESTATUS_MT199: string = "ESTATUS_MT199";
  //     /**
  //      * etrejor
  //      * BIC_MT199
  //      */
  //     public static readonly GRUPO_GPI: string = "GP";

  //     //identificadores reportes fondos cova
  //     public static readonly REPORTE_ASESOR_FONDOS: number = 1;
  //     public static readonly REPORTE_AUTORIZACION_FONDOS: number = 2;
  //     public static readonly REPORTE_DIRECTOR_FONDOS: number = 3;
  //     public static readonly REPORTE_PAGOS_FONDOS: number = 4;
  //     public static readonly GENERA_ARCHIVO_FONDOS: number = 5;

  //     public static readonly REPORTE_RESUMEN_COVA: number = 0;

  //     //Id layout honorarios
  //     public static readonly NOM_HONFAC_FOND: number = 23;

  //     //Homologacion Fase 2
  //     public static readonly SRC_RFC_ROJO : string = "../assets/rojoRFC.png";
  //     public static readonly SRC_RFC_GRIS : string = "../assets/grisRFC.png";
  //     public static readonly SRC_RFC_VERDE : string = "../assets/verdeRFC.png";

  //     public static readonly SRC_SO_ROJO : string = "../assets/rojoSO.png";
  //     public static readonly SRC_SO_GRIS : string = "../assets/grisSO.png";
  //     public static readonly SRC_SO_VERDE : string = "../assets/verdeSO.png";

  //     public static readonly SRC_AC_ROJO : string = "../assets/rojoAC.png";
  //     public static readonly SRC_AC_GRIS : string = "../assets/grisAC.png";
  //     public static readonly SRC_AC_VERDE : string = "../assets/verdeAC.png";
  //     public static readonly TIPO_TRANSACION_SPID: string = "CD";
  //     public static readonly TIPO_TRANSACION_TRANSFER_INT : string = "CT";
  //     public static readonly NO_APLICA_MSG : string = "NO APLICA";
  //     public static readonly EDO_REP_NA : string =  "NA";

  //     //constante para bcb actualisa
  //     public static readonly BITCUENTABANVO_BCBOPERACION= "ACTUALIZA";

  //     /**
  //      * Parametro para obtener el layout Arbitro B136
  //      */
  //     public static readonly ARBITRO_B136 : number = 116; // 116, 122, 134;

  //     /**
  //      * Parametro para obtener el layout Arbitro D872
  //      */
  //     public static readonly ARBITRO_D872 : number = 117; // 117, 123, 135

  //     /**
  //      * Parametro para obtener el layout Arbitro B872
  //      */
  //     public static readonly ARBITRO_B872 : number = 118; // 118, 124, 136

  //     /**
  //      * Parametro para obtener el layout Arbitro B837
  //      */
  //     public static readonly ARBITRO_B837 : number = 119; // 119, 125, 137

  //     /**
  //      * Parametro para obtener el layout Arbitro B837
  //      */
  //     public static readonly ARBITRO_B238 : number = 120; // 120, 126, 138

  //     /**
  //      * Parametro para obtener la extensión del archivo del arbitro B136
  //      */
  //     public static readonly EXTENSION_ARCHIVO_B136 : string = "B136";

  //     /**
  //      * Parametro para obtener la extensión del archivo del arbitro D872
  //      */
  //     public static readonly EXTENSION_ARCHIVO_D872 : string = "D872";

  //     /**
  //      * Parametro para obtener la extensión del archivo del arbitro B872
  //      */
  //     public static readonly EXTENSION_ARCHIVO_B872 : string = "T872";

  //     /**
  //      * Parametro para obtener la extensión del archivo EMV.D872
  //      */
  //     public static readonly ARCHIVO_D872: string = "EMV.D872";

  //     /**
  //      * Parametro para obtener la extensión del archivo EMV.T872
  //      */
  //     public static readonly ARCHIVO_EMV_T872 : string = "EMV.T872";

  //     /**
  //      * Parametro para obtener la extensión del archivo EMV.T872
  //      */
  //     public static readonly ARCHIVO_DLS_T82  : string = "DLS.T872";

  //     /**
  //      * Constante que indica que sean visible los nuevos campos del beneficiario
  //      */
  //     public static readonly PARAMETRO_CAMPOS_BENEFICIARIO = "CAMPOS_BENEFICIARIO";

  //     /**
  //      * Define el valor de la propiedad <code>gpuNombre</code> para el <code>Grupo</code>
  //      *      que puede ralizar el proceso de envio de SPID POR VENCER AL INICIO DE DIA
  //      */
  //     public static readonly ENVIO_SPID_VENCER : string = "ENVIOSPIDVENCER";

  //     /**
  //      * ID DEL DOCUMENTO REPORTE ALERTAS_TRABAJADAS
  //      */
  //     public static readonly XDOC_ID_REPORTE_ALERTAS_TRABAJADAS : number = 18;
  //     /**
  //      * etrejor
  //      * MOV_IVA
  //      */
  //     public static readonly MOV_IVA: string = "MOV_IVA";

  //     /**
  //      * etrejor
  //      * MOV_COMISION
  //      */
  //     public static readonly MOV_COMISION: string = "MOV_COMISION";

  //     /**
  //      * etrejor
  //      * MOV_COMER
  //      */
  //     public static readonly MOV_COMER: string = "MOV_COMER";

  //     /**
  //      * Constante para el grupo operador transfer de tesoreria
  //      **/
    public static readonly OPERTRANS: string = "OPERTRANS";

  //     /**
  //      * TIPO DE OPERACION SPID
  //      */
  //     public static readonly DESC_OPE_SPID: string = "SPID";

  //     /**
  //      * ID DEL DOCUMENTO CARTA REPETITIVAS TRANSFER
  //      */
  //     public static readonly XDOC_ID_CARTA_REPETITIVAS_TRANSFER: number = 19;

  //     /**
  //      * ID DEL DOCUMENTO REPORTE OPERACIONES SPID PROCESAR
  //      */
  //     public static readonly XDOC_ID_REPORTE_OPERACIONES_SPID_PROCESAR: number = 20;

  //     /**
  //      * ID DEL DOCUMENTO REPORTE OPERACIONES SPID INCORRECTAS
  //      */
  //     public static readonly XDOC_ID_REPORTE_OPERACIONES_SPID_INCORRECTAS: number = 21;

  //     /**
  //      * MEN ID MENSAJE AUTORIZA REPETITIVA TI
  //      */
  //     public static readonly MSJ_AUTORIZA_REP_TI: number = 269;

  //     /**
  //      * MEN ID MENSAJE RECHAZA REPETITIVA TI
  //      */
  //     public static readonly MSJ_RECHAZA_REP_TI: number = 268;

       /**
        * Valor del estado de la solicitud de cambio Instruento autorizar
        **/
       public static readonly SOLICITUD_AUTORIZADA: string = "A";

       /**
        * Valor del estado de la solicitud de cambio Instruento al rechazar
        **/
       public static readonly SOLICITUD_RECHAZADA: string = "R";

       /**
        * Indica el Usuario que autoriza automaticamente.
        **/
       public static readonly AUTORIZA_AUTOMATICA: string = "AUTOMATICA";

  //     /**
  //      * Parámetro para definir si las repetitivas se autorizan.
  //      */
  //     public static readonly BANDERA_HOMOLOGACION_TRANSFER : string = "BANDERA_HOMOLOGACION_TRANSFER";

  //     //Especifica el valor para desactivar campos en la edicion homologacion Transfer

  //     public static readonly BANDERA_HOMOLOGACION_TRANSFER_VALOR : string = '1';

  //     //estados para catalogos cova
  //     public static readonly ESTADO_CAT_COVA_BUSQUEDA: string = "BUSQUEDA";
  //     public static readonly ESTADO_CAT_COVA_ALTA: string = "ALTA";
  //     public static readonly ESTADO_CAT_COVA_ACTUALIZA: string = "ACTUALIZA";
  //     public static readonly ESTADO_CAT_COVA_SUSPENDIDO: string = "SUSPENDIDO";

  //     //privilegios para autorizadores cova
  //     public static readonly PRIVILEGIO_CAPTURAR: number = 1;
  //     public static readonly PRIVILEGIO_REVISION: number = 2;
  //     public static readonly PRIVILEGIO_LIBERACION: number = 3;

  //     //estatus modulo pagos cova
  //     public static readonly ESTATUS_COVA_PENDIENTE: string ='RHP';
  //     public static readonly ESTATUS_COVA_AUTORIZA: string ='RHA';
  //     public static readonly ESTATUS_COVA_DETENIDA: string ='RHD';
  //     public static readonly ESTATUS_COVA_GENERADA: string ='RHG';
  //     public static readonly ESTATUS_COVA_OPERADO: string ='RHO';
  //     public static readonly ESTATUS_COVA_CANCELADA: string ='RHC';
  //     public static readonly ESTATUS_COVA_ERROR: string     = "RHE";

  //     //formatos de salida para modulo pagos rh
  //     public static readonly FORMATO_ID_TRANSFER_RH: number = 21;
  //     public static readonly FORMATO_ID_SPEI_RH: number = 17;

  //     //medio origen para modulo pagos rh
  //     public static readonly MEDIO_ORIGEN_NOMINA: number = 24;
  //     public static readonly MEDIO_ORIGEN_COMISION_VARIABLE: number = 25;

  //     public static readonly GRUPO_AUT_NOMINA: number = 1;
  //     public static readonly GRUPO_AUT_COMISION_VARIABLE: number = 2;

  //     public static readonly MONTH_NAMES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto',
  //         'Septiembre','Octubre','Noviembre','Diciembre'];
  //     public static readonly DAY_NAMES = ['Dom','Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

  //     //parametros para grupos de rh
  //     public static readonly PARAM_RHADMIN: string = "RH_ADMIN";
  //     public static readonly PARAM_RHGENERAL: string = "RH_GENERAL";
  //     public static readonly RHADMIN: string = "RHADMIN";
  //     public static readonly RHGENERAL: string = "RHGENERAL";

  //     //clave de la transaccion del modulo de pagos rh
  //     public static readonly CLAVE_TRANS_PAGOSRH: string = "UPDSTAOPER";

  //     //valor para cuando no existe el parametro de cova
  //     public static readonly ACTIVA_SPEI: string = "ACTIVA_SPEI";

  //     //claves para identificar los pagos
  //     public static readonly CLAVE_TRASPASO: string = "TRAS";
  //     public static readonly CLAVE_SPEI: string = "SPEI";

  //     //valor para validar la carga de pagos
  //     public static readonly ACTIVA_CARGA: string = "ACTIVA_CARGA";
       /**
        * Origen de la operaci&oacute;n OPciones Stardoc.
        */
       public static readonly ORIGEN_OPERACION_STARDOC: string = "S";

  //     /**
  //      * Parametro Esquema Intercam
  //      */
  //     public static readonly ESQUEMA_INTERCAM  : number = 5;

  //     /**
  //      * Parametro Esquema Intercam
  //      */
  //     public static readonly ESQUEMA_COMODATO  : number = 2;

  //     /**
  //      * Parametro Esquema Intercam
  //      */
  //     public static readonly ESQUEMA_DEFRAK  : number = 1;
  //     /**
  //      * Parametros Area Intercam
  //      */
  //     public static readonly AREA_TESORERIA : string = "TESORERIA";

  //     public static readonly AREA_COBRANZA : string = "COBRANZA";

  //     public static readonly AREA_CAJA : string = "CAJA";

  //     public static readonly AREA_REMESAS : string = "REMESAS";

  //     /**
  //      * Constante para el grupo pld transfer de tesoreria
  //      **/
    public static readonly PLDTESO: string = "PLDTESO";

  //     //clave negocio fondos banco de cova
  //     public static readonly CLV_NEGOCIO_FONDOS_BANCO : number = 10;

  //     /** Numero dias fecha valor 96 hrs */
  //     public static readonly DIAVALOR96 : number = 4;

  //     /**
  //      * Se usa para buscar informacion de operaciones no confirmadas tabla auto eso_aut =200
  //      */
  //     public static readonly OPERACIONNCONFIRMADA ="NC";

  //     /**
  //      * Se usa para buscar informacion de operaciones confirmadas tabla auto eso_aut =200
  //      */
  //     public static readonly OPERACIONCONFIRMADA = "CO";

  //     /**
  //      * Se usa como identificador de cuenta de derivados
  //      */
  //     public static readonly INTERCUENTA_DERIVADOS: string = "INTERCUENTA DERIVADOS";

  //     /**
  //      * Constante que indica el valor máximo de saldo permitido para usuario ventanilla (Tarjetas Multidivisas)
  //      */
  //     public static readonly TARJETA_SALDO_USU_VENT : string = "TARJETA_SALDO_USU_VENT";

  //     /**
  //      * Constante que indica el valor máximo de recarga para usuario ventanilla (Tarjetas Multidivisas )
  //      */
  //     public static readonly MAXTARJETA_USU_VENT : string = "MAXTARJETA_USU_VENT";

  //     /**
  //      * Indica la edad mínima del beneficiario de la tarjeta, usuario ventanilla (Tarjetas Multidivisas )
  //      */
     public static readonly CIERRE_TARJETA_USU_VENT : string = "cierreTarjeta_USU_VENT";

  //     /**
  //      * Indica el valor minimo de recarga permitido para tarjeta nueva, usuario ventanilla (Tarjetas Multidivisas)
  //      */
  //     public static readonly MINTARJETA_USU_VENT : string = "MINTARJETA_USU_VENT";

  //     public static readonly CANAL_PROCESO_REPET : string = "BXT00668REPET";//canal pos bxt

  //     public static readonly GRUPO_CANCELA_CUENTA : string = "CONTROLCUENTAS";

  //     public static readonly TIPO_ENLACE_INTERCAM : string = "INTERCAM B";

  //     public static readonly TIPO_ENLACE_INTERCAM_EUR: string = "INTERBANCO EURO";
  //     public static readonly LEYENDA_BANCO_INTERBANCO: string = "INTERBANCO";

  //     //Id layout honorarios-factura fondos banco
  //     public static readonly NOM_HONFAC_FONDBANC: number = 29;
  //     /**
  //      *    Constante <code>Const.TODOS</code>
  //      **/
  //     public static readonly OPCION_TODOS: string = 'TODOS';
  //     /**
  //      * Tipo de contrato para Casa Bolsa
  //      */
  //     public static readonly TCON_DIVISAS_CASABOLSA = 1;

       /**
        * Constante que indica la activación de las validaciones de ejecutivo sucurlsa y usuario de ventanilla
        */
       public static readonly VALIDA_EJESUCURSAL_USUVENTANILLA : string = "VALIDA_EJESUCURSAL_USUVENT";

  //     /**
  //      * Constante que indica la activación de las validaciones de ejecutivo sucurlsa y usuario de ventanilla
  //      */
  //     public static readonly VALIDA_EJESUCURSAL_USUVENTANILLA : string = "VALIDA_EJESUCURSAL_USUVENT";

  /**
   * Parametro Combo SPID
   */
  public static readonly ORIGEN_BXT: string = "B";
  //     /**
  //      * Valor Propósito de la Operación para las Compras
  //      */
  //     public static readonly PROP_OPER_CPA : string = "PROPOSITO_OPERACION_CPA";

  //     /**
  //      * Valor Propósito de la Operación para las Ventas
  //      */
  //     public static readonly PROP_OPER_VTA = "PROPOSITO_OPERACION_VTA";

  //     //reporte no pago - cova
  //     public static readonly REPORTE_IMPRESION_NO_PAGO: string = "ImpresionNoPago";
  //     public static readonly EDO_CUENTA_NO_PAGO: string = "EstadoCuentaNoPago";

          /**
         * Constante que indica la razon o proposito de la compra de la remesa, en este caso prestamo
         */
          public static readonly PRESTAMO : string = "PRESTAMOS";
          /**
           * Constante que indica la razon o proposito de la compra de la remesa, en este caso pago de su cliente
           */
          public static readonly PAGO_CLIENTE : string = "PAGO DE CLIENTE";

          /**
           * Constante que indica la opcion de Otros
           */
          public static readonly OTROS : string = "OTROS";

  // /** ****************************************************************************************************************
  //  *  ***************************************** Methods **************************************************************
  //   **************************************************************************************************************** */

  //     /**
  //      * Devuelve el tipo de cuestionario dependiendo el riesgo y tipo persona
  //      * */
  //      public static getCuestionarioRiesgo(riesgo : number, tpeClave : string) : number {
  //         let tcueId  = -1;
  //         if (tpeClave == Const.PERSONA_FISICA) {
  //             tcueId = riesgo == Const.RIESGO_CLIENTE_ALTO_NUM ? Const.CUESTIONARIO_RIEGO_ALTO_PF :
  //                 riesgo == Const.RIESGO_CLIENTE_MEDIO_NUM ? Const.CUESTIONARIO_RIEGO_MEDIO_PF : tcueId;
  //         } else if (tpeClave == Const.PERSONA_MORAL) {
  //             tcueId = riesgo == Const.RIESGO_CLIENTE_ALTO_NUM ? Const.CUESTIONARIO_RIEGO_ALTO_PM :
  //                 riesgo == Const.RIESGO_CLIENTE_MEDIO_NUM ? Const.CUESTIONARIO_RIEGO_MEDIO_PM : tcueId;
  //         }
  //         return tcueId;
  //     }
  //     /**
  //      * Valida si el cuestionario es de riesgo
  //      * @param tCueId tipo de cuestionario
  //      **/
  //     public static isCuestionarioRiezgo (tCueId : number) : boolean {
  //         let result = false;
  //         const arrCuest : Array<number> = [Const.CUESTIONARIO_RIEGO_MEDIO_PF,Const.CUESTIONARIO_RIEGO_MEDIO_PM,
  //             Const.CUESTIONARIO_RIEGO_ALTO_PF, Const.CUESTIONARIO_RIEGO_ALTO_PM];
  //         arrCuest.forEach(i => {
  //             if (i == tCueId) {
  //                 result = true;
  //             }
  //         });
  //         return result;
  //     }

  //     /**
  //      * Valida si el cuestionario es por personao
  //      * @param tCueId tipo de cuestionario
  //      **/
  //     public static isPPersona (tCueId : number) : boolean {
  //         let  result  = false;
  //         const arrCuest : Array<number> = [Const.CUESTIONARIO_LISTAS_NEGRAS_PF,Const.CUESTIONARIO_LISTAS_NEGRAS_PM,
  //             Const.CUESTIONARIO_ACTIVIDAD_VULNERABLE,Const.CUESTIONARIO_ADICIONAL,Const.CUESTIONARIO_RIEGO_MEDIO_PF,
  //             Const.CUESTIONARIO_RIEGO_MEDIO_PM,Const.CUESTIONARIO_RIEGO_ALTO_PF, Const.CUESTIONARIO_RIEGO_ALTO_PM];
  //         arrCuest.forEach(i => {
  //             if (i == tCueId) {
  //                 result = true;
  //             }
  //         });
  //         return result;
  //     }

  //     /**
  //      * valida si el cuestionario es del contrato
  //      * @param tCueId Tipo de Cuestionario
  //      */
  //     public static isCuestionarioContrato(tCueId : number) : boolean {
  //         let result = false;
  //         const arrCuest : Array<number> = [Const.CUESTIONARIO_BANCO_PF,Const.CUESTIONARIO_BANCO_PM,
  //             Const.CUESTIONARIO_CB_PF, Const.CUESTIONARIO_CB_PM,
  //             Const.CUESTIONARIO_DIVBANCO_PF,Const.CUESTIONARIO_DIVBANCO_PM,
  //             Const.CUESTIONARIO_DIVISAS_PF, Const.CUESTIONARIO_DIVISAS_PM,
  //             Const.CUESTIONARIO_FONDOS_PF, Const.CUESTIONARIO_FONDOS_PM];
  //         arrCuest.forEach(i => {
  //             if (i == tCueId) {
  //                 result = true;
  //             }
  //         });
  //         return result;
  //     }

  //     /**
  //      * Valida si el cuestionario pertenece a los requeridos
  //      * @param tCueId tipo de cuestionario
  //      **/
  //      public static isCuestionarioRequerido (tCueId : number) : boolean {
  //         let result  = false;
  //         const arrCuest : Array<number> = [Const.CUESTIONARIO_ACTIVIDAD_VULNERABLE, Const.CUESTIONARIO_ADICIONAL,
  //             Const.CUESTIONARIO_LISTAS_NEGRAS_PF, Const.CUESTIONARIO_LISTAS_NEGRAS_PM];
  //         arrCuest.forEach(i=> {
  //             if (i == tCueId) {
  //                 result = true;
  //             }
  //         });
  //         return result;
  //     }

  //      //Genera un rango de 20 años desde el actual hacia atras
  //      public static getAnios(): number[] {

  //         const arrAnios:number[] = [];
  //         let anioActual:number = new Date().getFullYear();

  //         for (let i = 0; i < 20; i++)
  //         {
  //             arrAnios.push(anioActual--);
  //         }

  //         return arrAnios;
  //     }

  //     public static getTitularId(tconId : number, tpeClave : string) : number{
  //         let result : number;
  //         if (tpeClave == Const.PERSONA_FISICA) {
  //             switch (tconId) {
  //                 case Const.TCON_CASA_CAMBIOS:
  //                     result = Const.TITULAR_CAMBIOS_FISICA;
  //                     break;
  //                 case Const.TCON_FONDOS:
  //                     result = Const.TITULAR_FONDOS_FISICA;
  //                     break;
  //                 case Const.TCON_CASA_BOLSA:
  //                     result = Const.TITULAR_BOLSA_FISICA;
  //                     break;
  //                 /*case TCON_SECURITIES:
  //                 result = TITULAR_SECURITIES_FISICA;
  //                 break;*/
  //                 case Const.TCON_BANCO:
  //                     result = Const.TITULAR_BANCO_FISICA;
  //                     break;
  //                 case Const.TCON_DIVISAS_CASA_BOLSA:
  //                     result = Const.TITULAR_DIVISAS_CB_FISICA;
  //                     break;
  //                 case Const.TCON_TDC:
  //                     result = ConstPerfiles.TITULAR_FISICA_TDC;
  //                     break;
  //                 case Const.TCON_FIDEICOMISO:
  //                     result = ConstPerfiles.TCON_FIDE_FIDEICOMITENTE_PF;
  //                     break;
  //             }
  //         } else if (tpeClave == Const.PERSONA_MORAL) {
  //             switch (tconId) {
  //                 case Const.TCON_CASA_CAMBIOS:
  //                     result = Const.TITULAR_CAMBIOS_MORAL;
  //                     break;
  //                 case Const.TCON_FONDOS:
  //                     result = Const.TITULAR_FONDOS_MORAL;
  //                     break;
  //                 case Const.TCON_CASA_BOLSA:
  //                     result = Const.TITULAR_BOLSA_MORAL;
  //                     break;
  //                 /*case TCON_SECURITIES:
  //                 result = TITULAR_SECURITIES_MORAL;
  //                 break;*/
  //                 case Const.TCON_BANCO:
  //                     result = Const.TITULAR_BANCO_MORAL;
  //                     break;
  //                 case Const.TCON_DIVISAS_CASA_BOLSA:
  //                     result = Const.TITULAR_DIVISAS_CB_MORAL;
  //                     break;
  //                 case Const.TCON_TDC:
  //                     result = ConstPerfiles.TITULAR_MORAL_TDC;
  //                     break;
  //                 case Const.TCON_FIDEICOMISO:
  //                     result = ConstPerfiles.TCON_FIDE_FIDEICOMITENTE_PM;
  //                     break;
  //             }
  //         }
  //         return result;
  //     }

  //     public static getCotitular (tconId : number, tpeClave : string) : number {
  //         let result : number;
  //         if (tpeClave == Const.PERSONA_FISICA) {
  //             switch (tconId) {
  //                 case Const.TCON_FONDOS:
  //                     result = Const.COTITULAR_FONDOS_FISICA;
  //                     break;
  //                 case Const.TCON_CASA_BOLSA:
  //                     result = Const.COTITULAR_BOLSA_FISICA;
  //                     break;
  //                 case Const.TCON_SECURITIES:
  //                     result = Const.COTITULAR_SECURITIES_FISICA;
  //                     break;
  //                 case Const.TCON_BANCO:
  //                     result = Const.COTITULAR_BANCO_FISICA;
  //             }
  //         }
  //         return result;
  //     }

  // // public static function getTipoRiesgo(contrato:ContratoFolderFondosVO): number{

  //     readonly tipoRiesgo: number=0;
  //     switch(contrato.contratoVO.tipoContratoVO.tconId)
  //     {
  //         case Const.TIPO_CONTRATO_BANCO:
  //         {
  //             if(contrato.getTitular().personaVO.tipoPersonaVO.tpeClave == Const.PERSONA_MORAL){
  //                 tipoRiesgo = TRIESGO_CLIENTE_BANCO_PM;
  //             }else if(contrato.getTitular().personaVO.cpeId == Const.PERSONA_FISICA_CON_ACTIVIDAD){
  //                 tipoRiesgo = TRIESGO_CLIENTE_BANCO_PFA;
  //             }else{
  //                 tipoRiesgo = TRIESGO_CLIENTE_BANCO_PF;
  //             }

  //             break;
  //         }
  //         case Const.TIPO_CONTRATO_DIVISAS_BANCO:
  //         {
  //             if(contrato.getTitular().personaVO.tipoPersonaVO.tpeClave == Const.PERSONA_MORAL){
  //                 tipoRiesgo = TRIESGO_CLIENTE_DIVBANCO_PM;
  //             }else if(contrato.getTitular().personaVO.cpeId == Const.PERSONA_FISICA_CON_ACTIVIDAD){
  //                 tipoRiesgo = TRIESGO_CLIENTE_DIVBANCO_PFA;
  //             }else{
  //                 tipoRiesgo = TRIESGO_CLIENTE_DIVBANCO_PF;
  //             }
  //             break;
  //         }
  //         case Const.TIPO_CONTRATO_CASA_BOLSA:
  //         {
  //             if(contrato.getTitular().personaVO.tipoPersonaVO.tpeClave == Const.PERSONA_MORAL){
  //                 tipoRiesgo = TRIESGO_CLIENTE_CB_PM;
  //             }else if(contrato.getTitular().personaVO.cpeId == Const.PERSONA_FISICA_CON_ACTIVIDAD){
  //                 tipoRiesgo = TRIESGO_CLIENTE_CB_PFA;
  //             }else{
  //                 tipoRiesgo = TRIESGO_CLIENTE_CB_PF;
  //             }
  //             break;
  //         }
  //         case Const.TIPO_CONTRATO_FONDOS:
  //         {
  //             if(contrato.getTitular().personaVO.tipoPersonaVO.tpeClave == Const.PERSONA_MORAL){
  //                 tipoRiesgo = TRIESGO_CLIENTE_FONDOS_PM;
  //             }else if(contrato.getTitular().personaVO.cpeId == Const.PERSONA_FISICA_CON_ACTIVIDAD){
  //                 tipoRiesgo = TRIESGO_CLIENTE_FONDOS_PFA;
  //             }else{
  //                 tipoRiesgo = TRIESGO_CLIENTE_FONDOS_PF;
  //             }
  //             break;
  //         }
  //         case Const.TCON_TDC:
  //         {
  //             if(contrato.getTitular().personaVO.tipoPersonaVO.tpeClave == Const.PERSONA_MORAL){
  //                 tipoRiesgo = TRIESGO_CLIENTE_TC_PM;
  //             }else if(contrato.getTitular().personaVO.cpeId == Const.PERSONA_FISICA_CON_ACTIVIDAD){
  //                 tipoRiesgo = TRIESGO_CLIENTE_TC_PFA;
  //             }else{
  //                 tipoRiesgo = TRIESGO_CLIENTE_TC_PF;
  //             }
  //             break;
  //         }

  //         default:
  //         {
  //             break;
  //         }
  //     }
  //     return tipoRiesgo;
  // }

  //     /**
  //      * regresa true si el tipo de cuestionario es para servicios de inversión
  //      **/
  //      public static isTCUServiciosInversion(tcuId: number):boolean{
  //         let result = false;
  //         switch(tcuId){
  //             case Const.TIPO_CUEST_SOF_CB_PF:
  //             {
  //                 result = true;
  //                 break;
  //             }
  //             case Const.TIPO_CUEST_NO_SOF_CB_PF:
  //             {
  //                 result = true;
  //                 break;
  //             }
  //             case Const.TIPO_CUEST_SOF_CB_PM:
  //             {
  //                 result = true;
  //                 break;
  //             }
  //             case Const.TIPO_CUEST_NO_SOF_CB_PM:
  //             {
  //                 result = true;
  //                 break;
  //             }

  //             default:
  //             {
  //                 break;
  //             }
  //         }
  //         return result;
  //     }
  public static readonly MEDIO_ORIGEN_BANCO: string = '5';
  public static readonly MEDIO_ORIGEN_CASABOLSA: string = '10';

  //CATALOGOS COVA
  public static readonly CATALOGOS = {
    CAT_CPI: 'CPI', //Catalogo Costos Por Instrumento
  };
  public static readonly TIPO_BAJA_LOGICA: string = 'LOGICA';
  public static readonly TIPO_CONSULTA_VALIDACION: string = 'VALIDACION';
  public static readonly CAT_BUTTON_ALTA_ID: string = 'btnAlta';
  public static readonly CAT_BUTTON_CONSULTA_ID: string = 'btnConsulta';
  public static readonly CAT_BUTTON_DESHACER_ID: string = 'btnDeshacer';
  public static readonly CAT_BUTTON_GUARDAR_ID: string = 'btnGuardar';
  public static readonly CAT_BUTTON_BAJA_ID: string = 'btnBaja';
  public static readonly CAT_BUTTON_REPORTE_ID: string = 'btnReporte';
  public static readonly EVENTO_SELECT: string = 'select';
  public static readonly EVENTO_SELECT_BAJA: string = 'select-baja';
  public static readonly BACKGROUND_ALERT: string =
    'linear-gradient(rgba(0, 0, 0, 0.904),rgba(0, 0, 0, 0.904))';

    //reportes de fondos banco
  public static readonly REPORTE_DETALLE_PROMOTOR:string = "ReporteDetallePromotor";
  public static readonly REPORTE_ASESOR_FONDOS_BANCO:string = "ReporteAsesorFondosBanco";
  public static readonly ARCHIVO_FONDOS_BANCO:string = "ArchivoFondosBanco";
  public static readonly REPORTE_PRODUCTIVIDAD_FONDOS_BANCO:string = "ReporteProductividadFondosBanco";
  public static readonly EXTENSION_ARCHIVO_SWIFT: string = 'text/plain';

  public static readonly PERMISOS_AUTORIZAR: string = 'AUTORIZADORREMESAS';
  public static readonly PERMISOS_CARGA_CUENTA : string= "PERMISOSCAREDOCUENTA";

  public static readonly pais_origen_ayuda1: string = 'Este campo es para identificar mediante el sistema aquellas empresas con un pa\u00EDs de origen diferente a M\u00E9xico. Ejemplo\:'
  public static readonly pais_origen_ayuda2:string = '1.\tLa empresa Kia Motors M\u00E9xico est\u00E1 constituida en M\u00E9xico, pero su pa\u00EDs de origen es Corea.';
  public static readonly pais_origen_ayuda3:string = '2.\tLa empresa Banco Santander M\u00E9xico est\u00E1 constituida en M\u00E9xico, pero su pa\u00EDs de origen es Espa\u00F1a.';
  public static readonly pais_origen_ayuda4:string = '3.\tLa empresa Suzuki Motor M\u00E9xico est\u00E1 constituida en M\u00E9xico, pero su pa\u00EDs de origen es Jap\u00F3n.';

  public static readonly noExisteProspecto:string = 'No existen coincidencias para los par\u00E1metros de b\u00FAsqueda. \u00BFDesea dar de alta como Prospecto?.';
  
  public static readonly confirmacionRegistroProspecto:string = 'Registro Exitoso.';
  public static readonly errorRegistroProspecto:string = 'No se realizo el registro.';
  public static readonly modificacionExitosa:string = 'Modificaci\u00F3n exitosa.';
  public static readonly promotorNoClaveLegada:string = 'El promotor no tiene clave legada para este negocio';
  public static readonly msjSinCertificacion:string = 'El promotor no tiene certificaci\u00F3n';
  public static readonly msjSinPoderes:string = 'El promotor no tiene poderes';
  public static readonly msjSinPoder:string = 'El promotor no esta apoderado para este negocio';
  public static readonly msjPoderRevocado:string = 'El poder para este negocio, est\u00E1 REVOCADO';
  public static readonly rfcExistente:string = 'Ya existe RFC';
  public static readonly msjPersonaExisteProspectada:string = 'La Persona ya se encuentra Prospectada para este negocio, por el Ejecutivo';

  public static readonly coincidenciaColor1:string = 'En AZUL las coincidencias por RFC a 10 posiciones.';
  public static readonly coincidenciaColor2:string = 'En ROJO las coincidencias por RFC a 13 posiciones.';
  public static readonly coincidenciaColor3:string = 'En NARANJA las coincidencias que puede dar de alta el grupo CONTROL.';
  public static readonly esProspecto:string ='Cliente Prospecto, los datos se deberán capturar desde la pantalla CONTRATO.';
  public static readonly valLimiteProspectos:string ='Excediste el N\u00FAmero de Prospectos';
  public static readonly solicitudPersonaBloqueada: string = 'La persona se encuentra bloqueada por an\u00E1lisis Reporte 24 hrs.';
  public static readonly noContratoDB: string ='Si tu cliente requiere servicio de divisas banco, podr\u00E1s ofertar cuenta Enlace o Servicio Empresarial FX.';
  public static readonly contratoNoPermitido: string = 'El Negocio seleccionado no es permitido.';
  public static readonly noDueno: string='No eres dueño este cliente';
}
