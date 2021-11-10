import { FechaValorVO } from '../../corporativo/operacion/FechaValorVO';
import { DivisasVO } from '../../corporativo/contrato/vo/DivisasVO';
import { ContratoVO } from '../../corporativo/contrato/vo/ContratoVO';
import { InstrumentoVO } from '../../corporativo/operacion/InstrumentoVO';


export class OperCotizaVO {
    public  opcId : number;
    public  opcTipo :  string;
    public  fechaValorVO :  FechaValorVO;
    public  opcObserva :  string;
    public  opcFechaStr : string;
    public  divIdVO: DivisasVO ;
    public  ejecutivoId : number;
    public  contratoVO : ContratoVO;
    public  instrumentoVO : InstrumentoVO
    public  opcTcosto : number;
    public  opcTcambio : number;
    public  opcMonto : number;
    
    constructor() {
        
    }

}