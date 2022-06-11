import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TipoRelVO } from '@intercam/model';
import { AcctionButtonsComponent } from 'libs/shred-components/src/lib/form/acction-buttons/acction-buttons.component';
import { TipoRelacionService } from '../../services/tipo-relacion.service';



@Component({
    selector: 'tipo-relacion.component',
    templateUrl: './tipo-relacion.component.html',
})


export class TiposRelacionComponent {

    displayedColumns: string[] = ['Observaciones', 'Tipo'];

    dataSource: TipoRelVO[] = [];
    paginatorDataSource: MatTableDataSource<TipoRelVO> = new MatTableDataSource<TipoRelVO>(this.dataSource);

    tipoRelVO: TipoRelVO = new TipoRelVO;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatTable) matTable: MatTable<TipoRelVO>;

    @ViewChild(AcctionButtonsComponent) acctionButtonsComponent: AcctionButtonsComponent;

    constructor(private _tipoRelacionService: TipoRelacionService) { this.findTipoRelVO() }




    findTipoRelVO() {
        this._tipoRelacionService.findTipoRelVO().subscribe(then => {
            this.dataSource = then;
            this.paginatorDataSource = new MatTableDataSource<TipoRelVO>(this.dataSource);
            this.paginatorDataSource.paginator = this.paginator;

        });
    }

    hasChenges() {

        this.acctionButtonsComponent.hasChenges();
    }

    getRecord(row) {
        if (this.acctionButtonsComponent.isModoConsulta()) {
            this.tipoRelVO = row;
            this.acctionButtonsComponent.setFilaSelecionada(row);
        }
    }


    onModoConsultaClick() {
        alert("Click evento");
    }

    onModoAltaClick() {
        this.tipoRelVO = new TipoRelVO;
    }

    onModoEliminarClick() {
        this._tipoRelacionService.deleteTipoRelVO(this.tipoRelVO).subscribe(then => {
            this.findTipoRelVO();
        });
        this.tipoRelVO = new TipoRelVO();
    }

    onModoGuardarClick(){
        alert("Guardar");
    }

    onModoActualizarClick(){
        alert("Actualizar");
    }


}