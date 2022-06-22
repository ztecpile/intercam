import { Component, ViewChild } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { EjecutivoSucursalVO } from "@intercam/model";
import { EmpleadoService } from "../services/empleado.service";


@Component({
    selector: 'buscar-cliente-componet',
    templateUrl: './dialog-buscar-empleado.component.html',
    styleUrls: ['./dialog-buscar-empleado.component.scss']
})

export class BuscarEmpleadoComponet {
    dataSource: MatTableDataSource<EjecutivoSucursalVO>;
    displayedColumns = ["nombre_completo", "nombre"];
    selectedRow: EjecutivoSucursalVO= new EjecutivoSucursalVO;
    texto_buscar:string;
    @ViewChild(MatPaginator) paginator:MatPaginator;
    constructor(private _empleadoService: EmpleadoService, public dialogRef: MatDialogRef<BuscarEmpleadoComponet>) {
   
    }
    findEmpleados() {
        this._empleadoService.findEmpleados(this.texto_buscar).subscribe(then => {
            this.dataSource = new MatTableDataSource(then);
            this.dataSource.paginator=this.paginator;
        });
    }

    getRecord(row) {
        this.selectedRow = row;
    }

    close() {
        this.dialogRef.close();
    }

    selecionoEmpleado(){
        this.dialogRef.close({data: this.selectedRow});

    }
}