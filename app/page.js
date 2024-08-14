import { Button } from "@/components/ui/button";
import { LucideCheckCircle, LucideShoppingBasket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full justify-center items-center gap-9 p-24">
      
      <div className='flex flex-col gap-4 h-96 '>
        <h1 className="flex items-center text-4xl font-bold"><LucideShoppingBasket size={40}/>Food Inv!</h1>
        <p className="text-2xl">Your food inventory manager</p>
        <ul>
          <li className='flex flex-row gap-2 list-none my-2 text-green-500'><LucideCheckCircle/>Keep track of your food items</li>
          <li className='flex flex-row gap-2 list-none my-2 text-green-500'><LucideCheckCircle/>Save your favorite recipes</li>
          <li className='flex flex-row gap-2 list-none my-2 text-green-500'><LucideCheckCircle/>Talk to a person AI nutritionist for special recipes</li>
          <li className='flex flex-row gap-2 list-none my-2 text-green-500'><LucideCheckCircle/>Get notified when items are about to expire</li>
          <li className='flex flex-row gap-2 list-none my-2 text-green-500'><LucideCheckCircle/>Generate images of recipes for inspiration</li>

        </ul>
        <Button className='mt-auto'><Link href='/home'>Get Started</Link></Button>
      </div>

      <picture className='w-96 rounded'>
        <img className='rounded' src={'upload_img_34665432_08_13_2024_20_27_56_289828_995982291358883441.jpeg'} alt={""}/>
      </picture>
      
    </main>
  );
}
