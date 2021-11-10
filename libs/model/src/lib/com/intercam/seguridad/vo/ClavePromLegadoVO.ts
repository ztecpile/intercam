import { ClavePromLegadoIdVO } from './ClavePromLegadoIdVO';
import { Const } from '../../utils/Const';
import { TranslocoService } from '@ngneat/transloco';

    export class ClavePromLegadoVO {
        
        public idVO : ClavePromLegadoIdVO;
        public tconId : number;
        public cplDefault : boolean;
        public cveubi : number;
        public clvMesa:string;
        public stsMesa:string;
        public desMesa:string;
        public difHor:number;
        public staPro:string;
        /**
         * Descripcion del Area de costos a la que esta asociada la clave legada
         */
        public descAreaCc:string;
        
        /**
         * Nombre corto del promotor que esta asociado la clave legada
         */
        public nomCortoProm:string;
        
        /**
         * Sucursal Origen del promotor
         *
         * NO se persiste en BD y se obtinen de la tabla promotor
         */
        public oriPro:string;
        /**
         * Clave Dealtracker del trainer
         */
        public tmpCveDealtrack:string;		
        /**
        * Almacena la descripcion del tipo de negocio
        * */
        public descripTipoNegocio : string;
        
        
        
        public  constructor(private readonly translocoService: TranslocoService) {
            this.idVO = new ClavePromLegadoIdVO();
        }
        
        public  get clvPro():string{
            return this.idVO.clvPro;
        }

        public  set clvPro(clvPro : string){
            this.idVO.clvPro =  clvPro;
        }
        
        /**
         * Metodo que obtiene la clave de la sucursal de ClavePromLegadoIdVO 
         */
        public  get clvSuc():string{
            return this.idVO.clvSuc;
        }
        
        public  set clvSuc(cveSuc:string){
            this.idVO.clvSuc = cveSuc;
        }
        
        /**
         * Obtiene la clave del promotor concatenada con el tipo de negocio
         */
        public  get clvPromotor(): string {
            return this.idVO.clvPro.concat(" - ").concat(
                this.translocoService.translate(Const.MAPA_TIPO_CONTRATO[this.tconId]));
        }
        
        public  set clvPromotor(clvPro: string) {
            this.idVO.clvPro =  clvPro;
        }
}
