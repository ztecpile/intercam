export class EjecutivoSucursalVO {

    /**
     * Almacena el perId del Ejecutivo
     */
    public perIdEjecutivo: number;

    /**
     * Almacena el usu_usuario del ejecutivo
     */
    public usuEjecutivo: string;

    /**
     * Almacena el nombre del ejecutivo
     */
    public nomEjecutivo: string;

    /**
     * Almacena el centro de costo al cual pertenece el ejecutivo
     */
    public ccoClave: number;

    /**
     * Almacena la clave de region a la que pertenece el ejecutivo
     */
    public regClave: number;

    /**
     * Almacena la descripcion de la region a la que pertenece el ejecutivo
     */
    public regDescripcion: string;

    /**
     * Almacena la clave de la sucursal a la que pertenece el ejecutivo
     */
    public sucClave: number;

    /**
    * Almacena la descripcion de la sucursal a la que pertenece el ejecutivo
    */
    public sucDescripcion: string;

    /**
    * Almacena la clave del area a la que pertenece el ejecutivo
    */
    public areClave: number;

    /**
    * Almacena la descripcion del area a la que pertenece el ejecutivo
    */
    public areDescripcion: string;

    /**
    * Almacena la clave de la sub area a la que pertenece el ejecutivo
    */
    public sarClave: number;

    /**
    * Almacena la descripcion de la sub area a la que pertenece el ejecutivo
    */
    public sarDescripcion: string;

}