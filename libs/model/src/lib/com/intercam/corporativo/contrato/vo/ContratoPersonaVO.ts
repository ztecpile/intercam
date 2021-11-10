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
        public  cpe_porcentaje : Number;
        /**
         * Usuario.
         */
        public  usu_clave : Number;
        /**
         * Fecha de alta.
         */
        public  cpe_faltaStr : String;
        /**
         * Usuario.
         */
        public  usuUsuario : String;
        /**
         * Nombre de la persona.
         */
        public  nomCorto : string;
        /**
         * TconId.
         */
        public  tipContrato : Number;
        /**
         * Descripcion deltipo de contrato.
         */
        public  desTipContrato : String;
        /**
         * Estatus de la relacion.
         */
        public  cpeEstatus : String;
        /**
         * Tipo de cuenta.
         */
        public  dicId:Number;
        /**
         * Id del tipo de docuemnto que entrega.
         */
        public  docId:Number;
        /**
         * Folio del documento.
         */
        public  cpeFoldoc:String;
        /**
         * Descripcion.
         */
        public  treDescripcion:String;
        /**
         * Monto m&aacute;ximo.
         */
        public  cpeMontoMax : Number;
        /**
         * Vigencia del documento.
         */
        public  cpeFvigenciaStr : String;
        /**
         * Calle de la direccion.
         */
        public  dirCalle : String;
        /**
         * Nacionalidad de una persona relacionada en el contrato
         * */
        public  paiNacionalidad : String;
        /**
         * Clave Repetitiva.
         */
        public  tmpCveRepet : Number;
        /**
         * Identifica a la persona como de repetitiva.
         */
        public  cpeEsRepetitiva : Boolean;
        /**
         * Identificador de la tabla benfac del SICA.
         */
        public  tmpCveBenfac : Number;
        /**
         * Campo para contrato DOS: Tipo de Notificacion para el perfil de Parte Interesada o
         * Pais de residencia del beneficiario Contingente para el perfil de Beneficiario
         **/
        public  cpeTipoNotificacion : Number;
        /**
         * Campo para contrato DOS: Identifcador del beneficiario (Para beneficiarios contingentes)
         **/
        public  perIdBenef : Number;
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
        public  perNumeroBanco:String;
        /**
         * Numero de grupo de banco
         * */
        public  cluGrupoBanco:String;
        /**
         * Constructor de la clase.
         */
		
		public  cpeFirmaDerivados:Boolean;
		public  cpeConfirmaOperacion:Boolean; 
		public  cpeCelebraOperacion:Boolean; 
        
        /**
         * Numero de Telefono
         */

        public  cpeTelefono:String;
		public  cpeMontoTdCredito:Number;
		public  cpeAdicional:Boolean;
		public  cpeOpDivisas:Boolean;
		public  cpePropReal:Boolean;
		public  cpeNumCardext:String;
		public  cpeNumCardBrx:String;
		public  cpeStatusTarjetabrx:String;
		public  cpeEmbossingName:String;
		public  cpeCuartaLinea:String;
        public  cpeTarjBrxCancelada:Boolean;
        
        public  cargoFuncionarioVO: CargoFuncionarioVO;
        
        /**
         * Persona que toma el control Propietario real
         */
        public  cpePerControl: String;
        
        /**
         * Porcentaje de accionista
         */
        public  cpePorAccionista: Number;
        
        /**
        * Lista que almacena los perfiles relacionados con la persona
        */ 
        public  listaConPersonaPerfilVO : ConPersonaPerfilVO[];

        
        /**
        * Cuando el tipo de contrato es fideicomiso y el perfil es comite tecnico, almacena el tip de miembro
        * PRO = PROPIETARIO
        * SUP = SUPLENTE
        **/ 
        public  cpeMiembro : String;
        
        /**
        * Cargo que desempenia como miembro
        **/ 
        public  cpeCargo : String;

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
        public  get perfDescripcion() : String {
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
        // public  get rfcFm3Ssn() : String {
        //      valor : String = this.personaVO? this.personaVO.perRfc : '';

        //     if (!valor && this.personaVO is PersonaFisicaVO) {
        //          perF : PersonaFisicaVO = PersonaFisicaVO(personaVO);
        //         valor = perF.pefNoFm3? perF.pefNoFm3 : perF.pefNss? perF.pefNss : '';
        //     } else if (!valor && this.personaVO is PersonaMoralVO) {
        //         valor = PersonaMoralVO(personaVO).pemIdShcp;
        //     }

        //     return valor;
        // }
    }
