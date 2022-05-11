import { PersonaVO } from "./PersonaVO";

	export class PepsIdVO
	{
		public  pepId : string;
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
	    public  toString() : string
	    {
	    	return this.pepId + ',' + this.personaVO.perId;
	    }
	}
