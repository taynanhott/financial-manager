"use client"

import Graph from "@/components/Resources/GraphApex";
import { motion } from "framer-motion";
import useAnimatedCount from "@/components/animation";
import { ListDash } from "@/components/Resources/Table";
import React from "react";
import Submenu from "@/components/Html/Body/Submenu/submenu";
import { useDeptor } from "@/context/DebtorContext";
import { useEntries } from "@/context/EntriesContext";
import { useCategory } from "@/context/CategoryContext";
import CardDashBoard from "@/components/Resources/CardBoard";

const graficoDetalhado = [
    {
        options: {
            chart: {
                id: "bar" as const
            },
            xaxis: {
                categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                colors: ['#334155', '#0f172a']
            },
            colors: ['#64748b', '#0f172a']
        },
        series: [
            {
                name: "Ano Anterior",
                data: [1500, 1800, 1400, 2000, 2150, 1900, 1400, 2000, 2250, 2300, 2650, 2450]
            },
            {
                name: "Ano atual",
                data: [2600, 2500, 2350, 2300, 2600, 2450, 2250, 2300, 1400, 2000, 3000, 3200]
            }
        ],
        height: 250
    },
]

export default function Gerenciar() {
    const { deptor } = useDeptor();
    const { entries } = useEntries();
    const { category } = useCategory();

    const totalDeptor = deptor.reduce((acc, element) => acc + (element.value ? parseFloat(element.value) : 0), 0);
    const totalEntries = entries.reduce((acc, element) => acc + (element.value ? parseFloat(element.value) : 0), 0);
    const totalFat = totalDeptor - totalEntries;
    const totalRes = totalFat * 0.05;

    const cards = [
        {
            title: totalFat,
            icon: '/image/menu/levantamento.png',
            text: `de previsão de faturamento`,
            href: '/gerenciar/levantamento/faturamento',
            footer: `Conferir os Lançamentos`,
        }, {
            title: totalDeptor,
            icon: '/image/menu/receber.png',
            text: `à receber`,
            href: '/gerenciar/levantamento/receber',
            footer: `Conferir os Devedores`,
        }, {
            title: totalEntries,
            icon: '/image/menu/cadastrar.png',
            text: `pendente pagamento`,
            href: '/gerenciar/levantamento/pagar',
            footer: `Conferir as Dívidas`,
        }, {
            title: totalRes >= 0 ? totalRes : 0,
            icon: '/image/menu/levantamento.png',
            text: `de reserva financeira`,
            href: '/gerenciar/levantamento/reserva',
            footer: `Conferir as Estimativas`,
        },
    ]

    const graficoSimples = [
        {
            options: {
                chart: {
                    id: "bar" as const,
                    foreColor: '#F5F5F5'
                },
                xaxis: {
                    categories: ['1ª semana', '2ª semana', '3ª semana', '4ª semana']
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
                    name: "Valor semanal",
                    data: [Number((totalFat / 4).toFixed(2)), Number((totalFat / 4).toFixed(2)), Number((totalFat / 4).toFixed(2)), Number((totalFat / 4).toFixed(2))]
                },

                {
                    name: "Valor Gasto",
                    data: [655, 450, 175, 150]
                }
            ],
            height: 200
        },
    ]

    const categoryLabels = category.map(cat => cat.description);
    const sums = new Array(category.length).fill(0);

    entries.forEach(entry => {
        const value = parseFloat(entry.value ? entry.value : ``) || 0;
        const typeIndex = parseInt(entry.type, 10);

        if (!isNaN(typeIndex) && typeIndex >= 0 && typeIndex < sums.length) {
            sums[typeIndex] += value;
        }
    });

    const graficoDonut = [
        {
            options: {
                chart: {
                    id: "donut" as const
                },
                labels: categoryLabels,
                legend: {
                    position: 'bottom' as const
                }
            },
            series: sums,
            height: 290
        },
    ]

    return (
        <section className="grow lg:ml-[240px] mt-14 lg:mt-auto pb-12">
            <div id="header-dashboard">
                <Submenu />
            </div>

            <div id="top-dashboard shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-[38px] pt-[38px]">
                    <CardDashBoard cards={cards} />
                </div>
            </div>

            <div id="mid-dashboard">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[341px] col-span-1 lg:col-span-2 rounded-sm border bg-white shadow-md">
                        <div className="px-4 items-center text-lg flex font-poppins-bold pt-4">Faturamento Anual</div>

                        <div className="tems-center flex">
                            <Graph components={graficoDetalhado} />
                        </div>

                    </div>
                    <div className="h-[341px] col-span-1 rounded-sm border bg-white shadow-md">

                        <div className="h-2/3 bg-gradient-to-r from-slate-500 to-slate-400">
                            <Graph components={graficoSimples} />
                        </div>

                        <div className="p-4 h-1/3 items-center">
                            <div className="px-2 flex justify-start font-poppins-bold text-lg">Distribuição semanal</div>
                            <div className="px-2 pt-2 flex justify-start text-nowrap font-poppins-bold">01/06/2024 à 30/06/2024</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="features-dashboard">
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[341px] col-span-8 lg:col-span-5 rounded-sm border bg-white shadow-md">
                        <div className="col-span-1 items-center text-lg font-poppins-bold px-4 pt-4">Lista de Devedores</div>
                        <ListDash className={`h-72 p-4 w-full rounded-md`} context={deptor} variant={`deptor`} />
                    </div>
                    <div className="h-[341px] col-span-8 lg:col-span-4 rounded-sm border bg-white shadow-md">
                        <div className="col-span-1 items-center text-lg font-poppins-bold px-4 pt-4">% Por Categoria</div>
                        <div className="bg-gradient-to-r">
                            <Graph components={graficoDonut} />
                        </div>
                    </div>
                    <div className="h-52 lg:h-[341px] grid grid-cols-8 lg:grid-cols-1 gap-8 col-span-8 lg:col-span-3 rounded-sm">
                        <div className="col-span-8 md:col-span-4 lg:col-span-1 rounded-sm border bg-white shadow-md">
                            <div className="h-2/3 flex justify-center items-center p-4 text-green-500  bg-gradient-to-r from-green-300 to-green-200">
                                <p className="font-poppins-bold flex text-[160%] text-nowrap justify-center">R$ <motion.div>{useAnimatedCount(totalDeptor)}</motion.div></p>
                            </div>
                            <div className="px-4 h-1/3 flex  justify-center lg:justify-start  font-poppins-bold items-center">Movimentações Creditadas</div>
                        </div>
                        <div className="col-span-8 md:col-span-4 lg:col-span-1 rounded-sm border bg-white shadow-md">
                            <div className="h-2/3 flex justify-center items-center p-4 text-rose-500 bg-gradient-to-r from-rose-300 to-rose-200">
                                <p className="font-poppins-bold flex text-[160%] text-nowrap justify-center">R$ <motion.div>{useAnimatedCount(totalEntries)}</motion.div></p>
                            </div>
                            <div className="px-4 h-1/3 flex justify-center lg:justify-start font-poppins-bold items-center">Movimentações Debitadas</div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}