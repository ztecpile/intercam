import { TipoReporteTesoreriaVO } from "./TipoReporteTesoreriaVO";

export class BancoReporteTesoreriaVO {
    constructor(
    public idBancoTesoreria?: number,
    
    /**
     * 
     */
    public empresaId?: number,
    
    /**
     * 
     */
    public descripcionEmpresa?: string,
    
    /**
     * 
     */
    public bancoTesoreria?: string,
    
    /**
     * 
     */
    public descripcionBanco?: string,
    
    /**
     * 
     */
    public divisa?: string,
    
    /**
     * 
     */
    public tipoReporte? : TipoReporteTesoreriaVO, 
    
    /**
     * 
     */
    public estatus?: string,

    /**
	 * 
	 */
    public areaId?: number,
    
    /**
     * 
     */
    public area?: string,
    ) {}
  }
  