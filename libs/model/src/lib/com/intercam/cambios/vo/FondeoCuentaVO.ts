export interface FondeoCuentaVO{

    //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        
        /**
         * Almacena Id tipo fondeo cuenta remesa.
         **/
          fcuId: number;
        
         /**
          * Almacena descripci&oacute;n del fondeo cuenta en espa&ntilde;ol.
          **/
          fcuDescripcionEs: string;
         
         /**
          * Almacena descripci&oacute;n del fondeo cuenta en ingles.
          **/
          fcuDescripcionEn: string;
         
         /**
          * Almacena estatus del registro.
          **/
          fcuEstatus: string;

}