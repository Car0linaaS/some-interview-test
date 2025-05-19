interface CardPictureProps {
  src: string;
  alt: string;
}

export default function CardPicture({ src, alt }: CardPictureProps) {
  return (
    <div className="w-full aspect-[16/9] overflow-hidden">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
