export class DocumentoVO {

  docId: Number ;
  docNombre: String;
  docDescrip: String;
  tdocDocumentos: any[];
  tmpCvelegSiff : Number;
  tmpCvelegSabi : Number;
  docCaduca : Boolean;
  docDescIng : String; //doc_desc_ing
  /**
  * Indica si el documento es por contrato
  */
  docContrato : Boolean;

/**
* Clave legada para Banco
*/
tmpCvelegBanco : String;
constructor() {}
}
