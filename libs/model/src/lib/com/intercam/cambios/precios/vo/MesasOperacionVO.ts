/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export interface MesasOperacionVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Numero asignado a la mesa
     */
    cveMesa: number;

    /**
     * Clave de la sucursal
     */
    clvSuc: string;

    /**
     * Descripcion de la mesa
     */
    moDescripcion: string;

    /**
     * Tipo de Esquema
     * MATRIZ : Precios iguales a matriz
     * RELACI : Posibilidad de agregar spreads a precios matriz
     */

    moTipoEsquema: string;

    /**
     * Estatus de la mesa
     * AC : Activo
     * SU : Suspendida
     */
    moEstatus: string;

    /**
     * Tipo de productos de los precios de la mesa
     * DIVISAS : Solo mesas de compra y venta de divisas
     * FORWARD : Mesas de derivados
     * MOVIL : Precios mesas banca movil y banca en linea
     */
    moTipoMesa: string;

    /**
     * Indica si la esta mesa necesita publicar precios
     * V Verdadero, Publicara precios
     * F Falso, no publicara precios automaticos
     */
    moPublicaTipos: boolean;

    /**
     * Propiedad para uso de FLEX exclusivamente
     * Clave del promotor
     */
    clvpro: string

    /**
     * Propiedad para uso de FLEX exclusivamente
     * Guarda S o N dependiendo si hubo o no modificacion del esquema
     */
    cambioEsquema: string;

    /**
     * Propiedad para uso de FLEX exclusivamente
     * Clave del usuario
     */
    claveUSuario: string;

}