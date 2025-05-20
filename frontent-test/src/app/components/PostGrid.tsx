import PostCard from "./PostCard";
import { Post } from "../types/Post";

interface PostGridProps {
  data: Post[];
}

// Grid for all card components
export default function PostGrid({ data }: PostGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((post: any) => (
        <PostCard key={post.id} post={post}></PostCard>
      ))}
    </div>
  );
}
