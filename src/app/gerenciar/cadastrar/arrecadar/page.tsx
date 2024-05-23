"use client"

import Submenu from "@/components/Html/Body/Submenu/submenu";
import Graph from "@/components/Resources/GraphApex";
import { Label } from "@/components/ui/label";
import { useDeptor } from "@/context/DebtorContext";
import { useState } from "react";

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
                name: "Crébito",
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

export default function Arrecadar() {

    const [invoice, setInvoice] = useState<string>("");
    const [paymentStatus, setPayment] = useState<string>("");
    const [totalAmount, setTotal] = useState<string>("");
    const { addDeptor } = useDeptor();

    function cadastrar(invoice: string, paymentStatus: string, totalAmount: string) {
        const newDeptor = { invoice, paymentStatus, totalAmount };
        addDeptor(newDeptor);
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
                            <Label className="ml-2">Fonte</Label>
                            <input
                                className="bg-slate-100 border border-black"
                                id="descricao"
                                name="descricao"
                                type="text"
                                value={invoice}
                                onChange={(e) => setInvoice(e.target.value)}
                            />

                            <Label className="ml-2">Situação</Label>
                            <select
                                className="bg-slate-100 border border-black"
                                id="categoria"
                                name="categoria"
                                value={paymentStatus}
                                onChange={(e) => setPayment(e.target.value)}
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
                                value={totalAmount}
                                onChange={(e) => setTotal(e.target.value)}
                            />

                            <button
                                onClick={() => cadastrar(invoice, paymentStatus, totalAmount)}
                                className="ml-2 border border-black"
                                type="submit"
                            >
                                Salvar
                            </button>
                        </div>
                        <div className="tems-center flex">
                        </div>

                    </div>
                    <div className="h-[341px] col-span-1 rounded-sm border bg-white shadow-md">

                        <div className="h-full bg-gradient-to-r from-slate-800 to-slate-600">
                            <Graph components={graficoSimples} />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}