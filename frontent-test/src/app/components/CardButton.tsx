interface CardBtnProps {
  text: string;
  id: number;
}

export default function CardButton({ text, id }: CardBtnProps) {
  return (
    <a
      href={`../post/${id}`}
      className="bg-[#1974f9] hover:bg-[#19aff9] text-white font-bold py-2 px-4 rounded-xl cursor-pointer hover:scale-105"
    >
      <span className="transition-transform group-hover:scale-105 text-base sm:text-base md:text-xl">
        {text}
      </span>
    </a>
  );
}
