
    
    export class CertificadoBMcVO
    {
        /**
         * Codigo de respuesta 
         */
         public  codigoRes : Number;
        
        /**
         * Mensaje
         */
         public  mensaje : String;
        
        /**
         * Numero de serie del certificado
         */
         public  nuSeriCer:String;
        
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
         public  estado : String;
        
        /**
         * Certificado en formato PEM
         */
         public  forPEM : String;
        
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
