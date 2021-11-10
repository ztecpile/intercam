import { ColoniaVO, EntidadVO, PaisVO, ProspectoExcepcionesVO, TipoContratoVO, TipoDireccionVO, TipoPersonaVO } from "@intercam/model";
import { GrupoVO } from "../seguridad/vo/GrupoVO";
import { Const } from "./Const";

export abstract class ProspeccionUtil {
  
  /**
	* Obtiene el objeto del tipo negocio
	**/
  public static obtenerTipoNegocio(tconId:number, arrTipoContrato:TipoContratoVO[]):TipoContratoVO {
    var tCtro = new TipoContratoVO;
    for (let i = 0; i < arrTipoContrato.length; i++) {
      if(arrTipoContrato[i].tconId === tconId){
        tCtro = arrTipoContrato[i]; 
        break;
      }
    }
    return tCtro;
  }

  /**
	* Obtiene el indice del tipo de persona.
	**/
  public static obtenerIndiceTPersona(tpeClave:string, arryTPersona:TipoPersonaVO[]):number {
    var indice = 0;
    if (arryTPersona != null && arryTPersona.length > 0) {
        for (let i = 0; i < arryTPersona.length; i++) {
          if(arryTPersona[i].tpeClave === tpeClave){
            indice = i;
            break;
          }
        }
    }
    return indice;
  }

  /**
	* Obtiene el objeto del tipo de persona.
	**/
  public static obtenerTipoPersona(tpeClave:string, arryTPersona:TipoPersonaVO[]):TipoPersonaVO {
    var tPer = new TipoPersonaVO;
    for (let i = 0; i < arryTPersona.length; i++) {
      if(arryTPersona[i].tpeClave === tpeClave){
        tPer = arryTPersona[i]; 
        break;
      }
    }
    return tPer;
  }

  /**
	* Obtiene el objeto de pais.
	**/
  public static obtenerPais(paiClave:number, arrPais:PaisVO[]):PaisVO {
    var pais = new PaisVO;
    for (let i = 0; i < arrPais.length; i++) {
      if(arrPais[i].paiClave == paiClave){
        pais = arrPais[i]; 
        break;
      }
    }
    return pais;
  }

  /**
	* Obtiene el objeto de tipo direccion.
	**/
  public static obtenerTipoDireccion(indexTipoDir:number, arrTiposDir:TipoDireccionVO[]):TipoDireccionVO {
    var tpDir = new TipoDireccionVO;
    for (let i = 0; i < arrTiposDir.length; i++) {
      if(i == indexTipoDir){
        tpDir = arrTiposDir[i]; 
        break;
      }
    }
    return tpDir;
  }

  /**
	* Obtiene el indice de la Ciudad en la lista de Ciudades.
	**/
  public static obtenerIndiceCiudad(nomCiudad:String, lstCiudad:EntidadVO[]):number {
    var indice = 0;
    if (lstCiudad != null) {
        for (let i = 0; i < lstCiudad.length; i++) {
          if(lstCiudad[i].entDescripcion === nomCiudad){
            indice = i;
            break;
          }
        }
    }
    return indice;
  }

    /**
	* Obtiene el indice de la Colonia en la lista de Colonias.
	**/
  public static obtenerIndiceColonia(nomColonia:String, lstColonia:ColoniaVO[]):number {
    var indice = -1;
    if (lstColonia != null) {
        for (let i = 0; i < lstColonia.length; i++) {
          if(lstColonia[i].colDescrip === nomColonia){
            indice = i;
            break;
          }
        }
    }
    return indice;
  }

  /**
  * Filtra Claves legadas por tipo de negocio
  **/
  public static filtrarClvLegadas(listClv:any[], tconId:Number){
    var arrgs = new Array;
    for (let index = 0; index < listClv.length; index++) {
        if(listClv[index].tconId == tconId){
          arrgs.push(listClv[index].idVO.clvPro);
        }
    }
    return arrgs;
  }

