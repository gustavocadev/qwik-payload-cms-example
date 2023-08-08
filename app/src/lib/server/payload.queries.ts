import type { PayloadCollection } from '~/types';
import type { Post } from '@/payload/payload-types';
import qs from 'qs';
import ky from 'ky';

const api = ky.create({
  prefixUrl: `${process.env.PAYLOAD_PUBLIC_SERVER_URL}`,
});

export const getPosts = async () => {
  const resp = await api.get('posts');
  return resp.json<PayloadCollection<Post>>();
};

export const getPostById = async (id: string) => {
  const query = {
    id,
  };

  const stringifiedQuery = qs.stringify(
    {
      where: query,
    },
    {
      addQueryPrefix: true,
    }
  );

  const resp = await api.get(`posts/${stringifiedQuery}`);
  return (await resp.json<PayloadCollection<Post>>()).docs[0];
};
