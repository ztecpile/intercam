export interface RequiredDocuments {
  dreId: number;
  tipoDocumentoVO: TypeDocumentVO;
  perfilVO: PerfilVO;
  tipoContratoVO: ContractType;
  cpeIdVO: cpeIdVO;
}

export interface cpeIdVO {
  cpeId: number;
  cpeDescripcion: string;
  tmpCvelegSabi: string;
  tipoPersonaVO: TypePersonVO;
  personasVO: [];
  tmpCvelegSica: string;
  tmpCvelegSiff: number;
  tmpCvelegSide: number;
  cpeEsContraparte: boolean;
  cpeRiesgo: number;
  sectoresVO: [];
  cpeRegSimpli: boolean;
}

export interface TypePersonVO {
  tpeClave: string;
  tpeDescripcion: string;
  tmpCveLegSabi: any;
  tmpCveLegSiff: number;
}

export interface ContractType {
  tconId: number;
  tconDescripcion: string;
  tconDispInternet: string;
  tconTipoPersona: any;
  perId: number;
  tconEstatus: boolean;
  estatusNegocioVO: any;
  tconImagen: string;
  tconDscFormatos: string;
  tpeClave: string;
}

export interface PerfilVO {
  perfId: number;
  perfDescripcion: string;
  perfEstatus: string;
  tmpCvelegSiif: number;
  tconId: number;
  tmpCvelegSabi: any;
  tpeClave: string;
  perfTpeClave: any;
}

export interface TypeDocumentVO {
  tdoId: number;
  tdoDescripcion: string;
  tdoCaduca: number;
  tdoPorOper: boolean;
  tmpCvelegSiff: number;
  documentosVO: DocumentVO[];
  tconId: number;
  docSelected: boolean;
}

export interface DocumentVO {
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
