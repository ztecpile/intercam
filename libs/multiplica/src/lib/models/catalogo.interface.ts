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
  cpeId: number;
  cpeDescripcion: string;
  tmpCvelegSabi: string;
  tipoPersonaVO: TyPersonVO;
  personasVO: Size;
  tmpCvelegSica: string;
  tmpCvelegSiff: number;
  tmpCvelegSide: number;
  cpeEsContraparte: boolean;
  cpeRiesgo: number;
  sectoresVO: Size;
  cpeRegSimpli: boolean;
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

export interface Profile {
  perfId: number;
  perfDescripcion: string;
  perfEstatus: string;
  tmpCvelegSiif: number;
  tconId: number;
  tmpCvelegSabi: string;
  tpeClave: string;
  perfTpeClave: any;
}

