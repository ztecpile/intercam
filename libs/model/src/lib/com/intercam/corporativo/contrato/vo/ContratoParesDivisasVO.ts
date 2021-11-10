import { ContratoParesDivisasIdVO } from "./ContratoParesDivisasIdVO";
import { DivisasReutersVO } from "./DivisasReutersVO";

	export class ContratoParesDivisasVO
	{
	public  idVO:ContratoParesDivisasIdVO;
	public  divisasReutersVO:DivisasReutersVO;
	public  conPardivFaltaStr:String;
	public  usuUsuario:String;
	public  conDivStatus:String;
	public  conDivStatusStr:String;
	
		public constructor(){
			this.divisasReutersVO = new DivisasReutersVO();
		}
	}
