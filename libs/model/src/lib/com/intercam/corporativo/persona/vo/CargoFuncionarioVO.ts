
	
	export class CargoFuncionarioVO{
	    public   cfuId :          number;  // Id de la tabla i00CargoFuncionario
	    public   cfuDescripcion : string;  // Descripcion del cargo
	    public   cfuTipo:         string;  // Tipo de funcionario (AC, FU, CA)
		
		/**
	    * Constructor de la clase.
	    */
	    public  CargoFuncionarioVO(){
	        this.cfuId = 0;
	    	this.cfuDescripcion = "";
	    	this.cfuTipo = "";
	    }
	}
