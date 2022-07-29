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
    arrPersonaCont: PersonaContratoVO[] = [];
    clienteSelecionado: PersonaContratoVO = null;
    displayedColumns: string[] = ['#', 'clave', 'nombre', 'estatus', 'observaciones', 'negocio'];
    nombreClaveBuscar: string;
    tipoDeDatoABuscar: number = 2;
    selected = -1;
    clienteSelecionadoBtn: boolean = false;
    dataSourceConcidencia: MatTableDataSource<PersonaContratoVO> = new MatTableDataSource();
    constructor(public dialogRef: MatDialogRef<DialogBuscarClienteComponent>, public _clienteService: ClienteService, private _personaContService: PersonaContService) {
        this.nombreClaveBuscar = "";
    }
    close() {
        this.dialogRef.close(this.clienteSelecionado);
    }

    selecionoUnCliente(i, row) {
        this.selected = i;
        this.clienteSelecionado = row;
        this.clienteSelecionadoBtn = true;
    }





    getRecord(row) {
        this.clienteSelecionado = row;
        console.log(this.clienteSelecionado);

    }


    findClientesVO(): void {
        var fillParameters: any[] = [];

        if (this.tipoDeDatoABuscar != 2) {
            fillParameters.push(null);
            fillParameters.push(this.nombreClaveBuscar.toUpperCase());
            fillParameters.push(null);
            fillParameters.push(null);
            fillParameters.push(4);
        }
        else {
            fillParameters.push(this.nombreClaveBuscar.toUpperCase());
            fillParameters.push(null);
            fillParameters.push(null);
            fillParameters.push(null);
            fillParameters.push(4);
        }

        console.log(this.tipoDeDatoABuscar,fillParameters);
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





