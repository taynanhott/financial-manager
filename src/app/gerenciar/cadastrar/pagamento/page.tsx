"use client";

import Submenu from "@/components/Html/Body/Submenu/submenu";
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
import { TableListAction } from "@/components/Resources/Table";
import { useCategory } from "@/context/CategoryContext";
import { useSubCategory } from "@/context/SubCategoryContext";

export default function Pagamento() {
    const [description, setDescription] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [subtype, setSubType] = useState<string>("");
    const [date, setDate] = useState<Date>()
    const [value, setValue] = useState<string>();
    const { entries, addEntry } = useEntries();
    const { category } = useCategory();
    const { subcategory } = useSubCategory();

    function cadastrar(description: string, type: string, subtype: string, date: Date | undefined, value: string | undefined) {
        if (description && type && subtype && date && value && !isNaN(+value)) {
            const newEntry = { description, type, subtype, date, value };
            addEntry(newEntry);
            alert("Cadastro realizado com sucesso.");
            setType(``);
            setSubType(``);
            setValue(``);
            setDate(undefined);
            setDescription(``);
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
                    <div className="h-[650px] lg:h-[620px] col-span-1 rounded-sm border bg-white shadow-md">
                        <div className="items-center text-lg flex font-poppins-bold text-white bg-slate-900 rounded-t-sm">
                            <p className="px-6 py-4 pointer-events-none">Cadastro de Pagamento</p>
                        </div>

                        <div className="px-6 my-4 pointer-events-none">
                            <p>Cadastre todas as movimentações financeiras que debitaram de sua conta.</p>
                        </div>

                        <div className="flex flex-col items-start px-6">
                            <Label className="pointer-events-none">Descrição da movimentação</Label>
                            <Input
                                className="bg-slate-100 w-full md:w-1/2 lg:w-1/2 border border-slate-300 my-4"
                                id="descricao"
                                name="descricao"
                                type="text"
                                placeholder="Digite uma descrição..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <Label className="pointer-events-none">Categoria</Label>
                            <Select
                                value={type}
                                onValueChange={(value) => setType(value)}
                            >
                                <SelectTrigger className="bg-slate-100 w-full md:w-1/2 lg:w-1/2 border border-slate-300 my-4">
                                    <SelectValue placeholder="Selecione uma categoria" />
                                </SelectTrigger>
                                <SelectContent>
                                    {category.map((invoice: any, index: number) => (
                                        <SelectItem key={index} value={`${index}`}>{invoice.description}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Label className="pointer-events-none">Subcategoria</Label>
                            <Select
                                value={subtype}
                                onValueChange={(value) => setSubType(value)}
                            >
                                <SelectTrigger className="bg-slate-100 w-full md:w-1/2 lg:w-1/2 border border-slate-300 my-4">
                                    <SelectValue placeholder="Selecione uma categoria" />
                                </SelectTrigger>
                                <SelectContent>
                                    {subcategory.map((invoice: any, index: number) => (
                                        <SelectItem key={index} value={`${index}`}>{invoice.description}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Label className="pointer-events-none">Data da movimentação</Label>
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

                            <Button onClick={() => cadastrar(description, type, subtype, date, value)}>
                                Cadastrar
                            </Button>
                        </div>
                    </div>

                    <div className="h-80 lg:h-[620px] col-span-1 rounded-sm border bg-white shadow-md">
                        <div className="h-full rounded-sm bg-gradient-to-r from-slate-800 to-slate-600">
                            <div className="items-center text-lg flex font-poppins-bold text-white  rounded-t-sm">
                                <p className="px-6 pt-4 pointer-events-none">Lista de Movimentações</p>
                            </div>
                            <div className="items-center text-sm flex font-poppins-bold text-white rounded-t-sm">
                                <p className="px-6 pointer-events-none">Clique no item caso deseje gerencia-lo.</p>
                            </div>
                            <TableListAction className={`h-60 lg:h-[540px] p-4 w-full rounded-md`} context={entries} variant={`paymount`} />
                        </div>
                    </div>
                </div>
            </div>
        </section >

    );
}
