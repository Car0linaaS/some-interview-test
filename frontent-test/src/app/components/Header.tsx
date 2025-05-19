export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-10xl font-bold">
        Postnytt
      </h1>
      <p className="mt-2 text-lg sm:text-xl lg:text-2xl">
        Senaste nytt bland våra posts...
      </p>
    </div>
  );
}
