import { BebitacoaltVO } from "./BebitacoaltVO";
import { BepagdiesaltVO } from "./BepagdiesaltVO";
import { BepagosealtVO } from "./BepagosealtVO";
export class PagoServicioTerceroVO{
    constructor(
        
        public cuenta?: string,
        /**
         * Número de Servicio a Pagar
         */
        public numServicio?: string,
        /**
         * Identificador para el Pago de Servicio en Banca Electronica
         */
        public alias?: string,
        /**
         * Referencia relacionada al Pago de Servicio registrado
         */
        public referenciaInfo?: string,
        /**
         * Referencia relacionada al Pago de Servicio registrado
         */
        public referencia?: string,
        /**
         * Referencia relacionada al Pago de Servicio registrado
         * es utilizado cuando el pago va cycdp
         */
        public referencia2?: string,
        /**
         * Monto maximo establecido por el cliente, para el pago de servicio
         */
        public  montoMaximo?: number,
        /**
         * Numero de transaccion
         */
        public NumTransac?: string,
        /**
         * Identificador proporcionado por el Tercero para diferenciar los servicios
         */
        public sku?: string,   
        /**
         * Descripcion Corta para mostrarse en la Banca Electronica
         */
        public descripcion?: string,
        /**
         * Cuenta en Firme
         */
        public cuentaFirme?: string,
        /**
         * Número de Plaza
         */
        public plaza?: string,
        /**
         * Moneda del Servicio
         */
        public moneda?: string,
        /**
         * seguridad referencia
         */
        public segRef?: string,
        /**
         * campo idEmis
         */
        public idEmis?: string,
        /**
         * cantidad a pagar
         */
        public monto?: number,
        /**
         * Digito Verificador
         */
        public dv?: number,
        /**
         * bitacora alta
         */
        public bebitacoaltVO?: BebitacoaltVO,
        /**
         * Pago Diesa
         */
        public  bepagdiesaltVO?:BepagdiesaltVO,
        /**
         * pago alta
         */
        public  bepagosealtVO?:BepagosealtVO,
        /**
         * contrato id
         */
        public conId?: number,
        
        public idSesionLogin ?:  string,
        /**
         * indica si pertenece a Cobro y confirmacion de pago
         */
        public cycdp?: string,
        
        /**
         * Propiedades para certificacion telcel
         * descripcion de la etiqueta
         */
        public prv_deCoBt?: string,
        /**
         * Propiedades para certificacion telcel
         * nombre de etiqueta
         */
        public prv_noCoBt?: string
    
    

    ){}
}