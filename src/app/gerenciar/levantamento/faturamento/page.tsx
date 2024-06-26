"use client"

import Submenu from "@/components/Html/Body/Submenu/submenu";
import Graph from "@/components/Resources/GraphApex";
import { Label } from "@/components/ui/label";
import { useDeptor } from "@/context/DebtorContext";
import { useEntries } from "@/context/EntriesContext";
import { motion } from "framer-motion";
import useAnimatedCount from "@/components/animation";
import moment from 'moment';
import { useDate } from "@/context/DateContext";

export default function Faturamento() {
    const { date } = useDate();
    const { deptor } = useDeptor();
    const { entries } = useEntries();

    const totalDeptor = deptor.reduce((acc, element) => acc + (element.value ? parseFloat(element.value) : 0), 0);
    const totalEntries = entries.reduce((acc, element) => acc + (element.value ? parseFloat(element.value) : 0), 0);
    const totalFat = totalDeptor - totalEntries;

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
                    name: "Valor semanal",
                    data: [Number((totalFat / 4).toFixed(2)), Number((totalFat / 4).toFixed(2)), Number((totalFat / 4).toFixed(2)), Number((totalFat / 4).toFixed(2))]
                },
                {
                    name: "Valor Gasto",
                    data: sumsEntries
                }
            ],
            height: 310
        },
    ]

    return (
        <section className="grow lg:ml-[240px] mt-14 lg:mt-auto pb-12">
            <div id="header-page">
                <Submenu />
            </div>

            <div id="mid-page">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[355px] col-span-1 border bg-white shadow-md pointer-events-none">
                        <div className="items-center text-lg flex font-poppins-bold text-white bg-slate-900 rounded-t-sm mb-4">
                            <p className="px-6 py-4 pointer-events-none">Faturamento</p>
                        </div>

                        <div className="flex flex-col items-start px-6 pointer-events-none">
                            <Label>Período Contabilizado</Label>
                            <p className="my-2 font-poppins-bold flex text-lg text-nowrap">01/{`${moment().format(`MM/YYYY`)}`} à {`${moment().endOf('month').date()}/${moment().format(`MM/YYYY`)}`}</p>

                            <Label>Valor Por Dia</Label>
                            <p className="my-2 font-poppins-bold flex text-lg text-nowrap">R$ <motion.div>{useAnimatedCount(totalFat / 30)}</motion.div></p>

                            <Label>Valor Por Semana</Label>
                            <p className="my-2 font-poppins-bold flex text-lg text-nowrap">R$ <motion.div>{useAnimatedCount(totalFat / 4)}</motion.div></p>
                        </div>
                    </div>

                    <div className="h-[355px] col-span-1 rounded-sm border bg-white shadow-md">

                        <div className="h-full bg-gradient-to-r from-slate-800 to-slate-600">
                            <Graph components={graficoSimples} />
                        </div>
                    </div>

                    <div className="h-full lg:h-[340px] grid grid-cols-1 gap-8 col-span-1 rounded-sm pointer-events-none">
                        <div className="col-span-1 rounded-sm border bg-white shadow-md">
                            <div className="h-2/3 flex justify-center items-center p-4 text-green-500  bg-gradient-to-r from-green-300 to-green-200">
                                <p className="font-poppins-bold flex text-[160%] text-nowrap justify-center">R$ <motion.div>{useAnimatedCount(totalDeptor)}</motion.div></p>
                            </div>
                            <div className="px-4 h-1/3 flex  justify-center lg:justify-start  font-poppins-bold items-center">Total à Receber</div>
                        </div>
                        <div className="col-span-1 rounded-sm border bg-white shadow-md">
                            <div className="col-span-1 h-2/3 flex justify-center text-nowrap items-center font-poppins-bold p-4 text-rose-500 bg-gradient-to-r from-rose-300 to-rose-200">
                                <p className="font-poppins-bold flex text-[160%] text-nowrap justify-center pointer-events-none">R$ <motion.div>{useAnimatedCount(totalEntries)}</motion.div></p>
                            </div>
                            <div className="px-4 h-1/3 flex justify-center lg:justify-start font-poppins-bold items-center">Total à Pagar</div>
                        </div>
                        <div className="col-span-1 rounded-sm border bg-white shadow-md">
                            <div className="h-2/3 flex justify-center items-center p-4 text-slate-500  bg-gradient-to-r from-slate-300 to-slate-200">
                                <p className="font-poppins-bold flex text-[160%] text-nowrap justify-center pointer-events-none">R$ <motion.div>{useAnimatedCount(totalFat)}</motion.div></p>
                            </div>
                            <div className="px-4 h-1/3 flex  justify-center lg:justify-start  font-poppins-bold items-center">Restante Total</div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}