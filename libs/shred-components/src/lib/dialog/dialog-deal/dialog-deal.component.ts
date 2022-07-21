import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DealtrackerVO, OperacionVO } from "@intercam/model";
import { DialogBuscarClienteComponent } from "../dialog-buscar-cliente/buscar-cliente.component";
import { DealService } from "../services/deal.service";

@Component({
    selector: 'dialog-deal-component',
    templateUrl: './dialog-deal.component.html',
    styleUrls: ['./dialog-deal.component.scss']
   
})

export class DialogDealInfoComponent {

    model:OperacionVO=new OperacionVO;
    constructor(@Inject(MAT_DIALOG_DATA) public data: DealtrackerVO,private _dealService:DealService,public dialogRef: MatDialogRef<DialogBuscarClienteComponent>){ this.findOperacionVO();}

    findOperacionVO(){
      /*  this._dealService.findOperacionByDeal(this.data.operInstrumentoVO.tmpDealsica,this.data.operInstrumentoVO.fechaValorVO.idVO.tconId).subscribe(then=>{
            this.model=then;
        });*/
    }
    close(){
        this.dialogRef.close();
    }

}