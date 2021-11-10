import { PepsIdVO } from "./PepsIdVO";
import { TipoRelVO } from "./TipoRelVO";

	export class PepsVO
	{
		public  idVO : PepsIdVO;
		public  paiNacimiento : Number;
	    public  paiDireccion : Number;
	    public  tipoRelVO : TipoRelVO;
	    public  pepNombre : String;
	    public  pepRfc : String;
	    public  pepFnacimientoStr : String;
	    public  pepEstatus : Boolean;
	    public  pepDependencia : String;
	    public  pepPuesto : String;
		public  pepFupNumero : String;
	    public  pepPeriodo : String;
	    public  pepCalle : String;
	    public  pepNumint : String;
	    public  pepNumext : String;
	    public  pepCodigoPostal : String;
	    public  pepColonia : String;
	    public  pepMunicipio : String;
	    public  pepEntidad : String;
	    public  tieneSociedades : Boolean;
	    public  pepConsecLegado : Number;
	    
	    public  pepPaterno : String;
	    public  pepMaterno : String;
	    public  pepCurp : String;
	    public  pepTelefono : String;
	    
	    public  pepPeriodoAStr : String;
	    public  pepPeriodoDeStr : String;
	     
	    public  pepUltimo : Number;

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
	    
	    public  toString() : String
	    {
	    	return this.idVO.toString();
	    }
	}
