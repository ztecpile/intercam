import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { SearchFilterPipe } from './com/intercam/utils/filtering/search-filter.pipe';

@NgModule({
  imports: [CommonModule,TranslocoModule],
  exports:[
    SearchFilterPipe
 ],
 declarations: [
   SearchFilterPipe
 ]
})
export class ModelModule {}
