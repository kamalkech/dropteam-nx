import { IPost } from '@drop-team/shared-types';
import Post from '../item/index';

/* eslint-disable-next-line */
export interface PostsProps {
  posts: IPost[];
}

export function Index({ posts }: PostsProps) {
  return (
    <>
      {posts.length ? (
        <div id="learning-materials" className="rounded shadow">
          <h1>Articles</h1>
          {posts.map((post: IPost) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      ) : (
        'No articles found!'
      )}
    </>
  );
}

export default Index;
