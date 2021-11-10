import { TestBed } from '@angular/core/testing';

import { CodeSnippetHtmlBuilderService } from './code-snippet-html-builder.service';

describe('CodeSnippetHtmlBuilderService', () => {
  let service: CodeSnippetHtmlBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeSnippetHtmlBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
