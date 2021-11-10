import { PipelineVO } from './PipelineVO';
export class ConsultaPipelineVO {

    public listaProspecto: PipelineVO[];
    public listaVisitado: PipelineVO[];
    public listaAlta: PipelineVO[];
    public listaCerro: PipelineVO[];
    //public listaCredito: PlProductoVO[];

    /* *************** Estadisticas ******************/
    /**
     * Prospectos
     **/
    public numProspectos: number;

    /**
     * Negocios
     * */
    public numNegocios: number;

    /**
     * Clientes
     **/
    public numClientes: number;

    /**
     * Suma total de numProspectos,
     * numNegocios y numClientes
     **/
    public numPipeline: number;

    /**
     * Total prospectos PM
     **/
    public numProspectosPM: number;

    /**
    * Promedio Cliente
    */
    public promCliente: number;

    /**
    * Promedio Operacion
    */
    public promClienteOp: number;

    /**
    *Almacena el total de aquellos que solo fueron prospectos 
    */
    public hastaProspecto: number;

    /**
    * Almacena el total de aquellos que solo llegaron hasta Visitado
    */
    public hastaVisita: number;

    /**
    * Almacena el total de aquellos que solo llegaron hasta el Alta
    */
    public hastaAlta: number;

    /**
    * Almacena el total de aquellos que si llegaron hasta cerrar una operacion
    */
    public hastaCierre: number;
}