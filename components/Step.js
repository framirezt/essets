import { classNames } from "@/public/functions";

export default function Step({ stepNumber, title, description, numSteps }) {
  return (
    <div
      className={classNames(
        stepNumber === numSteps ? "border-transparent" : "border-[--color6]",
        "border-l-[2px]  pl-12 pr-8 pb-14 relative"
      )}
    >
      {/* circulito */}
      <div className="w-4 aspect-square rounded-full absolute bg-[--color6] -left-[9px] "></div>

      {/* info */}
      <p className="text-[--color6] font-light">Step {stepNumber}</p>
      <p className="text-[20px] font-semibold mt-2">{title}</p>
      <p className="text-[15px] font-light mt-3">{description}</p>
    </div>
  );
}
