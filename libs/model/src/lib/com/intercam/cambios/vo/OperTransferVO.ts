/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { CuestionarioVO } from '../../corporativo/contrato/vo/CuestionarioVO';
import { DivisasVO } from '../../corporativo/contrato/vo/DivisasVO';
import { PaisVO } from '../../corporativo/centrocostos/vo/PaisVO';
import { SolicitudTransferVO } from './SolicitudTransferVO';

export interface OperTransferVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    otraId: number;
    otraFfc: string;
    otraSwift: string;
    otraFfa: string;
    otraIban: string;
    clvCountry: string;
    otraBanCodigo: string;
    otraAttn: string;
    otraBanDesc: string;
    otraBranchCode: string;
    otraByOrderOf: string;
    otraCiudad: string;
    otraCuenta: string;
    otraBranch: string;
    otraDigControl: string;
    otraBeneficiario: string;
    otraEstatus: string;
    otraSwiftInter: string;
    otraAbaInter: string;
    otraCuentaInter: string;
    otraBanDescInter: string;
    otraClvCountryInter: string;
    otraDesCountryInter: string;
    otraCiudadInter: string;
    opiId: number;
    otraFechaOperStr: string;
    otratipoCambioAnt: number;
    otraBeneficioCastigo: string;
    pais: PaisVO;

    /**
     * Email de envio
     */
    traEmail: string;

    /**
     * Objeto que contiene la Divisa asociada a una transfer
     */
    divisaVO: DivisasVO;

    /**
     * Bandera que indica si a la transfer se le aplicara un beneficio al tipo de costo
     * */
    otraApBeneficio: boolean;

    /**
     * Nombre de la calle del domicilio del beneficiario de la transfer
     */
    otraBenCalle: string;

    /**
     * Numero exterior del domicilio del beneficiario de la transfer
     */
    otraBenNumext: string;

    /**
     * Numero interior del domicilio del beneficiario de la transfer
     */
    otraBenNumint: string;

    /**
     * Codigo postal del domicilio del beneficiario de la transfer
     */
    otraBenCodigoPostal: string;

    /**
     * Colonia del domicilio del beneficiario de la transfer
     */
    otraBenColonia: string;

    /**
     * Ciudad del domicilio del beneficiario de la transfer
     */
    otraBenCiudad: string;

    /**
     * Delegacion/Municipio del domicilio del beneficiario de la transfer
     */
    otraBenMunicipio: string;

    /**
     * Entidad federativa del domicilio del beneficiario de la transfer
     */
    otraBenEntidadFed: string;

    /**
     * Pais del domicilio del beneficiario de la transfer
     */
    otraBenPaiClave: number;

    /**
     * Concepto de pago de la transferencia
     */
    otraConceptoPago: string;

    /**
     * Almacena el Id de la Transferencia.
     **/
    traId: number;

    /**
     * Fecha de alta
     **/
    otraFalta: Date;

    /**
     * Codigo Motivo Pago
     **/
    smpCodigo: string;

    /**
     * Almacena la Solicitud de autorizaci&oacute;n de Transfer.</br>
     * <i>Esta propiedad no se persiste.</i>
     **/
    solicitudTransfer: SolicitudTransferVO;

    /**
     * Almacena la descripci&oacute;n del Pa&iacute;s.</br>
     * <i>Esta propiedad no se persiste.</i>
     **/
    descPais: string;

    /**
     * Almacena la descripci&oacute;n del motivo de pago.</br>
     * <i>Esta propiedad no se persiste.</i>
     **/
    descMotivoPago: string;

    /**
     * Almacena cuestionario.</br>
     * <i>Esta propiedad no se persiste.</i>
     **/
    cuestionarioVO: CuestionarioVO;

    /**
     * Indica si la Transfer, fue validad por el area de cumplimiento.
     * <i>Esta propiedad no se persiste.</i>
     **/
    validadoCumplimiento: boolean;

    /**
     * variable que guarda el nombre del estado de cuenta agregado 
     **/
    traEstadoCta: string;

    /**
     * almacena el tipo de persona 
     */
    tpeClave: string;

    /**
     * Almacena el valor del tipo de cuenta del beneficiario
     */
    traTipoCuenta: string;

    /**
     * Almacena el n&uacute;mero telef&oacute;nico del beneficiario
     */
    traBenTelefono: string;

}