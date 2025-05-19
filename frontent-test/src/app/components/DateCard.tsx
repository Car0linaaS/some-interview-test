interface DateCardProps {
  date: string;
}

export default function DateCard({ date }: DateCardProps) {
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString("sv-SE");
  return (
    <div className="flex items-end h-full">
      <span>{formattedDate}</span>
    </div>
  );
}
