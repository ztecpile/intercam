

import { CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LimiteSolicitudInstrumentoVO, MesasOperacionVO } from '@intercam/model';
import { AcctionButtonsComponent } from 'libs/shred-components/src/lib/form/acction-buttons/acction-buttons.component';
import { ConfiguracionLimitesHorariosService } from '../../services/configuracion-limites-horarios.service';




@Component({
    selector: 'cierre-banco-inversiones',
    templateUrl: './configuracion-limites-horarios.component.html',
    styleUrls: ['./configuracion-limites-horarios.component.css']
})

export class ConfiguracionLimitesHorariosComponent implements AfterViewInit {

    displayedColumns: string[] = ['Mesa', 'Monto', 'Horario', 'Estatus'];
    dataSource: MatTableDataSource<LimiteSolicitudInstrumentoVO> = new MatTableDataSource();
    monto = "";
    hora: string = "00";
    min = "00";
    selectedRow: LimiteSolicitudInstrumentoVO= {
        "lsiId": null,
        "lsiMontoLim": null,
        "lsiHorarioLim": null,
        "lsiEstatus": null,
        "lsiMesa": null,
        "lsiUsuario": null,
    };

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(AcctionButtonsComponent) _acctionButtonsComponent: AcctionButtonsComponent;

    limiteSolicitudInstrumentoVO: LimiteSolicitudInstrumentoVO = {
        "lsiId": null,
        "lsiMontoLim": null,
        "lsiHorarioLim": null,
        "lsiEstatus": null,
        "lsiMesa": null,
        "lsiUsuario": null,
    };
    mesas: MesasOperacionVO[] = [];

    formGrupo: FormGroup = this.formBuilder.group({
        mesa: ['', Validators.required],
        estatus: ['', Validators.required],
        monto: ['', Validators.required],
        horario: ['', Validators.required],
        min: ['',Validators.required]
    });
    submitted: Boolean = false;
    setReadyOnly:boolean=true;
    constructor(private _configuracionLimitesHorariosService: ConfiguracionLimitesHorariosService, private currencyPipe: CurrencyPipe, private formBuilder: FormBuilder) {
       
        this.limiteSolicitudInstrumentoVO["hora"] = "00";
        this.limiteSolicitudInstrumentoVO["min"] = "00";
        this._configuracionLimitesHorariosService.getMesasDivisas().subscribe(then => {
            this.mesas = then;
        });
    }
    ngAfterViewInit(): void {
        this._acctionButtonsComponent.hiddeBtnConsulta(true);
        this.paginator._intl.itemsPerPageLabel = "Registros por p??gina:";
        this.getMesasDivisas();
    }

    transformAmount(element) {
        console.log((this.limiteSolicitudInstrumentoVO.lsiMontoLim + "").replace(",", ""));
        this.monto = this.currencyPipe.transform(this.limiteSolicitudInstrumentoVO.lsiMontoLim, '$');
        element.target.value = this.monto;
    }