  /**
  * Filtra la execpaciones por negocio
  **/
  public static filtrarExpProspeccion(arrExcepcionProspeccion:any[], tconId:number, prospectoExcepcionesVO:ProspectoExcepcionesVO):any[]{
    arrExcepcionProspeccion = arrExcepcionProspeccion.filter((item) =>{
      if(!isNaN(tconId) != null || prospectoExcepcionesVO.tconId){
        //Excepciones para Casa de Bolsa y Fondos de Inversion
        if((tconId == Const.TCON_CASA_BOLSA || tconId == Const.TCON_FONDOS) 
          || (prospectoExcepcionesVO != null && (prospectoExcepcionesVO.tconId == Const.TCON_CASA_BOLSA || prospectoExcepcionesVO.tconId == Const.TCON_FONDOS))){
          return item.tconId == Const.TCON_CASA_BOLSA || item.expId == Const.EXPID_NO_APLICA;
        }
        //Excepciones para Divisas Banco
        else if((tconId == Const.TCON_DIVISAS_BANCO) || (prospectoExcepcionesVO != null && prospectoExcepcionesVO.tconId == Const.TCON_DIVISAS_BANCO)){
          return item.tconId == Const.TCON_DIVISAS_BANCO || item.expId == Const.EXPID_NO_APLICA;
        }
        //Excepciones para Banco
        else if((tconId == Const.TCON_BANCO) || (prospectoExcepcionesVO != null && prospectoExcepcionesVO.tconId == Const.TCON_BANCO)){
          return item.tconId == Const.TCON_BANCO || item.expId == Const.EXPID_NO_APLICA;
        }
        //Excepciones para Divisas
        else if((tconId == Const.TCON_CASA_CAMBIOS) || (prospectoExcepcionesVO != null && prospectoExcepcionesVO.tconId == Const.TCON_CASA_CAMBIOS)){
          return item.expId == Const.EXPID_NO_APLICA;
        }
        //Excepciones para Otros, tiene el valor de tconId es 0 cuando en como
        //esta seleccionado Otros
        else if((tconId == 0) || (prospectoExcepcionesVO != null && prospectoExcepcionesVO.tconId == 0)){
          return item.tconId == 0 || item.expId == Const.EXPID_NO_APLICA;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    });
    return arrExcepcionProspeccion;
  }
    
  /**
  * valida los permisos de certificacion y apoderamiento
  */ 
  public static validaPermisosCertificadoApoderado(lstCertAsignacionVO : any[], tconId : Number, validaPoder:Boolean):String {
    //Almacena el mensaje a mostrar
    var msj : String = "";
       
    //Verificamos si se va a validar si el promotor tiene poder para operar este negocio
    if (validaPoder) {
        
        //Se valida que la lista no este vacia, esto quiere decir que tie certificacion
        if (null != lstCertAsignacionVO && lstCertAsignacionVO.length > 0) {
            //Se recorre la lista de certificaciones
            lstCertAsignacionVO.forEach(certAsig => {
              //Se valida si la certificacion tiene poderes asociados
              if (certAsig.cerApoderamientosVO == null || certAsig.cerApoderamientosVO.length == 0) {
                  msj = Const.msjSinPoderes;
              } else {
                  //Se recorre la lista de poderes asociados a la certificacion
                  certAsig.cerApoderamientosVO.array.forEach(certApo => {
                  //Se inicializa la varible con este mensaje
                  msj = Const.msjSinPoder;
                    //Se valida si existe un poder para el tipo de contrato enviado
                    if(certApo.tconId == tconId){
                      //Se valida si el poder no tiene revocación
                      if (null != certApo.capoRevocacion && certApo.capoRevocacion != "") {
                        msj = Const.msjPoderRevocado;
                      } else {
                        //Si no esta revocado el poder, se limpia la variable del mensaje
                        msj = "";
                      }
                    }
                  });
              }
           });
        } else {
            msj = Const.msjSinCertificacion;
        }
    }
    return msj;
  }

  /**
  * Valid el formato del del RFC
  * de la persona Fisica o Moral
  **/
  public static validaRFC(rfc:string, tpeClave:string):Boolean {
    if(tpeClave == Const.PERSONA_FISICA){
      const re = /(\D\D\D\D)(\d\d\d\d\d\d)(...)?/g;
      return re.test(rfc);
    } else {
      const re = /(\D\D\D)(\d\d\d\d\d\d)(...)?/g;
      return re.test(rfc);
    }
  }

  /**
  * Metodo que valida que la fecha del RFC no sea mayor a la fecha actual
  * */
   public static fechaValidaRFC(tipoPersona : string, perRfc: string, fechaActual: Date):Boolean {
    
    var fechaValida : Boolean = true;
    var dateField :Date;
    
    if (perRfc != "" && perRfc.length >= 10){
      if (tipoPersona == Const.PERSONA_FISICA) {
        dateField = this.formatoFechaRFC(Number(perRfc.substring(8,10)),
                            Number(perRfc.substring(6,8)),
                            Number(perRfc.substring(4,6)), fechaActual);
      } else if (tipoPersona == Const.PERSONA_MORAL){
        dateField = this.formatoFechaRFC(Number(perRfc.substring(7,9)),
                            Number(perRfc.substring(5,7)),
                            Number(perRfc.substring(3,5)),fechaActual);
      }
      if (!dateField){
            fechaValida = false;
      } else if (!this.validarFechaMenorHoy(dateField,fechaActual)) {
            fechaValida = false;
      }
    }
    return fechaValida;                
  }
  
  /**
  * Obtiene la fecha del RFC
  **/ 
  public static formatoFechaRFC(dayNum : number, monthNum: number, yearNum : number, fechaActual: Date):Date {
    //Obtenemos el anio actual en dos digitos ejemplo 2021 --> 21
    var anioActual : number =  Number(fechaActual.getFullYear().toString().substr(2,4));
        
    //Si el anio enviado es mayor al anio actual mas 5, entonces le sumaremos 1900, si es menor, le sumamos 2000
    //lo anterior porque existe una disyuntiva en como tomar los dos digitos del anio en un RFC ejemplo 50 puede ser 1950 o 2050
    //Se determino que 5 anios mas al actual se manejara como 1900 y menores como 2000
    if (yearNum > (anioActual + 5)) {
         yearNum += 1900;
    } else {
        yearNum += 2000;
    }
        
    //Obtenemos la fecha en base al anio armado, mes y dia
    var newDate:Date = new Date(yearNum, monthNum - 1, dayNum);
        
    //Validamos que el dia y el mes sean los que se mandaron, esto porque cuando mandan un mes arriba del 12 o un día arriba del 31 la fecha anterior cambia.
    if (dayNum != newDate.getDate() || (monthNum - 1) != newDate.getMonth())
        return null;
        
    return newDate;
  }

  /**
  * Valida que la fecha introducida sea menor a la fecha actual devuelta por el servidor.
  * 
  * Fecha a validar.
  * true si la fecha es menor a la actual.
  */
  public static validarFechaMenorHoy(componente : Date, fechaActual: Date) : Boolean {
    var valida : Boolean = componente.getTime() <= fechaActual.getTime();
    return valida;
  }

  /**
  * Método que construye el nombre corto de una persona física, con base en
  * los parámetros pefPaterno, pefMaterno y pefNombre
  **/
  public static buildPerNomCorto(pefPaterno:String, pefMaterno:String, pefNombre:String):String {
    var nomCorto : String = pefNombre.trim();

    nomCorto += (nomCorto.length > 0 ? " " : "") + pefPaterno.trim();
    nomCorto = nomCorto.trim();

    nomCorto += (nomCorto.length > 0 ? " " : "") + pefMaterno.trim();
    nomCorto = nomCorto.trim();
    
    return nomCorto;
  }
  
  public static isInGrupoPermisos (permisos : string, grupos : GrupoVO[]) : Boolean {
    var permitido : Boolean = false;
    if (permisos && grupos) {
        var arrPermisos = new Array();
        arrPermisos = permisos.split(',');
        var i = 0;
        while (!permitido && i < arrPermisos.length) {
            var j = 0;
            var permiso : String = arrPermisos[i];
            while (!permitido && j < grupos.length) {
                permitido = grupos[j].gpoNombre == permiso;
                j++;
            }
            i++;
        }
    }
    return permitido;
  }

  /**
  * Valida el formato del del SNN
  * de la persona Fisica o Moral extranjero
  **/
  public static validaSNN(nss: string, tpeClave: string):Boolean{
    if(tpeClave == Const.PERSONA_FISICA){
      const re= /(D\D\D\D) (\d\d\d\d\d\d) ?/g;
        return re.test(nss);
    } else {
      const re = /(D\D\D) (\d\d\d\d\d\d) ?/g;
      return re.test(nss); 
    }
  }
  
  public static validaEmail(email:string):Boolean {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}