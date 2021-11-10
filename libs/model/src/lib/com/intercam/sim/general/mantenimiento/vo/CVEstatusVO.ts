export class CVEstatusVO {

  constructor(
    /** Clave del estatus (id).*/
     public stsClave:string,
     /** Descripci&oacute;n. Es la que se despliega en los combos, (Activo, Suspendido, etc.).*/
     public stsDescripcion:string,
     /** Agrupaci&oacute;n de tipos de estatus.*/
     public stsGrupo:string
  ){}

}
