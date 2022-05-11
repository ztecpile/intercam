export class PermisoReporteVO {
    constructor(
        public prtId?: number,
        public usuClave?: number,
        public usuUsuario?: string,
        public perNomCorto?: string,
        public tirId?: number,
        public tirTipo?: string,
        public tirDescripcion?: string,
        public tirPantalla?: string,
        public prtEstatus?: string,
    ) {}
  }
  