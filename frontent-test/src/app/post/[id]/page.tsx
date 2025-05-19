import Header from "@/app/components/Header";
import { staatliches, chivo_mono, alumni_sans } from "@/app/ui/fonts";
import { Post } from "@/app/types/Post";
import DateCard from "@/app/components/DateCard";
import SanitizedHtml from "@/app/components/SanitizedHtml";
import Image from "next/image";
import { fetchFromAPI } from "@/app/lib/fetchFromAPI";

interface PostPageProps {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await fetchFromAPI<Post>(`posts/${params.id}`);
  console.log(post);
  return (
    <>
      <Header></Header>
      <div className="bg-[#f0f5fd] text-center max-w-3xl mx-auto mt-8 px-8 py-10 mb-20 space-y-2 outline-[#1974f9] outline-1 rounded-xl">
        <h1
          className={`${staatliches.className} text-3xl sm:text-xl md:text-2xl lg:text-4xl`}
        >
          {post.title.rendered}
        </h1>
        <div className="flex justify-center">
          <DateCard date={post.date} />
        </div>
        <div className="w-full aspect-[16/9] relative overflow-hidden">
          <Image
            src={post._embedded["wp:featuredmedia"]["0"].source_url}
            alt={post.title.rendered}
            fill
            className="object-cover"
          />
        </div>
        <div className={`${chivo_mono.className} mt-4`}>
          <SanitizedHtml html={post.content.rendered} />
        </div>
      </div>
    </>
  );
}
