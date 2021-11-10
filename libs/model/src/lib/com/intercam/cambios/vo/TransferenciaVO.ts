/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { CuestionarioVO } from '../../corporativo/contrato/vo/CuestionarioVO';
import { DivisasVO } from '../../corporativo/contrato/vo/DivisasVO';
import { VendorVO } from './VendorVO';

export interface TransferenciaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    traId: number;
    clvCountry: string;
    conId: number;
    tmpClvRep: number;
    tmpConsecLegado: number;
    traAbaInter: string;
    traAttn: string;
    traBanCodigo: string;
    traBanDesc: string;
    traBanDescInter: string;
    traBeneficiario: string;
    traBranch: string;
    traBranchCode: string;
    traByOrderOf: string;
    traCiudad: string;
    traCiudadInter: string;
    traClvCountryInter: string;
    traCuenta: string;
    traCuentaInter: string;
    traDesCountryInter: string;
    traDigControl: string;
    traEstatus: string;
    traFalta: Date;
    traFfa: string;
    traFfc: string;
    traIban: string;
    traSwift: string;
    traSwiftInter: string;
    usuUsuario: string;
    //Solo para Sica
    clvSuc: string;
    clvCli: string;
    bitRdi: string;
    isFirstEt: boolean;
    //Flex
    selectTra: boolean;
    /**
     * Correo electronico a donde se enviara la confirmación en el cierre de operación
     */
    traEmail: string;
    /**
     * Objeto que de la Divisa asociada a la transferencia
     **/
    divisaVO: DivisasVO;
    /**
     * Nombre de la calle del domicilio del beneficiario de la transfer
     */
    traBenCalle: string;
    /**
     * Numero exterior del domicilio del beneficiario de la transfer
     */
    traBenNumext: string;
    /**
     * Numero interior del domicilio del beneficiario de la transfer
     */
    traBenNumint: string;
    /**
     * Codigo postal del domicilio del beneficiario de la transfer
     */
    traBenCodigoPostal: string;
    /**
     * Colonia del domicilio del beneficiario de la transfer
     */
    traBenColonia: string;
    /**
     * Ciudad del domicilio del beneficiario de la transfer
     */
    traBenCiudad: string;
    /**
     * Delegacion/Municipio del domicilio del beneficiario de la transfer
     */
    traBenMunicipio: string;
    /**
     * Entidad federativa del domicilio del beneficiario de la transfer
     */
    traBenEntidadFed: string;
    /**
     * Pais del domicilio del beneficiario de la transfer
     */
    traBenPaiClave: number;
    /**
     * Concepto de pago de la transferencia
     */
    traConceptoPago: string;
    /**
     * Bandera que indica si se habilitara en el portal
     */
    traHabilitaPortal: string;
    /**
     * Bandera para validar el estatus de la repetitiva en portal 
     */
    portalHabilitado: boolean;
    /**
     * Bandera para determinar si se modifico la repetitiva que esta en el portal
     */
    modificacionTransfer: boolean;
    /**
     * perId del beneficiario de la repetitiva
     */
    perId: number;
    /**
     * variable que indica al render si el elemento es seleccionado (Solo Flex)
     */
    isSelected: boolean;
    /**
     * variable que indica al render se selecciono todos los registros
     */
    isHeader: boolean;
    /**
     * Almacena lista de Vendor.
     */
    lstVendor: Array<VendorVO>;
    /**
     * Codigo de Motivo de Pago
     */
    smpCodigo: string;
    /**
     * Almacena el cuestionario repetitiva.
     */
    cuestionarioVO: CuestionarioVO;

    /**
     * varible que guarda el nombre del estado de cuenta agregado 
     **/
    traEstadoCta: string;

    /**
     * variable que guarda el nombre del pais de la transfer
     **/
    descPais: string;     /**
      * variable que guarda el motivo pago de la transfer
      **/
    descMotivoPago: string;
    /**
     * Indica si la Transfer, fue validad por el area de cumplimiento.
     * <i>Esta propiedad no se persiste.</i>
     **/
    validadoCumplimiento: boolean;
    /**
    * almacena el tipo de persona 
    */
    tpeClave: string;
    /**
    * Almacena el valor del tipo de cuenta del beneficiario
    */
    traTipoCuenta: string;
    //Campos agregados para almaecenar datos de la BE
    /**
    * Usuario Administracion
    */
    traUsuAdm: string;
    /**
     * Fecha de Cancelacion
     */
    traFCancela: Date;
    /**
     * Descripcion adicional
     */
    traDescripcionAdd: string;
    /**
     * Fecha de actualizacion
     */
    traFAct: Date;
    /**
     * Otro concepto de pago
     */
    traOtroConcPag: string;
    /**
     * Numero Random (aleatorio)
     */
    traRandom: string;
    /**
     * Cuenta inicia
     */
    traInicia: string;
    /**
     * Sistema donde se creo la repetitiva.
     * Valores posibles: FX, BL, BT
     */
    traOrigen: string;
    /**
     * Bandera para determinar si se trata del Alta o Consulta de repetitiva. 
     *      True  : Si se trata de un alta de la repetitiva
     *      False : Si se trata de una consulta (modificación) de la repetitiva
     * Se utiliza para presentar campos y para determinar si son editables o no.
     */
    blnSave: boolean;
    /**
     * Identificador tipo de contrato, se pasa de la pantalla de repetitivas. (No va a base de datos)
     */
    tconId: number;

    /**
    * Almacena el numero telefonico del beneficiario
    */
    traBenTelefono: string;


}