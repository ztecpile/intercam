export interface Document {
  docCaduca: boolean;
  docContrato: boolean;
  docDescIng: any;
  docDescrip: string;
  docId?: number;
  docNombre: string;
  tmpCvelegBanco: any;
  tmpCvelegSabi: number;
  tmpCvelegSiff: number;
}

export interface TypeDocument {
  tdoId: number;
  tdoCaduca: number;
  tdoDescripcion: string;
  tdoPorOper: boolean;
  tmpCvelegSiff: number;
  documentosVO: Document[];
  tconId: number;
  docSelected: boolean;
}
