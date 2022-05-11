import { AlertaAnalisis, AlertaAnalisisContrato, AlertaAnalisisMaster, CasoAnalisisVO, PersonaVO } from "@intercam/model";

export class AlertaAnalisisTransaccion{
    constructor(

		public selectTxn: boolean = false,
		public idAnalisis?: number,
		
		public traConsec?: number,
		public traAnio?: number,
		public traMes?: number,
		public traTcon?: number,
		public traCon?: string,
		public traFolio?: string,
		public traTtran?: string,
		public traDesttran?: string,
		public traReferen?: string,
		public traMonto?: number,
		public traMontomxn?: number,
		public traNaturaleza?: string,
		public traFecha?: Date,
		public traSucursal?: string,
		public traFpago?: string,
		public traDivisa?: string,
		public traBenef?: string,
		public traOrdenante?: string,
		public traCtadestino?: string,
		public traPorigen?: string,
		public traDesporigen?: string,
		public traPdestino?: string,
		public traDespdestino?: string,
		public traRporigen?: string,
		public traRpdestino?: string,
		public traBanco?: string,
		public traSwiftAbba?: string,
		public traInstliquid?: number,
		public traTipoorden?: number,
		public traOrigen?: string,
		public traFecaact?: string,
		public traLegada?: string,
		public trpBenefi?: string,
		
		
		public traObserva?: string,
		public traFhAltaOpe?: Date,
		public traConceptoEnvio?: string


		

    ){}

}