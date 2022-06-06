import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MatTableDataSource } from '@angular/material/table';
import { PersonaContratoVO } from "@intercam/model";
import { ClienteService } from "../services/clientes.service";
import { PersonaContService } from "../services/persona-cont.service";






@Component({
    selector: 'buscar-cliente.componet',
    templateUrl: './buscar-cliente.componet.html',
    styleUrls: ['./dialog-busca-ejecutivo.component.scss']
})

export class DialogBuscarClienteComponent {
    funcForm: FormGroup;
    arrPersonaCont: PersonaContratoVO [] = [];
    clienteSelecionado: PersonaContratoVO= null;
    displayedColumns: string[] = ['#','clave', 'nombre', 'estatus', 'observaciones', 'negocio'];
    nombreClaveBuscar:string;
    tipoDeDatoABuscar:number=2;
    selected = -1;
    clienteSelecionadoBtn:boolean=false;
    dataSourceConcidencia:MatTableDataSource<PersonaContratoVO> = new MatTableDataSource();
    constructor(public dialogRef: MatDialogRef<DialogBuscarClienteComponent>, public _clienteService: ClienteService, private _personaContService: PersonaContService) {
        this.nombreClaveBuscar="";
    }
    close() {
        this.dialogRef.close(this.clienteSelecionado);
    }

    selecionoUnCliente(i,row){
        this.selected = i; 
        this.clienteSelecionado=row;
        this.clienteSelecionadoBtn=true;
    }



   

    getRecord(row) {
        this.clienteSelecionado = row;
        console.log(this.clienteSelecionado);

    }


    findClientesVO(): void {
        var filtroProspecto: PersonaContratoVO;
        var criteriosValidos: Boolean = false;
        var estatusAdv: Number;
        var fillParameters: any[] = [];
        // Se inicializa, debido a que cuando se tiene la combinacion: Avanzada y solo seleccionados los radios
        //    de Contrato o RFC, no lleva valor (NaN) y en el assembler recupera este parametro levantando una
        //    excepcion de tipo ClassCastException.
        // Esto se acordo con Fredy, para que se resolviera el bug sin impactar en los tiempos
        var tipoProceso: Number = Number(this.tipoDeDatoABuscar);
        var tipoContratoAdv: Number;
        var tipoContrato: Number;
        var grupoDiaAdv: Number = -999;

        fillParameters.push(tipoProceso);
        fillParameters.push(undefined);
        if(this.tipoDeDatoABuscar==2)
        fillParameters.push(this.nombreClaveBuscar.toLocaleUpperCase());
        else         fillParameters.push('');

        fillParameters.push('');
        fillParameters.push(0);
        fillParameters.push(0)
        fillParameters.push(undefined);
        fillParameters.push(grupoDiaAdv);

        if(this.tipoDeDatoABuscar==1){
        fillParameters.push(Number(this.nombreClaveBuscar));
        fillParameters.push(this.nombreClaveBuscar);
        }
        else{
            fillParameters.push(0);
            fillParameters.push('');
        }
        fillParameters.push(undefined);
        fillParameters.push(null);

        console.log(fillParameters);
        this._personaContService.fill(fillParameters).subscribe(
            then => {
                console.log(then);
                this.arrPersonaCont = then;
  
                this.dataSourceConcidencia = new MatTableDataSource(this.arrPersonaCont);


            },
            error => console.error(error)
        );
    }
}





