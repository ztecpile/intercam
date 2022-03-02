import { Component, OnInit } from '@angular/core';
import { Document } from '../../../../models/documents.interface';
import { DocumentsService } from 'libs/multiplica/src/lib/services/documents.service';

@Component({
  selector: 'app-cierre-banco-inversiones',
  templateUrl: './cierre-banco-inversiones.component.html',
  styleUrls: ['./cierre-banco-inversiones.component.scss'],
})
export class CierreBancoInversionesComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {}
}
