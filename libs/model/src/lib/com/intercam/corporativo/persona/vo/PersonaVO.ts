import { PaisVO } from "../../centrocostos/vo/PaisVO";
import { ActividadEconomicaVO } from "./ActividadEconomicaVO";
import { PersonaMoralVO } from "./PersonaMoralVO";
import { SectorEconomicoVO } from "./SectorEconomicoVO";
import { TipoPersonaVO } from "./TipoPersonaVO";

export class PersonaVO {
    /**
     * Id de la persona.
     */
    public perId: number;
    /**
     * Tipo Persona.
     */
    public tipoPersonaVO: TipoPersonaVO;
    /**
     * RFC de la persona.
     */
    public perRfc: string;
    /**
     * Nombre corto de la persona.
     */
    public perNomCorto: string;
    /**
     * Nombre comercial.
     */
    public perNomComercial: string;
    /**
     * Clave del pais.
     */
    public paiClave: number;
    /**
     * Sector economico.
     */
    public sectorVO: SectorEconomicoVO;
    /**
     * Actividad economica.
     */
    public actividadVO: ActividadEconomicaVO;
    public perTipInver: string;
    public perTipoImpuestos: string;
    /**
     * Fecha de alta.
     */
    public perFaltaStr: string;
    /**
     * Fecha de ultima modificacion.
     */
    public perFultModStr: string;
    /**
     * Fecha de alto riesgo.
     */
    public perFaltoRiesgoStr: string;
    public perOperaIntercam: string;
    /**
     * Estatus.
     */
    public perEstatus: boolean;
    /**
     * Codigo de riesgo.
     */
    public perAltoRiesgo: string;

    /**
     * Codigo de riesgo.
     */
    public perAutCompInfo: string;

    /**
     * Nacionalidad.
     */
    public perNacionalidad: boolean;
    /**
     * Pagina web.
     */
    public perPagWeb: string;
    /**
     * Nivel VIP de la persona.
     */
    public perEsVip: string;
    /**
     * Observaciones.
     */
    public perBuroObs: string;
    /**
     * Numero de empleados.
     */
    public perNumEmpleado: number;
    /**
     * Id de la categoria.
     */
    public cpeId: number;
    /**
     * Usuario.
     */
    public usuUsuario: string;
    public tilId: number;
    public ejecutivoId: number;
    /**
     * Fecha de alta a la SHCP.
     */
    public perFaltaShcpStr: string;
    /**
     * Observaciones del porque un contrato en Mexico.
     */
    public perObserExtranjero: string;
    /**
     * Guarda el rfc generado, en lugar del capturado.
     */
    public perRfcGenerado: string;
    /**
     * Clave del pais de residencia.
     */
    public paiClaveResidencia: number; // pai_clave_residencia
    /**
     * Clave de la entidad.
     */
    public entClave: number;           // ent_calve
    private _perFiel: string;
    private _perClasif: string;

    public perFfielStr: string;
    /**
     * Actividad Inegi.
     */
    public perActInegi: string;
    /**
     * Motivo de apertura.
     */
    public perMotivoAper: string;//per_motivo_aper
    /**
     * Id del corporativo.
     */
    public pemIdCorporativo: number;
    /**
     * Tiene familiares que son Peps. (El concepto PEP aplica a mi persona)
     */
    public pefEsPeps: boolean;
    /**
     * La persona es Pep.
     */
    public pefPeps: boolean;
    /**
     * Nombre del PEP.
     */
    public pefNombrePeps: string;
    /**
     * Participacion.
     */
    public perParticipacionCorp: number;

    /**
     * Indica si reside en territorio nacional o en el extranjero
     */
    public perResidencia: string;

    /**
     * representa el camo fiel de persona
     */
    private _pefFiel: string;

    /**
     * Tipo de Cartera.
     */
    public tipoCartera: any;//TipoCartera; 

    /**
     * Objeto personaVO asociado al Corporativo
     */
    public corpPersonaMoralVO: PersonaMoralVO;

    /**
     * Indicador es Prospecto.
     **/
    public perEsProspecto: string;

    /**
     * Pais de residencia de las personas fisicas
     * */
    public residenciaVO: PaisVO;

