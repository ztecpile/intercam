import { IdentificadoresVO } from "@intercam/model";

/**
 * @version 1.0 15/09/2021
 * @author Lorenzo Mendoza
 */
export class PersonaDocFaltanteVO 
{
    /**
     * Constructor de la clase.
     */
    public PersonaDocFaltanteVO(){}

    public idContrato : number;
    public nombreCortoPersona : string;
    public descripcionTipoContrato : string;
    public descripcionPerfil : string;
    public descripcionTipoDocumento : string;
    public numeroAvisosInterno : number;
    public identificadoresVO : IdentificadoresVO;
    public idTipoDocumento : number;
    public idPerfil : number;
    public idPersona : number;
    public idTipoPersona : string;

}


