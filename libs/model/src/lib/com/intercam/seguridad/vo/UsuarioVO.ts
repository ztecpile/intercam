import { Const } from '../../utils/Const';
import { TipoUsuarioVO } from './TipoUsuarioVO';
import { PromotorSiifVO } from './PromotorSiifVO';
import { GrupoVO } from './GrupoVO';
import { ClavePromLegadoVO } from './ClavePromLegadoVO';
import { CentroCostosVO } from '../../corporativo/centrocostos/vo/CentroCostosVO';
import { SucursalVO } from '../../corporativo/centrocostos/vo/SucursalVO';
import { EjecutivoAsistenteVO } from '../../corporativo/persona/vo/EjecutivoAsistenteVO';
import { CierreExcepVO } from '../../cambios/vo/CierreExcepVO';


export class UsuarioVO {

    public usuId: number;
    public usuClave: string;
    public usuPassword: string;
    public usuEstatus: string;
    public usuCambiapwd: boolean;
    public usuFraseConf: string;
    public usuPregConf: string;
    public usuIntentos: number;
    public usuFaltaStr: string;
    public usuEmail: string;
    public usuFUltimoLoginStr: string;
    public usuFUltimoFallidoStr: string;
    public idPersona: number;
    public fechaCambioPwdStr: string;
    public canId: number;
    public usuPasswordTtl: number;
    public cvecia: string;
    public cvepue: string;
    public tipoUsuarioVO: TipoUsuarioVO;
    public sucursalVO: SucursalVO;
    public sexo: string;
    public curp: string;
    public fecNacStr: string;
    public cvetra: string;
    public apepat: string;
    public apemat: string;
    public nombre: string;
    public numrfc: string;
    public numIms: string;
    public cveubi: number;
    public cveare: string;
    public cvedep: string;
    public empCertificadoFondos: boolean;
    public empCertificadoCb: boolean;
    public perEmpleadoUsuario: string;
    public perNomCorto: string;
    public usuAutoriza: string;
    public usuFhautorizaStr: string;
    public usuTieneCorreo: boolean;
    public usuEntraPos: boolean;
    public usuEntraSica: boolean;
    public usuEntraSiif: boolean;
    public usuObservaciones: string;
    public usuTipoContratacion: string;
    public despue: string;
    public ciadescrip: string;
    public sustituye: string;
    public extension: string;
    public tipoRenuncia: string;

    // sica
    public ex2Pro: number;
    public porPro: number;
    public cl1Gru: number;
    public cl2Gru: number;
    public tmpStaSica: number;
    // public gruproSicaVO: GruproSicaVO;
    // public promotorSicaVO: PromotorSicaVO;

    // siif
    public tmpAreaSiif: number;
    public tmpNivelPromSiif: number;
    public tmpNivel: number;
    public asoNomPromCert: string;
    public asoCvetraPromCert: number;
    public promotorSiifVO: PromotorSiifVO;

    // sabi
    public asoCveCnbv: string;
    public asoNumNot: number;
    public asoNomNot: string;
    public asoNumEsc: string;
    public asoFecEscStr: string;
    public asoPlazaEsc: string;
    public asoPromCert: number;
    public cvetno: string;
    public ccoCostoVO: CentroCostosVO;
    public cierreExcep: CierreExcepVO;

    // idisp
    public ctaban: string;

    // extranet
    public idArea: number;

    // INE
    public cic: string;
    public anioRegistro: number;
    public anioEmision: number;
    public numEmision: number;
    public claveElector: string;

    public statusEnrol: string;
    public watchList: string;
    public descWL: string;
    public statusINE: string;
    public valNombre: string;
    public valAPaterno: string;
    public valAMaterno: string;
    public porMinucia2: string;
    public porMinucia7: string;

    public gruposVO: GrupoVO[];
    public listaEjecutivosSoyAsistente: EjecutivoAsistenteVO[];
    public listaCCR: CentroCostosVO[];
    public listaCCG: CentroCostosVO[];
    public clavesLegadas: ClavePromLegadoVO[];
    public usuEquipamiento: string[];

