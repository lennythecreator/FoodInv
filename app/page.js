import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Food Inv!</h1>
      <picture>
        <img src={'next.svg'} alt={""}/>
      </picture>
      <Button><Link href='/home'>Get Started</Link></Button>
    </main>
  );
}
