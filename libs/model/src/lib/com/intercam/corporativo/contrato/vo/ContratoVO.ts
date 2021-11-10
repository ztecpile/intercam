import { ContratoEstatusVO } from "./ContratoEstatusVO";
import { TipoContratoVO } from "./TipoContratoVO";

    export class ContratoVO
    {
        /**
         * Id del contrato.
         */
        public  conId : Number;
        /**
         * Tipo de Contrato.
         */
        public  tipoContratoVO : TipoContratoVO;
        /**
         * Estatus del contrato.
         */
        public  contratoEstatusVO : ContratoEstatusVO;
        /**
         * Fecha de alta del estatus.
         */
        public  conFestatusStr : String;
        /**
         * Fecha de impresion del contrato.
         */
        public  conFimpContratoStr : String;
        /**
         * Fecha de apertura del contrato.
         */
        public  conFaperContratoStr : String;
        /**
         * Fecha de reapertura.
         */
        public  conFreaperturaStr : String;
        /**
         * Fecha baja.
         */
        public  conFbajaStr : String;
        /**
         * Fecha de reimpresi&oacute;n.
         */
        public  conFreimpresionStr : String;
        /**
         * Cuenta discrecional.
         */
        public  conManejoCta : Boolean;
        /**
         * Contrato firmado.
         */
        public  conFirmado : Boolean;

        /**
         * Ventas en corto.
         */
        public  conVentaCorto : Boolean;
        /**
         * Clave legada del contrato.
         */
        public  tmpCveLegada : String;
        /**
         * Sucursal Legada.
         */
        public  tmpCveSucLegada : String;
        /**
         * Observaciones.
         */
        public  conObservacion : String;
        /**
         * Divisi&oacute;n del contrato.
         */
        public  dicId : Number;
        /**
         * Descripci&oacute;n del tipo de contrato.
         */
        //TODO:No se pa que sirve
        public  tconDescripcionVO : String;
        
        /**
         * nombre del titular
         */
        public  nombreTitular:String;
        
        /**
         * cve del ejecutivo titular en i00con_ejecutivo
         */
        public  cveConEjecutivo
        
        /**
         * Tipo de contrato.
         */
        public  tconIdVO : Number;
        /**
         * Clave Promotor.
         */
        public  tmpClvPro : String;
        /**
         * Clave del usuario.
         */
        public  usuUsuario : String;
        /**
         *
         */
        public  tmpNumCli:Number;
        /**
         * Env&iacute;o de Estado de Cuenta.
         */
        public  conEnvioEdo:String;
        /**
         * No. de intentos sin documentos.
         */
        public  conOperSinDoctos:Number;
        /**
         *Email para el envio de estado de cuenta de los contratos
         * */
        public  conEmail : String;
        /**
         * Descripcion del tipo de apertura (Si es caja de ahorro, fideicomisos, etc)
         */
        public  conDescApertura : String;
        /**
         * Si el contrato opera con posicion propia
         */
        public  conPosicionPropia : Boolean;
        /**
         * Correo electronico para el envio del estado de cuenta
         * */
        public  conEmailEdoCta
        /**
         * Perfil de Inversi&oacute;n del contrato.
         */
        public  conPerfilInversion : number;
        /**
         * cliNumeroBanco.
         */
        public  cliNumeroBanco : String;
        /**
         * Sesion
         */
        public  conSesion : String;
        
        /**
         * Servicio de inversi&oacute;n.
         */
        public  servicioInversion : any ; //ServicioInversion;
        /**
         * Clave dealtracker exclusivo para las contrapartes
         */
        public  tmpCveDealtrack : String;		
        /**
         * categoria de la persona
         */
        public  cpeId : number;		
        
        /**
         * Fecha Autorizada.
         */ 
        public  conFautoriza : Date;
        /** 
         * Usuario Autorizado.
         */
        public  conUsuAutoriza : String;
        
        /**
         * gestion Inversion
         */
        public  gesId : Number;
        
        /**
         * Catalogo inversion
         */
        public  cgiId : Number;
        
        /**
         * Determina Si el contrato si el contrato puede capturar Addenda en la factura
         */
        
        public  conAddenda: Boolean;
        
        
        public  correosAdicionalesVO : any []; //ArrayCollection;
        
        /**
         * Almacena el valor idBanxicoFide generado al consultar el algoritmo. 
         */ 
        public  idBanxicoFide : String;
        
        /**
         * Fecha de Constitucion del Fideicomiso (conDescApertura)
         */ 
        public  conFConstiFideStr : String;
        
        /**
         * Manejo de efectivo ilimitado
         */
        public  conEfeIlimtado: Boolean = false;

        /**
         * Constructor de la clase.
         */
        public constructor()
        {
            this.conManejoCta = false;
            this.conFirmado = false;
            this.conVentaCorto = false;
            this.conAddenda = false;
            this.tmpCveLegada = null;
            this.tmpCveSucLegada = '';
            this.conObservacion = '';
            this.tconDescripcionVO = '';
            this.tipoContratoVO = new TipoContratoVO();
            this.contratoEstatusVO = new ContratoEstatusVO();
            //this.conEnvioEdo = Const.CON_ENVIO_EDOCTA;
            this.nombreTitular = '';
            this.cveConEjecutivo = '';
            this.idBanxicoFide = '';
            this.conFConstiFideStr = '';
        }
        
        /**
         * Regresa la interpretaciÃ³n en String del objeto.
         */
        public  toString() : String
        {
            return this.conId.toString();
        }
    }
