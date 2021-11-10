import { GrupoProcesoIdVO } from './GrupoProcesoIdVO';

export class GrupoProcesoVO {
	public grupoProcesoIdVO: GrupoProcesoIdVO;
	public gppOrden: number;
	public tipo: number;
	public descProceso: string;

	public constructor() {
		this.grupoProcesoIdVO = new GrupoProcesoIdVO();
	}

	public toString(): string {
		return this.grupoProcesoIdVO.toString();
	}
}