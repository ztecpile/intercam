
	export class TipoUsuarioVO {
		public ccnClave : number;
	    public ccnDescrip : string;
	    
	    public toString():string{
			const s = '[\n' + this.ccnClave + ']';
			return s;
	    }
	}
	