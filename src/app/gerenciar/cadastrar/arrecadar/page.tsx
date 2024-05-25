"use client"

import Submenu from "@/components/Html/Body/Submenu/submenu";
import Graph from "@/components/Resources/GraphApex";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDeptor } from "@/context/DebtorContext";
import { useState } from "react";

import { ptBR } from "date-fns/locale";
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import { TableListDeptor } from "@/components/Resources/Table";

const graficoSimples = [
    {
        options: {
            chart: {
                id: "bar" as const,
                foreColor: '#F5F5F5'
            },
            xaxis: {
                categories: ['Estado da Dívida']
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
                name: "Pago",
                data: [350]
            },
            {
                name: "Atrasado",
                data: [250]
            },
            {
                name: "Pendente",
                data: [450]
            },
        ],
        height: 400
    },
]

export default function Arrecadar() {

    const [invoice, setInvoice] = useState<string>("");
    const [totalAmount, setTotal] = useState<string>("");
    const [date, setDate] = useState<Date>()
    const { addDeptor } = useDeptor();

    function cadastrar(invoice: string, date: Date | undefined, totalAmount: string) {
        const newDeptor = { invoice, date, totalAmount };
        addDeptor(newDeptor);
    }

    return (
        <section className="grow lg:ml-[240px] mt-14 lg:mt-auto pb-12">
            <div id="header-page">
                <Submenu />
            </div>

            <div id="mid-page">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[470px] lg:h-[450px] col-span-1 rounded-sm border bg-white shadow-md">
                        <div className="items-center text-lg flex font-poppins-bold text-white bg-slate-900 rounded-t-sm">
                            <p className="px-6 py-4">Cadastro de Arrecadação</p>
                        </div>

                        <div className="px-6 my-4">
                            <p>Cadastre todos os valores pendentes recebimento.</p>
                        </div>

                        <div className="flex flex-col items-start px-6">
                            <Label>Descrição da arrecadação</Label>
                            <Input
                                className="bg-slate-100 w-full md:w-1/2 lg:w-1/2 border border-slate-300 my-4"
                                id="descricao"
                                name="descricao"
                                type="text"
                                value={invoice}
                                onChange={(e) => setInvoice(e.target.value)}
                            />

                            <Label>Prazo de recebimento</Label>
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
                                value={totalAmount}
                                onChange={(e) => setTotal(e.target.value)}
                            />

                            <Button onClick={() => cadastrar(invoice, date, totalAmount)}>
                                Salvar
                            </Button>
                        </div>
                    </div>

                    <div className="h-[450px] col-span-1 border bg-white shadow-md">
                        <div className="h-full bg-gradient-to-r rounded-sm from-slate-800 to-slate-600">
                            <Graph components={graficoSimples} />
                        </div>
                    </div>

                    <div className="h-[530px] col-span-1 border bg-white shadow-md">

                        <div className="h-full bg-gradient-to-r rounded-sm from-slate-800 to-slate-600">
                            <TableListDeptor />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}