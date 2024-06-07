"use client"

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCategory } from '@/context/CategoryContext';
import { useDeptor } from '@/context/DebtorContext';
import { useEntries } from '@/context/EntriesContext';
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import moment from 'moment';
import 'moment/locale/pt-br';
import { CalendarIcon } from "lucide-react";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";

import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";

export function DialogCategory() {
    const { category, editDescription, removeCategory } = useCategory();

    return (
        <>
            {category.length > 0 ? (
                category.map((element: any, index: number) => (
                    <Dialog key={`dialog-${index}`} >
                        <DialogTrigger asChild>
                            <motion.tr
                                key={`tr-${index}`}
                                className={`hover:bg-slate-600 cursor-pointer`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <td className="p-2 text-sm font-medium">{element.description}</td>
                            </motion.tr>
                        </DialogTrigger>
                        <DialogContent className="w-10/12 rounded-lg">
                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <div className="grid grid-cols-4">
                                        <h4 className="col-span-3 justify-start font-medium leading-none pointer-events-none">Gerenciar Categorias</h4>
                                    </div>
                                    <p className="text-sm text-muted-foreground pointer-events-none">
                                        Realize as ações desejadas para as categorias cadastradas.
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label>Descrição</Label>
                                        <Input
                                            defaultValue={element.description}
                                            className="col-span-2 h-8"
                                            onChange={(e) => editDescription(index, e.target.value)}
                                        />
                                    </div>

                                    <DialogClose>
                                        <Button className="mt-4 w-full" variant="destructive" onClick={(e) => removeCategory(index)}>Excluir Registro</Button>
                                    </DialogClose>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))
            ) : (<></>)
            }
        </>
    )
}

export function DialogDeptor() {
    const { deptor, editDescription, editDate, editStatus, editValue, removeDeptor } = useDeptor();

    const status = [
        {
            description: `Pendente`
        },
        {
            description: `Pago`
        }
    ];

    return (
        <>
            {deptor.length > 0 ? (
                deptor.map((element: any, index: number) => (
                    <Dialog key={`dialog-${index}`} >
                        <DialogTrigger asChild>
                            <motion.tr
                                key={`tr-${index}`}
                                className={`hover:bg-slate-600 cursor-pointer`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <td className="p-2 text-sm font-medium">{element.description}</td>
                                <td className="p-2 text-sm">{element.status ? `Pago` : `Pendente`}</td>
                                <td className="p-2 text-sm text-center">{moment(element.date).format('DD/MM/YYYY')}</td>
                                <td className="p-2 text-sm text-left text-nowrap">R$ {Number(element.value).toFixed(2)}</td>
                            </motion.tr>
                        </DialogTrigger>
                        <DialogContent className="w-10/12 rounded-lg">
                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <div className="grid grid-cols-4">
                                        <h4 className="col-span-3 justify-start font-medium leading-none pointer-events-none">Gerenciar Arrecadações</h4>
                                    </div>
                                    <p className="text-sm text-muted-foreground pointer-events-none">
                                        Realize as ações desejadas para asarrecadações cadastradas.
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label>Descrição</Label>
                                        <Input
                                            defaultValue={element.description}
                                            className="col-span-2 h-8"
                                            placeholder="Digite uma descrição..."
                                            onBlur={(e) => {
                                                console.log(e.target.value.length)
                                                if (e.target.value.length > 0) {
                                                    editDescription(index, e.target.value);
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label className="col-span-1">Situação</Label>
                                        <Select
                                            value={element.status ? `1` : `0`}
                                            onValueChange={(value) => {
                                                if (value) {
                                                    editStatus(index, +value ? true : false)
                                                }
                                            }}
                                        >
                                            <SelectTrigger className="bg-slate-100 col-span-2 border border-slate-300">
                                                <SelectValue placeholder="Selecione" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {status.map((invoice: any, index: number) => (
                                                    <SelectItem key={`edit-category-${index}`} value={`${index}`} className="cursor-pointer">
                                                        {invoice.description}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label>Valor</Label>
                                        <Input
                                            type="number"
                                            value={element.value}
                                            pattern="^\d*\.?\d*$"
                                            placeholder="Digite um valor..."
                                            className="col-span-2 h-8"
                                            onChange={(e) => {
                                                if (e.target.value) {
                                                    editValue(index, e.target.value)
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="height">Data</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "col-span-2 justify-start text-left font-normal",
                                                        !element.date && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {element.date ? format(element.date, "PPP") : <span>--/--/----</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="col-span-2 p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={element.date}
                                                    onSelect={(selectedDate) => {
                                                        if (selectedDate) {
                                                            editDate(index, selectedDate);
                                                        }
                                                    }}
                                                    initialFocus
                                                    locale={ptBR}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <DialogClose>
                                        <Button className="mt-4 w-full" variant="destructive" onClick={() => removeDeptor(index)}>Excluir Registro</Button>
                                    </DialogClose>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))
            ) : (<></>)
            }
        </>
    );
}

export function DialogEntries() {
    const { entries, editDescription, editType, editDate, editValue, removeEntries } = useEntries();
    const { category } = useCategory();

    return (
        <>
            {entries.length > 0 ? (
                entries.map((element: any, index: number) => (
                    <Dialog key={`dialog-${index}`} >
                        <DialogTrigger asChild>
                            <motion.tr
                                key={`tr-${index}`}
                                className={`hover:bg-slate-600 cursor-pointer`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <td className="p-2 text-sm font-medium">{element.description}</td>
                                <td className="p-2 text-sm">{category[+element.type].description} </td>
                                <td className="p-2 text-sm text-center">{moment(element.date).format('DD/MM/YYYY')}</td>
                                <td className="p-2 text-sm text-left text-nowrap">R$ {Number(element.value).toFixed(2)}</td>
                            </motion.tr>
                        </DialogTrigger>
                        <DialogContent className="w-10/12 rounded-lg">
                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <div className="grid grid-cols-4">
                                        <h4 className="col-span-3 justify-start font-medium leading-none pointer-events-none">Gerenciar Pagamentos</h4>
                                    </div>
                                    <p className="text-sm text-muted-foreground pointer-events-none">
                                        Realize as ações desejadas para os pagamentos cadastrados.
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label>Descrição</Label>
                                        <Input
                                            defaultValue={element.description}
                                            className="col-span-2 h-8"
                                            placeholder="Digite uma descrição..."
                                            onChange={(e) => editDescription(index, e.target.value)}
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label className="col-span-1">Situação</Label>
                                        <Select
                                            value={element.type}
                                            onValueChange={(value) => editType(index, value)}
                                        >
                                            <SelectTrigger className="bg-slate-100 col-span-2 border border-slate-300">
                                                <SelectValue placeholder="Selecione" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {category.map((invoice: any, index: number) => (
                                                    <SelectItem key={`edit-category-${index}`} value={`${index}`} className="cursor-pointer">
                                                        {invoice.description}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label>Valor</Label>
                                        <Input
                                            type="number"
                                            value={element.value}
                                            pattern="^\d*\.?\d*$"
                                            placeholder="Digite um valor..."
                                            className="col-span-2 h-8"
                                            onChange={(e) => editValue(index, e.target.value)}
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="height">Data</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "col-span-2 justify-start text-left font-normal",
                                                        !element.date && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {element.date ? format(element.date, "PPP") : <span>--/--/----</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="col-span-2 p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={element.date}
                                                    onSelect={(selectedDate) => {
                                                        if (selectedDate) {
                                                            editDate(index, selectedDate);
                                                        }
                                                    }}
                                                    initialFocus
                                                    locale={ptBR}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <DialogClose>
                                        <Button className="mt-4 w-full" variant="destructive" onClick={() => removeEntries(index)}>Excluir Registro</Button>
                                    </DialogClose>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))
            ) : (<></>)
            }
        </>
    )
}