    getMesasDivisas() {
        this._configuracionLimitesHorariosService.getLimiteSolicitudesInstrumento().subscribe(
            then => {
                this.dataSource = new MatTableDataSource(then.filter(item => {
                    item.lsiMontoLim = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.lsiMontoLim).replace("$", "");
                    let fecha = new Date(item.lsiHorarioLim);
                    console.log(fecha.getTimezoneOffset());
                    item["hora"] = ("00" + fecha.getUTCHours()).slice(-2);
                    item["min"] = ("00" + fecha.getUTCMinutes()).slice(-2);
                    // item.lsiHorarioLim = ("00" + fecha.getUTCHours()).slice(-2) + " : " + ("00" + fecha.getUTCMinutes()).slice(-2);
                    return item;
                }));
                this.dataSource.paginator = this.paginator;
            }
        );
    }

    getRecord(row) {
        this.setReadyOnly=false;
        if (this._acctionButtonsComponent.isModoConsulta()) {
            this.limiteSolicitudInstrumentoVO = {...row};
            this.selectedRow = row;
            this._acctionButtonsComponent.setFilaSelecionada(row);
        }
    }

    timeFormat(e) {
        // Always 2 digits


        if (e.target.value.length >= 2) e.target.value = e.target.value.slice(0, 2);
        // 0 on the left (doesn't work on FF)
        if (e.target.value.length === 1) e.target.value = '0' + e.target.value;
        // Avoiding letters on FF
        if (!e.target.value) e.target.value = '00';

        this.hasChenges();
    }

    onModoDeshacerClick() {
        this.limiteSolicitudInstrumentoVO = {
            "lsiId": null,
            "lsiMontoLim": null,
            "lsiHorarioLim": null,
            "lsiEstatus": null,
            "lsiMesa": null,
            "lsiUsuario": null,
        };
    }

    onModoAltaClick() {
        this.setReadyOnly=false;
        this.limiteSolicitudInstrumentoVO = {
            "lsiId": null,
            "lsiMontoLim": null,
            "lsiHorarioLim": null,
            "lsiEstatus": null,
            "lsiMesa": null,
            "lsiUsuario": null,
        };
        this.limiteSolicitudInstrumentoVO["hora"] = "00";
        this.limiteSolicitudInstrumentoVO["min"] = "00";
    }

    onModoEliminarClick() {

        this.limiteSolicitudInstrumentoVO.lsiMontoLim = Number(this.limiteSolicitudInstrumentoVO.lsiMontoLim + "".replace(",", ""));
        this._configuracionLimitesHorariosService.eliminarLimiteCambioInstrumento(this.limiteSolicitudInstrumentoVO).subscribe(then => {
            this.limiteSolicitudInstrumentoVO = {
                "lsiId": null,
                "lsiMontoLim": null,
                "lsiHorarioLim": null,
                "lsiEstatus": null,
                "lsiMesa": null,
                "lsiUsuario": null,
            };
            this.limiteSolicitudInstrumentoVO["hora"] = "00";
            this.limiteSolicitudInstrumentoVO["min"] = "00";
            this.getMesasDivisas();

        });
    }

    onModoGuardarClick() {
        this.submitted = true;
        if (this.formGrupo.valid) {
            let hora = new Date();
            hora.setHours(this.limiteSolicitudInstrumentoVO["hora"]);
            hora.setMinutes(this.limiteSolicitudInstrumentoVO["min"]);
            this.limiteSolicitudInstrumentoVO.lsiHorarioLim = hora;
            this._configuracionLimitesHorariosService.guardarLimiteCambioInstrumento(this.limiteSolicitudInstrumentoVO).subscribe(then => {
                this.limiteSolicitudInstrumentoVO = {
                    "lsiId": null,
                    "lsiMontoLim": null,
                    "lsiHorarioLim": null,
                    "lsiEstatus": null,
                    "lsiMesa": null,
                    "lsiUsuario": null,
                };
                this.limiteSolicitudInstrumentoVO["hora"] = "00";
                this.limiteSolicitudInstrumentoVO["min"] = "00";
                this.getMesasDivisas();

            });
            this.submitted = false;
        }
    }

    onModoActualizarClick() {
        this.submitted = true;
        if (this.formGrupo.valid) {
            this.limiteSolicitudInstrumentoVO.lsiMontoLim = Number(this.limiteSolicitudInstrumentoVO.lsiMontoLim + "".replace(",", ""));
            let hora = new Date("1700-06-02T04:30:00.000+0000");
            console.log(hora.getTimezoneOffset());
            hora.setUTCHours(this.limiteSolicitudInstrumentoVO["hora"]);
            hora.setUTCMinutes(this.limiteSolicitudInstrumentoVO["min"]);
            this.limiteSolicitudInstrumentoVO.lsiHorarioLim = hora;
            this._configuracionLimitesHorariosService.actualizarLimiteCambioInstrumento(this.limiteSolicitudInstrumentoVO).subscribe(then => {
                this.limiteSolicitudInstrumentoVO = {
                    "lsiId": null,
                    "lsiMontoLim": null,
                    "lsiHorarioLim": null,
                    "lsiEstatus": null,
                    "lsiMesa": null,
                    "lsiUsuario": null,
                };
                this.limiteSolicitudInstrumentoVO["hora"] = "00";
                this.limiteSolicitudInstrumentoVO["min"] = "00";
                this.getMesasDivisas();

            });
            this.submitted = false;
        }
    }


    hasChenges() {

        this._acctionButtonsComponent.hasChenges();
    }

    formatoDeInput(e) {
        console.log(e.key);
        let reg = /[^\d]/g;
        let texto = e.key.replace(reg, "");
        if (texto == "" && e.key.length == 1) {
            return false;
        }


        return true;
    }

}
