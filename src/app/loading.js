import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <main className="flex h-screen w-auto flex-col">
      <div className="flex h-20 items-center justify-between border-b px-10">
        <Skeleton className="h-12 w-20" />
        <ul className="flex flex-row items-center gap-5">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-32" />
        </ul>
      </div>
    </main>
  );
}
