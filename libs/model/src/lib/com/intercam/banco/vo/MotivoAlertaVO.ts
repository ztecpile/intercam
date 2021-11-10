export class MotivoAlertaVO{
    constructor(
        public moa_id?: number,
        public moa_descripcion?: string,
        public moa_status?: string,
        public moa_grupo?: string,
        public moa_area?: string
    ){}		
}