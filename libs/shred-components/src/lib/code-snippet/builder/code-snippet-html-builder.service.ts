import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CodeSnippetHtmlBuilderService {
  build(code: string): string {
    let withBrackets = code.match(/\[.*?\]/g);
    let htmlTags = code.match(/(?<=<\/)(.*)(?=>)/g);
    let selfCloseHtmlTags = code.match(/(?<=<)(.*)(?=\/>)/g);
    let withQuotes = code.match(/\".*?\"/g);
    let withParentheses = code.match(/\(.*?\)/g);

    if (withBrackets === null) {
      withBrackets = [];
    }

    if (withQuotes === null) {
      withQuotes = [];
    }

    if (withParentheses === null) {
      withParentheses = [];
    }

    if (htmlTags === null) {
      htmlTags = [];
    }

    if (selfCloseHtmlTags === null) {
      selfCloseHtmlTags = [];
    }

    let temporalShowedCode = code
      .split('</')
      .join('&lt;&sol;')
      .split('<')
      .join('&lt;')
      .split('>')
      .join('&gt;')
      .split('=')
      .join('&equals;');

    withQuotes.forEach((item) => {
      temporalShowedCode = temporalShowedCode
        .split(item)
        .join(`<span class="with-quotes">${item}</span>`);
    });

    htmlTags = Array.from(new Set(htmlTags));

    const htmlOpenTags = htmlTags.map((item) => `&lt;${item}`);
    const htmlCloseTags = htmlTags.map((item) => `&lt;&sol;${item}&gt;`);

    [...htmlOpenTags, ...htmlCloseTags].forEach((item) => {
      temporalShowedCode = temporalShowedCode
        .split(item)
        .join(`<span class="html-tag">${item}</span>`);
    });

    selfCloseHtmlTags
      .map((item) => `&lt;${item} &sol;&gt;`)
      .forEach((item) => {
        temporalShowedCode = temporalShowedCode
          .split(item)
          .join(`<span class="html-tag">${item}</span>`);
      });

    temporalShowedCode = temporalShowedCode
      .split('&gt;')
      .join('<span class="html-tag">&gt;</span>')
      .split('&equals;')
      .join('<span class="equal">&equals;</span>');

    withBrackets.forEach((item) => {
      temporalShowedCode = temporalShowedCode
        .split(item)
        .join(`<span class="with-brackets">${item}</span>`);
    });

    withParentheses.forEach((item) => {
      temporalShowedCode = temporalShowedCode
        .split(item)
        .join(`<span class="with-parentheses">${item}</span>`);
    });

    const withParenthesesBetweenQuotes = withQuotes
      .reduce((previos, item) => previos.concat(item.match(/\(.*?\)/g)), [])
      .filter((item) => item !== null);

    withParenthesesBetweenQuotes.forEach((item) => {
      temporalShowedCode = temporalShowedCode
        .split(item)
        .join(`<span class="with-quotes">${item}</span>`);
    });

    const betweenParentheses = withParenthesesBetweenQuotes.map((item) =>
      item.substring(1, item.length - 1)
    );

    betweenParentheses.forEach((item) => {
      temporalShowedCode = temporalShowedCode
        .split(item)
        .join(`<span class="between-parentheses">${item}</span>`);
    });

    return temporalShowedCode;
  }
}
