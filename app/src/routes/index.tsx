import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead, Link } from '@builder.io/qwik-city';
import { getPosts } from '~/lib/server/payload.queries';

export const usePosts = routeLoader$(() => {
  return getPosts();
});

export default component$(() => {
  const posts = usePosts();

  return (
    <section class="px-4 xl:px-96 py-24">
      <h2 class="text-3xl font-bold">Posts 📝</h2>
      <ul>
        {posts.value.docs.map((post) => {
          return (
            <li class="py-2" key={post.id}>
              <Link
                href={`/post/${post.id}/`}
                class="text-blue-500 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
