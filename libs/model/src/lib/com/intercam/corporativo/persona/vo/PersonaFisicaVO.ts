import { PaisVO } from "../../centrocostos/vo/PaisVO";
import { ActividadEconomicaVO } from "./ActividadEconomicaVO";
import { CargoFuncionarioVO } from "./CargoFuncionarioVO";
import { EstadoCivilVO } from "./EstadoCivilVO";
import { PersonaVO } from "./PersonaVO";
import { PopUpInformativoABCPersonaFisicaVO } from "./PopUpInformativoABCPersonaFisicaVO";
import { ProfesionVO } from "./ProfesionVO";
import { TipoPersonaVO } from "./TipoPersonaVO";
import { TransaccionFimpeVO } from "./TransaccionFimpeVO";

    export class PersonaFisicaVO extends PersonaVO {
        /**
         * Tipo que especifica las nacionalidades.
         */
        // private static const TIPO_NACIONALIDAD : String = 'N';

        // /**
        //  * Tipo que especifica las nacionalidades renunciadas.
        //  */
        // private static const TIPO_RENUNCIADA : String = 'R';

        // /**
        //  * Tipo que especifica las nacionalidades perdidas.
        //  */
        // private static const TIPO_PERDIDA : String = 'P';
        
        /**
         * Documento
         */
        public  documentoVO : any; //DocumentoVO;
        public  pefPaterno : String;
        public  pefMaterno : String;
        public  pefNombre : String;
        public  pefCurp : String;
        public  pefSexo : Boolean;
        public  pefRegimenCony : String;
        public  pefFNacimientoStr : String;
        public  pefNoFm3 : String;
        public  pefNoIdentifica : String;
        public  pefFexpIdentStr : String;
        public  pefEnMexico : Boolean;
        public  pefNss : String;
        public  pefEmail : String;
        public  pefNumDepEco : Number;
        public  estadoCivilVO : EstadoCivilVO;
        public  pefEmail2 : String;
        public  pepsVO : any []; //ArrayCollection;
		public  pefIdCtaHabiente : String;
		
       
        public  contratos : PopUpInformativoABCPersonaFisicaVO [];
        public  empleado : Boolean;
        public  profesionVO : ProfesionVO;
        public  pefSufijo : String;
        public  pefTrabajo: String; // pef_trabajo;
        public  pefAntiguedadAnio: Number; //pef_antiguedad_Anio
        public  pefAntiguedadMes:Number;
        public  pefPuesto:String;
        public  pefDocMigratorio:String;
        public  pefFecEvMigratorioStr:String;
        public  pefCalInmigrado:String;
        public  cargoFuncionarioVO : CargoFuncionarioVO;
		/**
		 * Identificacion del folio del certificado que indica que la persona esta jubilada
		 */
		public  pefCertJubilacion : String;
		/**
		 * Fecha de presentacion del certificado de jubilacion
		 */
		public  pefFcertJubilacionStr : String;
		/**
		 * Numero de documento de jubilacion
		 */
		public  pefDocJubilacion : String;
		/**
		 * Tipo de documento de jubilacion
		 */
		public  pefTdocJubilacion : String;
	
		/**
		 * Numero identificador de 13 digitos OCR
		 */
		public  pefCic : String;
        
        /**
         * Numero identificador de 13 digitos CIC
         */
        public  pefCicV2: String;
        		
		/**
		 * Anio registro del usuario ante el INE
		 */
		public  pefAnioRegistro : Number;
		
		/**
		 * Anio registro del usuario ante el INE
		 */
		public  pefAnioEmision : Number;
		
		/**
		 * Anio y numero de emision 
		 */
		public  pefNumEmision : Number;
		
		/**
		 * Clave de elector
		 */
		public  pefClaveElector : String;
		
        /**
         * Calificacion migratoria de una PF extranjera.
         * null, en caso de que no tenga calificacion.
         */
        public  calificacionMigratoria : any; //CalificacionMigratoria;
        
        /**
         * Mapa con las nacionalidades en donde el tipo de la nacionalidad es llave.
         */
        public  perNacionalidadesVO : Object;
        
        /**
         *  Codigo estado de Biometricos
         *  Esta propiedad solo se ocupa en Flex
         * */
        public  trfCodigo: String;     
        
        /**
        * Mensajes que envia FIMPE para biometricos
        * Esta propiedad solo se ocupa en flex
        * */
        public  trfMensaje: String;
        
        public  transaccionFimpeVO : TransaccionFimpeVO;
        perNacionalidad: boolean;
        actividadVO: ActividadEconomicaVO;
        tipoPersonaVO: TipoPersonaVO;
        residenciaVO: PaisVO;
        
        /**
         * Constructor de la clase.
          */
          public constructor() {
           super();
           this.pepsVO = [];
           this.perNacionalidad = true;
           this.actividadVO = new ActividadEconomicaVO();
           this.tipoPersonaVO = new TipoPersonaVO();
         //  this.documentoVO = new DocumentoVO();
           this.profesionVO = new ProfesionVO();
           this.estadoCivilVO = new EstadoCivilVO();
           this.pefFexpIdentStr = '';
           this.pefFNacimientoStr = '';
           this.pefAntiguedadAnio= 0;
           this.pefAntiguedadMes= 0;
           this.cargoFuncionarioVO = new CargoFuncionarioVO();
           this.pefFecEvMigratorioStr = '';
			this.residenciaVO = new PaisVO();
			this.perNacionalidadesVO = new Object();
			//perActInegi= '';
        }
        /**
         * Obtiene las nacionalidades de la persona. (TIPO_NACIONALIDAD).
         */
        // //public  get nacionalidades () : Array {
        //      arrNacionalidades : Array;

        //     // Se espera un ArrayCollection.
        //     if (this.perNacionalidadesVO && this.perNacionalidadesVO[TIPO_NACIONALIDAD]) {
        //         this.arrNacionalidades = this.perNacionalidadesVO[TIPO_NACIONALIDAD].source;
        //     } else {
        //         this.arrNacionalidades = new Array();
        //     }
        //     return this.arrNacionalidades;
        // }
        // /**
        //  * Asigna las nacionalidades. (TIPO_NACIONALIDAD).
        //  */
        // public  set nacionalidades (arrNacionalidades : Array) : void {
        //     if (this.perNacionalidadesVO == null)
        //         this.perNacionalidadesVO = new Object();
        //     this.perNacionalidadesVO[TIPO_NACIONALIDAD] = new ArrayCollection(arrNacionalidades);
        // }
        /**
         * Obtiene las nacionalidades perdidas de la persona. (TIPO_PERDIDA).
         */
        // public function get nacionalidadesPerdidas () : Array {
        //      arrNacionalidades : Array;

        //     // Se espera un ArrayCollection.
        //     if (this.perNacionalidadesVO && this.perNacionalidadesVO[TIPO_PERDIDA]) {
        //         arrNacionalidades = this.perNacionalidadesVO[TIPO_PERDIDA].source;
        //     } else {
        //         arrNacionalidades = new Array();
        //     }
        //     return this.arrNacionalidades;
        // }
        // /**
        //  * Asigna las nacionalidades perdidas. (TIPO_PERDIDA).
        //  */
        // public  set nacionalidadesPerdidas (arrNacionalidades : Array) : void {
        //     if (this.perNacionalidadesVO == null)
        //         this.perNacionalidadesVO = new Object();
        //     this.perNacionalidadesVO[TIPO_PERDIDA] = new ArrayCollection(arrNacionalidades);
        // }
        /**
         * Obtiene las nacionalidades renunciadas. (TIPO_RENUNCIADA).
         */
        // public  get nacionalidadesRenunciadas () : Array {
        //      arrNacionalidades : Array;
            
        //     if (this.perNacionalidadesVO && this.perNacionalidadesVO[TIPO_RENUNCIADA]) {
        //         arrNacionalidades = this.perNacionalidadesVO[TIPO_RENUNCIADA].source;
        //     } else {
        //         arrNacionalidades = new Array();
        //     }
        //     return this.arrNacionalidades;
        // }
        // /**
        //  * Asigna las nacionalidades renunciadas. (TIPO_RENUNCIADA).
        //  */
        // public  set nacionalidadesRenunciadas (arrNacionalidades : Array) : void {
        //     if (this.perNacionalidadesVO == null)
        //         this.perNacionalidadesVO = new Object();
        //     this.perNacionalidadesVO[TIPO_RENUNCIADA] = new ArrayCollection(arrNacionalidades);
        // }
    }
