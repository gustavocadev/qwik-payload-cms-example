import type { FormattedElement, FormattedText } from './types/RichText';

declare module 'slate' {
  interface CustomTypes {
    Element: FormattedElement;
    Text: FormattedText;
  }
}
