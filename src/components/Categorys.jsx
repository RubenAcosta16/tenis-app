const cats = ["☀ Sun", "🕶 Cool", "🍣 Sushi", "🍨 Ice", "😈 wow", "♥ love"];

const Categorys = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap w-full pl-6 mt-[20px] text-black gap-3">
      {cats.map((cat, i) => (
        <div
          key={i}
          className="bg-white p-2 rounded-xl flex justify-center items-center"
        >
          <span className="text-[18px] font-medium">{cat}</span>
        </div>
      ))}
    </div>
  );
};

export default Categorys;