    /**
     * indica si la persona esta bloqueada por el area de cumplimiento
     * */
    public perBloqueada: boolean;

    /**
     * almacena si la persona es un asesor de inversion
     * TRUE = Si es asesor de inversion
     * FALSE = No es asesor de inversion
     */
    public esAsesorInv: boolean;

    /**
     * almacena si el asesor de inversion tiene registro
     * TRUE = Si tiene registro
     * FALSE = No tiene registro
     */
    public tieneRegistroAsesor: boolean;


    /**
     * Fecha de registro del asesor de inversion
     */
    public fRegistroAsesorStr: string;

    /**
     * cuenta banxico
     */
    public perCtaBanxico: string;

    /**
     * Pais Clave de Residencia Fiscal
     */
    public paiClaveFiscal: number;

    /**
     * Solicita Beneficio Fiscal (Si tiene Pais Fiscal)
     */
    public paiFiscalBeneficio: boolean;

    /**
     * Almacena el valor IdBanxico generado al consultar el algoritmo. 
     */
    public idBanxico: string;

    /**
     * Guarda descripcion del pais 
     */
    public paiClaveDesc: string;

    /**
     * Almacena el resultado obtenido al consumir el servicio para generar el IdBanxico, si genero un error, se almacena
     * este error en este campo
     */
    public idBanxicoStatus: string;

    /**
     * Estatus para la validación del RFC del Titular
     * */
    public validaRfc: boolean;

    /**
    * Codigo LEI
    * */
    public perCodigoLei: string = '';

    /**
     * Vigencia Codigo LEI
     * */
    public perFVigenciaCodLei: Date;

    /**
     * Estatus de la solicitud de revision
     * */
    public perAnalisis: boolean;

    /**
     * Descripcion del la nacionalidad
     * */
    public paiResiDesc: string;

    public get perClasif(): string {
        return this._perClasif;
    }

    public set perClasif(value: string) {
        this._perClasif = value;
    }

    public get perFiel(): string {
        return this._perFiel;
    }

    public set perFiel(value: string) {
        this._perFiel = value;
    }

    /**
     * obtiene el valor _pefFiel
     */
    public get pefFiel(): string {
        return this._pefFiel;
    }

    /**
     * asigna el valor _pefFiel
     */
    public set pefFiel(valor: string) {
        this._pefFiel = valor;

    }

    /**
     * Giro o sector economico
     */
    public perSectorGiro: string;

    /**
    * Determina si es una persona vulnerable
    */
    public perEsVulnerable: boolean;

    /**
     * Constructor de la clase.
     */
    public PersonaVO() {
        this.perNumEmpleado = 0;
        this.tipoPersonaVO = new TipoPersonaVO();
        this.actividadVO = new ActividadEconomicaVO();
        this.residenciaVO = new PaisVO();
        this.perFaltaStr = '';
        this.perFultModStr = '';
        this.perFaltoRiesgoStr = '';
        this.perFaltaShcpStr = '';
        this.perAltoRiesgo = '0';
        this.perAutCompInfo = '0';
        this.perParticipacionCorp = 0;
        this.sectorVO = new SectorEconomicoVO();
        this.perResidencia = 'N';
        this.perEstatus = true;
        this.fRegistroAsesorStr = '';
        this.perCtaBanxico = '';
        this.perFfielStr = '';
        this.idBanxico = '';
        this.idBanxicoStatus = '';
    }
    /**
     * Obtiene la representación string del objeto.
     */
    public tostring(): string {
        return this.perId.toString();
    }

    // public set corPersonaMoralVO(corPersonaMoralVO: PersonaMoralVO) {
    //     this.corpPersonaMoralVO = corPersonaMoralVO;
    //     this.pemIdCorporativo = corPersonaMoralVO ? corPersonaMoralVO.perId : 0;
    // }

    public get corPersonaMoralVO(): PersonaMoralVO {
        return this.corpPersonaMoralVO;
    }

    /**
     * @return El Nombre completo de la persona.
     * Es override en personaMoralVO, para regresar la Razon Social en caso de persona moral
     */
    public getPerNomCompleto(): string {
        return this.perNomCorto;
    }
}
