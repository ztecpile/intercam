import { BancosVO } from "./BancosVO";
import { DivisasVO } from "./DivisasVO";
import { PerCuentaBancoVO } from "./PerCuentaBancoVO";

    
     export class CuentaBancoVO {
        
        /**
         * Identificador de la cuenta (cue_id)
         **/ 
        public  cueId:number;
        /**
         * Divisa de la cuenta (div_id)
         **/
        public  divisaVO:DivisasVO;
        /**
         * Numero de cuenta (cue_cuenta_ban)
         **/
        public  cueCuentaBan:string;
        /**
         * Banco asociado a la cuenta (ban_id)
         **/
        public  bancoVO:BancosVO;
        /**
         * Indica si la cuenta es para cargo o para abono (cue_cargo_abono)
         **/
        public  cueCargoAbono:string;
        /**
         * Numero Clabe de la cuenta (cue_clabe)
         **/
        public  cueClabe:string;
        /**
         * Fecha de registro de la cuenta en el sistema (cue_fregistro)
         **/
        public  cueFregistroStr:string;
        /**
         * Plaza del banco de la cuenta(cue_plaza_banco)
         **/
        public  cuePlazaBanco:string;
        /**
         * Sucursal del banco de la cuenta (cue_suc_banco)
         **/
        public  cueSucBanco:string;
        /**
         * Monto limite a operar con la cuenta (cue_monto_limite)
         **/
        public  cueMontoLimite:number;
        /**
         * Monto limite permitido para operar SPEI (cue_monto_lim_spei)
         **/
        public  cueMontoLimSpei:number;
        /**
         * Nombre del titular (beneficiario) de la cuenta (cue_titular)
         **/
        public  cueTitular:string;
        /**
         * Clave SWIFT de la cuenta (cue_clave_swift)
         **/
        public  cueClaveSwift:string;
        /**
         * Clave ABA de la cuenta (cue_clave_aba)
         **/
        public  cueClaveAba:string;
        /**
         * Clave Chips (cue_clave_chips)
         **/
        public  cueClaveChips:string;
        /**
         * Municipio          (cue_municipio)
         **/
        public  cueMunicipio:string;
        
        /**
         * Almacena si la repetitiva esta en el portal de Reuter (cue_habilitaportal)
         */
        public  cueHabiliitaPortal:string;
        /**
         * Relacion con la persona (perCuentaBancos) titular de la cuenta (mediante el campo cue_id)
         **/
        public  perCuentaBancoVO:PerCuentaBancoVO;
        /**
         * Tipo de liquidacion para lo que se usara la cuenta (cue_tipo_liquida)
         **/
        public  cueTipoLiquida:number;
        /**
         * Identifica si la cuenta es un repetitiva (cue_es_repetitiva).
         */
        public  cueEsRepetitiva:boolean;
        /**
         * Clave del banco en el SICA (tmp_clv_ban).
         */
        public  tmpClvBan:string;
        /**
         * Numero o clave del convenio asociado a la cuenta (cue_convenio)
         */
        public  cueConvenio:string;
        /**
         * Descripcion de la referencia del convenio (cue_referencia1)
         **/
        public  cueReferencia1:string;
        /**
         * Descripcion de la referencia del convenio (cue_referencia2)
         * 
         **/
        public  cueReferencia2:string;
        /**
         * Descripcion de la referencia del convenio (cue_referencia3)
         * 
         **/
        public  cueReferencia3:string;
        /**
         * RFC del titular (beneficiario) de la cuenta (cue_rfctitular)
         */
        public  cueRFCTitular:string;
        /**
         * Tipo relacion existente entre el titular (beneficiario) de la cuenta y el dueño del contrato (cliente) 
         * (tre_clave)
         */
        public  treClave:number;
        /**
         * Tipo de actividad del titular (beneficiario) asociada a SPID (act_id).
         */
        public  cueActividad:number;
        /**
         * Alias de la cuenta (cue_alias)
         */
        public  cueAlias: string;
        
        /**
         * Correo del titular (beneficiario) de la cuenta (cue_email)
         */
        public  cueEmail: string;
        
        /**
         * Clave del tipo de persona, para establecer el tipo de persona juridica (tpe_clave)
         */
        public  tpeClave: string;
        
        /**
         * Codigo del tipo relacion, del catalogo de sibamex (cti_cod_tip_rel)
         */
        public  ctiCodTipRel: string;
        
        /**
         * Codigo del motivo de pago, del catalogo de sibamex (smp_cod_mot_pago)
         */
        public  smpCodMotPago: string;
        
        // Campos no persistidos
        /**
         * Bandera que determina si se habilita, deshabilita o se actualiza la repetitiva en el portal
         */
        public  isHabilitado:boolean;
        
        public  perNomCorto:string;
        
        /**
         * iable para "preser" el monto maximo en las repetitivas
         **/
        public  cueMontoMax:number;
        
        //[ArrayElementType("com.intercam.cambios.vo.VendorVO")]
        /**
         * Almacena lista de Vendor.
         **/
        public  lstVendor: any; //* ;
        
        /**
         * Clave legada de uno de los contratos de banco del cliente
         **/
        public  tmpClaveLegada: string;
        
        /**
         * Consecutivo de la cuenta en la tabla de Sibamex
         */
        public  tmpConsecutivoSbmx: string;
        
        /**
         * Tipo de cuenta recuperada (repetitiva o cuenta de cliente)
         */  
        public  cueTipo : string;
        
        /**
         * Descripcion del motivo de pago, cuando se selecciona "Otro" en smpCodMotPago 
         */
        public  cueDescMotPago : string;
        
        /**
         * Usuario Administracion
         */
        public  cueUsuAdm : string;
        
        /**
         * Fecha de Cancelacion
         */
        public  cueFCancela : Date;
        
        /**
         * Descripcion adicional
         */
        public  cueDescripcionAdd : string;
        
        /**
         * Fecha de actualizacion
         */
        public  cueFAct : Date;
        
        /**
         * Otro concepto de pago
         */
        public  cueOtroConcPag : string;
        
        /**
         * Numero Random (aleatorio)
         */
        public  cueRandom : string;
        
        /**
         * Cuenta inicia
         */
        public  cueInicia : string;
        
        /**
         * Sistema donde se creo la repetitiva.
         * Valores posibles: FX, BL, BT
         */
        public  cueOrigen : string;
        /**
         *
         */  
        public  smpDescri:string;
        
        /**
         * Constructor de la clase.
         */
        public constructor() {
            this.cueCuentaBan = null;
            this.divisaVO = new DivisasVO();
            this.bancoVO = new BancosVO();
            this.perCuentaBancoVO = new PerCuentaBancoVO();
            this.cueCargoAbono = null;
            this.cueClabe = null;
            this.cuePlazaBanco = null;
            this.cueSucBanco = null;
            this.cueMontoLimite = 0;
            this.cueMontoLimSpei = 0;
            this.cueTitular  = null;
            this.cueClaveSwift  = null;
            this.cueClaveAba  = null;
            this.cueClaveChips  = null;
            this.cueMunicipio = null;
            this.perNomCorto = null;
            this.cueTipo = null;
            this.cueDescMotPago = null; 
            this.cueAlias = null;
            this.cueEmail = null;
            this.cueRFC = null;
        }
        
        public  toString():string {
            return this.cueId.toString();
        }
        
        /**
         * Metodo que regresa la clave o identificador de la actividad SPID   (cueActividad)
         * Se utiliza para el manejo dinamico de combos en las repetitivas de cuentas
         **/
        public  get actId(): number {
            return this.cueActividad;
        }
        
        /**
         * Metodo que establece la clave o identificador de la actividad SPID   (cueActividad)
         * Se utiliza para el manejo dinamico de combos en las repetitivas de cuentas
         **/
        public  set actId(newActId: number) {
            this.cueActividad = newActId;
        }
        
        /**
         * Metodo que regresa el RFC del titular (beneficiario) de la cuenta   (cueRFCTitular)
         * Se utiliza para el manejo dinamico de combos en las repetitivas de cuentas
         **/
        public  getcueRFC(): string {
            return this.cueRFCTitular;
        }
        
        /**
         * Metodo que establece el RFC del titular (beneficiario) de la cuenta   (cueRFCTitular)
         * Se utiliza para el manejo dinamico de combos en las repetitivas de cuentas
         **/
        public  setcueRFC(newCueRFC: string) {
            this.cueRFCTitular = newCueRFC;
            this.cueRFC=newCueRFC;

        }
        //Se trata de solventar el problema con pantalla dinamica de abono Convenio New
        cueRFC: string;
    }

