export default function Header({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex justify-between">
      <div className="w-1/2">
        {title && <h2 className="text-3xl text-[#1C433C]">{title}</h2>}
        {description && (
          <p className="text-base text-balance text-[#1C433C] mt-2 font-light">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
