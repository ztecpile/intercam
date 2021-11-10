
/* eslint-disable @typescript-eslint/no-inferrable-types */
export class ClasificacionPldVO {

	public idClasifDetalle: number = 0;
	public descClasifPrinc: string;
	public descClasifDetalle: string;
	public montoLimite: number = 0;
	public label: string = "";
	public key: string = "";

	public toString(): string {
		return this.idClasifDetalle + ':' + this.descClasifPrinc + ':' + this.descClasifDetalle;
	}


}
