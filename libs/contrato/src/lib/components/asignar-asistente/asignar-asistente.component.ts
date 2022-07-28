import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { EjecutivoAsistenteIdVO, EjecutivoAsistenteVO, UsuarioVO } from "@intercam/model";
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
    @ViewChild(MatSort) sort: MatSort;

    ejecutivo: UsuarioVO;
    tipoAsistente: String = "-1";
    displayedColumns = ["nombre", "sucursal", "estatus"];
    dataSource: MatTableDataSource<EjecutivoAsistenteVO> = new MatTableDataSource();
    dataSourceBkp: EjecutivoAsistenteVO[] = [];
    selectedRow = new EjecutivoAsistenteVO;


    constructor(private _asignarAsistenteServices: AsignarAsistenteServices, private dialog: MatDialog) {
        this.ejecutivo = JSON.parse(sessionStorage.getItem("usuarioVO")) as UsuarioVO;
        console.log(this.ejecutivo.idPersona);
    }

    MODO_ALTA: boolean = false;

    ngAfterViewInit(): void {
        this._acctionButtonsComponent.hiddeBtnConsulta(true);
        this.paginator._intl.itemsPerPageLabel = "Registros por página:";
        this.dataSource.sort = this.sort;

    }

    findPerAsistente(ejecutivoId: number) {
        this._asignarAsistenteServices.findPerAsistente(ejecutivoId).subscribe(then => {
            this.dataSourceBkp = then;
            this.dataSource = new MatTableDataSource(then.filter(item => item.idVO["tipoAsistente"] == this.tipoAsistente));
            this.dataSource.paginator = this.paginator;
        });
    }

    cambiarTipoAsistente(e) {
        console.log(this.ejecutivo);
        this.findPerAsistente(this.ejecutivo.idPersona);
        this.dataSource = new MatTableDataSource(this.dataSourceBkp.filter(item => item.idVO["tipoAsistente"] == this.tipoAsistente));
        this.dataSource.paginator = this.paginator;
    }

    buscarEmpleado() {
        this.dialog.open(BuscarEmpleadoComponet).afterClosed().subscribe((result) => {
            if (result !== undefined) {

                this.selectedRow = new EjecutivoAsistenteVO();
                this.selectedRow.idVO = new EjecutivoAsistenteIdVO();
                this.selectedRow.idVO.asistenteId = result['data'].perIdEjecutivo;
                this.selectedRow.idVO.ejecutivoId = this.ejecutivo.idPersona;
                this.selectedRow.idVO.nombreEjecutivo = result['data'].nomEjecutivo;
                this.selectedRow.idVO["tipoAsistente"] = "P";
                this.selectedRow.asistenteId = result['data'].perIdEjecutivo;
                this.selectedRow.ejecutivoId = this.ejecutivo.idPersona;
                this.selectedRow.nombreEjecutivo = result['data'].nomEjecutivo;
                this.selectedRow.sucursal = result['data'].sucDescripcion;
                this.selectedRow.estatus = false;
                this.selectedRow["tipoAsistente"] = "P";
                this._acctionButtonsComponent.hasChenges();

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
        this._acctionButtonsComponent.validarBtnReset=true;
        this.MODO_ALTA = true;
        this.selectedRow = new EjecutivoAsistenteVO();
    }
    onModoEliminarClick() {
        this._asignarAsistenteServices.eliminarPerAsistente(this.selectedRow).subscribe(then => {
            this.findPerAsistente(this.ejecutivo.idPersona);
        })
    }
    onModoGuardarClick() {
        this._asignarAsistenteServices.crearPerAsistente(this.selectedRow).subscribe(then => {
            this.findPerAsistente(this.ejecutivo.idPersona);
            this.selectedRow = new EjecutivoAsistenteVO;
        });
    }
    onModoActualizarClick() {
        this._asignarAsistenteServices.crearPerAsistente(this.selectedRow).subscribe(then => {
            this.findPerAsistente(this.ejecutivo.idPersona);
            this.selectedRow = new EjecutivoAsistenteVO;
        });
    }

    sortData(sort: Sort) {

        if (!sort.active || sort.direction === '') {
            this.dataSource.data = this.dataSourceBkp;
            return;
        }

        this.dataSource.data = this.dataSource.data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'nombre':
                    return compare(a.nombreEjecutivo, b.nombreEjecutivo, isAsc);
                case 'sucursal':
                    return compare(a.sucursal, b.sucursal, isAsc);
                case 'estatus':

                    return compare(a.estatus == true ? "AC" : "SU", b.estatus == true ? "AC" : "SU", isAsc);
                default:
                    return 0;
            }
        });

    }
    onModoDeshacerClick() {
        this.MODO_ALTA = false;
        this.selectedRow = new EjecutivoAsistenteVO();
    }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}