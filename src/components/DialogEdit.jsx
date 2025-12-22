import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { SquarePen } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "@/components/ui/button";

import React from 'react'

export const DialogEdit = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <SquarePen className="text-gray-500 cursor-pointer hover:bg-gray-300" />
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Editar card</DialogTitle>
                        <DialogDescription asChild>
                            <div className="cardEdit flex">
                                <Input />
                                <Button>Editar</Button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}
