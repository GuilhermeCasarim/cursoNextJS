import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { AlertDelete } from "@/components/AlertDelete";
import { DialogEdit } from "@/components/DialogEdit";

export const CardItem = () => {
    return (
        <div>
            <Card className="w-64">
                <CardHeader>
                    <h1 className="text-center">Brownie de batata doce</h1>
                    <Image className="bg-cover" src="/images/brownie_teste.png" alt="Item 1" width={300} height={300} />
                    <Separator className="bg-blue-500" />
                </CardHeader>
                <CardContent className="flex flex-col justify-center items-center gap-2">
                    <p className="text-justify">Um brownie de batata doce feito sem açúcar, para você que busca um doce e saudável sem sair da dieta, e além disso com um preço que cabe no seu bolso.</p>
                    <div className="info1 space-x-2">
                        <Badge className="">Sem açúcar</Badge>
                        <Badge className="">Saudável</Badge>
                    </div>
                    <div className="info2 space-x-2 sm:block hidden">
                        <Badge className="">Cabe na dieta</Badge>
                        <Badge className="">Cabe no bolso</Badge>
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
