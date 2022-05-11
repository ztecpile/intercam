
    
    export class CertificadoBMcVO
    {
        /**
         * Codigo de respuesta 
         */
         public  codigoRes : number;
        
        /**
         * Mensaje
         */
         public  mensaje : string;
        
        /**
         * Numero de serie del certificado
         */
         public  nuSeriCer:string;
        
        /**
         * Fecha de emision del certificado
         */
         public  fEmision : Date;
        
        /**
         * Fecha de expiración del certificado
         */
         public  fExpiracion : Date;
        
        /**
         * Estado del certificado
         */
         public  estado : string;
        
        /**
         * Certificado en formato PEM
         */
         public  forPEM : string;
        
        /**
         * Informacion del titular
         */
         public  infoTitular : Object;
        
         /**
         * Constructor
         * */
        public constructor()
        {
        }
    }
