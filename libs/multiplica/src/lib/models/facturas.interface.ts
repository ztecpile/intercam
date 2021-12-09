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
  docId?: number;
  typeDocNombre: string;
  tmpCvelegSiff: number;
  caducidadPorMes: number;
  caducidadPorOperacion: boolean;
}
