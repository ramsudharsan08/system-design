export default function PostCard({ post }) {
  return (
    <div className="card">
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
}
