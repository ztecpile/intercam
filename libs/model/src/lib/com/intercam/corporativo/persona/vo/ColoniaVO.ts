import { MunicipVO } from "./MunicipVO";

    export class ColoniaVO
    {
        public  colClave : number;
        public  municipioVO : MunicipVO;
        public  colDescrip : string;
        public  colCPostal : string;
        public  colAsentami : string;
        public  colCiudad : string;
		public  colCityCodeBrx:string;
        /**
        * Constructor de la clase.
        */
        public ColoniaVO()
        {
            this.colDescrip = '';
            this.colCPostal = '';
            this.colAsentami = '';
            this.colCiudad = '';
			this.colCityCodeBrx = '';
            this.municipioVO = new MunicipVO();
        }
    }
