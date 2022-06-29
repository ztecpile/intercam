import { MatPaginatorIntl } from "@angular/material/paginator"; 

export function CustomPaginator(){
  const customPaginatorIntl = new MatPaginatorIntl();
  customPaginatorIntl.itemsPerPageLabel = "Registros por página:";
  customPaginatorIntl.firstPageLabel = "Primera página";
  customPaginatorIntl.previousPageLabel = "Página anterior";
  customPaginatorIntl.nextPageLabel = "Siguiente página";
  customPaginatorIntl.lastPageLabel = "Última página";
  customPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `0 de ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // Si el índice de inicio excede la longitud de la lista, no intente corregir el índice final al final.
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  };

  return customPaginatorIntl;

}