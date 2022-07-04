import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { DealtrackerVO, EjecutivoAsistenteVO } from "@intercam/model";
import { DialogDealInfoComponent } from "libs/shred-components/src/lib/dialog/dialog-deal/dialog-deal.component";
import { AsignarAsistenteServices } from "../../services/asignar-asistente.service";
import { MonitorOperacionesInterbancariasServices } from "../../services/monitor-operaciones-interbancarias.services";


@Component({
    selector: 'monitor-operaciones-interbancarias',
    templateUrl: './monitor-operaciones-interbancarias.component.html',
    styleUrls: ['./monitor-operaciones-interbancarias.component.scss']
})


export class MonitorOperacionesInterbancariasComponent implements AfterViewInit {
    ESTATUS: number = -1;
    FECHA_INICIO: string = new Date().toJSON().slice(0, 10);
    FECHA_FIN: string = new Date().toJSON().slice(0, 10);
    FILTRO_TEXT: string;
    FILTRO_RADIO: string="1";

    ESTATUS_TRANSACCION: number;
    selectedRow: DealtrackerVO;

  


    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(private _monitorOperacionesInterbancariasServices: MonitorOperacionesInterbancariasServices, private dialog: MatDialog) {

    }
    ngAfterViewInit(): void {
        this.paginator._intl.itemsPerPageLabel = "Registros por página:";
    }
 

    displayedColumns = ["ticket", "deal", "tipo", "promotor", "fecha", "hora", "pos", "transaccion", "cadena_deal"];
    dataSource: MatTableDataSource<DealtrackerVO>= new MatTableDataSource();
    dataSourceFilter: DealtrackerVO[];


    findPerAsistente() {
        let parsm = {
            "fIni": new Date(this.FECHA_INICIO).getTime() + "",
            "fFin": new Date(this.FECHA_FIN).getTime() + "",
            "status": this.ESTATUS,
            "ticket": null,
            "tconId": null
        };

        this._monitorOperacionesInterbancariasServices.findOperaciones(parsm).subscribe(then => {
            this.dataSource = new MatTableDataSource(then);
            this.dataSourceFilter = then;
            this.dataSource.paginator = this.paginator;
        });
    }


    getRecord(row) {
        this.selectedRow = row;
        this.ESTATUS_TRANSACCION = 1;
    }


    filtroTabla() {

        if (this.FILTRO_RADIO === "1") {
            this.dataSource = new MatTableDataSource(this.dataSourceFilter.filter(item => (item.operInstrumentoVO.tmpDealsica + "").includes(this.FILTRO_TEXT)));
            this.dataSource.paginator = this.paginator;
        }

        if (this.FILTRO_RADIO === "2") {
            this.dataSource = new MatTableDataSource(this.dataSourceFilter.filter(item => item.tdtTicket.includes(this.FILTRO_TEXT)));
            this.dataSource.paginator = this.paginator;
        }
    }

    verOperacion() {
        this.dialog.open(DialogDealInfoComponent, { data: this.selectedRow })
    }
    completarOperacion() {
        alert("Comletar");
    }


}