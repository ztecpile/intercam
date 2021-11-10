import { NegociosClienteProspectoVO } from './NegociosClienteProspectoVO';
export class EstatusNegociosProspectoVO {

    /**
     * Almacena Id Persona prospecto.
     **/
    public perId: number;

    /**
     * Almacena Nombre Corto Persona Prospecto.
     **/
    public perNomCorto: string;

    /**
     * Almacena Nombre Comercial Persona Prospecto.
     **/
    public perNomComercial: string;

    /**
     * Almacena R.F.C. persona Prospecto.
     **/
    public perRfc: string;

    /**
     * Almacena los negocios del cliente
     */
    public negocios: NegociosClienteProspectoVO[];

    /**
     * Determina si el cliente ya cuenta con el documento FATCA (NO, SI)
     */
    public docFatca: boolean;

    /**
    * Determina si la persona esta bloqueada porque esta en revision analisis reporte 24 hrs
    */
    public perAnalisis: boolean;


}
