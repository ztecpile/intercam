import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PersonaContratoVO, UsuarioVO } from "@intercam/model";
import { DialogBuscarClienteComponent } from "libs/shred-components/src/lib/dialog/dialog-buscar-cliente/buscar-cliente.component";
import { ClienteService } from "libs/shred-components/src/lib/dialog/services/clientes.service";
import { CierreBancoInversionesServices } from "../../../services/cierre-banco-inversiones.services";



@Component({
    selector: 'cedes-inversiones-component',
    templateUrl: './cedes.component.html'
})

export class CedesInversionesComponent {
    displayedColumns: string[] = ['monto_inferior', 'monto_superior', '3_meses', '6_meses', '9_meses', '12_meses', '18_meses', '24_meses'];
    dataSource = [];
    formula_tasa = "001";
    producto = "01";
    fecha = "";
    monto_superior = "";
    plazo = "";
    claveCliente = "";
    nombreCliente: string = "";
    saldoInicial: string = "";

    constructor(private _cierreBancoInversiones: CierreBancoInversionesServices, private dialog: MatDialog,private _clienteService: ClienteService) {
        this.findFecha();
    }
    getRecord(row) {
        this.monto_superior = row.rangoSuperior;
        this.plazo = row.numPlazo;
    }
    formatNumber(num) {
        num = (Math.round(num * 100) / 100).toFixed(2);
        return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num).replace("$", "");
    }

    buscaCliente() {
        const dialogRef = this.dialog.open(DialogBuscarClienteComponent, {
            disableClose: true,
            autoFocus: true
        }).afterClosed()
            .subscribe(response => {
                if (response != null) {

                    this.consultarSaldoCedes(response);
                  }
          
            });
        ;
    }

    findFecha() {
        this._cierreBancoInversiones.findFechaAperturaPorSucursal().subscribe(
            then => {
                this.fecha = then.substring(0, 10);
            },
            error => console.error(error)
        );
    }

    consultarSaldoCedes(personaContratoVO: PersonaContratoVO) {
    
        this.claveCliente = personaContratoVO.contratoId + "";
        this.nombreCliente = personaContratoVO.nombreCorto + "";
        let usuarioVO = JSON.parse(sessionStorage.getItem("usuarioVO")) as UsuarioVO;
        this._clienteService.findConsultaSaldoVO(personaContratoVO.tmpCveLegada, usuarioVO.usuClave).subscribe(then => {
          this.saldoInicial = then.saldo + "";
        });
      }

    findTasasCedes() {
        this._cierreBancoInversiones.findTasasCedes(this.formula_tasa, this.producto).subscribe(then => {
            //this.dataSource = then;
            let dataSourc = {};
            let dataSource2 = [];
            for (let item of then) {
                let rangoInferior = item["monto"].rangoInferior;
                if (rangoInferior == null) {
                    rangoInferior = "0.0";
                }

                if (dataSourc[rangoInferior] == undefined)
                    dataSourc[rangoInferior] = {};

                dataSourc[rangoInferior]["rangoInferior"] = this.formatNumber(rangoInferior);
                dataSourc[rangoInferior]["rangoSuperior"] = this.formatNumber(item["monto"].rangoSuperior == null ? 0.0 : item["monto"].rangoSuperior);
                dataSourc[rangoInferior]["plazoInferior" + item["plazo"].plazoInferior] = (Math.round(item["tasa"].tasa * 100) / 100).toFixed(4);
                dataSourc[rangoInferior]["numPlazo"] = item["tasa"].numPlazo;
            }
            for (let i in dataSourc) {
                dataSource2.push(dataSourc[i]);
            }
            this.dataSource = dataSource2.sort(function (a, b) {
                let val1=Number(a.rangoInferior.replaceAll(",",""));
                let val2=Number(b.rangoInferior.replaceAll(",",""));
                console.log(val1,val2);
                if (val1 > val2) {
                    return 1;
                }
                if (val1 < val2) {
                    return -1;
                }
                return 0;
            });
        });
    }
}
