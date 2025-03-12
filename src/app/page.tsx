import { Button } from "@/components/ui/button";
import Progression from "@/components/ui/progression";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Progression currentSection="demo-info" />
      <h1 className="text-7xl font-bold p-12">Welcome!</h1>
      <Link href="/teacher-student">
        <Button className="px-4 text-2xl font-bold" variant={"outline"}>
          Entry
        </Button>
      </Link>
    </div>
  );
}
