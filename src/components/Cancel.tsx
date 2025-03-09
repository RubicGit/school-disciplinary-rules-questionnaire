"use client";

import Link from "next/link";
import { X } from "lucide-react";

const NextPrev = () => {
  return (
    <div className="flex absolute top-0 w-screen justify-end content-start z-1 p-10">
      <Link href={"/"}>
        <X className="p-4 border-2 border-text rounded-full" size={64} />
      </Link>
    </div>
  );
};

export default NextPrev;
