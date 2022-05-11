import { ContratoFolderFondosVO, PersonaContratoVO, PersonaVO, PipelineVO, ProspeccionPersonaVO, UsuarioVO } from "@intercam/model";

export class ConsultaInfoGralEvent {

    public usuarioVO:UsuarioVO;

    public callFrom:string;

    public contratos:any[];

    public contrato:any;

    public clienteVOaux:PersonaVO;

    public pipelineVO:PipelineVO;

    public personaProspecto:ProspeccionPersonaVO;

    public prospectoPipeline: boolean;
    
    public esCliente:boolean;

    public entrevista: boolean;

    public personaContratoVO:PersonaContratoVO;

    public contratoFolder:ContratoFolderFondosVO;

    public isEditionComponentesSA:boolean;

    public isVisibleBtnAnalisis:boolean;
}