import { TipoTelefonoVO } from "./TipoTelefonoVO";

	export class TelefonoVO
	{
		public  telefonoId : number;
		public  telefonoNumero : string;
		public  tipoTelefonoVO : TipoTelefonoVO;
		public  telefonoExt : string;
		public  telefonoEstatus : boolean;
		public  personaId : number;
		public  telFechaAltaStr : string;
		public  usuUsuario : string;
		public  telConsecLegado : number;
		public  telEsRepetitiva : boolean;
		
		public  constructor()
		{
			this.telefonoNumero = null;
			this.telefonoExt = null;
			this.telefonoEstatus = true;
			this.usuUsuario = null;
			//this.telFechaAltaStr = ModelUtil.dateTimeTostring( new Date());
			this.tipoTelefonoVO = new TipoTelefonoVO();
			this.telConsecLegado=0;
			this.telEsRepetitiva = false;
		}
		
		public  toString():string{
		    return this.telefonoId.toString();
		}
	}
