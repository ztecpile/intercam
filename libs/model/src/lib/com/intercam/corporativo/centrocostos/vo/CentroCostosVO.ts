
export class CentroCostosVO {
    public ccoClave:number;
    public ccoEstatus: boolean;
    public paiClave:number;
    public paiDescripcion: string;
    public ciaId:number;
    public ciaDescripcion: string;
    public regClave:number;
    public regionDescripcion: string;
    public sucClave:number;
    public sucursalDescripcion: string;
    public sucTieneMesa: boolean;
    public tmpSucOpera: string;
    public sucSica: string;
    public areaClave:number;
    public areaDescripcion: string;
    public sarClave:number;
    public subAreaDescripcion: string;
    public gruClave:number;
    public grupoDescripcion: string;
    public color: string;
    public munClave:number;
    public munDescripcion: string;
    public entClave:number;
    public entDescripcion: string;
    public children: CentroCostosVO[];
    public descripcion: string;
    public flag: boolean;
    /**
    * Constructor de la clase.
    */
    public constructor() {
        this.flag = false;
    }

    public  tostring(): string {
        return this.descrip();
    }

    private descrip(): string {
        let descripcion: string;
        if (this.regionDescripcion == '') //Nivel compania
        {
            descripcion = this.ciaDescripcion;
        }
        else if (this.munDescripcion == '') //Nivel region
        {
            descripcion = this.regionDescripcion;
        }
        else if (this.sucursalDescripcion == '') //Nivel municipio
        {
            descripcion = this.entDescripcion + ' ' + this.munDescripcion;
        }
        else if (this.grupoDescripcion == '') //Nivel sucursal
        {
            descripcion = this.sucursalDescripcion;
        }
        else if (this.areaDescripcion == '') //Nivel grupo
        {
            descripcion = this.grupoDescripcion;
        }
        else if (this.subAreaDescripcion == '') //Nivel area
        {
            descripcion = this.areaDescripcion;
        }
        else {
            descripcion = this.subAreaDescripcion;
        }
        return descripcion;

    }
}
