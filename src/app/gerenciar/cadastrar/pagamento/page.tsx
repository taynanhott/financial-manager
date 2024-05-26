"use client";

import Submenu from "@/components/Html/Body/Submenu/submenu";
import Graph from "@/components/Resources/GraphApex";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useEntries } from "@/context/EntriesContext";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { ptBR } from "date-fns/locale";
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableListPay } from "@/components/Resources/Table";
import { useCategory } from "@/context/CategoryContext";

const graficoSimples = [
    {
        options: {
            chart: {
                id: "bar" as const,
                foreColor: '#F5F5F5'
            },
            xaxis: {
                categories: ['Categoria da Movimentação']
            },
            grid: {
                position: 'front'
            },
            fill: {
                colors: ['#F5F5F5', '#b1b7b4']
            },
            colors: ['#F5F5F5', '#b1b7b4'],
            dataLabels: {
                style: {
                    colors: ['#0f172a']
                }
            },
        },
        series: [
            {
                name: "Crédito",
                data: [250]
            },
            {
                name: "Débito",
                data: [650]
            },
            {
                name: "Parcelado",
                data: [450]
            },
            {
                name: "Emprestado",
                data: [150]
            }
        ],
        height: 480
    },
]

export default function Pagamento() {
    const [descricao, setDescricao] = useState<string>("");
    const [categoria, setCategoria] = useState<string>("");
    const [date, setDate] = useState<Date>()
    const [valor, setValor] = useState<string>("");
    const { addEntry } = useEntries();
    const { category } = useCategory();

    function cadastrar(descricao: string, categoria: string, date: Date | undefined, valor: string) {
        const newEntry = { descricao, categoria, date, valor };
        addEntry(newEntry);
    }

    return (
        <section className="grow lg:ml-[240px] mt-14 lg:mt-auto pb-12">
            <div id="header-page">
                <Submenu />
            </div>

            <div id="mid-page">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[550px] lg:h-[530px] col-span-1 rounded-sm border bg-white shadow-md">
                        <div className="items-center text-lg flex font-poppins-bold text-white bg-slate-900 rounded-t-sm">
                            <p className="px-6 py-4">Cadastro de Pagamento</p>
                        </div>

                        <div className="px-6 my-4">
                            <p>Cadastre todas as movimentações financeiras que debitaram de sua conta.</p>
                        </div>

                        <div className="flex flex-col items-start px-6">
                            <Label>Descrição da movimentação</Label>
                            <Input
                                className="bg-slate-100 w-full md:w-1/2 lg:w-1/2 border border-slate-300 my-4"
                                id="descricao"
                                name="descricao"
                                type="text"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />

                            <Label>Categoria</Label>
                            <Select
                                value={categoria}
                                onValueChange={(value) => setCategoria(value)}
                            >
                                <SelectTrigger className="bg-slate-100 w-full md:w-1/2 lg:w-1/2 border border-slate-300 my-4">
                                    <SelectValue placeholder="Selecione uma categoria" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Crédito">Crédito</SelectItem>
                                    <SelectItem value="Débito">Débito</SelectItem>
                                    <SelectItem value="Parcelado">Parcelado</SelectItem>
                                    <SelectItem value="Emprestado">Emprestado</SelectItem>
                                    {category.map((invoice: any, index: number) => (
                                        <SelectItem key={index} value={invoice.description}>{invoice.description}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Label>Data da movimentação</Label>
                            <div className="bg-slate-100 w-full md:w-1/2 lg:w-1/2 border border-slate-300 my-4">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "PPP") : <span>Selecione um período</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
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

                            <Label>Valor</Label>
                            <Input
                                className="bg-slate-100 w-full md:w-1/2 lg:w-1/2 border border-slate-300 my-4"
                                id="valor"
                                name="valor"
                                type="text"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                            />

                            <Button onClick={() => cadastrar(descricao, categoria, date, valor)}>
                                Salvar
                            </Button>
                        </div>
                    </div>

                    <div className="h-[530px] col-span-1 rounded-sm border bg-white shadow-md">

                        <div className="h-full bg-gradient-to-r from-slate-800 to-slate-600">
                            <Graph components={graficoSimples} />
                        </div>
                    </div>

                    <div className="h-[530px] col-span-1 rounded-sm border bg-white shadow-md">

                        <div className="h-full bg-gradient-to-r from-slate-800 to-slate-600">
                            <TableListPay />
                        </div>
                    </div>
                </div>
            </div>
        </section >

    );
}
