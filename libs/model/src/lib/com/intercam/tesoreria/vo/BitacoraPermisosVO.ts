export class BitacoraPermisosVO {
    
    constructor(
        //public serialVersionUID: number = 1,
        /**
         * Usuario Id, ejecuta el proceso
         */
        public usuarioProcesaId: string,
    
        /**
         * Clave del autorizador
         */
        public clvAut: string,
    
        /**
         * Fecha y hora de ejecucion
         */
        public fecha: Date,
    
        /**
         * Tipo de ejecucion, agrega permisos ("ADD") o elimina ("DEL")
         */
        public tipo: string
    ) {}
}