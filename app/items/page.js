"use client"
import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { Import, LucideTrash } from "lucide-react";
import React, { useState } from "react";
import {Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue, SelectGroup, SelectLabel } from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { doc,addDoc, collection , getDoc, onSnapshot, query, getDocs, deleteDoc} from "firebase/firestore";    
import { db } from "@/firebase";
import { set } from "zod";
import { useEffect } from "react";

export default function Items() {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [group, setGroup] = useState('');
    const [cal, setCal] = useState('');
    const [category, setCategory] = useState('');
    const [cost, setCost] = useState('');
    const [count, setCount] = useState('');
    const [itemId, setItemId] = useState('');
    const addItem = async () => {
        console.log(itemName, group, cal, category, cost, count);
        const docRef = await addDoc(collection(db, "FoodinvData"), {
            id: itemId,
            name: itemName,
            group: group,
            cal: cal,
            category: category,
            cost: cost,
            count: count,

          });
        setItems([...items, {
            id: docRef.id,
            name: itemName,
            group: group,
            cal: cal,
            category: category,
            cost: cost,
            count: count,
        }]);
        setItemName('');
        setGroup('');
        setCal('');
        setCategory('');
        setCost('');
        setCount('');
        setItemId('');
    }


    useEffect(()=>{
        const getItems = async () => {
         const q = query(collection(db, "FoodinvData"));
         const results = await getDocs(q);
         
         const itemsList = results.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
         //console.log(itemsList);
         results.forEach((doc) => {
            console.log(doc.data());
            // doc.data() is never undefined for query doc snapshots
            // setItems((prev)=>[...prev,doc.data()]);
            setItems(itemsList);
           });
        }
        getItems();
        console.log("hi");
    
    },[])

    const deleteItem = async (items) => {
        try{
            try{await deleteDoc(doc(db, "FoodinvData", itemName));}
            catch{
                console.error("failed to delete item", e);
            }
        
        setItems(items.filter(item => item.name !== itemName));
        }
        catch(e){
            console.error("failed to delete item", e);
        }
    }

    return(
        <main className='p-4'>
            <Header/>
            <section>
                <h1 className="text-4xl font-bold my-5"> Items</h1>
                <div className='flex flex-row gap-2'>
                    <input type={'text'} placeholder={'Enter item'} value={itemName} onChange={(e)=> setItemName(e.target.value)} className='border-2 border-slate-500 rounded-sm p-2 h-10'/>
                    <Select className='w-20' value={group} onValueChange={(e)=>{setGroup(e)}} >
                        <SelectTrigger className='w-52'>
                            <SelectValue placeholder="Nutrient Group" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select Nutrient Group</SelectLabel>
                                <SelectItem value="carbohydrates">Carbohydrates</SelectItem>
                                <SelectItem value="proteins">Proteins</SelectItem>
                                <SelectItem value="fats">Fats</SelectItem>
                                <SelectItem value="vitamins">Vitamins</SelectItem>
                                <SelectItem value="minerals">Minerals</SelectItem>
                                <SelectItem value="fiber">Fiber</SelectItem>
                                <SelectItem value="water">Water</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Select value={cal} onValueChange={(e)=>{setCal(e)}}>
                        <SelectTrigger className='w-52'  >
                            <SelectValue placeholder="High or Low Cal"/>
                        </SelectTrigger>
                        <SelectContent className='w-52'>
                            <SelectGroup>
                                <SelectLabel>Select Level</SelectLabel>
                                <SelectItem value="High">High</SelectItem>
                                <SelectItem value="Low">Low</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Select value={category} onValueChange={(e)=>{setCategory(e)}}>
                        <SelectTrigger className='w-52'>
                            <SelectValue placeholder="Food Group"/>
                        </SelectTrigger>
                        <SelectContent className='w-52'>
                            <SelectGroup>
                                <SelectLabel>Select Food Group</SelectLabel>
                                <SelectItem value="Fruits">Fruits</SelectItem>
                                <SelectItem value="Vegitables">Vegitables</SelectItem>
                                <SelectItem value="Grains">Grains</SelectItem>
                                <SelectItem value="Protein Foods">Protein Foods</SelectItem>
                                <SelectItem value="Dairy">Dairy</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <input type="number" id="cost-input" name="cost" value={cost} placeholder={'Cost $'} className='border-[1px] border-slate-500 rounded-sm p-2 h-10 w-24' onChange={(e)=>setCost(e.target.value)}/>

                    <input type="number" id="number-input" name="count" value={count} placeholder={'# of items'} className='border-[1px] border-slate-500 rounded-sm p-2 h-10 w-28' onChange={(e)=>setCount(e.target.value)}/>

                    <Button onClick={addItem}>Add Item</Button>
                </div>
                <Table data={items}>
                    <TableCaption>Items</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Group</TableCell>
                            <TableCell>Cal</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Cost</TableCell>
                            <TableCell>Count</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items.map((item, index)=>(
                            <TableRow key={index}>
                                <TableCell className='font-bold'>{item.name}</TableCell>
                                <TableCell>{item.group}</TableCell>
                                <TableCell>{item.cal}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>${item.cost}</TableCell>
                                <TableCell>{item.count}</TableCell>
                                {/* <Button variant="destructive" onClick={()=>deleteItem(item.name)}><LucideTrash className='text-[10px]'/></Button> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
        </main>
    )
}