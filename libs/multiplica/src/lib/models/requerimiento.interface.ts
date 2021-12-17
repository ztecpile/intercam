export interface RequiredDocuments {
    dreId: number;
    tipoDocumentoVO: TypeDocumentVO;
    tconId: number;
    docSelected: boolean;
  }
  
  export interface TypeDocumentVO{
    tdoId: number;
    tdoDescripcion: string;
    tdoCaduca: number;
    tdoPorOper: boolean;
    tmpCvelegSiff: number;
    documentosVO: DocumentVO;
  }
  
  export interface DocumentVO{
    docId: number;
    docDescrip: string;
    docNombre: string;
    docCaduca: boolean;
    tmpCvelegSiff: number;
    tmpCvelegSabi: number;
    docDescIng: any;
    docContrato: boolean;
    tmpCvelegBanco: string;
  }