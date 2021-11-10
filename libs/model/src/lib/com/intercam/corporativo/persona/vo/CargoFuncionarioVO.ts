
	
	export class CargoFuncionarioVO{
	    public   cfuId :          Number;  // Id de la tabla i00CargoFuncionario
	    public   cfuDescripcion : String;  // Descripcion del cargo
	    public   cfuTipo:         String;  // Tipo de funcionario (AC, FU, CA)
		
		/**
	    * Constructor de la clase.
	    */
	    public  CargoFuncionarioVO(){
	        this.cfuId = 0;
	    	this.cfuDescripcion = "";
	    	this.cfuTipo = "";
	    }
	}
