import { CteReferenciadoVO, PersonaFisicaVO, ProspeccionPersonaVO } from "@intercam/model";

export class ProspeccionResponse {

    public prospecto: ProspeccionPersonaVO;
	
	public perF: PersonaFisicaVO;

    public cteReferenciado: CteReferenciadoVO;
    
    constructor() {
    }
}