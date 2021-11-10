import { PerfilLegadoIdVO } from './PerfilLegadoIdVO';

	export class PerfilLegadoVO
	{
		public  idVO:PerfilLegadoIdVO;
		public  sisId:number;
		public  sisNombre: string;
		public  estatus:boolean;
		
		// SICA
		public  cl1Gru:number;
		public  cl2Gru:number;
		public  porPro:number;
		public  ex2Pro:number;
		public  staPro:number;
		public  sicaUnificar:boolean;
		public  clvSucSica: string;
		
		// SIDE
		public   tpUsuario:number;
		public   cdGrupo:number;
		// SABI
		public   perfil: string;
		public   carac: string;
		public   division: string;
		public   promotor: string;
		public   promoDivision: any[];
		
		// SIIF
		public   nivelPromotorId:number;
		public   nivelId:number;
		public   siifAutorizado:boolean;
		public   siifPromoDesc: string;
		
		// usuario
		public   usuId:number;
	    public   usuClave: string;
	    public   usuEmail: string;
	    public   usuEstatus: string;
	    public   perNomCorto: string;
    	public   apepat: string;
		public   apemat: string;
		public   nombre: string;
		public   sucSica: string;
		public   cveTra: string;
		public   cvecia:number;
		public   usuAutoriza: string;
		public   usuObservaciones: string;
		public   cveubi:number;
		
		//LUMINA
		/**
		 * Permiso CNBV
		 */
		public  asoCveCnbv :  string;
		/**
		 * Numero de notario
		 */
		public  asoNumNot : number;
		/**
		 * Nombre de notario
		 */
		public  asoNomNot :  string;
		/**
		 * Numero de escritura
		 */
		public  asoNumEsc :  string;
		/**
		 * Fecha de escritura
		 */
		public  asoFecEscStr :  string;
		/**
		 * Plaza
		 */
		public  asoPlazaEsc :  string;
		/**
		 * Sentra ID
		 */
		public  asoSentraId :  string;
		/**
		 * Limite de compra
		 */
		public  asoLimiteCompra : number;
		/**
		 * Limite de venta
		 */
		public  asoLimiteVenta : number;
		/**
		 * Perfil de operador
		 */
		public  asoPerfilOperador :  string;
    
	   /**
	     * this is really important to avoid duplicity 
	     */  
	    public toString() :  string
	    {
	    	return this.sisId + ',' + this.idVO.toString();
	    }
}