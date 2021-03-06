import { Translation, TRANSLOCO_LOADER, TranslocoLoader } from '@ngneat/transloco';

export class WebpackLoader implements TranslocoLoader {
  getTranslation(langPath: string): Promise<Translation> {
    return import(`../assets/i18n/${langPath}.json`).then(module => module.default);
  }
}

export const translocoLoader = { provide: TRANSLOCO_LOADER, useClass: WebpackLoader };