    public nivelResp: Set<string>;

    public cveBan: string;

    /**
     * Lista de claves legadas de las personas a las que 'asisto'
     * No se perciste, se utiliza para tener informacion necesaria en sesion
     */
    public clavesLegadasAsisto: ClavePromLegadoVO[];

    /**
     * Lista de claves legadas que integran mi equipo (De quienes soy responsable)
     * No se perciste, se utiliza para tener informacion necesaria en sesion
     */
    public clavesLegadasMiEquipo: ClavePromLegadoVO[];

    /**
     * Lista de claves legadas de los usuarios que pertenecen a un grupo determinado y deben validarse en algun proceso.
     *      EJEMPLO: Validar que los promotores no cierren las operaciones capturadas por los usuarios con perfil de
     *                  - Cheques Devueltos
     */
    public clavesLegadasGpo: ClavePromLegadoVO[];



    public toString(): string {
        let s = '[\n' +
            'usuId = ' + this.usuId + '\n' +
            'usuClave = ' + this.usuClave + '\n' +
            'idPersona = ' + this.idPersona + '\n' +
            'cveubi = ' + this.cveubi + '\n' +
            'perNomCorto = ' + this.perNomCorto + '\n' +
            'sucursal = ' + this.sucursalVO + '\n' +
            'ASIS = ';

        // for (let i = 0; i < this.listaEjecutivosSoyAsistente.length; i++) {
        //     s += this.listaEjecutivosSoyAsistente[i].toString() + '\n';
        // }

        s += ']';
        s += ' CCR = ';
        for (let j = 0; j < this.listaCCR.length; j++) {
            s += this.listaCCR[j].toString() + '\n';
        }
        s += ']';
        s += ' CCG = ';
        for (let k = 0; k < this.listaCCG.length; k++) {
            s += this.listaCCG[k].toString() + '\n';
        }
        s += ']';

        return s;
    }

    /**
     * Recupera la clave legada de acuerdo al tipo de sistema
     * @param type
     * @return
     */
    public findClave(type: number): ClavePromLegadoVO {
        let clave: ClavePromLegadoVO = null;
        if (this.clavesLegadas != null) {
            for (let i = 0; i < this.clavesLegadas.length; i++) {
                if (this.clavesLegadas[i].tconId == type && this.clavesLegadas[i].cplDefault == true) {
                    clave = this.clavesLegadas[i];
                }
            }
        }
        return clave;
    }

    /**
     * Obtiene la lista de todas las claves legadas para los contratos de Cambios
     */
    public findClvPromLegadoCambios(): ClavePromLegadoVO[] {
        const lstClavePromLegadoVO: ClavePromLegadoVO[] = [];
        this.clavesLegadas.forEach(clavePromLegadoVO => {
            if (Const.TCON_CASA_CAMBIOS == clavePromLegadoVO.tconId || Const.TCON_DIVISAS_BANCO == clavePromLegadoVO.tconId) {
                lstClavePromLegadoVO.push(clavePromLegadoVO);
            }
        });

        this.clavesLegadasAsisto.forEach(clavePromLegadoVO => {
            if (Const.TCON_CASA_CAMBIOS == clavePromLegadoVO.tconId || Const.TCON_DIVISAS_BANCO == clavePromLegadoVO.tconId) {
                lstClavePromLegadoVO.push(clavePromLegadoVO);
            }
        });
        this.clavesLegadasMiEquipo.forEach(clavePromLegadoVO => {
            if (Const.TCON_CASA_CAMBIOS == clavePromLegadoVO.tconId || Const.TCON_DIVISAS_BANCO == clavePromLegadoVO.tconId) {
                lstClavePromLegadoVO.push(clavePromLegadoVO);
            }
        });
        return lstClavePromLegadoVO;
    }

