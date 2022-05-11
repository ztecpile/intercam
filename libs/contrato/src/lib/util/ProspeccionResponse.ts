import { CteReferenciadoVO, PersonaFisicaVO, PersonaMoralVO, ProspeccionPersonaVO } from "@intercam/model";

export class ProspeccionResponse {

    public prospecto: ProspeccionPersonaVO;
	
	public perF: PersonaFisicaVO;

    public perM: PersonaMoralVO;

    public cteReferenciado: CteReferenciadoVO;
    
    public updateEdoProspecto;
    
    constructor() {
    }
}