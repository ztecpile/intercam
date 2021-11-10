import { SucursalVO } from "../../corporativo/centrocostos/vo/SucursalVO";
import { DivisasVO } from "../../corporativo/contrato/vo/DivisasVO";
import { CorresponsalRemesaVO } from "./CorresponsalRemesaVO";

export interface SucursalCorresponsalVO{

     //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        
        /**
         * Almacena el Id Sucursal-Corresponsal.
         */
          succId: number;
        
         /**
          * Almacena la sucursal.
          */
          sucursalVO: SucursalVO;
         
         /**
          * Almacena el Banco corresponsal.
          */
          corresponsalRemesaVO: CorresponsalRemesaVO;
         
         /**
          * Almacena la Divisa.
          */
          divisaVO: DivisasVO;
         
         /**
          * Almacena n&uacute;mero de cheques. 
          */
          succCheques: number;
         
         /**
          * Almacena n&uacute;mero de d&iacute;as.
          */
          succDias: number;
         
         /**
          * Almacena monto permitido.
          */
          succMonto: number;
         
         /**
          * Almacena el estatus del registro.
          */
          succEstatus: string;



}