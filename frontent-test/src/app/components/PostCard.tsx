import CardTitle from "./CardTitle";
import CardPicture from "./CardPicture";
import { Post } from "../types/Post";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="flex flex-col justify-between bg-[#f0f5fd] outline-[#1974f9] outline-1 rounded-xl h-full">
      <CardTitle title={post.title.rendered}></CardTitle>
      <CardPicture
        src={post._embedded["wp:featuredmedia"]["0"].source_url}
        alt={post.title.rendered}
      ></CardPicture>
    </div>
  );
}
