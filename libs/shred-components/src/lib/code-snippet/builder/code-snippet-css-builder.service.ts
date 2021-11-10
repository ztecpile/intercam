import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CodeSnippetCssBuilderService {
  build(code: string): string {
    let temporalShowedCode = code;

    return temporalShowedCode;
  }
}
