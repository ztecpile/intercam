package com.intercam.corporativo.prospeccion.vo
{
	/**
	 * @author ocruz
	 */
	[Managed]
	[RemoteClass(alias="com.intercam.corporativo.prospeccion.vo.ManagerCiaVO")]
	public class ManagerCiaVO
	{
		public var macId : Number;
		public var ciaId : Number;
		public var manId : Number;
		
		//Constructor
		public function ManagerCiaVO()
		{
			super();
		}
	}	
}