    /**
     * Obtiene la lista de claves legadas del tipo de contrato DIVISAS BANCO (5) y la clave legada por default con la que opera el promotor 
     *      las operaciones de divisas. Tambien la posicion de la clave legada establecida por default en 
     *      el arreglo de claves legadas.
     * @return Object {LST_CLV_PROM_LEG: Lista de claves legadas para operad divisas, 
     *                 POS_CLV_PROM_LEG_DEFAULT: Posicion de la clave legada establecida por default en 
     *                      el arreglo de claves legadas.
     *                 CLV_PROM_LEG_DEFAULT: Clave legada por defaul.
     *                 }
     */
    public getInfoClvPromLegadoDivisasBanco(): any {
        const lstClvPromLegado: ClavePromLegadoVO[] = [];
        const clavePromLegadoCasaBolsa: ClavePromLegadoVO = null;
        let clavePromLegadoBanco: ClavePromLegadoVO = null;
        let posClvPromLegDefault = 0;
        let cont = 0;
        this.clavesLegadas.forEach(clavePromLegadoVO => {
            if (Const.TCON_DIVISAS_BANCO == clavePromLegadoVO.tconId) {
                lstClvPromLegado.push(clavePromLegadoVO);
                if (Const.TCON_DIVISAS_BANCO == clavePromLegadoVO.tconId && clavePromLegadoVO.cplDefault) {
                    clavePromLegadoBanco = clavePromLegadoVO;
                    posClvPromLegDefault = cont;
                }
                ++cont;
            }
        });
        return {
            LST_CLV_PROM_LEG: lstClvPromLegado, POS_CLV_PROM_LEG_DEFAULT: posClvPromLegDefault,
            CLV_PROM_LEG_DEFAULT: clavePromLegadoBanco == null ? clavePromLegadoCasaBolsa : clavePromLegadoBanco
        };
    }

    //Migrado a UsuarioUtil.ts

    // /**
    //  * 
    //  * Obtiene las claves legadas de acuerdo al tipo de negocio
    //  * 
    //  * @param tconId Identificador del tipo negocio
    //  * @return Las clave legadas de un tipo negocio
    //  * 
    //  **/
    // public findClaves(tconId: number): ClavePromLegadoVO[] {
    //     let claves: ClavePromLegadoVO[] = null;
    //     if (this.clavesLegadas != null) {
    //         claves = [];
    //         for (let i = 0; i < this.clavesLegadas.length; i++) {
    //             if (this.clavesLegadas[i].tconId == tconId) {
    //                 claves.push(this.clavesLegadas[i]);
    //             }
    //         }
    //     }
    //     return claves;
    // }

    //Migrado a UsuarioUtil.ts

    // // acceso con alguno de estos grupos
    // public getGpuClaves(gpos: number[]): number[] {
    //     const claves: number[] = [];
    //     let grupo = 0;
    //     if (this.gruposVO != null) {
    //         for (let i = 0; i < this.gruposVO.length; i++) {
    //             grupo = this.gruposVO[i].gpoClave;

    //             for (let j = 0; j < gpos.length; j++) {
    //                 if (gpos[j] == grupo) {
    //                     claves.push(grupo);
    //                 }
    //             }
    //         }
    //     }
    //     return claves;
    // }

    /**
     * Obtine una lita de grupos correspondientes a la lista de nombres de grupos dados en el parametro
     * 
     * @param lstNameGrupo: Lista de nombres de grupos a obtener
     * @return Lista de grupos correspondientes
     **/
    public getLstGrupos(lstNameGrupo: string[]): GrupoVO[] {
        const lstGrupos: GrupoVO[] = [];

        if (lstNameGrupo != null) {
            lstNameGrupo.forEach(nameGrupo => {
                this.gruposVO.forEach(grupoVO => {
                    if (nameGrupo == grupoVO.gpoNombre) {
                        lstGrupos.push(grupoVO);
                    }
                });
            });
        }
        return lstGrupos;
    }

