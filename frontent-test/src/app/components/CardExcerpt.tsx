import { chivo_mono } from "../ui/fonts";

interface CardExcerptProps {
  excerpt: string;
}

export default function CardExcerpt({ excerpt }: CardExcerptProps) {
  // Remove all html tags etc
  const plainText = excerpt.replace(/<[^>]+>/g, "");
  return (
    <div className={`${chivo_mono.className} m-4 mb-0`}>
      <p className="line-clamp-2 text-xs md:text-sm sm:text-xs lg:text-base">
        {plainText}
      </p>
    </div>
  );
}