import { IPost } from '@drop-team/shared-types';
import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface PostProps {
  post: IPost;
}

export function Index({ post }: PostProps) {
  return (
    <div id="learning-materials" className="rounded shadow">
      <h1>{post.title}</h1>
      <div className="body">{post.body}</div>
      <a
        key={post.id}
        href="/posts"
        rel="noreferrer"
        className={`list-item-link ${styles.link}`}
      >
        {' '}
        back
      </a>
    </div>
  );
}

export default Index;
