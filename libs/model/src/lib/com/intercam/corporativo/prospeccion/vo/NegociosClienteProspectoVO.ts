
/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

import { Const } from '../../../utils/Const';
export class NegociosClienteProspectoVO {
    /**
     * Almacena Id Persona prospecto.
     **/
    public perId: number;

    /**
     * Almacena el tipo de contrato
     */
    public tconId: number;

    /**
     * Almacena estatus negocio.
     **/
    public estatus: string;

    /**
     * Almacena Id ejecutivo.
     **/
    public idEjecutivo: number;

    /**
     * Almacena nombre ejecutivo.
     **/
    public ejecutivo: string;

    /**
     * Almacena sucursal.
     **/
    public sucursal: string;

    /** 
     * Almacena el conId.
     **/
    public conId: number;

    /**
     * Almacena el tipo de solicitud de referenciacion
     */
    public tipoSolicitud: string;

    /**
     * Sirve para verificar si tiene mas de un negocio del mismo tipo
     */
    public esProspecto: boolean;

    /**
     * Clave Legada
     */
    public cveLegada: string;

    /**
     * fecha alta del contrato
     */
    public faltaContrato: Date;

    /**
     * id de prospecto
     */
    public prpId: number;

    /**
    * Nombre corto del Cliente
    */
    public nomCortoCte: string;

    /**
    * Tipo Clave del cliente (M/F)
    */
    public tpeClave: string;

    /**
    * Clave de la sucursal a la cual pertenece el ejecutivo
    */
    public sucClave: number;

    /**
     * Determina si el contrato es de credito, para cuando el tipo de contrato es BANCO T=true,F=false
     */
    public prpEsCreditoBanco: boolean;

    /**
     * Almacena el estatus en el que esta el prospecto
     */
    public epiId: number;

    /**
    * Almacena la descripcion del estatus (epiId) en el que esta el prospecto
    */
    public epiDescripcion: string;

    /**
     * Cuando la solicitud es:
     * CR Almacena el perId del Ejecutivo al que le fue enviada la solicitud para prospectar una cliente
     * RC Almacena el perId del Ejecutivo que tomo el cliente de alguien mas, para ser prospectado
     */
    public perIdSolicita: number;

    /**
     * Cuando la solicitud es:
     * CR Almacena el perId del Ejecutivo dueño del cliente, el cual es el que esta enviando la solicitud
     * RC Almacena el perId del Ejecutivo dueño del cliente tomado para ser prospectado
     */
    public perIdDueno: number;

    /**
    * Desctipción del tipo de contrato
    */
    public tconDescripcion: string;

    /**
    * Fecha en el cual dieron de alta al prospecto
    */
    public pipFecha: Date;

    /**
    * Almacena el tipo de cuenta en caso de que el contrato sea de BANCO
    */
    public tipoCuenta: string;

    /**
     * Almacena la descripcion del tipo de cuenta en caso de que el contrato sea de BANCO
     */
    public tipoCuentaDesc: string;
    /**
    * 
    */
    public completoCam: number;
    /**
     * 
     */
    public campana: string;

    /**
    * Almacena la clave lega del promotor relacionada al contrato
    */
    public tmpClvPro: string;

    /**
     * Almacena el nombre/referencia del fideicomiso
     */
    public prpFideicomiso: string;

    public get labelToMisClientes(): string {
        let labelNegocio = '';
        if (this.estatus == Const.ESTATUS_NEGOCIO_LIBRE || this.estatus == "PROSPECTO") {
            labelNegocio = this.estatus;
        } else {
            labelNegocio = this.cveLegada == null ? "NA/" : this.cveLegada + "/";
            labelNegocio += this.conId;
        }
        return labelNegocio;
    }
}