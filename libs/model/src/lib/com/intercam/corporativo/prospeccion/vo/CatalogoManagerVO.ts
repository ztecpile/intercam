import { ConsultaPipelineVO } from './ConsultaPipelineVO';
export class CatalogoManagerVO {
    public ccoClave:number;
    public usu_usuario:string;
    public ejevutivoId:number;
    public lstCouch:CatalogoManagerVO[];
    public lstAllCEje:CatalogoManagerVO[];
    public suc_clave:number;
    public suc_descrip:string;
    public lstAllSuc:CatalogoManagerVO[];
    public per_id:number;
    public lstAllMarshall:CatalogoManagerVO[];
    public lstIdMarshall:number[];
    
    public consultaPipelineVo:ConsultaPipelineVO;
}