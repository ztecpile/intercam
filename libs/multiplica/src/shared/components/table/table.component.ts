import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'intercam-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() isLoadingData: boolean = false;
  @Input() isVisibleTable: boolean = false;
  @Input() messageTitle: string = 'No encontramos resultados';
  @Input() messageSubtitle: string = 'Revisa o cambia tu búsqueda';
  @Input() headersTitles: string[] = [];
  @Input() dataSource: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
