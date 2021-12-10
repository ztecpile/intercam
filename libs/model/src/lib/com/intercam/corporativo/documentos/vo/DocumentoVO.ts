export class DocumentoVO {

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

    public DocumentoVO() {
        this.tmpCvelegSabi = 0;
        this.tmpCvelegSiff = 0;
    }
}