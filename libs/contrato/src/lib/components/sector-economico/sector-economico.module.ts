import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatRadioModule } from "@angular/material/radio";
import { MatTableModule } from "@angular/material/table";
import { RouterModule, Routes } from "@angular/router";
import { ModelModule } from "@intercam/model";
import { ShredComponentsModule } from "@intercam/shred-components";
import { TranslocoModule } from "@ngneat/transloco";
import { SectorEconomicoComponent } from "./sector-economico.component";




const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          component: SectorEconomicoComponent
        }
  
  
      ],
    }
  ];
  
  @NgModule({
    declarations: [
      SectorEconomicoComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      MatTableModule,
      HttpClientModule,
      TranslocoModule,
      MatPaginatorModule,
      MatCheckboxModule,
      MatFormFieldModule,
      ShredComponentsModule,
      ModelModule,
      FormsModule,
      ReactiveFormsModule,
      MatRadioModule,
    ]
  })


export class  SectorEconomicoModule { }