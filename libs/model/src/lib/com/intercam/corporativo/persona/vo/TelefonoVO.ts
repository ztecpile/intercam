import { TipoTelefonoVO } from "./TipoTelefonoVO";

	export class TelefonoVO
	{
		public  telefonoId : Number;
		public  telefonoNumero : String;
		public  tipoTelefonoVO : TipoTelefonoVO;
		public  telefonoExt : String;
		public  telefonoEstatus : Boolean;
		public  personaId : Number;
		public  telFechaAltaStr : String;
		public  usuUsuario : String;
		public  telConsecLegado : Number;
		public  telEsRepetitiva : Boolean;
		
		public  constructor()
		{
			this.telefonoNumero = null;
			this.telefonoExt = null;
			this.telefonoEstatus = true;
			this.usuUsuario = null;
			//this.telFechaAltaStr = ModelUtil.dateTimeToString( new Date());
			this.tipoTelefonoVO = new TipoTelefonoVO();
			this.telConsecLegado=0;
			this.telEsRepetitiva = false;
		}
		
		public  toString():String{
		    return this.telefonoId.toString();
		}
	}
