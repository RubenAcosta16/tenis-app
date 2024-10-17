import { ScrollShadow } from "@nextui-org/react";

const cats = [
  "☀ Sun",
  "🕶 Cool",
  "🍣 Sushi",
  "🍨 Ice",
  "😈 wow",
  "♥ love",
  "☀ Sun",
  "🕶 Cool",
  "🍣 Sushi",
  "🍨 Ice",
  "😈 wow",
  "♥ love",
  "☀ Sun",
  "🕶 Cool",
  "🍣 Sushi",
  "🍨 Ice",
  "😈 wow",
  "♥ love",
];

const Categorys = () => {
  return (
    <div className="flex w-full md:w-[70%] mx-auto pl-6 mt-[20px] text-black ">
       <ScrollShadow size={100} orientation="horizontal"  className=" flex flex-row gap-3 overflow-x-auto md:scrollbar-hide whitespace-nowrap ">
        {cats.map((cat, i) => (
          <div
            key={i}
            className="bg-[#222] p-2 rounded-xl flex justify-center items-center text-white"
          >
            <span className="text-[18px] font-medium">{cat}</span>
          </div>
        ))}
      </ScrollShadow>
    </div>
  );
};

export default Categorys;
