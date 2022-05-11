import { DocumentoVO } from "@intercam/model";

export class TipoDocumentoVO {
  docSelected: Boolean = false;
  tdoId: Number;
  tdoDescripcion: String;
  tdoCaduca: Number;
  tdoPorOper: Boolean;
  documentosVO: DocumentoVO[];
  tmpCvelegSiff: Number;

  //Datos Necesarios Para ContratoExpedientes
  conId: Number;
  perId: Number;
  perNomCorto: String;
  tconId: Number;
  cpeId: Number;
  perfId: Number;

  constructor() {}
}
