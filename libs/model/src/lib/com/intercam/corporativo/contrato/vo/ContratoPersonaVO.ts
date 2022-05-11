import { CargoFuncionarioVO } from "../../persona/vo/CargoFuncionarioVO";
import { PersonaFisicaVO } from "../../persona/vo/PersonaFisicaVO";
import { PersonaMoralVO } from "../../persona/vo/PersonaMoralVO";
import { PersonaVO } from "../../persona/vo/PersonaVO";
import { RelacionPersonaVO } from "../../persona/vo/RelacionPersonaVO";
import { ConPersonaPerfilVO } from "./ConPersonaPerfilVO";
import { ContratoPersonaIdVO } from "./ContratoPersonaIdVO";
import { PerfilVO } from "./PerfilVO";

    export class ContratoPersonaVO
    {
        /**
         * Id VO.
         */
        public  idVO : ContratoPersonaIdVO;
        /**
         * Perfil de la persona relacionada con el contrato.
         */
        public  perfilVO : PerfilVO;
        /**
         * Persona relacionada al contrato.
         */
        public  personaVO : PersonaVO;
        /**
         * Relacion de la persona con el titular. En caso de que la persona no sea el titular.
         */
        public  relPersonaVO : RelacionPersonaVO;
        /**
         * Porcentaje de inversion/beneficio.
         */
        public  cpe_porcentaje : number;
        /**
         * Usuario.
         */
        public  usu_clave : number;
        /**
         * Fecha de alta.
         */
        public  cpe_faltaStr : string;
        /**
         * Usuario.
         */
        public  usuUsuario : string;
        /**
         * Nombre de la persona.
         */
        public  nomCorto : string;
        /**
         * TconId.
         */
        public  tipContrato : number;
        /**
         * Descripcion deltipo de contrato.
         */
        public  desTipContrato : string;
        /**
         * Estatus de la relacion.
         */
        public  cpeEstatus : string;
        /**
         * Tipo de cuenta.
         */
        public  dicId:number;
        /**
         * Id del tipo de docuemnto que entrega.
         */
        public  docId:number;
        /**
         * Folio del documento.
         */
        public  cpeFoldoc:string;
        /**
         * Descripcion.
         */
        public  treDescripcion:string;
        /**
         * Monto m&aacute;ximo.
         */
        public  cpeMontoMax : number;
        /**
         * Vigencia del documento.
         */
        public  cpeFvigenciaStr : string;
        /**
         * Calle de la direccion.
         */
        public  dirCalle : string;
        /**
         * Nacionalidad de una persona relacionada en el contrato
         * */
        public  paiNacionalidad : string;
        /**
         * Clave Repetitiva.
         */
        public  tmpCveRepet : number;
        /**
         * Identifica a la persona como de repetitiva.
         */
        public  cpeEsRepetitiva : Boolean;
        /**
         * Identificador de la tabla benfac del SICA.
         */
        public  tmpCveBenfac : number;
        /**
         * Campo para contrato DOS: Tipo de Notificacion para el perfil de Parte Interesada o
         * Pais de residencia del beneficiario Contingente para el perfil de Beneficiario
         **/
        public  cpeTipoNotificacion : number;
        /**
         * Campo para contrato DOS: Identifcador del beneficiario (Para beneficiarios contingentes)
         **/
        public  perIdBenef : number;
        /**
         * Campo para contrato DOS: Lista para beneficiarios contingentes participantes en el contrato
         **/
        public  listaBenConting: ContratoPersonaVO[];
        /**
         * Campo para contrato DOS: Lista para beneficiarios contingentes no participan en el contrato
         **/
        public  listaPerRelBen: ContratoPersonaVO[];
        public  benContingentes : any[];
        /**
         * Identifica a la persona como beneficiario para facturar.
         */
        public  cpeEsBenfac : Boolean;
        /**
         * Lista con los errores de la informacion faltante de la persona
         * */
        public  listaErrores : any [] ;//ArrayCollection;
        /**
         * Numero de persona asignado en SIBAMEX
         * */
        public  perNumeroBanco:string;
        /**
         * Numero de grupo de banco
         * */
        public  cluGrupoBanco:string;
        /**
         * Constructor de la clase.
         */
		
		public  cpeFirmaDerivados:Boolean;
		public  cpeConfirmaOperacion:Boolean; 
		public  cpeCelebraOperacion:Boolean; 
        
        /**
         * Numero de Telefono
         */

        public  cpeTelefono:string;
		public  cpeMontoTdCredito:number;
		public  cpeAdicional:Boolean;
		public  cpeOpDivisas:Boolean;
		public  cpePropReal:Boolean;
		public  cpeNumCardext:string;
		public  cpeNumCardBrx:string;
		public  cpeStatusTarjetabrx:string;
		public  cpeEmbossingName:string;
		public  cpeCuartaLinea:string;
        public  cpeTarjBrxCancelada:Boolean;
        
        public  cargoFuncionarioVO: CargoFuncionarioVO;
        
        /**
         * Persona que toma el control Propietario real
         */
        public  cpePerControl: string;
        
        /**
         * Porcentaje de accionista
         */
        public  cpePorAccionista: number;
        
        /**
        * Lista que almacena los perfiles relacionados con la persona
        */ 
        public  listaConPersonaPerfilVO : ConPersonaPerfilVO[];

        
        /**
        * Cuando el tipo de contrato es fideicomiso y el perfil es comite tecnico, almacena el tip de miembro
        * PRO = PROPIETARIO
        * SUP = SUPLENTE
        **/ 
        public  cpeMiembro : string;
        
        /**
        * Cargo que desempenia como miembro
        **/ 
        public  cpeCargo : string;

        public constructor()
        {
            this.idVO = new ContratoPersonaIdVO();
            this.perfilVO = new PerfilVO();
            this.usuUsuario = '';
            this.nomCorto = '';
            this.treDescripcion='';
            this.cpeMontoMax = 0;
           // this.listaErrores = new ArrayCollection();
            this.cpe_porcentaje = 0;
			this.cpeMontoTdCredito = 0;
            this.cpeTarjBrxCancelada = false;
			this.cpeOpDivisas = false;
			this.cpePropReal = false;
			this.cpePorAccionista = 0.0;
			// this.listaConPersonaPerfilVO = new ArrayCollection();
        }

        /**
         * Obtiene la descripcion del perfil en caso de existir.
         */
        public  get perfDescripcion() : string {
            return this.perfilVO? this.perfilVO.perfDescripcion : '';
        }

        /**
         * Obtiene el nombre corto de la persona en caso de existir y el perNomCorto de la clase en caso de que no.
         */
        public  get perNomCorto() : string {
            return this.personaVO? this.personaVO.getPerNomCompleto() : this.nomCorto;
        }

        /**
         * Obtiene el rfc / Fm3 / Ssn, dependiendo de lo que se haya capturado.
         * En teoria, solo existe uno a la vez.
         */
        // public  get rfcFm3Ssn() : string {
        //      valor : string = this.personaVO? this.personaVO.perRfc : '';

        //     if (!valor && this.personaVO is PersonaFisicaVO) {
        //          perF : PersonaFisicaVO = PersonaFisicaVO(personaVO);
        //         valor = perF.pefNoFm3? perF.pefNoFm3 : perF.pefNss? perF.pefNss : '';
        //     } else if (!valor && this.personaVO is PersonaMoralVO) {
        //         valor = PersonaMoralVO(personaVO).pemIdShcp;
        //     }

        //     return valor;
        // }
    }
