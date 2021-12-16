import { Component, OnInit } from '@angular/core';
import { Document } from '../../../../models/documents.interface'
import { DocumentsService } from '../../../../services/documents.service';

@Component({
  selector: 'intercam-contratacion-actividades',
  templateUrl: './contratacion-actividades.component.html',
  styleUrls: ['./contratacion-actividades.component.scss']
})
export class ContratacionActividadesComponent implements OnInit {
  dataDocuments:Document[] = [];

  constructor(private documentsService: DocumentsService) {}

  ngOnInit(): void {
    this.documentsService.getDocuments().subscribe((res) => {
      this.dataDocuments = res;
    });
  }
  tables = [
    {
      cabezera: 'Docuemnto',
    },
  ];


}
