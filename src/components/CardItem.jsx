import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { AlertDelete } from "@/components/AlertDelete";
import { DialogEdit } from "@/components/DialogEdit";
import { itemRepository } from "@/repositories/item/json-item-repository";

export const CardItem = async () => {
    const items = await itemRepository.findAll();

    return (
        <div>
            <Card className="w-64">
                <CardHeader>
                    <h1 className="text-center">{items[0].title}</h1>
                    <Image className="bg-cover" src="/images/brownie_teste.png" alt="Item 1" width={300} height={300} /> 
                    {/* naotem como pegar link image[0] pois pertence ao site */}
                    <Separator className="bg-blue-500" />
                </CardHeader>
                <CardContent className="flex flex-col justify-center items-center gap-2">
                    <p className="text-justify">{items[0].description}</p>
                    <div className="info1 space-x-2">
                        {items[0].categories.map((category, index) => (
                            <Badge key={index} className="">{category}</Badge>
                        ))}
                    </div>
                    <div className="edits flex space-x-4 mt-2">
                        <AlertDelete />
                        <DialogEdit />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
