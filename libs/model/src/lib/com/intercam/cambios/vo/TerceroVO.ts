import { BancosVO } from "@intercam/model";
export class TerceroVO {
      terId:number;
      terNombre:string;
      terApePat:string;
      terApeMat:string;
      terRazonSoc:string;
      tpeClave:string;
      conId:number;
      divId:string;
      terCuenta:string;
      terPlaza:string;
      terSucursal:string;
      terFhAlta:Date;
      terClabe:string;
      terEstatus:string;
      terUsuAlta:string;
      terUsuAutoriza:string;
      terFhAutoriza:Date;
      terObservaciones:string;
      banNombre:string;
      banIdFondos:number;
      bancoVO: BancosVO;
      conLegado?:string;
      sucLegada:string;
      desCliente:string;
      terEsIntercam:boolean;
    
      terTipocma:string;
      terCalle:string;
      terColonia:string;
      terNumeroInt:string;
      terNumeroExt:string;
      terEntidadFed:string;
      terCodigoPostal:string;
      terMunicipio:string;
      paiClave:number;
    /**
     * Rfc del beneficiario de cheques.
     */
      terRfc : string;
    /**
     * Numero telefonico no. 1.
     */
      terTelefono1 : string;
    /**
     * Numero telefonico no. 2.
     */
      terTelefono2 : string;
    /**
     * Numero de Fax.
     */
      terFax : string;
    /**
     * Correo electronico.
     */
      terEmail : string;
    /**
     * Monto maximo a operar del beneficiario de cheques.
     */
      montoMaximo : number;
    /**
     * Identificador del tipo relacion.
     */
      treClave : number;
    /**
     * Propiedad para obtener el nombre completo de la persona fisica o la razon social
     * */
      nombreTercero : string;
    /**
     *  Identificador de repetitiva
     */
      tmpCveRepet : number;
    /**
     *
     * */
      tmpConsecLegado : number;
    
    /**
     * Fecha de Emision
     */
      terFechaEmision:Date;
    
    /**
     * Fecha de expiracion.
     */
      terFechaExpira:Date;
    
    /**
     * Especifica si un elemento debe de estar seleccionado.
     */
      conSelected : boolean = false; 
    
    /**
     * Constructor de la clase.
     */
      constructor() {
       this.bancoVO = new BancosVO();
        this.terTipocma = null;
        this.montoMaximo = 0;
        this.banIdFondos = 0;
        this.banNombre = "";
    }
        
}
