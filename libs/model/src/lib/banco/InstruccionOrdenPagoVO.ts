export class InstruccionOrdenPagoVO {
   /**
		 * Numero de orden de pago
		 */
		public orpNumero:string
		/**
		 * Tipo E-Envio R-Recepcion I-Intento
		 */
		public orpTipo:string
		/**
		 * Sucursal
		 */
		public orpSucurs:string
		/**
		 * Cliente
		 */
		public orpClient:string
		/**
		 * Cuenta de Cheques
		 */
		public orpCuenta:string
		/**
		 * Tipo de Operacion, solo cuando el beneficiario es una institucion
		 */
		public orpTipOpe:string
		/**
		 * Clave de Institucion Emisora
		 */
		public orpInsEmi:string
		/**
		 * Tipo de Cuenta del Ordenante
		 */
		public orpTiCuOr:string
		/**
		 * Cuenta del Ordenante
		 */
		public orpCueOrd:string
		/**
		 * Nombre del Ordenante
		 */
		public orpNomOrd:string
		/**
		 * RFC o CURP del Ordenante
		 */
		public orpDatOrd:string
		/**
		 * Institucion Receptora
		 */
		public orpInsRec:string
		/**
		 * Tipo de Cuenta del Beneficiario
		 */
		public orpTiCuBe:string
		/**
		 * Cuenta del Beneficiario
		 */
		public orpCueBen:string
		/**
		 * Nombre del Beneficiario
		 */
		public orpNomBen:string
		/**
		 * RFC o CURP del Beneficiario
		 */
		public orpDatBen:string
		/**
		 * Tipo de Cuenta del Beneficiario 2 (Adicional)
		 */
		public orpTiCuBA:string
		/**
		 * Cuenta del Beneficiario 2 (Adicional)
		 */
		public orpCuBeAd:string
		/**
		 * Nombre del Beneficiario 2 (Adicional)
		 */
		public orpNoBeAd:string
		/**
		 * RFC o CURP del Beneficiario 2 (Adicional)
		 */
		public orpDaBeAd:string
		/**
		 * Clave de Pago
		 */
		public orpClaPag:string
		/**
		 * Cantidad
		 */
		public orpCantid:number;
		/**
		 * IVA
		 */
		public orpIVA:number;
		/**
		 * Comision
		 */
		public orpComisi:number;
		/**
		 * Concepto de Pago
		 */
		public orpConPag:string
		/**
		 * Concepto de Pago 1
		 */
		public orpConPaU:string
		/**
		 * Concepto de Pago 2
		 */
		public orpConPaD:string
		/**
		 * Referencia de Cobranza
		 */
		public orpRefCob:string
		/**
		 * clave restreo
		 */
		public orpClaRas:string
		/**
		 * Causa de Devolucion
		 */
		public orpCauDev:string
		/**
		 * Tipo de Pago
		 */
		public orpTipPag:string
		/**
		 * Numero de transaccion del sistema
		 */
		public orpTraSis:string
		/**
		 * Fecha de la Orden
		 */
		public orpFecha:Date;
		/**
		 * Fecha y hora de envio ó recepcion de la orden
		 */
		public orpFecTra:Date;
		/**
		 * Fecha de impresion del comprobante
		 */
		public orpFeImCo:Date;
		/**
		 * Si el total de cheque incluye Comision e IVA
		 */
		public orpCheTot:string
		/**
		 * Forma de Pago paa envios
		 * CC      Cargo a Cuenta
		 * CP      Cheque Propio
		 * CJ      Cheque de Caja
		 * Forma de Pago paa recepcion
		 * AB      Abono a Cuenta 
		 */
		public orpForPag:string
		/**
		 * Numero de cheque
		 */
		public orpCheque:string
		/**
		 * RFC del Proveedor
		 */
		public orpRFCPro:string
		/**
		 * IVA del Proveedor
		 */
		public orpIVAPro:number;
		/**
		 * Usuario que Autoriza
		 */
		public orpAutori:string
		/**
		 * Usuario que Envia
		 */
		public orpUsuEnv:string
		/**
		 * Usuario que Captura la Orden de Pago
		 */
		public orpCaptur:string
		/**
		 * Status
		 * A Activa                 Envio - Recepcion
		 * O Cargada a Cuenta       Envio
		 * C Cancelada              Envio
		 * R Rechazada              Envio
		 * V Validada               Recepcion
		 * P Pagada                 Recepcion
		 * D Devuleta               Recepcion
		 * O Operada                Recepcion                                                   
		 */
		public orpStatus:string
		/**
		 * Status de Envio
		 * A Activa                 Envio - Recepcion
		 * E Autorizada para enviar Envio - Devolucion
		 * T Tramitada              Envio - Devolucion
		 * O Operada                Envio - Devolucion
		 */
		public orpStaEnv:string
		/**
		 * Paquete
		 */
		public orpPaquet:number;
		/**
		 * Consecutivo del Paquete
		 */
		public orpConPaq:number;
		/**
		 * Codigo de deteccion de errores
		 */
		public orpCDE:string
		/**
		 * Topologia
		 */
		public orpTopolo:string
		/**
		 * Prioridad
		 */
		public orpPriori:string
		/**
		 * Referencia numerica
		 */
		public orpRefNum:string
		/**
		 * Cuenta Transitoria
		 */
		public orpCueTra:string
		/**
		 * Folio del Servidor
		 */
		public orpFolSer:number;
		/**
		 * Codigo de Error
		 */
		public orpCodErr:string
		/**
		 * Fecha de Liquidación de la Orden de Pago
		 */
		public orpFecLiq:Date;
		/**
		 * Sucursal que Capturó la Orden
		 */
		public orpSucCap:string
		/**
		 * Movimiento de Compra/Venta en Modulo de Internacional que genera el registro en SPEI
		 */
		public orpMoCoVe:string
		/**
		 * TESORERIA-T USR PLATAFORMA-P
		 */
		public tipUsuari:string
		/**
		 * cero
		 */
		public orpLoClRa:number;
		/**
		 * Numero de transaccion
		 */
		public numTransac:string
		/**
		 * Transaccion
		 */
		public transaccio:string
		/**
		 * Usuario
		 */
		public usuario:string
		/**
		 * Fecha sistema
		 */
		public fechaSis:Date;
		/**
		 * Sucursal Origen
		 */
		public sucOrigen:string
		/**
		 * Sucursal Destino
		 */
		public sucDestino:string
		/**
		 * SP- Spei
		 */
		public modulo:string
		/**
		 * folio instruccion liquidacion
		 */
		public folio:number;
		/**
		 * numero consecutivo beneficiario
		 */
		public consecutivo:string
		/**
		 * referencia 2
		 */
		public referencia2:string
		/**
		 * direccion Ip Adress
		 */
		public tcpip:string
		/**
		 * codigo de seguridad
		 */
		public seguro:string
		/**
		 * usuario administrador NB
		 */
		public usuAdm:string
		/**
		 * banco
		 */
		public banco:string
		/**
		 * descripcion banco
		 */
		public desBanco:string
		/**
		 * usuario nueva banca
		 */
		public flagUsuNB:string
		/**
		 * El server ticket o request ID para Tipo de Token Movil o Fisico de Safenet
		 */
		public serverTicket:string
		/**
		 * medio origen
		 */
		public medioOrigen:number;
		/**
		 * referencia del medio 
		 */
		public refMedio:string
		/**
		 * estatus 
		 */
		public estatus:string
		/**
		 * orden de SPEI 
		 */
		public inst_pago_spei_id:string		
}