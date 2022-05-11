export class BitacoraLinea{
    constructor(
        public idBil?: number,
        public bilLegada?: string,
        public bilTipMov?: string,
        public bilOldReg?: string,
        public bilNewReg?: string,
        public bilFechaReg?: Date,
        public bilUsuario?: string,
        public bilObservacion?: string
    ){}
}