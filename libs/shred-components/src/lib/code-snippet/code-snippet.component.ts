import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { CodeSnippetHtmlBuilderService } from './builder/code-snippet-html-builder.service';
import { CodeSnippetTsBuilderService } from './builder/code-snippet-ts-builder.service';
import { CodeSnippetCssBuilderService } from './builder/code-snippet-css-builder.service';

@Component({
  selector: 'idb-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CodeSnippetComponent implements OnInit {
  @Input() code: string;
  @Input() lang = 'html';
  @Input() color = '#282822';
  @ViewChild('copyButton') copyButton: ElementRef<HTMLButtonElement>;

  private timer: number;

  showedCode = '';
  copyText = 'COPY';

  constructor(
    private codeSnippetHtmlBuilderService: CodeSnippetHtmlBuilderService,
    private codeSnippetTsBuilderService: CodeSnippetTsBuilderService,
    private codeSnippetCssBuilderService: CodeSnippetCssBuilderService
  ) {}

  ngOnInit(): void {
    this.showedCode = this.build();
  }

  copy(): void {
    let successful = false;
    const textarea = document.createElement('textarea');
    textarea.value = this.code.trim();
    document.body.appendChild(textarea);

    try {
      if (textarea) {
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = document.execCommand('copy');
      }
    } catch {
      //
    }

    if (successful) {
      this.copyText = 'COPIED';
      this.copyButton.nativeElement.focus();
      if (textarea) {
        if (textarea.parentNode) {
          textarea.parentNode.removeChild(textarea);
        }
      }

      if (this.timer !== null && this.timer !== undefined) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        this.copyText = 'COPY';
        this.copyButton.nativeElement.blur();
      }, 1000);
    }
  }

  private build(): string {
    switch (this.lang) {
      case 'html':
        return this.codeSnippetHtmlBuilderService.build(this.code);
      case 'ts':
        return this.codeSnippetTsBuilderService.build(this.code);
      case 'css':
        return this.codeSnippetCssBuilderService.build(this.code);
      default:
        return "";
    }
  }
}
