import { NextComponentType, NextPageContext } from "next/types";
interface ExtendedComponentProps {
  auth?: boolean;
  title?: string;
  description?: string;

  // For prototypes
  skipUnibloomLayout?: boolean;
}

export type ExtendedComponentType = NextComponentType<
  NextPageContext,
  any,
  any
> &
  ExtendedComponentProps;
