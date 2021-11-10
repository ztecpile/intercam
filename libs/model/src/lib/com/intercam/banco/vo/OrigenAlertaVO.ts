export class OrigenAlertaVO{
    constructor(
        public oalId?: number,
        public aleId?: number,
        public oalBeneficiario?: string,
        public oalNombreCliente?: string,
        public oalRfc?: string,
        public oalRfcCliente?: string,
        public oalFechaNacimiento?: Date,
        public oalTipoTransaccion?: string,
        public oalFormaPago?: string,
        public oalInstrumento?: string,
        public oalReferencia?: string,
        public oalCuentaOrigen?: string,
        public oalCuentaDestino?: string,
        public oalDivisa?: string,
        public oalImporte?: number,
        public oalTipoCambio?: number,
        public oalContraparte?: string,
        public oalPaisOrigen?: string,
        public oalPaisDestino?: string,
        public oalSwitfAba?: string,
        public oalObservaciones?: string,
        public oalIdObservacion?: number,
        public oalCanal?: number,
        public descTipoTransaccion?: string,
        public descCanal?: string,
        public oalIp?: string,
        public valUPF?: string,
        public oalGirador?: string,
        public oalDirCalle?: string,
        public oalDirPais?: string,
        public oalDirCiudad?: string,
        public oalMotivoOpe?: string,
        public oalCuestionarioId?: number,
        public oalDocumentoId?: number,
        public tConId?: number,
        public tpeClave?: string,
        public oalTipoCuenta?: string,
        public descTpeClave?: string,
        public oalTelefonoBeneficiario?: string,
        public oalCorreoBeneficiario?: string,
        public oalFechaOper?: Date,
        public oalFcName?: string,
        public oalAtencion?: string,
        public oalFechaUpf?: Date,
        public oalIntermediario?: string,
        public oalIdItermediario?: string,
        public oalPaisIntermediario?: string,

        public oalEntidadEmisora?: string,
		public oalNombreRemitente?: string,
		public oalDireccionRemitente?: string,
		public oalPaisRemitente?: string,
		public oalCiudadRemitente?: string
    ) {}
}