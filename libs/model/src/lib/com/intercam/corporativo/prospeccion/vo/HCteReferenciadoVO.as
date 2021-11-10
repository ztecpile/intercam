package com.intercam.corporativo.prospeccion.vo {
	
	[Bindable]
	[RemoteClass(alias="com.intercam.corporativo.referenciacion.vo.HCteReferenciadoVO")]
	/**
	 * 
	 * @author Julio Valencia. 
	 **/
	public class HCteReferenciadoVO {
	//--------------------------------------------------------------------------
	//
	//  Properties
	//
	//--------------------------------------------------------------------------
		
		/**
		 * Almacena Id historico cliente referenciado.
		 **/
		public var hcrId:Number;
		
		/**
		 * Almacena cliente referenciado.
		 **/
		public var cteReferenciadoVO:CteReferenciadoVO;
		
		/**
		 * Almacena estado referenciacion.
		 **/
		public var edoReferenciacionVO:EdoReferenciacionVO;
		
		/**
		 * Almacena fecha.
		 **/
		public var fecha:Date;
		
		/**
		 * Almacena observaciones.
		 **/
		public var hcrObservaciones:String;
		
		/**
		 * Almacena usuario.
		 **/
		public var usuUsuario:String;
		
	//--------------------------------------------------------------------------
	//
	//  Constructor
	//
	//--------------------------------------------------------------------------
		
		/**
		 * Constructor.
		 **/
		public function HCteReferenciadoVO() {
			
		}
		
	}//class
}//package