/** @format */

import { cn } from "@/Utils/cn";
import React from "react";

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "w-full bg-sky-50 border rounded-xl flex py-4 shadow-sm",
        props.className
      )}
    />
  );
}