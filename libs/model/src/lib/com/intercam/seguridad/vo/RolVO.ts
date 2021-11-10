import { SistemaVO } from './SistemaVO';
import { TipoRolVO } from './TipoRolVO';

export class RolVO {
    public rolId: number;
    public sistemaVO: SistemaVO;
    public rolDescripcion: string;
    public tipoRolVO: TipoRolVO;
    public rolStatus: boolean;
    public rolDejaLog: boolean;
    public rolRestringeHora: boolean;
    public rolHinicioStr: string;
    public rolHfinStr: string;
    public rolOperaInhabil: boolean;
    public rolNombre: string;
    public rolPideConf: boolean;
    public prcEtiquetaEs: string;
    public prcEtiquetaEn: string;
    public prcAyudaEs: string;
    public prcAyudaEn: string;
    public prcOrden: string;
    public prcUrl: string;
    public tconId: number;
    public porCliente: boolean;
    public popUp: boolean;
    public rolHinicioInhabilStr: string;
    public rolHfinInhabilStr: string;
    public prcIcono: string;
    public prcDescrip: string;

    /**
     * Bandera para indicar si el rol requiere que se resuelva el cuestionario de seguridad 
     * usado para permitir operar con cuenta del cliente en Banca por telefono.
     */
    public reqCuestioSeguri: boolean;
    /**
     * Constructor de la clase.
     */
    public constructor() {
        this.rolDescripcion = '';
        this.rolStatus = true;
        this.rolDejaLog = false;
        this.rolRestringeHora = false;
        this.rolOperaInhabil = false;
        this.rolPideConf = false;
        this.rolNombre = '';
        this.prcEtiquetaEs = '';
        this.prcEtiquetaEn = '';
        this.prcAyudaEs = '';
        this.prcAyudaEn = '';
        this.prcOrden = '';
        this.prcUrl = '';
        this.prcIcono = '';
        // this.rolHinicioStr = ModelUtil.dateTimeToString(new Date('01/01/2005 00:00'));
        // this.rolHfinStr = ModelUtil.dateTimeToString(new Date('01/01/2005 00:00'));
        // this.rolHinicioInhabilStr = ModelUtil.dateTimeToString(new Date('01/01/2005 00:00'));
        // this.rolHfinInhabilStr = ModelUtil.dateTimeToString(new Date('01/01/2005 00:00'));
        this.sistemaVO = new SistemaVO();
        this.tipoRolVO = new TipoRolVO();
        this.porCliente = false;
        this.popUp = false;
        this.reqCuestioSeguri = false;
        this.prcDescrip = '';
    }

}