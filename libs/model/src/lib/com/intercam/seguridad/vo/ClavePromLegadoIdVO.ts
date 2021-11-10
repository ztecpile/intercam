export class ClavePromLegadoIdVO {

	public  clvPro: string;
	public  clvSuc: string;
	public  perId: number;
	/**
	* Id de la sucursal a la cual pertenece el promotor
	*/
	public sucClave: number;

	/**
	* Id del SubArea a la cual pertenece el promotor
	*/
	public sarClave: number;

	public toString(): string {
		return this.clvPro;
	}

}
