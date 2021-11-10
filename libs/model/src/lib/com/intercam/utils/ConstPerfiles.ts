
export abstract class ConstPerfiles {

    public static readonly TITULAR_CAMBIOS_FISICA: number = 3;
    public static readonly CONTACTO_CAMBIOS_FISICA: number = 28;
    public static readonly TITULAR_CAMBIOS_MORAL: number = 1;
    public static readonly APODERADO_CAMBIOS_MORAL: number = 2;
    public static readonly CONTACTO_CAMBIOS_MORAL: number = 27;

    public static readonly TUTOR_FONDOS_FISICA: number = 4;
    public static readonly PADRE_FONDOS_FISICA: number = 5;
    public static readonly MADRE_FONDOS_FISICA: number = 6;
    public static readonly TITULAR_FONDOS_FISICA: number = 7;
    public static readonly PERAUTORIZADA_FONDOS_FISICA: number = 8;
    public static readonly COTITULAR_FONDOS_FISICA: number = 9;
    public static readonly BENEFICIARIO_FONDOS_FISICA: number = 10;
    public static readonly BENEFICIARIOSUP_FONDOS_FISICA: number = 11;
    public static readonly TERCEROS_FONDOS_FISICA: number = 12;
    public static readonly TITULAR_FONDOS_MORAL: number = 13;
    public static readonly PERSONAAUT_FONDOS_MORAL: number = 14;
    public static readonly ABOGADO_FONDOS_MORAL: number = 15;
    public static readonly APODERADO_FONDOS_MORAL: number = 16;
    public static readonly TERCEROS_FONDOS_MORAL: number = 17;

    public static readonly COTITULAR_BOLSA_FISICA: number = 18;
    public static readonly BENEFICIARIO_BOLSA_FISICA: number = 19;
    public static readonly TITULAR_BOLSA_FISICA: number = 20;
    public static readonly AUTORIZADA_BOLSA_FISICA: number = 21;
    public static readonly DUENORECURSOS_BOLSA_FISICA: number = 22;
    public static readonly TITULAR_BOLSA_MORAL: number = 23;
    public static readonly APODERADO_BOLSA_MORAL: number = 24;
    public static readonly DUENORECURSOS_BOLSA_MORAL: number = 25;
    public static readonly AUTORIZADA_BOLSA_MORAL: number = 26;
    public static readonly CONFIRMA_OPERACIONES_BOLSA_MORAL: number = 61;
    public static readonly CONFIRMA_OPERACIONES_BOLSA_FISICA: number = 62;

    public static readonly TERCERO_AUTORIZADO_FISICA: number = 29;
    public static readonly TERCERO_AUTORIZADO_MORAL: number = 30;

    // Tipos de perfiles CONTRATO DOS (ID)
    public static readonly PERF_ID_PRM_CDOS_FIS: number = 32;  // TITULAR       // PRIMARY ACCOUNT HOLDER
    public static readonly PERF_ID_SEC_CDOS_FIS: number = 34;  // COTITULAR     // SECONDARY ACCOUNT HOLDER
    public static readonly PERF_ID_BENF_CDOS_FIS: number = 36;  // BENEFICIARIO  // BENEFICIARY
    public static readonly PERF_ID_PRM_CDOS_MOR: number = 33;  // TITULAR       // PRIMARY ACCOUNT HOLDER
    public static readonly PERF_ID_GPMM_CDOS_MOR: number = 35;  // APODERADO     // GENERAL PARTNER/MANAGING MEMBER
    public static readonly PERF_ID_BCON_CDOS_FIS: number = 42;     // BENEFICIARIO CONTINGENTE  // CONTINGENT BENEFICIARY

    // Tipos de perfiles CONTRATO DOS (DESCRIPCION)
    public static readonly PERF_CONT: string = "CONTACTO";            // Contacto
    public static readonly PERF_PRM: string = "TITULAR";                  // PRIMARY ACCOUNT HOLDER
    public static readonly PERF_SEC: string = "COTITULAR";               // SECONDARY ACCOUNT HOLDER
    public static readonly PERF_BENF: string = "BENEFICIARIO";          // BENEFICIARY
    public static readonly PERF_BCON: string = "BENEFICIARIO CONTINGENTE";          // CONTINGENT BENEFICIARY
    public static readonly PERF_IPTY: string = "PARTE INTERESADA";  // "INTERESTED PARTY"; // Partes Interesadas
    public static readonly PERF_AUTORIZADO: string = "PER. AUTORIZADA"; //  Persona Autorizada

    public static readonly TCON_CASA_CAMBIOS: number = 1;
    public static readonly TCON_FONDOS: number = 2;
    public static readonly TCON_CASA_BOLSA: number = 3;
    public static readonly TCON_CDOS: number = 4;

    // PERFILES CONTRATO 6 TARJETA DE CREDITO
    public static readonly TITULAR_MORAL_TDC: number = 82;
    public static readonly APODERADO_MORAL_TDC: number = 83;
    public static readonly TITULAR_FISICA_TDC: number = 84;
    public static readonly ADICIONAL_FISICA_TDC: number = 85;
    public static readonly ADICIONAL_MORAL_TDC: number = 88;
    public static readonly CONFIRMA_OPERACIONES_TDC_MORAL: number = 86;
    public static readonly CONFIRMA_OPERACIONES_TDC_FISICA: number = 87;


