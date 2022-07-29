import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { DealtrackerVO } from "@intercam/model";
import { DialogDealInfoComponent } from "libs/shred-components/src/lib/dialog/dialog-deal/dialog-deal.component";
import { MonitorOperacionesInterbancariasServices } from "../../services/monitor-operaciones-interbancarias.services";
import { MatSort, Sort } from '@angular/material/sort';

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
    FILTRO_RADIO: string = "1";

    ESTATUS_TRANSACCION: number;
    selectedRow: DealtrackerVO;
    meses = {
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12",
    }




    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private _monitorOperacionesInterbancariasServices: MonitorOperacionesInterbancariasServices, private dialog: MatDialog) {

    }
    ngAfterViewInit(): void {
        this.paginator._intl.itemsPerPageLabel = "Registros por página:";
        this.findPerAsistente();
    }


    displayedColumns = ["ticket", "deal", "tipo", "promotor", "fecha", "hora", "pos", "transaccion", "cadena_deal"];
    dataSource: MatTableDataSource<DealtrackerVO> = new MatTableDataSource();
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
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        });
    }

    sortData(sort: Sort) {
        console.log(sort);
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
        if (this.FILTRO_RADIO === "3") {
            this.dataSource = new MatTableDataSource(this.dataSourceFilter.filter(item => item.operInstrumentoVO.tmpDealsica==null));
            this.dataSource.paginator = this.paginator;
        }
    }

    verOperacion() {
        this.dialog.open(DialogDealInfoComponent, { data: this.selectedRow })
    }
    completarOperacion() {

    }

    formatoHora(e) {
        let hora = e.split(",")[1];
        hora = String(hora).replace("1700", "")
        let ampm = hora.includes("AM");
        let min = hora.split(":")[1];
        hora = hora.split(":")[0];
        hora = hora.replace(/[^\d]/g, "");

        //Si  e no tiene la palabra AM se le suman 12 horas a la hora para formato 24
        return (ampm == true ? hora : (12 + (hora * 1))) + " : " + min;
    }
    formatoFecha(e) {
        let date = (e + "").split(" ");
        return date[1] + "/" + this.meses[date[0]] + "/" + date[2];
    }

    formatoTransaccion(element) {
        switch (element.operInstrumentoVO.opiEstatus) {
            case 0:
                return "Operación Generada Pendiente";
            case 1:
                return " Operación Generada Completa";

            case 2:
                return "Error al guardar la operacion en el sistema";

            case 4:
                return " Operación Generada Completa";
            default:
                return "Error al guardar la operacion en el sistema";

        }
        //       element.operInstrumentoVO.opiEstatus==0?" Generadas Incompletas":element.operInstrumentoVO.opiEstatus==2?"Error **** ":"Generadas Completas "
    }

    cambioDeFiltro(){
        this.FILTRO_TEXT="";
        this.filtroTabla();
    }


}