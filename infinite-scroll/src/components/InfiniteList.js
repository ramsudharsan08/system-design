import { useEffect, useRef, useState } from 'react';
import { fetchPosts } from '../api/fetchPosts';
import PostCard from './PostCard';
import Loader from './Loader';

export default function InfiniteList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef(null);

  useEffect(() => {
    loadMore();
  }, []);

  async function loadMore() {
    if (loading || !hasMore) return;

    setLoading(true);
    const newPosts = await fetchPosts(page);

    if (newPosts.length === 0) {
      setHasMore(false);
    } else {
      setPosts((prev) => [...prev, ...newPosts]);
      setPage((prev) => prev + 1);
    }

    setLoading(false);
  }

  const lastPostRef = (node) => {
    if (loading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      },
      {
        rootMargin: '150px',
      }
    );

    if (node) observer.current.observe(node);
  };

  return (
    <>
      {posts.map((post, index) => {
        if (index === posts.length - 1) {
          return (
            <div ref={lastPostRef} key={post.id}>
              <PostCard post={post} />
            </div>
          );
        }

        return <PostCard key={post.id} post={post} />;
      })}

      {loading && <Loader />}
    </>
  );
}