    // PERFILES CONTRATO 7 FIDEICOMISO
    public static readonly TCON_FIDE_FIDEICOMITENTE_PF: number = 92;
    public static readonly TCON_FIDE_FIDEICOMITENTE_PM: number = 93;
    public static readonly TCON_FIDE_FIDEICOMISARIO_PF: number = 94;
    public static readonly TCON_FIDE_FIDEICOMISARIO_SUS_PF: number = 95;
    public static readonly TCON_FIDE_AUTORIZADA_PF: number = 97;

    public static readonly result: number = 0;
    private static readonly instance: ConstPerfiles;


    // PERFILES DE BANCO
    public static readonly TCON_BANCO_FISICA_TITULAR: number = 31;
    public static readonly TCON_BANCO_FISICA_COTTITULAR: number = 32;
    public static readonly TCON_BANCO_MORAL_AUTORIZADA: number = 41;
    public static readonly TCON_BANCO_MORAL_APODERADO: number = 38;
    public static readonly TCON_BANCO_MORAL_CONFIRMA_OPERACIONES: number = 86;
    public static readonly TCON_BANCO_FISICA_CONFIRMA_OPERACIONES: number = 87;


    public static getPerfil(perfId: number): string {
        let res = '';
        switch (perfId) {
            case ConstPerfiles.TITULAR_CAMBIOS_FISICA:
                res = "TITULAR";
                break;
            case ConstPerfiles.CONTACTO_CAMBIOS_FISICA:
                res = "CONTACTO";
                break;
            case ConstPerfiles.TITULAR_CAMBIOS_MORAL:
                res = "TITULAR";
                break;
            case ConstPerfiles.APODERADO_CAMBIOS_MORAL:
                res = "APODERADO";
                break;
            case ConstPerfiles.CONTACTO_CAMBIOS_MORAL:
                res = "CONTACTO";
                break;

            case ConstPerfiles.TUTOR_FONDOS_FISICA:
                res = "TUTOR";
                break;
            case ConstPerfiles.PADRE_FONDOS_FISICA:
                res = "PADRE";
                break;
            case ConstPerfiles.MADRE_FONDOS_FISICA:
                res = "MADRE";
                break;
            case ConstPerfiles.TITULAR_FONDOS_FISICA:
                res = "TITULAR";
                break;
            case ConstPerfiles.PERAUTORIZADA_FONDOS_FISICA:
                res = "PERSONA AUTORIZADA";
                break;
            case ConstPerfiles.COTITULAR_FONDOS_FISICA:
                res = "COTITULAR";
                break;
            case ConstPerfiles.BENEFICIARIO_FONDOS_FISICA:
                res = "BENEFICIARIO";
                break;
            case ConstPerfiles.BENEFICIARIOSUP_FONDOS_FISICA:
                res = "BENEFICIARIO SUPLENTE";
                break;
            case ConstPerfiles.TERCEROS_FONDOS_FISICA:
                res = "TERCEROS";
                break;
            case ConstPerfiles.TITULAR_FONDOS_MORAL:
                res = "TITULAR";
                break;
            case ConstPerfiles.PERSONAAUT_FONDOS_MORAL:
                res = "PERSONA AUTORIZADA";
                break;
            case ConstPerfiles.ABOGADO_FONDOS_MORAL:
                res = "ABOGADO";
                break;
            case ConstPerfiles.APODERADO_FONDOS_MORAL:
                res = "APODERADO";
                break;
            case ConstPerfiles.TERCEROS_FONDOS_MORAL:
                res = "TERCEROS";
                break;


            case ConstPerfiles.COTITULAR_BOLSA_FISICA:
                res = "COTITULAR";
                break;
            case ConstPerfiles.BENEFICIARIO_BOLSA_FISICA:
                res = "BENEFICIARIO";
                break;
            case ConstPerfiles.TITULAR_BOLSA_FISICA:
                res = "TITULAR";
                break;
            case ConstPerfiles.AUTORIZADA_BOLSA_FISICA:
                res = "AUTORIZADA";
                break;
            case ConstPerfiles.DUENORECURSOS_BOLSA_FISICA:
                res = "DUEÑO RECURSOS";
                break;
            case ConstPerfiles.TITULAR_BOLSA_MORAL:
                res = "TITULAR";
                break;
            case ConstPerfiles.APODERADO_BOLSA_MORAL:
                res = "APODERADO";
                break;
            case ConstPerfiles.DUENORECURSOS_BOLSA_MORAL:
                res = "DUEÑO RECURSOS";
                break;
            case ConstPerfiles.AUTORIZADA_BOLSA_MORAL:
                res = "AUTORIZADA";
                break;

            case ConstPerfiles.PERF_ID_PRM_CDOS_FIS:
                res = "TITULAR";
                break;

            case ConstPerfiles.TERCERO_AUTORIZADO_FISICA:
                res = "TERCERO AUTORIZADO F";
                break;
            case ConstPerfiles.TERCERO_AUTORIZADO_MORAL:
                res = "TERCERO AUTORIZADO M";
                break;

        }
        return res;
    }
}