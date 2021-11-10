import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioVO } from '@intercam/model';

@Component({
  selector: 'intercam-dialog-precios',
  templateUrl: './dialog-precios.component.html',
  styleUrls: ['./dialog-precios.component.scss'],
})
export class DialogPreciosComponent implements OnInit {

  usuarioVO : UsuarioVO;
  
  constructor(private dialogRef: MatDialogRef<DialogPreciosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if(data){
        this.usuarioVO = this.data['usuarioVO'];
      }
  }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }
}
