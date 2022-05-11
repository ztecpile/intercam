
export class BusquedaBatchVO{
  idBusqueda : Number;
  idCasoAnalisis : Number;
  tipoBusqueda : String;
  direccion : String;
  url : String;
  idEvidencia : String;
  fecha : Date;

  constructor(
		idBusqueda?: number,
		idCasoAnalisis?: number,
		tipoBusqueda?: string,
		direccion?: string,
		url?: string,
		idEvidencia?: string,
		fecha?: Date
    ){

      this.idBusqueda = idBusqueda;
      this.idCasoAnalisis = idCasoAnalisis;
      this.tipoBusqueda = tipoBusqueda;
      this.direccion = direccion;
      this.url = url;
      this.idEvidencia = idEvidencia;
      this.fecha = fecha;
    
    }

}