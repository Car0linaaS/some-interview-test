import { chivo_mono } from "../ui/fonts";
import SanitizedHtml from "@/app/components/SanitizedHtml";

interface CardExcerptProps {
  excerpt: string;
}

export default function CardExcerpt({ excerpt }: CardExcerptProps) {
  return (
    <div
      className={`${chivo_mono.className} m-4 mb-0 line-clamp-2 text-xs md:text-sm sm:text-xs lg:text-base`}
    >
      <SanitizedHtml html={excerpt} />
    </div>
  );
}
