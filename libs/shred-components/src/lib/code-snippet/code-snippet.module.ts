import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeSnippetComponent } from './code-snippet.component';
import { CodeSnippetHtmlBuilderService } from './builder/code-snippet-html-builder.service';
import { CodeSnippetTsBuilderService } from './builder/code-snippet-ts-builder.service';
import { CodeSnippetCssBuilderService } from './builder/code-snippet-css-builder.service';

@NgModule({
  declarations: [CodeSnippetComponent],
  providers: [
    CodeSnippetHtmlBuilderService,
    CodeSnippetTsBuilderService,
    CodeSnippetCssBuilderService,
  ],
  imports: [CommonModule],
  exports: [CodeSnippetComponent],
})
export class CodeSnippetModule {}
