import { EmpleadoIdVO } from './EmpleadoIdVO';

export class EmpleadoVO {


    public idVO: EmpleadoIdVO;
    public cveare: string;
    public cvedep: string;
    public sucurs: string;
    public numrfc: string;
    public nombre: string;
    public apepat: string;
    public apemat: string;
    public cvepue: string;
    public email: string;
    public sexo: string;
    public curp: string;
    public fecNacStr: string;
    public numIms: string;
    public cveubi: number;
    public status: string;
    public ciadescrip: string;
    public cvetno: string;

    public calle: string;
    public numext: string;
    public numint: string;
    public coloni: string;
    public codpos: string;
    public ctaban: string;
    public despue: string;
    public fecalt: Date;
    /**
     * Clave de banco.
     */
    public cveBan: number;

    public constructor() {
        this.idVO = new EmpleadoIdVO();
    }

}
