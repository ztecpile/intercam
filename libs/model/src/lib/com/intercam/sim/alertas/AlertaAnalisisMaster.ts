import { CasoAnalisisVO } from './CasoAnalisisVO';
import { AlertaAnalisis } from './AlertaAnalisis';
import { PersonaVO } from '../../corporativo/persona/vo/PersonaVO';
import { SucursalVO } from '../../corporativo/centrocostos/vo/SucursalVO';
import { PersonaRiesgoVO } from '../../corporativo/contrato/vo/PersonaRiesgoVO';
import { ConsultaSaldoVO } from '../../../../banco/ConsultaSaldoVO';
import { AlertaAnalisisContrato } from './AlertaAnalisisContrato';
import { AlertaAnalisisTranListGroup } from './AlertaAnalisisTranListGroup';

export class AlertaAnalisisMaster{
    constructor(

        public contratoPivote?: AlertaAnalisisContrato,
		
		public alertaAnalisis: AlertaAnalisis= new AlertaAnalisis,
		public personaVO?: any,
		public contratoList?: any[],
		public contratoListFull?: any[],
		private contratoListAux?: any[],
		public contratosSeleccionadosList?: any[],
		public transaccionList?: any[],
		public transaccionListVO?:  AlertaAnalisisTranListGroup,
		public listaDireccion?: any[],
		public personaPromotorVO?: PersonaVO,
		public sucursalVo?: SucursalVO,
		public personaRiesgoVO?: PersonaRiesgoVO,
		public nivRiesgo?: string,
		public paiNacionalidad?: string,
		public participanteList?: any[],
		public contratoListParticipacion?: any[],
		public consultaSaldo?: ConsultaSaldoVO,
		public consultaMov?: any[],
		public histPerRepList?: any[],
		public esEmpleado?: Boolean,
		public esCliente?: Boolean,
		public claveEmpleado?: string,
		public caso?: CasoAnalisisVO,

    ){}
}