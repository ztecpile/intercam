import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { BolsaVO, EjecutivoAsistenteIdVO, EjecutivoAsistenteVO } from "@intercam/model";
import { BuscarEmpleadoComponet } from "libs/shred-components/src/lib/dialog/dialog-buscar-empleado/dialog-buscar-empleado.component";
import { AcctionButtonsComponent } from "libs/shred-components/src/lib/form/acction-buttons/acction-buttons.component";
import { AsignarAsistenteServices } from "../../services/asignar-asistente.service";


@Component({
    selector: 'asignar-asistente-component',
    templateUrl: './asignar-asistente.component.html'
})


export class AsignarAsistenteComponent implements AfterViewInit {
    @ViewChild(AcctionButtonsComponent) _acctionButtonsComponent: AcctionButtonsComponent;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(private _asignarAsistenteServices: AsignarAsistenteServices, private dialog: MatDialog) {
        this.findPerAsistente();
    }

    MODO_ALTA: boolean = false;

    ngAfterViewInit(): void {
        this._acctionButtonsComponent.hiddeBtnConsulta(true);

    }
    displayedColumns = ["nombre", "sucursal", "estatus"];
    dataSource: MatTableDataSource<EjecutivoAsistenteVO>;
    selectedRow = new EjecutivoAsistenteVO;

    findPerAsistente() {
        this._asignarAsistenteServices.findPerAsistente().subscribe(then => {
            this.dataSource = new MatTableDataSource(then);
            this.dataSource.paginator = this.paginator;
        });
    }

    buscarEmpleado() {
        this.dialog.open(BuscarEmpleadoComponet).afterClosed().subscribe((result) => {
            if (result !== undefined) {
                /*
                                let obj:EjecutivoAsistenteIdVO = {
                    asistenteId: 14,
                    ejecutivoId: 935,
                    nombreEjecutivo: "Prueba"
                };
                 let obj2:EjecutivoAsistenteVO={
                     idVO: obj,
                     asistenteId: 14,
                     ejecutivoId: 935,
                     nombreEjecutivo: "Prueba",
                     sucursal: "Sucursal",
                     estatus: false,
                     EjecutivoAsistenteVO: function (): void {
                         throw new Error("Function not implemented.");
                     }
                 }
                */
               this.selectedRow= new EjecutivoAsistenteVO();
               this.selectedRow.idVO= new EjecutivoAsistenteIdVO();
                this.selectedRow.idVO.asistenteId =result['data'].perIdEjecutivo;
                this.selectedRow.idVO.ejecutivoId=935;
                this.selectedRow.idVO.nombreEjecutivo=result['data'].nomEjecutivo;
                this.selectedRow.idVO["tipoAsistente"]="P";
                this.selectedRow.asistenteId=result['data'].perIdEjecutivo;
                this.selectedRow.ejecutivoId=935;
                this.selectedRow.nombreEjecutivo=result['data'].nomEjecutivo;
                this.selectedRow.sucursal=result['data'].sucDescripcion;
                this.selectedRow.estatus=false;
                this.selectedRow["tipoAsistente"]="P";
                
            }
        });;
    }

    getRecord(row) {
        if (this._acctionButtonsComponent.isModoConsulta()) {
            this.selectedRow = row;
            this._acctionButtonsComponent.setFilaSelecionada(row);
        }

    }
    onModoConsultaClick() {

    }
    onModoAltaClick() {
        this.MODO_ALTA = true;
        this.selectedRow = new EjecutivoAsistenteVO();
    }
    onModoEliminarClick() {
        this._asignarAsistenteServices.eliminarPerAsistente(this.selectedRow).subscribe(then => {
            this.findPerAsistente();
        })
    }
    onModoGuardarClick() {
        this._asignarAsistenteServices.crearPerAsistente(this.selectedRow).subscribe(then => {
            this.findPerAsistente();
            this.selectedRow= new EjecutivoAsistenteVO;
        });
    }
    onModoActualizarClick() {
        this._asignarAsistenteServices.crearPerAsistente(this.selectedRow).subscribe(then => {
            this.findPerAsistente();
            this.selectedRow= new EjecutivoAsistenteVO;
        });
    }

}