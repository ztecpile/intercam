import { Component, OnInit } from '@angular/core';
import { Document } from '../../../../models/documents.interface';
import { DocumentsService } from 'libs/multiplica/src/lib/services/documents.service';


@Component({
  selector: 'app-fondos-inversion',
  templateUrl: './fondos-inversion.component.html',
  styleUrls: ['./fondos-inversion.component.scss']
})
export class FondosInversionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}
