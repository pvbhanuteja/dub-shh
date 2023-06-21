import clsx from "clsx";

export default function Badge({
  text,
  variant,
  className,
}: {
  text: string;
  variant?: "purple" | "blue" | "black" | "gray";
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "rounded-full border px-2 py-px text-xs font-medium capitalize",
        {
          "border-violet-600 bg-violet-600 text-white": variant === "purple",
          "border-blue-500 bg-blue-500 text-white": variant === "blue",
          "border-black bg-black text-white": variant === "black",
          "border-gray-400 bg-gray-400 text-white": variant === "gray",
        },
        className,
      )}
    >
      {text}
    </span>
  );
}
