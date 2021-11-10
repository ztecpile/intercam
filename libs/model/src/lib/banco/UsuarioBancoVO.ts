export class  UsuarioBancoVO{

   

        /**
     * Numero de cliente, de la cuenta de cargo se tomara, para los clientes que no son administradores, 
     * debe ser el mismo que su administrador. 
     * Cuenta del cliente:string; tmpClaveLegada en POS, Usu_Client en NBUSUARI y Usu_Cuenta en BEUSUARI.
     */
         public  numCliente:string;
         /**
          * Numero de usuario (corresponde al campo Usu_Numero)
          */
         public   numUsuario:string;
         /**
          * Nombre del Usuario (corresponde al campo Usu_Nombre)
          */
         public  nombreUsuario:string;
         /**
          * Usuario (corresponde al campo Usuario)
          */
         public  usuario:string;
         /**
          * tipo de consulta
          */
         public   tipoConsul:string;
         /**
          * Usuario NB
          */
         public   usuarioNB:string;
         /**
          * Status 
          * A - Activo 
          * B - Bloqueado 
          * C - Cancelado      
          * D - Desactivado por Administrador
          * E - Pendiente de Cancelar 
          * I  - Inactivo
          */
         public   status:string;
         /**
          * Tipo Usuario
          * T = Titular
          * N = Normal
          */
         public   tipo:string;
         /**
          * El usuario que lo administra, si es administrador, tendra el mismo numero
          */
         public   usuarioAdm:string;
         /**
          * Clave (username)
          */
         public   clave:string;
         /**
          * Password 
          */
         public   password:string;
         /**
          * Folio de nip asignado.
          */
         public  folNip:number;
         /**
          * Folio de token asignado
          * Es el valor como aparece en NBUSUARI ó en BEUSUARI,
          * en caso de ser Token de Safenet aparece como   Vacio
          */
         public   folTok:string;
         /**
          * Cuenta para cargo de comisiones, simil BECUENTA.Cbe_CuePag
          */
         public   cuCaCo:string;
         /**
          * Sucursal de moficación de contrato o usuarios.
          */
         public   sucMod:string;
         /**
          * Sucursal origen.
          */
         public   sucOrigen:string;
         /**
          * Sucursal destino.
          */
         public   sucDestino:string;
         
         /**
          * email.
          */
         public   emailUsuario:string;
         
         /**
         *Nivel de la firma al autorizar    
         *Los usuarios solo tienen firmas de nivel A,B o C
         */
         public   nivelFirma:string;
        
        
         /**
          * Especifica si un elemento debe de estar seleccionado.
          */
         public  conSelected:boolean;
        
     
         /**
          * Especifica si un elemento debe de estar seleccionado para B x T..
          */
         public  conSelectedBT:boolean;
         
         


}