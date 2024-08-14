import React from 'react'
import Link from 'next/link'
import { Avatar,AvatarImage } from './avatar'
import { LucideShoppingBasket } from 'lucide-react'
export const Header = () => {
  return (
    <div className="flex flex-row items-center gap-4">
        <h1 className='flex flex-row items-center gap-2 font-semibold text-xl'><LucideShoppingBasket/> Food Inv</h1>
        <footer className='flex flex-row items-center gap-4 ml-auto'>
            <Link href='/home'>Home</Link>
            <Link href='/items'>Items</Link>
            <Link href='/Recipies'>Recipies</Link>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
        </footer>
    </div>
  )
}
