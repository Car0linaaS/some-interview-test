interface CardTitleProps {
  title: string;
}

export default function CardTitle({ title }: CardTitleProps) {
  return (
    <div className="bg-[#1974f9] text-[#fcfcfc] rounded-t-lg flex h-14 text-[26px] justify-center items-center">
      <h3 className="p-3 text-lg md:text-xl lg:text-2xl leading-none break-words text-center">
        {title}
      </h3>
    </div>
  );
}
