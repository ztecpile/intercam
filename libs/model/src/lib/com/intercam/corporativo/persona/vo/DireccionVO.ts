import { PaisVO } from "../../centrocostos/vo/PaisVO";
import { TipoDireccionVO } from "./TipoDireccionVO";
import { ZonaMensajeriaVO } from "./ZonaMensajeriaVO";

export class DireccionVO {
    public dirId: Number;
    public perId: Number;
    public sucClave: Number;
    public tdiId: Number;
    public paiClave: Number;
    public dirFaltaStr: string;
    public envioDocumentos: Boolean;
    public dirCalle: string;
    public dirColonia: string;
    public dirNumeroInt: string;
    public dirMunicipio: string;
    public dirNumeroExt: string;
    public dirEntidadFed: string;
    public dirCodigoPostal: string;
    public dirEntreCalles: string;
    public dirEstatus: Boolean;
    public dirTipoInmueble: Boolean;
    public dirAtiende: string;
    public dirHorario: string;
    public usuUsuario: string;
    public munCnbvClave: string;
    public zomClave: string;
    public dirConsecLegado: Number;
    public dirEsRepetitiva: Boolean;
    public paisVO: PaisVO;
    public tipoDireccionVO: TipoDireccionVO;
    public zonaMensajeriaVO: ZonaMensajeriaVO;
    public entIsoCodeBrx: String;
    public colCityCodeBrx: String;
    public tteId: Number;

    /**
     * iable para indicar si la direccion ya esta asociada al ctto en DB.
     */
    public dirExistOnDB: Boolean;


    /**
    * iable para "preser" el numero telefonico en las repetitivas
    **/
    public codTelefono: string;
    /**
    * Telefono 1
    */
    public dirTelefono1: string;
    /**
    * Telefono 2
    */
    public dirTelefono2: string;
    /**
    * Telefono 3
    */
    public dirTelefono3: string;
    /**
    * Numero de FAX
    */
    public dirFax: string;
    /**
    * Extension
    */
    public dirExtension: string;
    /**
     * Apartado Postal
     * */
    public dirApPostal: string;

    /**
     * Ciudad
     */
    public dirCiudad: string;

    /**
     * Clave de municipio en sibamex
     */
    public munLocNumero: string;

    /**
     * Lista de tipos de direccion
     * */
    public listaConDireccion: any []; //ArrayCollection;


    /**
    * Constructor de la clase.
    */
    public DireccionVO() {
        this.dirCalle = null;
        this.dirColonia = null;
        this.dirNumeroInt = null;
        this.dirMunicipio = null;
        this.dirNumeroExt = null;
        this.dirEntidadFed = null;
        this.dirCodigoPostal = null;
        this.dirEntreCalles = null;
        this.dirEstatus = true;
        this.dirTipoInmueble = true;
        this.dirAtiende = null;
        this.dirHorario = null;
        this.usuUsuario = null;
        this.munCnbvClave = null;
        this.zomClave = null;
        this.paiClave = 0;
        this.paisVO = new PaisVO();
        this.paisVO.paiClave = 0;
        this.envioDocumentos = false;
        this.dirConsecLegado = 0;
        this.dirEsRepetitiva = false;
        this.dirCiudad = '';
       // this.listaConDireccion = new ArrayCollection();
        this.dirExistOnDB = true;
        this.entIsoCodeBrx = null;
        this.colCityCodeBrx = null;
    }
}
