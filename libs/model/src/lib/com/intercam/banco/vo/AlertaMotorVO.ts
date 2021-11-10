import { Const } from "../../utils/Const";
import { AlertaStatusVO } from "./AlertaStatusVO";
import { OrigenAlertaVO } from "./OrigenAlertaVO";

export class AlertaMotorVO{
    constructor(
        public aleId?: number,
        public talId?: number,
        public alePrioridad?: number,
        public esaId?: string,
        public aleFecha?: Date,
        public usuUsuario?: string,
        public origenAlerta?: OrigenAlertaVO,
        public usuarioAtiende?: string,
        public observacion?: string,
        public ultimaActualizacion?: Date,
        public firma?: string,
        public alertaStatus?: AlertaStatusVO
    ){}

	/*
    getDescEstatus(): string
		{
			let descEstatusUPF : string ;
			if(this.esaId == "PD" ){
				descEstatusUPF = "Pendiente";
			}
			if(this.esaId == "AL"){
				descEstatusUPF = "Analisis";
			}
			if(this.esaId == "AA"){
				descEstatusUPF = "Atendida Analista";
			}
			if(this.esaId == "JA"){
				descEstatusUPF = "Justificada Analista";
			}
			if(this.esaId == "RA"){
				descEstatusUPF = "Rechazada Analista";
			}
			if(this.esaId == "AG"){
				descEstatusUPF = "Autorizado Gerente";
			}
			if(this.esaId == "RG"){
				descEstatusUPF = "Rechazada Gerente";
			}
			if(this.esaId == "EI"){
				descEstatusUPF = "Espera Infoprmacion";
			}
			if(this.esaId == ""){
				descEstatusUPF = "--";
			}
			
			return descEstatusUPF;
		}


        getDescripcionTipoAlerta():String
		{
			let descTipo : string ;
			if(this.talId == 1){
				descTipo = "ALERTA EN LINEA";
			}
			
			return descTipo;
		}
		
		getIconAlertaStatus(): string {
			let color : string = Const.GRIS_DESC;
			let estatusId : string = this.alertaStatus[0].stsClave;
			
			if( estatusId == 'PD' ){//pendiente
				color = Const.AMARILLO_DESC;
			} else if (estatusId == 'AL'){//analisis
				color = Const.AZUL_DESC;
			} else if (estatusId == 'EI'){//Espera de info
				color = Const.MORADO_DESC;
			} else if (estatusId == 'JA' || estatusId == 'AA'){ //justificada
				color = Const.VERDE_DESC;
			} else if (estatusId =='RA'){ //rechazada
				color = Const.ROJO_DESC;
			} else if (estatusId =='AG'){ //autorizada gerente
				color = Const.VERDEC_DESC;
			} else if (estatusId =='RG'){ //rechazada gerente
				color = Const.NARANJA_DESC;
			}
			
			return '../assets/' + color + '.png';
		}
		
		getDescAlertaStatus(): string
		{
			let descEstatusUPF : string ;
			let estatusId : string = this.alertaStatus[0].stsClave;
			if(estatusId == "PD" ){
				descEstatusUPF = "Pendiente";
			}
			if(estatusId == "AL"){
				descEstatusUPF = "Analisis";
			}
			if(estatusId == "AA"){
				descEstatusUPF = "Atendida Analista";
			}
			if(estatusId == "JA"){
				descEstatusUPF = "Justificada Analista";
			}
			if(estatusId == "RA"){
				descEstatusUPF = "Rechazada Analista";
			}
			if(estatusId == "AG"){
				descEstatusUPF = "Autorizado Gerente";
			}
			if(estatusId == "RG"){
				descEstatusUPF = "Rechazada Gerente";
			}
			if(estatusId == "EI"){
				descEstatusUPF = "Espera Infoprmacion";
			}
			if(estatusId == ""){
				descEstatusUPF = "--";
			}
			
			return descEstatusUPF;
		}*/
}