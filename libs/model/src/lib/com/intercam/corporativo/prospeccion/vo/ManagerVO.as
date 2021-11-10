package com.intercam.corporativo.prospeccion.vo
{
	import mx.collections.ArrayCollection;

	/**
	 * @author ocruz
	 */
	[Managed]
	[RemoteClass(alias="com.intercam.corporativo.prospeccion.vo.ManagerVO")]
	public class ManagerVO
	{
		public var manId : Number;
		public var cmaId : Number;
		public var perId : Number;
		public var ccoClave : Number;
		public var perNomCorto : String;
		public var cmaDescripcion : String;
		public var managerCia : ArrayCollection;
		public var cvetra : String;
		public var cvepue : String;
		
		//Constructor
		public function ManagerVO()
		{			
			super();
			managerCia = new ArrayCollection();
		}		
	}	
}