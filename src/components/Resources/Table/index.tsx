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

export function ListDash({ className, context, variant }: Props) {
    const { category } = useCategory();

    console.log(context)

    return (
        <ScrollArea className={className}>
            <div className="relative">
                <table className="text-gray-500 divide-y divide-gray-200 w-full">
                    <thead className="sticky top-0 z-10 bg-white pointer-events-none">
                        <tr className="text-center">
                            <th className="p-2 text-left text-xs font-medium uppercase tracking-wider">Descrição</th>
                            {variant === `paymount` ?
                                <th className="p-2 text-left text-xs font-medium uppercase tracking-wider">Categoria</th>
                                :
                                <></>
                            }
                            {variant === `paymount` || variant === `deptor` ?
                                <>
                                    <th className="p-2 text-center text-xs font-medium uppercase tracking-wider">Data</th>
                                    <th className="p-2 text-left text-xs font-medium uppercase tracking-wider">Valor</th>
                                </>
                                :
                                <></>
                            }
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
                                        <td className="p-2 text-sm text-left">R$ {Number(element.value).toFixed(2)}</td>
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

    return (
        <ScrollArea className={className}>
            <div className="relative">
                <table className="text-white divide-y divide-gray-200 w-full">
                    <thead className="sticky top-0 z-10 bg-gradient-to-r from-slate-800 to-slate-600 pointer-events-none">
                        <tr>
                            <th className="p-2 text-left text-xs font-medium uppercase tracking-wider">Descrição</th>
                            {variant === `paymount` ?
                                <th className="p-2 text-left text-xs font-medium uppercase tracking-wider">Categoria</th>
                                :
                                <></>
                            }
                            {variant === `paymount` || variant === `deptor` ?
                                <>
                                    <th className="p-2 text-center text-xs font-medium uppercase tracking-wider">Data</th>
                                    <th className="p-2 text-left text-xs font-medium uppercase tracking-wider">Valor</th>
                                </>
                                :
                                <></>
                            }
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {context.length > 0 ? (
                            context.map((element: any, index: number) => (
                                <Popover key={`popover-${index}`}>
                                    <PopoverTrigger asChild>
                                        <motion.tr
                                            key={`td-${index}`}
                                            className={`hover:bg-slate-600 cursor-pointer`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <td className="p-2 text-sm font-medium">{element.description}</td>
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
                                                <td className="p-2 text-sm text-left">R$ {Number(element.value).toFixed(2)}</td>
                                            )}
                                        </motion.tr>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80">
                                        <div className="grid gap-4">
                                            <div className="space-y-2">
                                                <h4 className="font-medium leading-none pointer-events-none">Gerenciar Registro</h4>
                                                <p className="text-sm text-muted-foreground pointer-events-none">
                                                    Realize as ações desejadas para o registro cadastrado.
                                                </p>
                                            </div>
                                            <div className="grid gap-2">
                                                <div className="grid grid-cols-3 items-center gap-4">
                                                    <Label htmlFor="maxWidth">Descrição</Label>
                                                    <Input
                                                        id="maxWidth"
                                                        defaultValue="Descrição Item"
                                                        className="col-span-2 h-8"
                                                    />
                                                </div>
                                                {variant === `paymount` ?

                                                    <div className="grid grid-cols-3 items-center gap-4">
                                                        <Label htmlFor="height" className="col-span-1">Categoria</Label>
                                                        <Select
                                                            value={type}
                                                            onValueChange={(value) => setType(value)}
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
                                                    :
                                                    <></>
                                                }

                                                {variant === `deptor` ?

                                                    <div className="grid grid-cols-3 items-center gap-4">
                                                        <Label htmlFor="height" className="col-span-1">Situação</Label>
                                                        <Select
                                                            value={type}
                                                            onValueChange={(value) => setType(value)}
                                                        >
                                                            <SelectTrigger className="bg-slate-100 col-span-2 border border-slate-300">
                                                                <SelectValue />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value={'1'} className="cursor-pointer">
                                                                    Pago
                                                                </SelectItem>
                                                                <SelectItem value={'0'} className="cursor-pointer">
                                                                    Pendente
                                                                </SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    :
                                                    <></>
                                                }
                                                {variant === `paymount` || variant === `deptor` ?
                                                    <>
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
                                                        <div className="grid grid-cols-3 items-center gap-4">
                                                            <Label htmlFor="maxHeight">Valor</Label>
                                                            <Input
                                                                id="maxHeight"
                                                                defaultValue="R$ 350.00"
                                                                className="col-span-2 h-8"
                                                            />
                                                        </div>
                                                    </>
                                                    :
                                                    <></>
                                                }
                                                <Button className="mt-4" variant="destructive">Excluir Registro</Button>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
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

