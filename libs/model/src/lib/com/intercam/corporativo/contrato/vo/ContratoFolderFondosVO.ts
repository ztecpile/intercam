import { DireccionVO } from "../../persona/vo/DireccionVO";
import { ConNotificacionVO } from "./ConNotificacionVO";
import { ContratoDireccionVO } from "./ContratoDireccionVO";
import { ContratoParesDivisasVO } from "./ContratoParesDivisasVO";
import { ContratoPersonaVO } from "./ContratoPersonaVO";
import { ContratoProdFwdsubyVO } from "./ContratoProdFwdsubyVO";
import { ContratoRiesgoVO } from "./ContratoRiesgoVO";
import { ContratoServicioInvVO } from "./ContratoServicioInvVO";
import { ContratoUnidadNegocioVO } from "./ContratoUnidadNegocioVO";
import { ContratoVO } from "./ContratoVO";
import { CuentaContratoVO } from "./CuentaContratoVO";
import { UsuarioAutBancaElecVO } from "./UsuarioAutBancaElecVO";

    export class ContratoFolderFondosVO
    {

        public   contratoVO:ContratoVO;
        //private List<ContratoPersonaVO> listaRepresentantes =  new ArrayList<ContratoPersonaVO> ();
        public   listaRepresentantes:ContratoPersonaVO[];
        //List<CuentaContratoVO> listaCuentas =  new ArrayList<CuentaContratoVO> ();
        public   listaCuentas:CuentaContratoVO[];
        //private List<ContratoUnidadNegocioVO> cuentasReuters = new ArrayList<ContratoUnidadNegocioVO>();
		public  	cuentasReuters:ContratoUnidadNegocioVO;

		public   contratosContratoParesDivisasVO:ContratoParesDivisasVO;

        /**
         * Direccciones asociadas al contrato, quitar cuando eliminemos la pantalla actual de direcciones
         */
        //private List<ContratoDireccionVO> listaDirecciones = new ArrayList<ContratoDireccionVO>();
        public   listaDirecciones:ContratoDireccionVO[];
        /**
         * Direccciones asociadas al contrato
         */
        // List<DireccionVO> listaDireccionesVO = new ArrayList<DireccionVO>();
        public   listaDireccionesVO:DireccionVO[];
        // contrato ejecutivo
        public  tejId:number;
        public  cejFaltaStr:string;
        public  usuUsuario:string;
        /**
        * Contiene numero de usuario
        */
        public  usuClave:number;
        public  perId:number;
        /**
        * Identificador del contrato
        * Requerido como identificador unico del objeto ContratoFolderFondos
        */
        public  conId : number;
		/**
		 * Contiene la sesion (si la hay)
		 */
		public  sesion : string;		
		/**
		 * Lista de Reportes y Notificaciones
		 * */
        //  List<ConNotificacionVO> listaNotificaciones = new ArrayList<ConNotificacionVO>();
		public  listaNotificaciones : ConNotificacionVO[];

		/**
		 * Lista de usuarios autorizados REUTERS
		 * */
        // private List<UsuarioAutBancaElecVO> listaUsuariosAutorizadosBE = new ArrayList<UsuarioAutBancaElecVO>();
		public listaUsuariosAutorizadosBE:UsuarioAutBancaElecVO[];
        
        /**
        * Solicitud del contrato
        */
        public  solicitud:number;
        
        public  clvPro:string;

		
		public  docfatca:number;
		
		public  expcompleto:number;
		
		/**
		 * Riesgos de Cliente y SPID correspondientes al contrato
		 * */
        // ContratoRiesgoVO[] listaContratoRiesgoVO = new ContratoRiesgoVO[]{};
		public  listaContratoRiesgoVO :  ContratoRiesgoVO[];
        
        /**
        * Lista de Bitacoras pendientes del contrato
        **/
    //    List<BitacoraOperVO>
        public  listBitPendientes :any[]; //BitacoraOperVO[];

		public  contratoUnidadNegocioVO:ContratoUnidadNegocioVO; 

		//este es attay
		public  productosDerivadosFWD:ContratoProdFwdsubyVO;
        
        /**
        * Determina si el contrato es una reasignacion Divisas Banco
        * Se alimenta desde la prospeccion "ConsultaInformacionGeneral"
        */ 
        public  isReasignacion : boolean;
        
        /**
         * Nivel de riesgo del cliente
         */
        public  vriId: number;
		
		public  campAtendida: string;
		
		
		public  contratoServicioInvVO:ContratoServicioInvVO;
        
        /**
         * id de prospeccion i00prospecto_persona
         */
        public  prpId : number;

        /**
        * Almacena la informacíon del prospecto
        */ 
        public  personaProspecto : any;//ProspeccionPersonaVO;
		
		/**
        * Constructor de la clase.
        */
        public constructor()
        {
            this.contratoVO = new ContratoVO();
           // this.listaCuentas = new ArrayCollection();
            //this.listaRepresentantes = new ArrayCollection();
            //this.listaDirecciones = new ArrayCollection();
			//this.listaNotificaciones = new ArrayCollection();
			//this.listaUsuariosAutorizadosBE = new ArrayCollection();
            this.tejId = 0;
           // this.cejFaltaStr = ModelUtil.dateTimeToString( new Date());
			//this.cuentasReuters = new ArrayCollection();
			//this.contratosContratoParesDivisasVO = new ArrayCollection();
            this.usuUsuario = '';
			this.contratoUnidadNegocioVO = new ContratoUnidadNegocioVO();
            this.perId = 0;
			//this.productosDerivadosFWD = new ArrayCollection();
            this.isReasignacion = false;
            this.prpId = NaN;
			
        }
    
        /**
        * Busca en bitacoras pendientes del contrato por clase e id
        * @param id clave de referencia de la bitacora
        * @param clase de objeto que almacena la bitacora
        **/
        // public  getBitByIdClass(id : Number, clase : String): BitacoraOperVO {
        //      bit : BitacoraOperVO = null;
        //     if (this.listBitPendientes && this.listBitPendientes.length > 0) {
        //         for each( bitVO : BitacoraOperVO in this.listBitPendientes) {
        //             if (bitVO.bitClase.indexOf(clase) >= 0 && bitVO.claveReferencia1 == id) {
        //                 bit = bitVO;
        //                 break
        //             }
        //         }
        //     }
        //     return bit;
        // }
		
        /**
        * Obtiene contrato Persona Titular
        * */
		public getTitular(): ContratoPersonaVO {
		 	for(let contratoPersonaVO of this.listaRepresentantes){
		 		if(contratoPersonaVO.perfilVO.perfDescripcion == "TITULAR"){
		 			return contratoPersonaVO; 
		 		}
		 	}
		 	return null;
		}
		
        /**
        * Remueve bitacoras de un tipo de clase y referencia
        * @param clase
        * @param referencia
        * */
        // public function removeBitacoraByClass (clase: String, referencia: Number): void {
        //      listTmp: ArrayCollection = new ArrayCollection();
        //     if (this.listBitPendientes && this.listBitPendientes.length > 0) {
        //         for each( bitVO : BitacoraOperVO in this.listBitPendientes.toArray()) {
        //             if (!(bitVO.bitClase.indexOf(clase) >= 0 && bitVO.claveReferencia1 == referencia)) {
        //                 listTmp.addItem(bitVO);
        //             }
        //         }
        //     }
        //     this.listBitPendientes.removeAll();
        //     this.listBitPendientes = listTmp;
        // }
        
        /**
         * Obtiene lista de perfil por descripcion
         * */
        // public function getListPerfil(perfil: String): ArrayCollection {
        //      arrPerfi: ArrayCollection = new ArrayCollection();
        //     for each ( contratoPersonaVO:ContratoPersonaVO in listaRepresentantes){
        //         if(contratoPersonaVO.perfilVO.perfDescripcion == perfil){
        //             arrPerfi.addItem(contratoPersonaVO); 
        //         }
        //     }
        //     return arrPerfi;
        // }
        
        /**
        * Devuelve lista de propietarios reales si los hay
        * */
        // public function getListPropReal(): ArrayCollection {
        //      arrPerfi: ArrayCollection = new ArrayCollection();
        //     for each ( contratoPersonaVO:ContratoPersonaVO in listaRepresentantes){
        //         if(contratoPersonaVO.perfilVO.perfDescripcion == Const.PERF_PROP_REAL_DESC ||
        //             contratoPersonaVO.cpePropReal){
        //             arrPerfi.addItem(contratoPersonaVO); 
        //         }
        //     }
        //     return arrPerfi;
        // }
    /**
    * Valida si la categoria del contrato es 
    * FIDEICOMISO
    * CAJA DE AHORRO
    * FONDO DE AHORRO
    * */
        // public function isCategContratoPropReal(): Boolean {
        //      arrCateg : Array = [Const.TIPO_CAT_FIDEICOMISO, Const.TIPO_CAT_CAJA_AHORRO, Const.TIPO_CAT_FONDO_AHORRO];
        //     for each ( i : Number in arrCateg) {
        //         if (i == this.contratoVO.cpeId) {
        //             return true;
        //         }
        //     }
        //     return false;
        // }
    }
	
    
