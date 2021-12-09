import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateModule } from './utils/date/date.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { CajasDragModule } from './cajas-drag/cajas-drag.module';
import { ChipsModule } from './chips/chips.module';
import { CalendarioModule } from './calendario/calendario.module';
import { CodeSnippetModule } from './code-snippet/code-snippet.module';
import { FormModule } from './form/form.module';
import { LinkModule } from './link/link.module';
import { MenusModule } from './menus/menus.module';
import { MessagesModule } from './messages/messages.module';
import { PaginatorModule } from './paginator/paginator.module';
import { PreloadModule } from './progress-bar/preload.module';
import { RestringeFechaHoraModule } from './restringe-fecha-hora/restringe-fecha-hora.module';
import { StepperModule } from './stepper/stepper.module';
import { TabsModule } from './tabs/tabs.module';
import { TimepickerModule } from './timepicker/timepicker.module';
import { TituloModule } from './titulo/titulo.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { UserGreetingModule } from './user-greeting/user-greeting.module';
import { DialogModule } from './dialog/dialog.module';
import { TableModule } from './table/table/table.module';

@NgModule({
  imports: [
    CommonModule,
    DateModule,
    BreadcrumbModule,
    CajasDragModule,
    CalendarioModule,
    ChipsModule,
    // CodeSnippetModule,
    FormModule,
    LinkModule,
    MenusModule,
    MessagesModule,
    PaginatorModule,
    PreloadModule,
    RestringeFechaHoraModule,
    StepperModule,
    TabsModule,
    TimepickerModule,
    TituloModule,
    TooltipModule,
    UserGreetingModule,
    TableModule,
  ],
  exports: [
    DateModule,
    BreadcrumbModule,
    CajasDragModule,
    CalendarioModule,
    ChipsModule,
    // CodeSnippetModule,
    FormModule,
    LinkModule,
    MenusModule,
    MessagesModule,
    PaginatorModule,
    PreloadModule,
    RestringeFechaHoraModule,
    StepperModule,
    TabsModule,
    TimepickerModule,
    TituloModule,
    TooltipModule,
    UserGreetingModule,
    DialogModule,
    TableModule,
  ],
  declarations: [],
})
export class ShredComponentsModule {}