    /**
     * Recupera el objeto ClavePromLegadoVO de las claves legadas asociadas al usuario 
     *      correspondiente a la clave legada dada en el parametro clvLegada y que corresponda al tipo de contrato tconId.
     * @param clvLegada     Clave legada a validar que este asociada al usuario
     * @param tconId        Tipo de contrato
     * @return  Un objeto ClavePromLegadoVO correspondiente a la clave legada y el tipo de contrato dados.
     *          NOTA: Si no encuentra la clave legada en la lista, regresa null.
     */
    public getClaveLegada(clvLegada: string, tconId: number): ClavePromLegadoVO {
        let clvPromLegadoVO: ClavePromLegadoVO = null;
        let lstClvLegadas: ClavePromLegadoVO[];
        let posicion: number;


        // Se verifica si la cleve legada que se busca corresponde a las claves legadas del promotor
        lstClvLegadas = this.clavesLegadas;
        posicion = 0;
        while (clvPromLegadoVO == null && lstClvLegadas != null && lstClvLegadas.length > posicion++) {
            // Clave legada corresponde al tipo de contrato deseado y a la clave legada que se busca
            if (tconId == lstClvLegadas[posicion - 1].tconId &&
                clvLegada.trim() == lstClvLegadas[posicion - 1].idVO.clvPro.trim()) {
                clvPromLegadoVO = lstClvLegadas[posicion - 1];
            }
        }
        // Se verifica si la cleve legada que se busca corresponde a las claves legadas que asiste el promotor
        lstClvLegadas = this.clavesLegadasAsisto;
        posicion = 0;
        while (clvPromLegadoVO == null && lstClvLegadas != null && lstClvLegadas.length > posicion++) {
            // Clave legada corresponde al tipo de contrato deseado y a la clave legada que se busca
            if (tconId == lstClvLegadas[posicion - 1].tconId &&
                clvLegada.trim() == lstClvLegadas[posicion - 1].idVO.clvPro.trim()) {
                clvPromLegadoVO = lstClvLegadas[posicion - 1];
            }
        }
        // Se verifica si la cleve legada que se busca corresponde a las claves legadas del equipo de trabajo del promotor
        lstClvLegadas = this.clavesLegadasMiEquipo;
        posicion = 0;
        while (clvPromLegadoVO == null && lstClvLegadas != null && lstClvLegadas.length > posicion++) {
            // Clave legada corresponde al tipo de contrato deseado y a la clave legada que se busca
            if (tconId == lstClvLegadas[posicion - 1].tconId &&
                clvLegada.trim() == lstClvLegadas[posicion - 1].idVO.clvPro.trim()) {
                clvPromLegadoVO = lstClvLegadas[posicion - 1];
            }
        }
        return clvPromLegadoVO;
    }

    /**
     * Valida que la clave legada proporcionada en el parametro clvLegada este asociada al usuario y sea del tipo de contrato determinado en el parametro tconId
     * @param clvLegada     Clave legada a validar que este asociada al usuario
     * @param tconId        Tipo de contrato
     * @return  True, si la clave legada proporcionada (clvLegada) esta asociada al usuariousuario y coresponde al tipo de contrato determinado (tconId).
     *          False, en caso contrario.
     */
    public hasClvLegada(clvLegada: string, tconId: number): boolean {
        return this.getClaveLegada(clvLegada, tconId) != null;
    }

