interface PostProps {
  data: any[];
}

export default function PostList({ data }: PostProps) {
  // Loop through
  return data.map((post: any) => (
    <div key={post.id}>
      <h3>
        <a
          href={post.link}
          className="text-blue-600 underline hover:text-blue-800"
        >
          Title: {post.title.rendered}
        </a>
      </h3>
      <p>ID: {post.id}</p>
      <p>Type:{post.type}</p>
      <p>Image:</p>
      <img
        src={post._embedded["wp:featuredmedia"]["0"].source_url}
        alt={post.title.rendered}
      />
      <br />
    </div>
  ));
}
