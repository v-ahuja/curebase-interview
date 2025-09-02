/*
  This example is from https://tailwindui.com/components/application-ui/application-shells/sidebar#component-73d9b2c2e2af9184f305f06649710086
*/
import { ExtendedComponentType } from "./page-interface";
import Header from "./header";
import Sidebar from "./sidebar";
import { JSX } from "react";

export default function withLayout({
  Component,
  pageProps,
}: {
  Component: ExtendedComponentType;
  pageProps: any;
}): JSX.Element {
  return (
    <>
      <Sidebar />
      <main className="sm:pt-4 lg:pl-36 mx-auto lg:max-w-[1645px] pr-16  min-h-screen px-4 sm:px-6 lg:px-8 lg:py-6 space-y-12 flex flex-col">
        <Header title={Component.title} description={Component.description} />
        <Component {...pageProps} />
      </main>
    </>
  );
}
