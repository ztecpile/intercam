/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

import { FondeoCuentaVO, LiquidaRemesaVO, TipoChequeVO } from '@intercam/model';
import { ActividadEconomicaVO } from '../../corporativo/persona/vo/ActividadEconomicaVO';
import { DireccionVO } from '../../corporativo/persona/vo/DireccionVO';
import { TipoRelRemesaVO } from './TipoRelRemesaVO';

export interface LargeItemAppVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Identificador del documento Large Item Approval
     */
    liaId: number;
    /**
     * Razon social o nombre del cliente
     */
    liaRazonsocial: string;
    /**
     * Fecha de alta del contrato en formato de cadena
     */
    strLiaFechaContrato: string;
    /**
     * Nombre del ejecutivo dueño del contrato
     */
    liaEjecutivo: string;
    /**
     * Promedio acumulado de operaciones de remesa en UDS
     */
    liaAcumuladoProm: number;
    /**
     * Justificacion del por que el monto de la solicitud de remesa es mayor al promedio acumulado
     */
    liaJustificacion: string;
    //-- Check Item Approval
    /**
     * Almacena otra fuente de fondos.
     **/
    liaFuenteFondos: string;
    /**
     * Almacena promedio mensual de cheques.
     **/
    liaChequesProm: number;
    /**
     * Almacena justificaci&oacute;n para motivo de venta 'Otro'.
     **/
    liaMotivoOtro: string;
    /**
     * Almacena actividad economica del Beneficiario.
     **/
    liaActividadBen: string;
    /**
     * Almacena tipo de relacion del Cliente.
     **/
    tipoRelRemesaVO: TipoRelRemesaVO;
    /**
     * Almacena direcci&oacute;n del Cliente.
     */
    direccionVO: DireccionVO;
    /**
     * Almacena actividad economica del Cliente.
     */
    actividadEconomicaVO: ActividadEconomicaVO;

    /**
     * Almacena justificaci&oacute;n para el tipo de relacion con el cliente 'Otros'.
     **/
    liaMotivoRelacion: string;
    
    /**
     * Almacena justificaci&oacute;n para indicar cómo se liquidará la remesa,
     * para cualquiera de las opciones
     **/
    liaMotivoLiquidacion: string;
    
    /**
     * Almacena justificaci&oacute;n en caso de ser cheques consecutivos o montos cerrados.
     **/
    liaMotivoCheques: string;
    
    /**
     * Almacena la cantidad de años que radica en la rep Mex.
     **/
    liaAniosRadicando: number;
    
    /**
     * Almacena la justificacion de que pretende hacer con los fondos en Moneda Nacional
     */
    liaMotivoFondos: string;
    
    /**
     * Almacena tipo de fondeo de cuenta.
     **/
    fondeoCuentaVO: FondeoCuentaVO;
    
    /**
     * Almacena tipo de liquida remesa.
     **/
    liquidaRemesaVO: LiquidaRemesaVO;
    
    /**
     * Almacena tipo de cheque.
     **/
    tipoChequeVO: TipoChequeVO;  

}

