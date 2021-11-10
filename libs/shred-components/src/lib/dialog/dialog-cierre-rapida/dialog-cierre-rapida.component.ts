import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioVO } from '@intercam/model';

@Component({
  selector: 'intercam-dialog-cierre-rapida',
  templateUrl: './dialog-cierre-rapida.component.html',
  styleUrls: ['./dialog-cierre-rapida.component.scss']
})
export class DialogCierreRapidaComponent implements OnInit {

  usuarioVO : UsuarioVO;

  constructor(public dialogRef: MatDialogRef<DialogCierreRapidaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if(data){
        this.usuarioVO = this.data['usuarioVO'];
      }
  }

  ngOnInit(): void {
  }

}
