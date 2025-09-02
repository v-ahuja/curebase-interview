// TODO: use clsx/lite when a future version supports importing it without the need to change
// tsconfig moduleResolution to Bundler as Nextjs does not allow changing the moduleResolution
// Currently the import fails with error: Cannot find module 'clsx/lite' or its corresponding
// type declarations.
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
