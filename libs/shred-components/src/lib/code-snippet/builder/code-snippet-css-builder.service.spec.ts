import { TestBed } from '@angular/core/testing';

import { CodeSnippetCssBuilderService } from './code-snippet-css-builder.service';

describe('CodeSnippetCssBuilderService', () => {
  let service: CodeSnippetCssBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeSnippetCssBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
