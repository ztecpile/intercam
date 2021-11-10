export class MensajeriaOperacionInstrVO 
{
    /**
     * Fecha de la Operacion
     */
    public  fecha : Date;
    /**
     * Folio de la operacion, sirve como llave para liquidar la operacion en Ventanilla
     */
    public  numFolio :   string;
    /**
     * clave del promotor
     */
    public  cvePromotor :   string;
    /**
     * referencia del cliente
     */
    public  referencia :   string;
    /**
     * Sucursal de Liquidacion SICA para la Mensajeria
     */
    public  sucursal :   string;
    /**
     * clave del cliente
     */
    public  cveCliente :   string;
    /**
     * clave de la divisa
     */
    public  divId :   string;
    /**
     * tipo de liquidacion 2.- efectivo, 4.- cheque
     */
    public  tipLiq :   string;
    /**
     * Monto de la Operacion
     */
    public  monto :   number;
    /**
     * Tipo de Operacion
     *     S - Viene (a Sucursal)
     *     M - Vamos (con Mensajero)
     */
    public  tipoOperacion :   string;
    /**
     * comentario y direccion mensajeria
     */
    public  comentario :   string;
    /**
     * clave de usuario
     */
    public  usuario :   string;
    /**
     * medio origen
     */
    public  MedOrigen :   number;
    /**
     * status orden
     * 0-Alta
     * 1-Autorizado 
     * 2-Impresion
     * 3-cancelado
     * 4-Rechazado
     */
    public  status:  number;
    /**
     * Motivo de Cancelacion, Rechazo o Reversa segun sea el caso
     */
    public  motivo:  string;
    /**
     * contrado ID
     */
    public  conId :   number;
    /**
     * Tipo de movimiento A-Abono, C-Cargo
     */
    public  tipoMov :   string;
    
    /**
     * Nombre tercero que recibe
     */
    public  tercero :   string;
    /**
     * Concepto del cargo
     */
    public  concepto :   string;

    constructor(
        
        ) {
            
        }

   
}
