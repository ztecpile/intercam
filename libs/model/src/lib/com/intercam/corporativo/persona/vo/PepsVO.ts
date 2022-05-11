import { PepsIdVO } from "./PepsIdVO";
import { TipoRelVO } from "./TipoRelVO";

	export class PepsVO
	{
		public  idVO : PepsIdVO;
		public  paiNacimiento : number;
	    public  paiDireccion : number;
	    public  tipoRelVO : TipoRelVO;
	    public  pepNombre : string;
	    public  pepRfc : string;
	    public  pepFnacimientoStr : string;
	    public  pepEstatus : boolean;
	    public  pepDependencia : string;
	    public  pepPuesto : string;
		public  pepFupNumero : string;
	    public  pepPeriodo : string;
	    public  pepCalle : string;
	    public  pepNumint : string;
	    public  pepNumext : string;
	    public  pepCodigoPostal : string;
	    public  pepColonia : string;
	    public  pepMunicipio : string;
	    public  pepEntidad : string;
	    public  tieneSociedades : boolean;
	    public  pepConsecLegado : number;
	    
	    public  pepPaterno : string;
	    public  pepMaterno : string;
	    public  pepCurp : string;
	    public  pepTelefono : string;
	    
	    public  pepPeriodoAStr : string;
	    public  pepPeriodoDeStr : string;
	     
	    public  pepUltimo : number;

		/**
	     * Constructor de la clase.
	     */
	    public  PepsVO()
	    {
	    	this.idVO = new PepsIdVO()
	    	this.tipoRelVO = new TipoRelVO();
	    	this.pepNombre = '';
	    	this.pepRfc = '';
	    	this.pepEstatus = false;
	    	this.pepDependencia = '';
	    	this.pepPuesto = '';
	    	this.pepPeriodo = '';
	    	this.pepCalle = '';
	    	this.pepNumint = '';
	    	this.pepNumext = '';
	    	this.pepCodigoPostal = '';
	    	this.pepColonia = '';
	    	this.pepMunicipio = '';
	    	this.pepEntidad = '';
	    	this.tieneSociedades = false;
	    	this.pepConsecLegado = 0;
	    	this.pepUltimo=0;	    	
	    	this.pepFnacimientoStr  = '';
	    	this.pepPeriodoAStr = '';
	    	this.pepPeriodoDeStr = '';
	    }
	    
	    public  toString() : string
	    {
	    	return this.idVO.toString();
	    }
	}
