import { PersonaContratoVO, PipelineVO, UsuarioVO } from "@intercam/model";

export class AltaProspectoEvent {
    
    /**
	* Almacena conjunto de argumentos.
	**/
	public argumentos:[];

    public contratoPersonaVO:PersonaContratoVO;

    public pipelineVO:PipelineVO;

    public usuarioVO:UsuarioVO;

    public ruta:string;
}