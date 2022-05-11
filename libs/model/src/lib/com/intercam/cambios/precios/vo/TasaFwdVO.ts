/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export class TasaFwdVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    tfwId: number;
    periodo: string;
    tasa: number;
    dia: number;
    tasaxdia: number;
    fvaHabilEU: number;
    spread: number;
    diaInhabil:number

    // ***************************************************** //
    //  Constructor de la clase
    // ***************************************************** //
    constructor(tfwId: number, periodo: string, tasa: number, dia: number,
        tasaxdia: number, fvaHabilEU: number,spread: number,diaInhabil:number) {
        this.tfwId = tfwId;
        this.periodo = periodo;
        this.tasa = tasa;
        this.dia = dia;
        this.tasaxdia = tasaxdia;
        this.fvaHabilEU = fvaHabilEU;
        this.spread = spread;
        this.diaInhabil=diaInhabil;
    }

}