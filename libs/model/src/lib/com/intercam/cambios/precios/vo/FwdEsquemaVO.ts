/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

import { PlazoForwardVO } from "./PlazoForwardVO";

export class FwdEsquemaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Identificador de la mesa que opera 
     **/
    cveMesa: number;
    /**
     * Identificador de la divisa
     */
    divId: string;
    /**
     * Objeto con los datos del plazo a administrar
     **/
    plazoForwardVO: PlazoForwardVO;
    /**
     * Dias correspondientes al plazo
     **/
    plazoDias: number;
    /**
     * Clave del usuario
     **/
    usuUsuario: string;
    /**
     * Fecha del dia en que se edito
     **/
    fwdFecha: Date;
    /**
     * Puntos spread que restarán a la compra
     **/
    fwdSpreadCompra: number;
    /**
     * Puntos spread que se sumarán a la venta
     **/
    fwdSpreadVenta: number;
    /**
     * Porcentaje de precio limite configurado para operación
     **/
    fwdPrecioLimite: number;
    /**
     * Cantidad mínima en la divisa para la operación 
     **/
    fwdMontoMin: number;
    /**
     * Cantidad máxima en la divisa para la operación
     **/
    fwdMontoMax: number;

    /*----------------Campos Adicionales Pantalla Forwards----------------*/
    /**
     * Campo puntos forward para la compra
     **/
    ptoCompra: number;
    /**
     * Campo puntos forward para la venta
     **/
    ptoVenta: number;
    /**
     * Tipo Compra calculado para mostrar en la pantalla
     **/
    tipoCompra: number;
    /**
     * Tipo Venta calculado para mostrar en la pantalla
     **/
    tipoVenta: number;
    /**
     * Campo puntos forward para la compra originales de Reuters sin spread mesa
     **/
    ptoCompraOrg: number;
    /**
     * Campo puntos forward para la venta originales de Reuters sin spread mesa
     **/
    ptoVentaOrg: number;
    /**
     * Campo TipoCambio SPOT Compra (solo para SP) 
     **/
    tfTcCompra: number;
    /**
     * Campo TipoCambio SPOT Compra (solo para SP) 
     **/
    tfTcVenta: number;
    /*----------------Campos Adicionales Pantalla Forwards----------------*/


    // ***************************************************** //
    //  Constructor de la clase
    // ***************************************************** //
    constructor() {
        this.cveMesa = 0;
        this.divId = '';
        this.plazoForwardVO = null;
        this.plazoDias = 0;
        this.usuUsuario = '';
        this.fwdFecha = null;
        this.fwdSpreadCompra = 0;
        this.fwdSpreadVenta = 0;
        this.fwdPrecioLimite = 0;
        this.fwdMontoMin = 0;
        this.fwdMontoMax = 0;

        //Campos pantalla
        this.ptoCompra = 0;
        this.ptoVenta = 0;
        this.tipoCompra = 0;
        this.tipoVenta = 0;
        this.ptoCompraOrg = 0;
        this.ptoVentaOrg = 0;
        this.tfTcCompra = 0;
        this.tfTcVenta = 0;
    }

}