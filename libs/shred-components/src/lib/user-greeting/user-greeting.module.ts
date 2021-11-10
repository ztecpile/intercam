import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { UserGreetingComponent } from './user-greeting.component';

@NgModule({
  declarations: [UserGreetingComponent],
  imports: [CommonModule, TranslocoModule],
  // providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'user-greeting' }],
  exports: [UserGreetingComponent],
})
export class UserGreetingModule {}
