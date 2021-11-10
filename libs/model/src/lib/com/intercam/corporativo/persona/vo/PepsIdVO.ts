import { PersonaVO } from "./PersonaVO";

	export class PepsIdVO
	{
		public  pepId : String;
    	public  personaVO : PersonaVO;
		/**
	     * Constructor de la clase.
	     */
	    public  PepsIdVO()
	    {
	    	this.pepId = '';
			this.personaVO = new PersonaVO();
	    }
	    /**
	     * Obtiene la representación String del objeto.
	     */
	    public  toString() : String
	    {
	    	return this.pepId + ',' + this.personaVO.perId;
	    }
	}
