import DateCard from "./DateCard";
import CardButton from "./CardButton";

interface CardFooterProps {
  date: string;
  id: number;
}

export default function CardFooter({ date, id }: CardFooterProps) {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <DateCard date={date}></DateCard>
      <CardButton text="Läs mer" id={id}></CardButton>
    </div>
  );
}
