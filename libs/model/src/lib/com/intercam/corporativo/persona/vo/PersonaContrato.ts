export class PersonaContrato{

public  contratoId : number;
public  perId : number;
public  nombreCorto : string;
public  perBloqueada: Boolean;
/**
* RFC de la persona
*/
public  perRfc : string;
public  descripcionTipocontrato : string;
public  statusContratoDescripcion : string;
public  statusContrato : number;
public  perfil : number;
public  contratoEjecutivoEstatus : string;
public  operativo : Boolean;
public  tipoContratoId : number;
public  ejecutivoId : number;
public  cveubi : number;
public  tpeClave : string;
public  tejId : number;
public  tejDescripcion : string;
public  usuUsuario : string;
public  conSelected : Boolean;
public  ejecutivoIdNew : number;
public  contratoEjecutivoEstatusNew : string;
public  perPerId : number;
public  cpeId : number;
public  tmpCveLegada : string;
public  tmpCveSucLegada : string;
/**
* clave legada, suc legada y usuarioId del nvo. ejecutivo
* estas no se usan para persistir el objeto, ya que la tabla no las contiene
*/
public  newTmpCveLegada : string;
public  newTmpSucCveLegada : string;
public  usuarioId : number;
public  cveLegadaPromotor :  string;
public  newCveLegadPromotor : string
public  cveSuc : string ;
public  staContrato : string ;
public  cveLegadaReasignaCont : string;
    
public  cesId : number;
public  cesDescripcion : string;
public  estatusOperable : Boolean;
    
public  cfwNdf:string;

/**
* Identifica el id del prospecto
**/
public prpId:number;

/**
* Tipo de cuenta 
*/
public tipoCuenta : string;

/**
* Tipo de moneda
*/
public tipoMoneda : string;

/**
* Descripcion del perfil del cliente asociado a un contrato
**/ 
public perfDescripcion : string; 



public actId : number;

/**
* Numero de Referencia
**/
public refNumero : string;
    
/**
* Identificador de la persona es prospecto 
*/
public perEsProspecto: string;

/**
* Indica si el contrato puede capturar Addenda
* Propiedad no persistida, se utiliza para el wizard de la operacion
*/
public conAddenda:boolean;
 
/**
* Toma el valor del curp para persona fisica
*/
public pefCurp : string;
 
/**
* Determina si el contrato es de tipo Forward
*/ 
public isContratoFWS : boolean;
 
public toString():string{
     return this.perId + ',' + this.contratoId;
}

constructor() {
      
}
}