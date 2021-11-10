import { CalifClienteVO } from "./CalifClienteVO";

	export class CalificacionRiesgoVO
	{     	
     	 public  carClave : String;
	     public  carRazonSocial : String;
	     public  carPais : String;
	     public  carFitchNLp : String;
	     public  carFitchNCp : String;
	     public  carFitchGLp : String;
	     public  carFitchGCp : String;
	     public  carFitchFrevisionStr : String;
	     public  carSandpNLp : String;
	     public  carSandpNCp : String;
	     public  carSandpGLp : String;
	     public  carSandpGCp : String;
	     public  carSandpFrevisionStr : String;
	     public  carMoodysNLp : String;
	     public  carMoodysNCp : String;
	     public  carMoodysGLp : String;
	     public  carMoodysGCp : String;
	     public  carMoodysFrevisionStr : String;
	     public  estatus : Number;
	     public  carFaltaStr : String;
	     public  carEstatus : Boolean;
	     public  carHrNLp : String;
	     public  carHrNCp : String;
	     public  carHrGLp : String;
	     public  carHrGCp : String;
	     public  carHrDrevisionStr : String;
	     
	     public  califClientesVO : Set <CalifClienteVO>;
	    
		/**
	    * Constructor de la clase.
	    */
	    public constructor()
	    {
	    	
	    }
	   
	}
