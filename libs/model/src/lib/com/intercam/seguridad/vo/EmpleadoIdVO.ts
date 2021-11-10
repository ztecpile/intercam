
export class EmpleadoIdVO {
	public cvetra: string;
	public cvecia: string;

	public constructor() {
		this.cvetra = '';
		this.cvecia = '';
	}
	public toString(): string {
		return this.cvetra + ',' + this.cvecia;
	}
}