// File: src/routes/some/path/index.tsx
import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { RichText } from '~/components/payload/RichText';
import { getPostById } from '~/lib/server/payload.queries';
import type {
  FormattedElement,
  FormattedText,
} from '@/payload/rich-text-export';

export const usePost = routeLoader$(({ params }) => {
  const id = params.id;

  return getPostById(id);
});

export default component$(() => {
  const post = usePost();

  const content = post.value.content as (FormattedElement | FormattedText)[];
  return (
    <>
      <section class="flex flex-col gap-4 px-4 lg:px-80 py-28">
        <h2 class="text-2xl">{post.value.title}</h2>

        <RichText richText={content} />
      </section>
    </>
  );
});
