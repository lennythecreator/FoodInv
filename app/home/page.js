"use client"
import { Button } from '@/components/ui/button'
import { Header } from '@/components/ui/header'
import Link from 'next/link'
import { LucideDollarSign, LucideHome, LucidePlus } from 'lucide-react'
import React from 'react'
import { getDocs,collection,query} from 'firebase/firestore'
import { db } from '@/firebase'
import { useState,useEffect } from "react";
import { set } from 'zod'

export default function Home() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, "FoodinvData"));
      const results = await getDocs(q);
      const itemsArray = [];
      results.forEach((doc) => {
        itemsArray.push(doc.data());
      });
      setItems(itemsArray);
    };
    getItems();
    console.log("Items fetched");
  }, []);

  return (
    <main className='p-4'>
        <Header/>
        
        <section>
            <h1 className="text-4xl font-bold my-5"> What&apos;s in the box?</h1>
            <p>Let&apos;s add some items </p>
            <Button ><Link className='flex flex-row items-center gap-2' href='/items'><LucidePlus/> Add Items</Link></Button>
            <div className='flex gap-4 my-2'>
              {
                items.map((item, index) => (
                  <div key={index} className='flex flex-col gap-2 p-4 border-2 rounded w-72'>
                    <h1 className='text-lg font-bold'>{item.name}</h1>
                    <div className='flex flex-row gap-2'>
                      <p>{item.group}</p>
                      <p>{item.cal}</p>
                      <p>{item.category}</p>
                      
                    </div>
                    <footer className='flex flex-row gap-2'>
                      <p className='flex flex-row gap-1'><LucideDollarSign className='text-base'/>{item.cost}</p>
                      <p>{item.count}</p>
                    </footer>
                  </div>
                ))
              }
            </div>
        </section>

        <section>
            <h1 className="text-4xl font-bold my-5"> Saved Recipies</h1>
            <div>

            </div>
        </section>
        
        
    </main>
  )
}
