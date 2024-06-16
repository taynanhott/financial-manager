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
import moment from 'moment';
import { useDate } from "@/context/DateContext";

export default function Gerenciar() {
    const { date } = useDate();
    const { deptor } = useDeptor();
    const { entries } = useEntries();
    const { category } = useCategory();

    const totalDeptor = deptor.reduce((acc, element) => acc + (element.value ? parseFloat(element.value) : 0), 0);
    const totalEntries = entries.reduce((acc, element) => acc + (element.value ? parseFloat(element.value) : 0), 0);
    const totalDeptorFalse = deptor.reduce((acc, element) => acc + (element.value && !element.status ? parseFloat(element.value) : 0), 0);
    const totalDeptorTrue = deptor.reduce((acc, element) => acc + (element.value && element.status ? parseFloat(element.value) : 0), 0);
    const totalFat = totalDeptor - totalEntries;
    const totalRes = totalFat * 0.1;

    const cards = [
        {
            title: totalDeptorTrue - totalEntries,
            icon: '/image/menu/levantamento.png',
            text: `de faturamento atual`,
            href: '/gerenciar/levantamento/faturamento',
            footer: `Conferir os Lançamentos`,
        }, {
            title: totalDeptorFalse,
            icon: '/image/menu/receber.png',
            text: `à receber`,
            href: '/gerenciar/levantamento/receber',
            footer: `Conferir os Devedores`,
        }, {
            title: totalEntries,
            icon: '/image/menu/cadastrar.png',
            text: `à pagar`,
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

    const sumsEntries = [0, 0, 0, 0];

    function dateMoment(day: string) {

        /*  
            Ex:     date?.dtini = 05-06-2024 (format: DD-MM-YYYY)
            Result: 05-{day}-2024
        */
        const newDate = moment().format(`${moment(date?.dtini).month()}-${day}-${moment(date?.dtini).year()}`)
        return newDate;
    }

    entries.forEach(entries => {
        const value = parseFloat(entries.value ? entries.value : ``) || 0;

        if (moment(dateMoment(`07`)).isBefore(entries.date)) {
            sumsEntries[0] += parseFloat(value.toFixed(2));
        } else if (moment(dateMoment(`07`)).isAfter(entries.date) && moment(dateMoment(`14`)).isBefore(entries.date)) {
            sumsEntries[1] += parseFloat(value.toFixed(2));
        } else if (moment(dateMoment(`14`)).isAfter(entries.date) && moment(dateMoment(`21`)).isBefore(entries.date)) {
            sumsEntries[2] += parseFloat(value.toFixed(2));
        } else if (moment(dateMoment(`21`)).isAfter(entries.date)) {
            sumsEntries[3] += parseFloat(value.toFixed(2));
        }
    });

    const sumsEntriesYear = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    deptor.forEach(deptor => {
        const value = parseFloat(deptor.value ? deptor.value : ``) || 0;
        sumsEntriesYear[+moment(deptor.date).month()] += parseFloat(value.toFixed(2));
    });

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
                    data: (sumsEntries)
                }
            ],
            height: 200
        },
    ]

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
                    data: sumsEntriesYear
                }
            ],
            height: 250
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
                        <div className="px-4 items-center text-lg flex font-poppins-bold pt-4 pointer-events-none">Faturamento Anual</div>

                        <div className="tems-center flex">
                            <Graph components={graficoDetalhado} />
                        </div>

                    </div>
                    <div className="h-[341px] col-span-1 rounded-sm border bg-white shadow-md">

                        <div className="h-2/3 bg-gradient-to-r from-slate-500 to-slate-400">
                            <Graph components={graficoSimples} />
                        </div>

                        <div className="p-4 h-1/3 items-center pointer-events-none">
                            <div className="px-2 flex justify-start font-poppins-bold text-lg">Distribuição semanal</div>
                            <div className="px-2 pt-2 flex justify-start text-nowrap font-poppins-bold">01/{`${moment().format(`MM/YYYY`)}`} à {`${moment().endOf('month').date()}/${moment().format(`MM/YYYY`)}`}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="features-dashboard">
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[341px] col-span-8 lg:col-span-5 rounded-sm border bg-white shadow-md">
                        <div className="col-span-1 items-center text-lg font-poppins-bold px-4 pt-4 pointer-events-none">Lista de Devedores</div>
                        <ListDash className={`h-72 p-4 w-full rounded-md`} context={deptor} variant={`deptor`} />
                    </div>
                    <div className="h-[341px] col-span-8 lg:col-span-4 rounded-sm border bg-white shadow-md">
                        <div className="col-span-1 items-center text-lg font-poppins-bold px-4 pt-4 pointer-events-none">% Por Categoria</div>
                        <div className="bg-gradient-to-r">
                            <Graph components={graficoDonut} />
                        </div>
                    </div>
                    <div className="h-52 lg:h-[341px] grid grid-cols-8 lg:grid-cols-1 gap-8 col-span-8 lg:col-span-3 rounded-sm pointer-events-none">
                        <div className="col-span-8 md:col-span-4 lg:col-span-1 rounded-sm border bg-white shadow-md">
                            <div className="h-2/3 flex justify-center items-center p-4 text-green-500  bg-gradient-to-r from-green-300 to-green-200">
                                <p className="font-poppins-bold flex text-[160%] text-nowrap justify-center">R$ <motion.div>{useAnimatedCount(totalDeptor)}</motion.div></p>
                            </div>
                            <div className="px-4 h-1/3 flex justify-center lg:justify-start font-poppins-bold items-center">Movimentações Creditadas</div>
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