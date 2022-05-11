import { ClavePromLegadoVO } from "../seguridad/vo/ClavePromLegadoVO";
import { GrupoVO } from "../seguridad/vo/GrupoVO";
import { UsuarioVO } from "../seguridad/vo/UsuarioVO";
import { Const } from "./Const";

export class UsuarioUtil {
  /**
   * Constante o llave para identificar en el objeto InfoClvPromLegadoDivisas 
   * la Lista de claves legadas de divisas
   */
  public static readonly LST_CLV_PROM_LEG = 'LST_CLV_PROM_LEG';
  /**
   * Constante o llave para identificar en el objeto InfoClvPromLegadoDivisas 
   * la Clave legada por default para divisas
   */
  public static readonly CLV_PROM_LEG_DEFAULT = 'CLV_PROM_LEG_DEFAULT'
  /**
   * Constante o llave para identificar en el objeto InfoClvPromLegadoDivisas 
   * la posicion de la clave legada por default para divisas en la lista de claves legadas 
   */
  public static readonly POS_CLV_PROM_LEG_DEFAULT = 'POS_CLV_PROM_LEG_DEFAULT'

  
  /**
    * Obtiene la lista de claves legadas y la clave legada por default con la que opera el promotor 
    *      las operaciones de divisas. Tambien la pocision de la clave legada establecida por default en 
    *      el arreglo de claves legadas.
    *  Si el promotor tiene asignada la clave legada para operar Divisas-Banco, 
    *      esa serÃ¡ la que se establezaca por default, de lo contrario serÃ¡ la de Divisas-Casa de Bolsa.
    * 
    * @return Object {LST_CLV_PROM_LEG: Lista de claves legadas para operad divisas, 
    *                 POS_CLV_PROM_LEG_DEFAULT: Posicion de la clave legada establecida por default en 
    *                      el arreglo de claves legadas.
    *                 CLV_PROM_LEG_DEFAULT: Clave legada por defaul.
    *                 }
    */
  public static getInfoClvPromLegadoDivisas(clavesLegadas: ClavePromLegadoVO[]): any {
    const lstClvPromLegado: ClavePromLegadoVO[] = [];
    let clavePromLegadoCasaBolsa: ClavePromLegadoVO = null;
    let clavePromLegadoBanco: ClavePromLegadoVO = null;
    let posClvPromLegDefault = 0;
    let cont = 0;
    clavesLegadas.forEach(clavePromLegadoVO => {
      if (Const.TCON_CASA_CAMBIOS == clavePromLegadoVO.tconId || Const.TCON_DIVISAS_BANCO == clavePromLegadoVO.tconId) {
        lstClvPromLegado.push(clavePromLegadoVO);
        if (Const.TCON_CASA_CAMBIOS == clavePromLegadoVO.tconId && clavePromLegadoVO.cplDefault) {
          clavePromLegadoCasaBolsa = clavePromLegadoVO;
          posClvPromLegDefault = cont;
        } else if (Const.TCON_DIVISAS_BANCO == clavePromLegadoVO.tconId && clavePromLegadoVO.cplDefault) {
          clavePromLegadoBanco = clavePromLegadoVO;
          posClvPromLegDefault = cont;
        }
        ++cont;
      }
    })

    return {
      LST_CLV_PROM_LEG: lstClvPromLegado, POS_CLV_PROM_LEG_DEFAULT: posClvPromLegDefault,
      CLV_PROM_LEG_DEFAULT: clavePromLegadoBanco == null ? clavePromLegadoCasaBolsa : clavePromLegadoBanco
    };
  }

  /**
     * Valida que el usuario tenga asignado el grupo determinado por nombreGpo y 
     * que el ori-pro de su clave legada corresponda a la que se establece en el parÃ¡metro oriPro.
     *       EJEMPLO: validar si el usuario opera 'CHEQUES DEVUELTOS' y su oriPro es 'ROAL' 
     *                   para la clave legada con que esta operando. 
     * 
     * @param nombreGpo  Nombre del grupo que debe tener asignado el usuario
     * @param clvPromLeg Clave legada a buscar en la lista
     * @param oriPro     Origen del promotor que debe tener asignado.
     * @param usuarioVO  Informacion del UsuarioVO a validar
     * 
     * @return 
     *       TRUE si el usuario tiene asignado el grupo nombreGpo y el oriPro de su calve legada clvPromLeg es oriPro
     *       FALSE, en cualquier otor caso.
     */
  public static operarGrupoOriPro(nombreGpo: string, clvPromLeg: string, oriPro: string, 
    usuarioVO: UsuarioVO): boolean {
      let arrGrupos: string[] = [nombreGpo];
      return this.hasGrupo(arrGrupos, usuarioVO) &&
        (this.getClvLegada(usuarioVO.clavesLegadas, clvPromLeg).oriPro).trim() === oriPro;
  }

