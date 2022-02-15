// Import components.
import LayoutPost from '@components/layout/post';
import Posts from '@components/models/list';

// Import interfaces.
import { IPost } from '@drop-team/shared-types';

// Type props.
type Props = {
  posts: IPost[];
};

export function Index({ posts }: Props) {
  return (
    <LayoutPost>
      <Posts posts={posts} />
    </LayoutPost>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.URL_API}/posts?_limit=4`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Index;
