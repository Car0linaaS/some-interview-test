import CardTitle from "./CardTitle";
import CardExcerpt from "./CardExcerpt";
import CardFooter from "./CardFooter";
import { Post } from "../types/Post";
import Image from "next/image";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="flex flex-col justify-between bg-[#f0f5fd] outline-[#1974f9] outline-1 rounded-xl h-full">
      <CardTitle title={post.title.rendered}></CardTitle>
      <div className="w-full aspect-[16/9] relative overflow-hidden">
        {/* Use Next's Image component  */}
        <Image
          src={post._embedded["wp:featuredmedia"]["0"].source_url}
          alt={post.title.rendered}
          fill
          className="object-cover"
        />
      </div>
      <CardExcerpt excerpt={post.excerpt.rendered}></CardExcerpt>
      <CardFooter date={post.date} id={post.id}></CardFooter>
    </div>
  );
}
