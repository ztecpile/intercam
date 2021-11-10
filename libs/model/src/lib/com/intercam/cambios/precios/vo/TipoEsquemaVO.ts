/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

import { FechaValorVO } from "../../vo/FechaValorVO";
import { TipoFvalorActivaVO } from "./TipoFvalorActivaVO";
import { TipoSpreadVO } from "./TipoSpreadVO";
import { TipoTasaFwdVO } from "./TipoTasaFwdVO";

export class TipoEsquemaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Almacena Identificador del Tipo de Esquema.
     **/
    public teId: number;

    /**
     * Almacena Identificador clave de la Mesa.
     **/
    public cveMesa: number;

    /**
     * Almacena Identificador de la divisa.
     **/
    public divId: string;

    /**
     * Almacena Clave del usuario.
     **/
    public usuUsuario: string;

    /**
     * Almacena Fecha de registro.
     **/
    public teFecha: Date;

    /**
     * Almacena Tipo de cambio base, compra(C)/venta(V).
     **/
    public teTcambioBase: string;

    /**
     * Almacena Spread minimo.
     **/
    public teSpreadMinimo: number;

    /**
     * Almacena Puntos de variacion.
     **/
    public teConfVariacion: number;

    /**
     * Almacena Puntos variacion spread.
     **/
    public teConfSpread: number;

    /**
     * Almacena Tipo de esquema Manual(M)/Automatico(A).
     **/
    public teEsquema: string;

    /**
     * Almacena Tipo cambio Compra Manual.
     **/
    public teTcambioCompra: number;

    /**
     * Almacena Tipo cambio Venta Manual.
     **/
    public teTcambioVenta: number;

    /**
     * Almacena Conjunto de spread configurados para 48 hrs.
     **/
    public spreadsVO: Array<TipoSpreadVO>;

    /**
     * Almacena Conjunto de tasas forward por fecha valor.
     **/
    public tasasVO: Array<TipoTasaFwdVO>;

    /**
     * Almacena Configuraciones que activan(1)/desactivan(0) los tipos por fecha e instrumento.
     **/
    public fechasActivasVO: Array<TipoFvalorActivaVO>;

    /**
     * Indica mediante propiedad fvaHabilEU si la fecha valor 
     * es habil(1)/inhabil(0) para la publicacion de los tipos
     * solo para proceso calculo no se guarda en B.D
     **/
    public fechasHabil: Array<FechaValorVO>;

    /**
     * Almacena indicador si esta activada(1)/desactivada(0) la config. de dias inhabiles      
     **/
    public teDiaInhabil: number;


    //-----------------------------
    // FIX-engine
    //-----------------------------

    /**
     * Almacena la peticion de la conexi&oacute;n de la mesa.
     **/
    public actionRequest: string;

    /**
     * Almacena el estatus de la solicitud de la conexi&oacute;n de la mesa.
     **/
    public stateRequest: string;

    /**
     * Almacena horario activo configurado, "N" Normal; "P" Panico.
     **/
    public teHorarioActivo: string;

    /**
     * Almacena puntos adicionales a la compra configurada en pantalla.
     **/
    public tePuntosCompra: number;

    /**
     * Almacena puntos adicionales a la venta configurada en pantalla.
     **/
    public tePuntosVenta: number;

    // ***************************************************** //
    //  Constructor de la clase
    // ***************************************************** //

    constructor() {
        this.teConfSpread = 0;
        this.teConfVariacion = 0;
        this.teDiaInhabil = null;
    }

}