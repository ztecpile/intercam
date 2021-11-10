import { TipoMensajeSisVO } from './TipoMensajeSisVO';

export class MensajeSisVO {
    public medId: number;
    public mesMensajeEs: string;
    public mesMensajeEn: string;
    public mesBoton1: string;
    public mesBoton2: string;
    public mesBoton3: string;
    public tmsIdVO: TipoMensajeSisVO;
    public sisId: number;

    /**
    * Constructor de la clase.
    */
    public constructor() {
        this.mesMensajeEs = '';
        this.mesMensajeEn = '';
        this.mesBoton1 = '';
        this.mesBoton2 = '';
        this.mesBoton3 = '';
        this.tmsIdVO = new TipoMensajeSisVO();
    }
}

