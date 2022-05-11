export class PlantillaPolizaVO{
    constructor(
        public idPlantilla?: number,
        public divisa?: string,
        public compania?: string,
        public cuenta?: string,
        public x?: string,
        public y?: string,
        public fecha?: Date,
        public cargo?: number,
        public abono?: number,
        public descripcion?: string,
        public formulaCargo?: string,
        public formulaAbono?: string
    ){}
}