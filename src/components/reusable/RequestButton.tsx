export default function RequestButton({ text }: { text: string }) {
  return (
    <button className="text-white border-none p-2 rounded-2xl w-[12rem] bg-gradient-to-r from-[#31d35c] to-[#2bb7da] hover:bg-inherit hover:opacity-40">
      {text}
    </button>
  );
}
