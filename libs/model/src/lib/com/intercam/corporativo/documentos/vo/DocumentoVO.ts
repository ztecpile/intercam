/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export interface DocumentoVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    docId: number;
    docNombre: string;
    docDescrip: string;
    tdocDocumentos: Array<any>;
    tmpCvelegSiff: number;
    tmpCvelegSabi: number;
    docCaduca: boolean;
    docDescIng: string; //doc_desc_ing
    /**
    * Indica si el documento es por contrato
    */
    docContrato: boolean;

    /**
     * Clave legada para Banco
     */
    tmpCvelegBanco: string;

}