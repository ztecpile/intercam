export class ArchivoLoteVO {

/**
   * Especifica si un elemento debe de estar seleccionado.
   */
  public conSelected : Boolean = false;
  /**
   * id de lote
   */
  public loteId  : number;
  /**
   * nombre archivo del lote
   */
  public nombreArchivo : string;
  /**
   * numero de operaciones del lote
   */
  public numOpe : number;
  /**
   * tipo de operacion
   */
  public tipoOpe : string;
  /**
   * cliente
   */
  public usuCliente : string;
  public opeCorrectas : number;
  public opeError : number;
  public monto : number;
  public idenFirma : string;
  public idenProcesa : string;
  public ctaOrigen : string;
  public usuSolicita : string;
  public tipoFirma1 : string;
  public tipoFirma2 : string;
  public usuFirma1 : string;
  public usuFirma2 : string;
  public nomUsuarioFirma1 : string;
  public nomUsuarioFirma2 : string;
  public estatus : string;

    constructor () {}

}