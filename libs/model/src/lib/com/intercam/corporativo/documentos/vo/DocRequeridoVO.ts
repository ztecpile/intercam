import { PerfilVO } from "../../contrato/vo/PerfilVO";
import { TipoContratoVO } from "../../contrato/vo/TipoContratoVO";
import { CategPersonaVO } from "../../persona/vo/CategPersonaVO";
import { TipoDocumentoVO } from "./TipoDocumentoVO";

export class DocRequeridoVO {

    public dreId : number;
	public tipoDocumentoVO : TipoDocumentoVO;
	public perfilVO : PerfilVO;
	public tipoContratoVO : TipoContratoVO;
	public cpeIdVO : CategPersonaVO;

    public DocRequeridoVO() {
        this.tipoContratoVO = new TipoContratoVO();
        this.tipoDocumentoVO = new TipoDocumentoVO;
        this.cpeIdVO = new CategPersonaVO();
        this.perfilVO =  new PerfilVO();
    }
}