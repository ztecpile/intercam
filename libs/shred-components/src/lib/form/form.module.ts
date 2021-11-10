import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslocoModule } from '@ngneat/transloco';

import { ValidationComponent } from './validation/validation.component';
import { InstructionComponent } from './instruction/instruction.component';
import { InputDirective } from './validation/input.directive';
import { InstructionsDirective } from './instruction/instructions.directive';
import { ValidationService } from './instruction/validation.service';
import { FormDirective } from './validation/form.directive';
import { FormValidationService } from './validation/form-validation.service';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { SuggestionDirective } from './suggestion/suggestion.directive';

@NgModule({
  declarations: [
    ValidationComponent, 
    InstructionComponent, 
    InputDirective, 
    InstructionsDirective, 
    FormDirective, 
    SuggestionComponent, 
    SuggestionDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoModule
  ],
  providers: [ValidationService, FormValidationService],
  exports: [
    ValidationComponent, 
    InstructionComponent, 
    InputDirective, 
    InstructionsDirective, 
    FormDirective, 
    SuggestionDirective],
})
export class FormModule {}
