import publicRuntimeConfig from '../../utils/config';

// Import components.
import LayoutPost from '../../components/layout/post';
import DetailPost from '../../components/models/detail';

// Import interfaces.
import { IPost } from '@drop-team/shared-types';

// Type props.
type Props = {
  post: IPost;
};

export function Post({ post }: Props) {
  return (
    <LayoutPost>
      <DetailPost post={post} />
    </LayoutPost>
  );
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await fetch(`${publicRuntimeConfig.URL_API}/posts/${id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${publicRuntimeConfig.URL_API}/posts?_limit=4`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export default Post;
