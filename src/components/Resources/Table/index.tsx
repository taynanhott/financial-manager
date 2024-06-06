"use client"

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useCategory } from "@/context/CategoryContext";
import { motion } from "framer-motion";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import moment from 'moment';
import { format } from "date-fns"
import 'moment/locale/pt-br';
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

interface Props {
    className?: string,
    context: {
        description: string;
        date?: Date | undefined;
        value?: string | undefined;
        type?: string;
    }[],
    variant: `deptor` | `paymount` | `category`
}

function thvariant(variant: "deptor" | "paymount" | "category") {
    switch (variant) {
        case `deptor`:
            return (
                <>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-left">Descrição</th>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-left">Situação</th>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-center">Data</th>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-left">Valor</th>
                </>
            )
        case `paymount`:
            return (
                <>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-left">Descrição</th>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-left">Categoria</th>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-center">Data</th>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-left">Valor</th>
                </>
            )
        case `category`:
            return (
                <>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-left">Descrição</th>
                </>
            )
        default:
            return <></>
    }
}

export function ListDash({ className, context, variant }: Props) {
    const { category } = useCategory();

    return (
        <ScrollArea className={className}>
            <div className="relative">
                <table className="text-gray-500 divide-y divide-gray-200 w-full">
                    <thead className="sticky top-0 z-10 bg-white pointer-events-none">
                        <tr className="text-center">
                            {thvariant(variant)}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {context.length > 0 ? (
                            context.map((element: any, index: number) => (
                                <motion.tr
                                    key={`td-${index}`}
                                    className={`hover:bg-slate-200 pointer-events-none`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <td className="p-2 text-sm font-medium">{element.description}</td>
                                    {element.status !== undefined && (
                                        <td className="p-2 text-sm">
                                            {element.status ? `Pago` : `Pendente`}
                                        </td>
                                    )}
                                    {element.type && (
                                        <td className="p-2 text-sm">
                                            {category[+element.type].description}
                                        </td>
                                    )}
                                    {element.date !== undefined && (
                                        <td className="p-2 text-sm text-center">
                                            {moment(element.date).format('DD/MM/YYYY')}
                                        </td>
                                    )}
                                    {element.value && (
                                        <td className="p-2 text-sm text-left text-nowrap">R$ {Number(element.value).toFixed(2)}</td>
                                    )}
                                </motion.tr>
                            ))
                        ) : (
                            <motion.tr
                                key="td-none"
                                className={`pointer-events-none`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <td colSpan={4} className="p-2 text-sm font-medium text-center">
                                    Nenhum registro cadastrado
                                </td>
                            </motion.tr>
                        )}
                    </tbody>
                </table>
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}

export function TableListAction({ className, context, variant }: Props) {
    const { category } = useCategory();
    const [date, setDate] = useState<Date>();
    const [type, setType] = useState<string>("");

    const status = [
        {
            description: `Pago`
        },
        {
            description: `Pendente`
        }
    ]

    return (
        <ScrollArea className={className}>
            <div className="relative">
                <table className="text-white divide-y divide-gray-200 w-full">
                    <thead className="sticky top-0 z-10 bg-gradient-to-r from-slate-800 to-slate-600 pointer-events-none">
                        <tr>
                            {thvariant(variant)}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {context.length > 0 ? (
                            context.map((element: any, index: number) => (
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
                                            {element.status !== undefined && (
                                                <td className="p-2 text-sm">
                                                    {element.status ? `Pago` : `Pendente`}
                                                </td>
                                            )}
                                            {element.type && (
                                                <td className="p-2 text-sm">
                                                    {category[+element.type].description}
                                                </td>
                                            )}
                                            {element.date !== undefined && (
                                                <td className="p-2 text-sm text-center">
                                                    {moment(element.date).format('DD/MM/YYYY')}
                                                </td>
                                            )}
                                            {element.value && (
                                                <td className="p-2 text-sm text-left text-nowrap">R$ {Number(element.value).toFixed(2)}</td>
                                            )}
                                        </motion.tr>
                                    </DialogTrigger>
                                    <DialogContent className="w-10/12 rounded-lg">
                                        <div className="grid gap-4">
                                            <div className="space-y-2">
                                                <div className="grid grid-cols-4">
                                                    <h4 className="col-span-3 justify-start font-medium leading-none pointer-events-none">Gerenciar Registro</h4>
                                                </div>
                                                <p className="text-sm text-muted-foreground pointer-events-none">
                                                    Realize as ações desejadas para o registro cadastrado.
                                                </p>
                                            </div>
                                            <div className="grid gap-2">
                                                <div className="grid grid-cols-3 items-center gap-4">
                                                    <Label>Descrição</Label>
                                                    <Input
                                                        defaultValue="Descrição Item"
                                                        className="col-span-2 h-8"
                                                    />
                                                </div>

                                                {variant === `paymount` || variant === `deptor` ?
                                                    <>
                                                        <div className="grid grid-cols-3 items-center gap-4">
                                                            <Label htmlFor="height" className="col-span-1">{variant === `paymount` ? `Categoria` : `Situação`}</Label>
                                                            <Select
                                                                value={type}
                                                                onValueChange={(value) => setType(value)}
                                                            >
                                                                <SelectTrigger className="bg-slate-100 col-span-2 border border-slate-300">
                                                                    <SelectValue placeholder="Selecione" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {(variant === `paymount` ? category : status).map((invoice: any, index: number) => (
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
                                                                defaultValue="R$ 350.00"
                                                                className="col-span-2 h-8"
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
                                                                            !date && "text-muted-foreground"
                                                                        )}
                                                                    >
                                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                                        {date ? format(date, "PPP") : <span>--/--/----</span>}
                                                                    </Button>
                                                                </PopoverTrigger>
                                                                <PopoverContent className="col-span-2 p-0">
                                                                    <Calendar
                                                                        mode="single"
                                                                        selected={date}
                                                                        onSelect={setDate}
                                                                        initialFocus
                                                                        locale={ptBR}
                                                                    />
                                                                </PopoverContent>
                                                            </Popover>
                                                        </div>
                                                    </>
                                                    :
                                                    <></>
                                                }
                                                <DialogClose>
                                                    <Button className="mt-4 w-full" variant="destructive">Excluir Registro</Button>
                                                </DialogClose>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ))
                        ) : (
                            <motion.tr
                                key="td-none"
                                className={`pointer-events-none`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <td colSpan={4} className="p-2 text-sm font-medium text-center">
                                    Nenhum registro cadastrado
                                </td>
                            </motion.tr>
                        )}
                    </tbody>
                </table>
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea >
    );
}