    /**
     * Obtiene una lista de perId's asociados a las claves legadas del usuario, de un negocio especifico
     *      - Propia del Ejecutivo
     *      - De los ejecutivos que asiste
     *      - De su equipo de trabajo
     * @param   tconId        Tipo de Negocio (contrato)
     * @return  Lista de perId's
     **/
    public findPerIdUsuario(tConId: number): number[] {
        const lstPerId: number[] = [];

        this.clavesLegadas.forEach(clavePromLegadoVO => {
            if (tConId == clavePromLegadoVO.tconId && !lstPerId.includes(clavePromLegadoVO.idVO.perId)) {
                lstPerId.push(clavePromLegadoVO.idVO.perId);
            }
        });
        this.clavesLegadasAsisto.forEach(clavePromLegadoVO => {
            if (tConId == clavePromLegadoVO.tconId && !lstPerId.includes(clavePromLegadoVO.idVO.perId)) {
                lstPerId.push(clavePromLegadoVO.idVO.perId);
            }
        });
        this.clavesLegadasMiEquipo.forEach(clavePromLegadoVO => {
            if (tConId == clavePromLegadoVO.tconId && !lstPerId.includes(clavePromLegadoVO.idVO.perId)) {
                lstPerId.push(clavePromLegadoVO.idVO.perId);
            }
        });
        return lstPerId;
    }

    /**
     * Se elimina informacion que no sera utilizada en los servicios, esto se hace
     *      con la finalidad de mejorar los tiempos al pasar la informacion entre las capas
     **/
    public cleanInfoToSend(): void {
        this.listaEjecutivosSoyAsistente = [];
        this.listaCCG = [];
        this.listaCCR = [];
        this.usuEquipamiento = [];
        this.clavesLegadasAsisto = [];
        this.clavesLegadasMiEquipo = [];
        this.clavesLegadasGpo = [];
    }

    
  /*************************************************/
  /* ***** Metodos migrados a UsuarioUtil.ts ***** */
  /* ** Eliminar Codigo al final del desarrollo ** */
  /*************************************************/
  // /**
  //  * Constante o llave para identificar en el objeto InfoClvPromLegadoDivisas 
  //  * la Lista de claves legadas de divisas
  //  */
  // public static readonly LST_CLV_PROM_LEG = 'LST_CLV_PROM_LEG';
  // /**
  //  * Constante o llave para identificar en el objeto InfoClvPromLegadoDivisas 
  //  * la Clave legada por default para divisas
  //  */
  // public static readonly CLV_PROM_LEG_DEFAULT = 'CLV_PROM_LEG_DEFAULT'
  // /**
  //  * Constante o llave para identificar en el objeto InfoClvPromLegadoDivisas 
  //  * la posicion de la clave legada por default para divisas en la lista de claves legadas 
  //  */
  // public static readonly POS_CLV_PROM_LEG_DEFAULT = 'POS_CLV_PROM_LEG_DEFAULT'

  // /**
  //  * Obtiene la lista de claves legadas y la clave legada por default con la que opera el promotor 
  //  *      las operaciones de divisas. Tambien la pocision de la clave legada establecida por default en 
  //  *      el arreglo de claves legadas.
  //  *  Si el promotor tiene asignada la clave legada para operar Divisas-Banco, 
  //  *      esa serÃ¡ la que se establezaca por default, de lo contrario serÃ¡ la de Divisas-Casa de Bolsa.
  //  * 
  //  * @return Object {LST_CLV_PROM_LEG: Lista de claves legadas para operad divisas, 
  //  *                 POS_CLV_PROM_LEG_DEFAULT: Posicion de la clave legada establecida por default en 
  //  *                      el arreglo de claves legadas.
  //  *                 CLV_PROM_LEG_DEFAULT: Clave legada por defaul.
  //  *                 }
  //  */
  // public getInfoClvPromLegadoDivisas(): any {
  //   const lstClvPromLegado: ClavePromLegadoVO[] = [];
  //   let clavePromLegadoCasaBolsa: ClavePromLegadoVO = null;
  //   let clavePromLegadoBanco: ClavePromLegadoVO = null;
  //   let posClvPromLegDefault = 0;
  //   let cont = 0;
  //   this.clavesLegadas.forEach(clavePromLegadoVO => {
  //     if (Const.TCON_CASA_CAMBIOS == clavePromLegadoVO.tconId || Const.TCON_DIVISAS_BANCO == clavePromLegadoVO.tconId) {
  //       lstClvPromLegado.push(clavePromLegadoVO);
  //       if (Const.TCON_CASA_CAMBIOS == clavePromLegadoVO.tconId && clavePromLegadoVO.cplDefault) {
  //         clavePromLegadoCasaBolsa = clavePromLegadoVO;
  //         posClvPromLegDefault = cont;
  //       } else if (Const.TCON_DIVISAS_BANCO == clavePromLegadoVO.tconId && clavePromLegadoVO.cplDefault) {
  //         clavePromLegadoBanco = clavePromLegadoVO;
  //         posClvPromLegDefault = cont;
  //       }
  //       ++cont;
  //     }
  //   })

