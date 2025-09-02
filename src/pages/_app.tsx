import "@/styles/globals.css";
import withLayout from "@/ui/shared-components/layout/layout";
import type { AppProps } from "next/app";
// import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { HiOutlineShieldExclamation, HiArrowPath } from "react-icons/hi2";

// const ErrorFallback = ({ resetError }: { resetError: () => void }) => {
//   return (
//     <div
//       role="alert"
//       className="p-4 max-w-lg rounded-xl flex flex-col items-center mx-auto mt-96 shadow"
//     >
//       <h3 className="text-lg flex items-center gap-2 mb-4">
//         <HiOutlineShieldExclamation size={24} className="stroke-red-700" />
//         Something went wrong!
//       </h3>

//       <button onClick={resetError}>
//         <HiArrowPath stroke="2" size={20} />
//         Try again
//       </button>
//     </div>
//   );
// };

export default function App({ Component, pageProps }: AppProps) {
  return withLayout({ Component, pageProps });
}
