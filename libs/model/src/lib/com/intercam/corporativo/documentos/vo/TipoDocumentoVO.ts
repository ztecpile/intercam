import { DocumentoVO } from "./DocumentoVO";

export class TipoDocumentoVO {

    public docSelected : boolean = false;
 	public tdoId :number ;
	public tdoDescripcion :string;
	public tdoCaduca :number ;
	public tdoPorOper :boolean;
	public documentosVO: DocumentoVO[];
	public tmpCvelegSiff : number;
        
    //Datos Necesarios Para ContratoExpedientes
    public conId :number;
    public perId :number;
    public perNomCorto :string; 
    public tconId :number;
    public cpeId :number;
    public perfId :number;

    public TipoDocumentoVO() {
        this.tdoPorOper = false;
		this.tmpCvelegSiff = 0;
    }
}