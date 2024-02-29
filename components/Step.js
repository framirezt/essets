export default function Step({ stepNumber, title, description }) {
  return (
    <div className="border-l-[2px] border-[--color6] pl-12 pr-8 pb-14 relative">
      {/* circulito */}
      <div className="w-4 aspect-square rounded-full absolute bg-[--color6] -left-[9px] "></div>

      {/* info */}
      <p className="text-[--color6] font-light">Step {stepNumber}</p>
      <p className="text-[20px] font-semibold mt-2">{title}</p>
      <p className="text-[15px] font-light mt-3">{description}</p>
    </div>
  );
}
