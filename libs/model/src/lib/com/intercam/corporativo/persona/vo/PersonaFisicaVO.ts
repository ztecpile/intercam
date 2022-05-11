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
        // private static const TIPO_NACIONALIDAD : string = 'N';

        // /**
        //  * Tipo que especifica las nacionalidades renunciadas.
        //  */
        // private static const TIPO_RENUNCIADA : string = 'R';

        // /**
        //  * Tipo que especifica las nacionalidades perdidas.
        //  */
        // private static const TIPO_PERDIDA : string = 'P';
        
        /**
         * Documento
         */
        public  documentoVO : any; //DocumentoVO;
        public  pefPaterno : string;
        public  pefMaterno : string;
        public  pefNombre : string;
        public  pefCurp : string;
        public  pefSexo : boolean;
        public  pefRegimenCony : string;
        public  pefFNacimientoStr : string;
        public  pefNoFm3 : string;
        public  pefNoIdentifica : string;
        public  pefFexpIdentStr : string;
        public  pefEnMexico : boolean;
        public  pefNss : string;
        public  pefEmail : string;
        public  pefNumDepEco : number;
        public  estadoCivilVO : EstadoCivilVO;
        public  pefEmail2 : string;
        public  pepsVO : any []; //ArrayCollection;
		public  pefIdCtaHabiente : string;
		
       
        public  contratos : PopUpInformativoABCPersonaFisicaVO [];
        public  empleado : boolean;
        public  profesionVO : ProfesionVO;
        public  pefSufijo : string;
        public  pefTrabajo: string; // pef_trabajo;
        public  pefAntiguedadAnio: number; //pef_antiguedad_Anio
        public  pefAntiguedadMes:number;
        public  pefPuesto:string;
        public  pefDocMigratorio:string;
        public  pefFecEvMigratorioStr:string;
        public  pefCalInmigrado:string;
        public  cargoFuncionarioVO : CargoFuncionarioVO;
		/**
		 * Identificacion del folio del certificado que indica que la persona esta jubilada
		 */
		public  pefCertJubilacion : string;
		/**
		 * Fecha de presentacion del certificado de jubilacion
		 */
		public  pefFcertJubilacionStr : string;
		/**
		 * Numero de documento de jubilacion
		 */
		public  pefDocJubilacion : string;
		/**
		 * Tipo de documento de jubilacion
		 */
		public  pefTdocJubilacion : string;
	
		/**
		 * Numero identificador de 13 digitos OCR
		 */
		public  pefCic : string;
        
        /**
         * Numero identificador de 13 digitos CIC
         */
        public  pefCicV2: string;
        		
		/**
		 * Anio registro del usuario ante el INE
		 */
		public  pefAnioRegistro : number;
		
		/**
		 * Anio registro del usuario ante el INE
		 */
		public  pefAnioEmision : number;
		
		/**
		 * Anio y numero de emision 
		 */
		public  pefNumEmision : number;
		
		/**
		 * Clave de elector
		 */
		public  pefClaveElector : string;
		
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
        public  trfCodigo: string;     
        
        /**
        * Mensajes que envia FIMPE para biometricos
        * Esta propiedad solo se ocupa en flex
        * */
        public  trfMensaje: string;
        
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
