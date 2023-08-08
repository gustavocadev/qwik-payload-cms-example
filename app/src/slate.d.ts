import type {
  FormattedText,
  FormattedElement,
} from '@/payload/rich-text-export';

declare module 'slate' {
  interface CustomTypes {
    Element: FormattedElement;
    Text: FormattedText;
  }
}
