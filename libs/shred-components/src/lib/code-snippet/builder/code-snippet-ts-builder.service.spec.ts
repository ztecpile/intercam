import { TestBed } from '@angular/core/testing';

import { CodeSnippetTsBuilderService } from './code-snippet-ts-builder.service';

describe('CodeSnippetTsBuilderService', () => {
  let service: CodeSnippetTsBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeSnippetTsBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
