/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

import { DocumentoVO } from "./DocumentoVO";

export interface ExpedienteVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    expId: number;
    expFRecepcionStr: string;
    expCaduca: string;
    expFCaducidadStr: string;
    expUbicacion: string;
    docId: number;
    docReferencia: string;
    perId: number;
    expFAltaStr: string;
    docDescripcion: string;
    paiClave: number;         //pai_clave: Pais que emite el documento
    expEstado: string;         //exp_estado: Estado, provincia o subdivisión que emite el documento
    expFexpedicionStr: string;     //exp_fexpedicion: Fecha de expedición del documento
    expObservaciones: string; //exp_observaciones: Observaciones o comentarios al documento
    documentoVO: DocumentoVO;   // Propiedad para el mapeo de la relación con la tabla i00Documento
    /**
    * Contiene la clave del contrato
    */
    conId: number;
    /**
    * Contiene el estatus del expediente
    */
    staId: number;

    /**
    * Determina si el documento ya se encuentra digitalizado
    */
    docDigitalizado: Boolean;

}