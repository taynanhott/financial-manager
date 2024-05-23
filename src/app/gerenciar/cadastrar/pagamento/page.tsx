"use client";

import Submenu from "@/components/Html/Body/Submenu/submenu";
import Graph from "@/components/Resources/GraphApex";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useEntries } from "@/context/EntriesContext";

const graficoSimples = [
    {
        options: {
            chart: {
                id: "bar" as const,
                foreColor: '#F5F5F5'
            },
            xaxis: {
                categories: ['Categoria Pagamento']
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
        height: 300
    },
]

export default function Pagamento() {
    const [descricao, setDescricao] = useState<string>("");
    const [categoria, setCategoria] = useState<string>("");
    const [valor, setValor] = useState<string>("");
    const { addEntry } = useEntries();

    function cadastrar(descricao: string, categoria: string, valor: string) {
        const newEntry = { descricao, categoria, valor };
        addEntry(newEntry);
    }

    return (
        <section className="grow lg:ml-[240px] mt-14 lg:mt-auto pb-12">
            <div id="header-page">
                <Submenu />
            </div>

            <div id="mid-page">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[341px] col-span-1 lg:col-span-2 rounded-sm border bg-white shadow-md">
                        <div className="px-4 items-center text-lg flex font-poppins-bold pt-4"></div>
                        <div className="items-center flex">
                            <Label className="ml-2">Descrição</Label>
                            <input
                                className="bg-slate-100 border border-black"
                                id="descricao"
                                name="descricao"
                                type="text"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />

                            <Label className="ml-2">Categoria</Label>
                            <select
                                className="bg-slate-100 border border-black"
                                id="categoria"
                                name="categoria"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                            >
                                <option>Selecione uma opção</option>
                                <option value="Crédito">Crédito</option>
                                <option value="Débito">Débito</option>
                                <option value="Parcelado">Parcelado</option>
                                <option value="Emprestado">Emprestado</option>
                            </select>

                            <Label className="ml-2">Valor</Label>
                            <input
                                className="bg-slate-100 border border-black"
                                id="valor"
                                name="valor"
                                type="text"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                            />

                            <button
                                onClick={() => cadastrar(descricao, categoria, valor)}
                                className="ml-2 border border-black"
                                type="submit"
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                    <div className="h-[341px] col-span-1 rounded-sm border bg-white shadow-md">
                        <div className="h-full bg-gradient-to-r from-slate-800 to-slate-600">
                            <Graph components={graficoSimples} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
