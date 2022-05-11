import { CalifClienteVO } from "./CalifClienteVO";

	export class CalificacionRiesgoVO
	{     	
     	 public  carClave : string;
	     public  carRazonSocial : string;
	     public  carPais : string;
	     public  carFitchNLp : string;
	     public  carFitchNCp : string;
	     public  carFitchGLp : string;
	     public  carFitchGCp : string;
	     public  carFitchFrevisionStr : string;
	     public  carSandpNLp : string;
	     public  carSandpNCp : string;
	     public  carSandpGLp : string;
	     public  carSandpGCp : string;
	     public  carSandpFrevisionStr : string;
	     public  carMoodysNLp : string;
	     public  carMoodysNCp : string;
	     public  carMoodysGLp : string;
	     public  carMoodysGCp : string;
	     public  carMoodysFrevisionStr : string;
	     public  estatus : Number;
	     public  carFaltaStr : string;
	     public  carEstatus : Boolean;
	     public  carHrNLp : string;
	     public  carHrNCp : string;
	     public  carHrGLp : string;
	     public  carHrGCp : string;
	     public  carHrDrevisionStr : string;
	     
	     public  califClientesVO : Set <CalifClienteVO>;
	    
		/**
	    * Constructor de la clase.
	    */
	    public constructor()
	    {
	    	
	    }
	   
	}
