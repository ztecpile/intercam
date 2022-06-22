import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DealtrackerVO, OperacionVO } from "@intercam/model";
import { DealService } from "../services/deal.service";

@Component({
    selector: 'dialog-deal-component',
    templateUrl: './dialog-deal.component.html',
   
})

export class DialogDealInfoComponent {
    model:OperacionVO=new OperacionVO;
    constructor(@Inject(MAT_DIALOG_DATA) public data: DealtrackerVO,private _dealService:DealService){ this.findOperacionVO();}
    findOperacionVO(){
        this._dealService.findOperacionByDeal(this.data.operInstrumentoVO.opeId,this.data.operInstrumentoVO.fechaValorVO.idVO.tconId).subscribe(then=>{

            this.model=then;
        });
    }

}