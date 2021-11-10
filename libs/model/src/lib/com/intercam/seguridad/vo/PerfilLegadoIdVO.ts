
	export class PerfilLegadoIdVO 
	{
	    public clvPro:string;
	    public clvSuc:string;
	    public perId:number;
	   /**
	     * Obtiene la representación String del objeto.
	     */  
	    public toString() : string {
	    	return this.clvPro + ',' + this.clvSuc + ',' + this.perId ;
	    }
}