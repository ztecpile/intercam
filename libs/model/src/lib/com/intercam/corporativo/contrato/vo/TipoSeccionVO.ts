import { SeccionVO } from "./SeccionVO";

	export class TipoSeccionVO
	{
		public  sectId : number;
		public  tsecOrden : number;
		/* public  tipoCuestionarioVO : TipoCuestionarioVO;
		public  seccionesVO :ArrayCollection;	 */
		public  seccionVO:SeccionVO;

	
	
     	/**
	    * Constructor de la clase.
	    */
	    public constructor()
	    {
		    this.seccionVO = new SeccionVO();
		    //seccionesVO = new ArrayCollection();
	    }
	}
