import { ContratoEstatusVO } from "./ContratoEstatusVO";
import { TipoContratoVO } from "./TipoContratoVO";

    export class ContratoVO
    {
        /**
         * Id del contrato.
         */
        public  conId : number;
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
        public  conFestatusStr : string;
        /**
         * Fecha de impresion del contrato.
         */
        public  conFimpContratoStr : string;
        /**
         * Fecha de apertura del contrato.
         */
        public  conFaperContratoStr : string;
        /**
         * Fecha de reapertura.
         */
        public  conFreaperturaStr : string;
        /**
         * Fecha baja.
         */
        public  conFbajaStr : string;
        /**
         * Fecha de reimpresi&oacute;n.
         */
        public  conFreimpresionStr : string;
        /**
         * Cuenta discrecional.
         */
        public  conManejoCta : boolean;
        /**
         * Contrato firmado.
         */
        public  conFirmado : boolean;

        /**
         * Ventas en corto.
         */
        public  conVentaCorto : boolean;
        /**
         * Clave legada del contrato.
         */
        public  tmpCveLegada : string;
        /**
         * Sucursal Legada.
         */
        public  tmpCveSucLegada : string;
        /**
         * Observaciones.
         */
        public  conObservacion : string;
        /**
         * Divisi&oacute;n del contrato.
         */
        public  dicId : number;
        /**
         * Descripci&oacute;n del tipo de contrato.
         */
        //TODO:No se pa que sirve
        public  tconDescripcionVO : string;
        
        /**
         * nombre del titular
         */
        public  nombreTitular:string;
        
        /**
         * cve del ejecutivo titular en i00con_ejecutivo
         */
        public  cveConEjecutivo
        
        /**
         * Tipo de contrato.
         */
        public  tconIdVO : number;
        /**
         * Clave Promotor.
         */
        public  tmpClvPro : string;
        /**
         * Clave del usuario.
         */
        public  usuUsuario : string;
        /**
         *
         */
        public  tmpNumCli:number;
        /**
         * Env&iacute;o de Estado de Cuenta.
         */
        public  conEnvioEdo:string;
        /**
         * No. de intentos sin documentos.
         */
        public  conOperSinDoctos:number;
        /**
         *Email para el envio de estado de cuenta de los contratos
         * */
        public  conEmail : string;
        /**
         * Descripcion del tipo de apertura (Si es caja de ahorro, fideicomisos, etc)
         */
        public  conDescApertura : string;
        /**
         * Si el contrato opera con posicion propia
         */
        public  conPosicionPropia : boolean;
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
        public  cliNumeroBanco : string;
        /**
         * Sesion
         */
        public  conSesion : string;
        
        /**
         * Servicio de inversi&oacute;n.
         */
        public  servicioInversion : any ; //ServicioInversion;
        /**
         * Clave dealtracker exclusivo para las contrapartes
         */
        public  tmpCveDealtrack : string;		
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
        public  conUsuAutoriza : string;
        
        /**
         * gestion Inversion
         */
        public  gesId : number;
        
        /**
         * Catalogo inversion
         */
        public  cgiId : number;
        
        /**
         * Determina Si el contrato si el contrato puede capturar Addenda en la factura
         */
        
        public  conAddenda: boolean;
        
        
        public  correosAdicionalesVO : any []; //ArrayCollection;
        
        /**
         * Almacena el valor idBanxicoFide generado al consultar el algoritmo. 
         */ 
        public  idBanxicoFide : string;
        
        /**
         * Fecha de Constitucion del Fideicomiso (conDescApertura)
         */ 
        public  conFConstiFideStr : string;
        
        /**
         * Manejo de efectivo ilimitado
         */
        public  conEfeIlimtado: boolean = false;

        /**
        * Determina si se muestra el formato de servicios de Inversion, tiene dependencia de variable "servicioInversion"
        **/ 
        public showFormatoSi : boolean = false;

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

    }
