import { ContratoParesDivisasIdVO } from "./ContratoParesDivisasIdVO";
import { DivisasReutersVO } from "./DivisasReutersVO";

	export class ContratoParesDivisasVO
	{
	public  idVO:ContratoParesDivisasIdVO;
	public  divisasReutersVO:DivisasReutersVO;
	public  conPardivFaltaStr:string;
	public  usuUsuario:string;
	public  conDivStatus:string;
	public  conDivStatusStr:string;
	
		public constructor(){
			this.divisasReutersVO = new DivisasReutersVO();
		}
	}
