"use client"

import Submenu from "@/components/Html/Body/Submenu/submenu";
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

import { TableListAction } from "@/components/Resources/Table";

export default function Arrecadar() {

    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<Date>()
    const [value, setValue] = useState<string>();
    const [status, setStatus] = useState<boolean>(false);
    const { deptor, addDeptor } = useDeptor();

    function cadastrar(description: string, date: Date | undefined, value: string | undefined, status: boolean) {
        if (description && date && value && !isNaN(+value)) {
            const newDeptor = { description, date, value, status };
            addDeptor(newDeptor);
            alert("Cadastro realizado com sucesso.");
            setValue(``)
            setDate(undefined);
            setDescription(``)
        } else {
            alert("Por favor, preencha todos os campos.");
        }
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
                            <p className="px-6 py-4 pointer-events-none">Cadastro de Arrecadação</p>
                        </div>

                        <div className="px-6 my-4 pointer-events-none">
                            <p>Cadastre todos os valores pendentes recebimento.</p>
                        </div>

                        <div className="flex flex-col items-start px-6">
                            <Label className="pointer-events-none">Descrição da arrecadação</Label>
                            <Input
                                className="bg-slate-100 w-full md:w-1/2 lg:w-1/2 border border-slate-300 my-4"
                                id="descricao"
                                name="descricao"
                                placeholder="Digite uma descrição..."
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <Label className="pointer-events-none">Prazo de recebimento</Label>
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
                                            {date ? format(date, "PPP") : <span>--/--/----</span>}
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

                            <Label className="pointer-events-none">Valor</Label>
                            <Input
                                className="bg-slate-100 w-full md:w-1/2 lg:w-1/2 border border-slate-300 my-4"
                                type="number"
                                value={value}
                                pattern="^\d*\.?\d*$"
                                placeholder="Digite um valor..."
                                onChange={(e) => {
                                    const newValue = e.target.value;
                                    if (newValue !== undefined && /^\d*\.?\d*$/.test(newValue)) {
                                        setValue(newValue);
                                    }
                                }}
                            />

                            <Button onClick={() => cadastrar(description, date, value, status)}>
                                Cadastrar
                            </Button>
                        </div>
                    </div>

                    <div className="h-80 lg:h-[450px] col-span-1 border bg-white shadow-md">
                        <div className="h-full rounded-sm bg-gradient-to-r from-slate-800 to-slate-600">
                            <div className="items-center text-lg flex font-poppins-bold text-white rounded-t-sm">
                                <p className="px-6 pt-4 pointer-events-none">Lista de Devedores</p>
                            </div>
                            <div className="items-center text-sm flex font-poppins-bold text-white rounded-t-sm">
                                <p className="px-6 pointer-events-none">Clique no item caso deseje gerencia-lo.</p>
                            </div>
                            <TableListAction className={`h-64 lg:h-96 p-4 w-full rounded-md`} context={deptor} variant={`deptor`} />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}