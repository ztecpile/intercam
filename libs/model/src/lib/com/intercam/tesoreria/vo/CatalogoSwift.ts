export class CatalogoSwift {
    constructor(
        public swiftId: number,
        public swiftClave?: string,
        public swiftPais?: string,
        public swiftCiudad?: string,
        public swiftBanco?: string,
        public swiftBranch?: string,
        public swiftStatus?: string,
        public swiftStatusDesc?: string
    ) {}
}