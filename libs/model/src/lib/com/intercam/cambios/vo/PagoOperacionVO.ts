/**
 * Derechos Reservados de Copia (c) - NumberERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { CatPagoVO } from './CatPagoVO';
import { CausaReversoVO } from './CausaReversoVO';
import { FormaPagoVO } from './FormaPagoVO';
import { PaisVO } from '../../corporativo/centrocostos/vo/PaisVO';
import { ReferenciaSicaVO } from '../legacy/ReferenciaSicaVO';


export interface PagoOperacionVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    paoId: number;
    opiId: number;
    perId: number;
    paoMonto: number;
    traId: number;
    cpaClave: number;
    cueId: number;
    paoReferencia: string;
    paoBeneficiario: string;
    pagOpe: string;
    //atributos sólo usados del lado de Flex
    paoNombreBanco: string;
    //paoCuenta: string;
    paoTipo: string;
    paoBancoCliente: string;

    paoEntregaRecep: string;
    paoEstatus: string;
    paoFechaStr: string;
    clvBan: string;
    banId: number;
    pagoVO: CatPagoVO;

    sucLiq: string; // sucursal de la cuenta de la repetitiva
    ctaLiq: string; //la cuenta de la repetitiva
    corLiq: string; //descripcion corta del banco de la cuenta de la repetitiva

    consecutivo: number;

    paoEntregaRecepDesc: string; //Descripcion de lo que recibimos o entregamos
    referenciaSicaVO: ReferenciaSicaVO; //Referencias bancarias de SICA
    paoConsecutivo: number;


    //campos para remesa
    paoIdentificacion: string;
    paoCuenta: string;
    paoAba: string;
    paoBanco: string;
    paoCiudadBanco: string;
    paoGirador: string;
    paoFdocumento: Date;
    seqDoc: number;

    //campos para remesa solo en sica
    obsCaptura: string;
    obsFondos: string;
    obsAutorizacion: string;
    fondoCheaut: string;

    //Campos para convenio
    /**
     * No. de Convenio
     */
    paoConvenio: string;
    /**
     * No. de primer referencia.
     */
    paoReferencia1: string;
    /**
     * No. de segunda referencia.
     */
    paoReferencia2: string;
    /**
     * No. de tercera referencia.
     */
    paoReferencia3: string;
    /**
     * Plaza del pago
     */
    paoPlaza: string;
    /**
     * Clabe de la cuenta
     */
    paoClabe: string;
    /**
     * Indica si se ha validado correctamente con los datos de convenio
     */
    paoValidacion: boolean;
    /**
     * Nombre del cliente.
     * */
    nombre: string;
    /**
     * Pais que se asigna a las remesas
     * */
    paisVO: PaisVO;
    /**
     * Indica si el pago va sin datos
     */
    paoSinDatos: boolean;
    /**
     * Forma de pado asociada a la Cuenta Origen
     */
    formaPagoVO: FormaPagoVO;
    /**
     * Descripcion del Banco de la cuenta Origen
     */
    corBanco: string;
    /**
     * Digitos de la Cuenta Origen
     */
    corCuenta: string;
    /**
     * Variable para guardar la clave del banco y poder navegar por wizard 
     * */
    corCtar: string;
    /**
     * Variable para guardar el nombre del banco y poder navegar por wizard 
     * */
    barOpe: string;
    /**
     * Clave para guardar la llave de la tabla documen de sica
     */
    cveDoc: number;
    /**
     * Clave para guardar la razon de venta
     */
    mreId: number;
    /**
     * Clave para guardar la llave de la tabla cheaut de sica
     */
    clvChe: number;
    /**
     * Tipo de liquidación
     */
    paoTipoLiquida: number;

    /**
     * Cadena RFC del titular
     */
    paoRFCTitular: string;

    /**
     * Alias de la cuenta
     */
    paoAlias: string;

    /**
     * E-mail del beneficiario de la cuenta
     */
    paoEmail: string;

    /**
     * Clave del tipo de persona, para establecer el tipo de persona juridica
     */
    tpeClave: string;

    /**
     * Codigo del catalogo tipo relacion, de sibamex
     */
    ctiCodTipRel: string;

    /**
     * Codigo del catalogo motivo de pago, de sibamex
     */
    smpCodMotPago: string;

    /**
     * Identificador del numero de actividad spid
     */
    paoActividad: number;

    /**
     * Bandera que indica si la impresion del cheque es en sucursal (V), o centralizado (F)
     */
    paoImprimeLocal: boolean;

    /**
     * Indica si el saldo de la
     * cuenta cubre el monto total de la operación
     * en pesos, solo para validaciones de SPID
     * esta propiedad NO SE PERSISTE
     */
    paoSaldoSuficiente: string;

    /**
     * Tipo de negocio
     **/
    tconId: number;

    /**
     * Tipo de cuenta o servicio asociado a un contrato de banco, proviene de un catálogo de SIBAMEX
     */
    ccbnTipoCuenta: string;

    /**
     * Descripcion del motivo de pago, cuando se selecciona "Otro" en smpCodMotPago
     */
    paoDescMotPago: string;

    /**
     * Indica si el pago fue reparado por algun promotor
     */
    paoReparacion: string;

    /**
     * Indica si se realizo el bloqueo a la cuenta en pesos, el monto de la operacion
     */
    paoCargoCta: boolean;

    /**
     * Columna para seleccionar el pago
     * Campo no persistido, se requiere para reversos
     */
    cheSelected: boolean;

    /**
     * CausaReversoVO elegida por el usuario
     * Campo no persistido, se requiere para reversos
     */
    causaReversoVO: CausaReversoVO;

    /**
     * Cadena con el nombre del grupo del usuario, para determinar los permisos y funcionalidad que le corresponde
     * Campo no persistido, se requiere para reversos
     */
    grupoUsuario: string;

    /**
     * Almacena el nombre de imagen del cheque (frontal).
     **/
    paoCheque1: string;

    /**
     * Almacena el nombre de imagen del cheque (reverso).
     **/
    paoCheque2: string;

    /**
     * Almacena lista de archivos codificados en <code>Base64</code>.</br>
     * <i>Esta propiedad no se persiste.</i>
     **/
    paoChequeArchivos: Array<any>;

}