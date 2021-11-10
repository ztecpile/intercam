export class PromocionAnticipadoVO {
  constructor(
    /**
     * Clave Promotor
     */
    public clavePromotor?: string,

    /**
     * Nombre del promotor
     */
    public nombrePromotor?: string,

    /**
     * Cl1 Grupo del promotor 1
     */
    public grupoUno?: string,

    /**
     * Cl2 Grupo del promotor 2
     */
    public grupoDos?: string,

    /**
     * Descripcion de Grupo del Promotor
     */
    public descripcionGrupo?: string
  ) {}
}