  //   return {
  //     LST_CLV_PROM_LEG: lstClvPromLegado, POS_CLV_PROM_LEG_DEFAULT: posClvPromLegDefault,
  //     CLV_PROM_LEG_DEFAULT: clavePromLegadoBanco == null ? clavePromLegadoCasaBolsa : clavePromLegadoBanco
  //   };
  // }

  // /**
  //  * Valida que el usuario tenga asignado el grupo determinado por nombreGpo y
  //  * que el ori-pro de su clave legada corresponda a la que se establece en el parÃ¡metro oriPro.
  //  *       EJEMPLO: validar si el usuario opera 'CHEQUES DEVUELTOS' y su oriPro es 'ROAL'
  //  *                   para la clave legada con que esta operando.
  //  *
  //  * @param nombreGpo  Nombre del grupo que debe tener asignado el usuario
  //  * @param clvPromLeg Clave legada a buscar en la lista
  //  * @param oriPro     Origen del promotor que debe tener asignado.
  //  *
  //  * @return
  //  *       TRUE si el usuario tiene asignado el grupo nombreGpo y el oriPro de su calve legada clvPromLeg es oriPro
  //  *       FALSE, en cualquier otor caso.
  //  */
  // public operarGrupoOriPro(nombreGpo: String, clvPromLeg: String, oriPro: String): Boolean {
  //   return this.hasGrupo([nombreGpo]) &&
  //       (StringUtil.trim(getClvLegada(clavesLegadas, clvPromLeg).oriPro) == oriPro);
  // }

  // acceso con alguno de estos grupos
//   public hasGrupo(str: string[]): boolean {
//     let grupo: string = null;
//     if (this.gruposVO != null) {
//       for (let j = 0; j < str.length; j++) {
//         grupo = str[j];
//         for (let i = 0; i < this.gruposVO.length; i++) {
//           if (this.gruposVO[i].gpoNombre == grupo) {
//             return true;
//           }
//         }
//       }
//     }
//     return false;
//   }

  // /**
  //  * Recupera una clave legada de la lista de claves legadas (lstClvLegadas) correspondiente a la clvLegada dada.
  //  * @param lstClvLegadas   Lista de claves legadas donde buscar
  //  * @param clvLegada       Clave legada a buscar en la lista
  //  * @return el objeto ClavePromLegadoVO de la lista de claves legadas (lstClvLegadas) correspondiente a
  //  *         la clvPro igual al valor dado en clvLegada.
  //  *   NOTA: Si no encuentra la clave legada en la lista, regresa null.
  //  */
  // public getClvLegada(lstClvLegadas: ArrayCollection, clvLegada: String): ClavePromLegadoVO {
  //   var clvPromLegadoVO: ClavePromLegadoVO = null;
  //   var posicion: number = 0;
  //   while (clvPromLegadoVO == null && lstClvLegadas != null && lstClvLegadas.length > posicion++) {
  //     clvPromLegadoVO = StringUtil.trim(clvLegada) ==
  //       StringUtil.trim(lstClvLegadas.getItemAt(posicion - 1).idVO.clvPro) ?
  //       ClavePromLegadoVO(lstClvLegadas.getItemAt(posicion - 1)) : null;
  //   }
  //   return clvPromLegadoVO;
  // }

}