  /**
   * Valida si el usuario tinene acceso con alguno de los grupos
   * @param arrGrupos Lista de grupos 
   * @param usuarioVO Informacion del Usuario a validar
   * @returns 
   */
  public static hasGrupo(arrGrupos: string[], usuarioVO: UsuarioVO): boolean {
    let grupo: string = null;
    if (usuarioVO.gruposVO != null) {
      for (let j = 0; j < arrGrupos.length; j++) {
        grupo = arrGrupos[j];
        for (let i = 0; i < usuarioVO.gruposVO.length; i++) {
          if (usuarioVO.gruposVO[i].gpoNombre == grupo) {
            return true;
          }
        }
      }
    }
    return false;
  }

  /**
   * Recupera una clave legada de la lista de claves legadas (lstClvLegadas) correspondiente a la clvLegada dada.
   * @param lstClvLegadas   Lista de claves legadas donde buscar
   * @param clvLegada       Clave legada a buscar en la lista
   * @return el objeto ClavePromLegadoVO de la lista de claves legadas (lstClvLegadas) correspondiente a
   *         la clvPro igual al valor dado en clvLegada.
   *   NOTA: Si no encuentra la clave legada en la lista, regresa null.
   */
  public static getClvLegada(lstClvLegadas: ClavePromLegadoVO[], clvLegada: String): ClavePromLegadoVO {
    var clvPromLegadoVO: ClavePromLegadoVO = null;
    var posicion: number = 0;

    while (clvPromLegadoVO == null && lstClvLegadas != null && lstClvLegadas.length > posicion++) {
      clvPromLegadoVO = clvLegada.trim() ===
        lstClvLegadas[posicion - 1].idVO.clvPro.trim() ?
        lstClvLegadas[posicion - 1] : null;
    }
    return clvPromLegadoVO;
  }

  // acceso con alguno de estos grupos
  public static getGpuClaves(gpos: number[], usuarioVO: UsuarioVO): number[] {
    const claves: number[] = [];
    let grupo = 0;
    if (usuarioVO.gruposVO !== undefined && usuarioVO.gruposVO !== null) {
      for (let i = 0; i < usuarioVO.gruposVO.length; i++) {
        grupo = usuarioVO.gruposVO[i].gpoClave;

        for (let j = 0; j < gpos.length; j++) {
          if (Number(gpos[j]) === grupo) {
            claves.push(grupo);
          }
        }
      }
    }
    return claves;
  }

  /**
  * Obtiene la lista de todas las claves legadas para los contratos de Cambios
  */
  public static findClvPromLegadoCambios(clavesLegadas:ClavePromLegadoVO[], clavesLegadasAsisto:ClavePromLegadoVO[],
    clavesLegadasMiEquipo:ClavePromLegadoVO[]): ClavePromLegadoVO[] {
    const lstClavePromLegadoVO: ClavePromLegadoVO[] = [];
    clavesLegadas.forEach(clavePromLegadoVO => {
        if (Const.TCON_CASA_CAMBIOS == clavePromLegadoVO.tconId || Const.TCON_DIVISAS_BANCO == clavePromLegadoVO.tconId) {
            lstClavePromLegadoVO.push(clavePromLegadoVO);
        }
    });

    clavesLegadasAsisto.forEach(clavePromLegadoVO => {
        if (Const.TCON_CASA_CAMBIOS == clavePromLegadoVO.tconId || Const.TCON_DIVISAS_BANCO == clavePromLegadoVO.tconId) {
            lstClavePromLegadoVO.push(clavePromLegadoVO);
        }
    });
    clavesLegadasMiEquipo.forEach(clavePromLegadoVO => {
        if (Const.TCON_CASA_CAMBIOS == clavePromLegadoVO.tconId || Const.TCON_DIVISAS_BANCO == clavePromLegadoVO.tconId) {
            lstClavePromLegadoVO.push(clavePromLegadoVO);
        }
    });
    return lstClavePromLegadoVO;
  }

  /**
   * Obtiene las claves legadas de acuerdo al tipo de negocio
   * @param tconId Identificador del tipo negocio
   * @param usuarioVO 
   * @return Las clave legadas de un tipo negocio
   * 
   */
  public static findClaves(tconId: number, usuarioVO: UsuarioVO): ClavePromLegadoVO[] {
    let claves: ClavePromLegadoVO[] = null;
    if (usuarioVO.clavesLegadas != null) {
      claves = [];
      for (let i = 0; i < usuarioVO.clavesLegadas.length; i++) {
        if (usuarioVO.clavesLegadas[i].tconId == tconId) {
          claves.push(usuarioVO.clavesLegadas[i]);
        }
      }
    }
    return claves;
  }
  
} // Termina la clase