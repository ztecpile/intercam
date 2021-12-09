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
  tconId: number;
  tdoCaduca: number;
  tdoDescripcion: string;
  tdoId: number;
  tdoPorOper: boolean;
  tmpCvelegSiff: number;
  
}
