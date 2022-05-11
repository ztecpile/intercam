import { DocumentoVO } from "@intercam/model";

export class ExpedienteVO {
  expId: Number;
  expFRecepcionStr: String;
  expCaduca: String;
  expFCaducidadStr: String;
  expUbicacion: String;
  docId: Number;
  docReferencia: String;
  perId: Number;
  expFAltaStr: String;
  docDescripcion: String;
  paiClave: Number; //pai_clave: Pais que emite el documento
  expEstado: String; //exp_estado: Estado, provincia o subdivisión que emite el documento
  expFexpedicionStr: String; //exp_fexpedicion: Fecha de expedición del documento
  expObservaciones: String; //exp_observaciones: Observaciones o comentarios al documento
  documentoVO: DocumentoVO; // Propiedad para el mapeo de la relación con la tabla i00Documento
  conId: Number;
  staId: Number;

  docDigitalizado: Boolean;
  constructor() {}
}
