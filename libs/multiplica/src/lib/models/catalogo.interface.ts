export interface TypeContrato {
  estatusNegocioVO: any;
  perId: number;
  tconDescripcion: string;
  tconDispInternet: string;
  tconDscFormatos: string;
  tconEstatus: boolean;
  tconId: number;
  tconImagen: string;
  tconTipoPersona: any;
  tpeClave: any;
}

export interface TypePerson {
  cpeDescripcion: string;
  cpeEsContraparte: boolean;
  cpeId: number;
  cpeRegSimpli: boolean;
  cpeRiesgo: number;
  personasVO: Size;
  sectoresVO: Size;
  tipoPersonaVO: TyPersonVO[];
  tmpCvelegSabi: string;
  tmpCvelegSica: string;
  tmpCvelegSide: number;
  tmpCvelegSiff: number;
}
export interface Size {
  length: number;
}
export interface TyPersonVO {
  tpeClave: string;
  tpeDescripcion: string;
  tmpCveLegSabi: any;
  tmpCveLegSiff: number;
}
