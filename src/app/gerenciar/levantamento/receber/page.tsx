"use client"

import Submenu from "@/components/Html/Body/Submenu/submenu";
import Graph from "@/components/Resources/GraphApex";
import { ListDash } from "@/components/Resources/Table";
import { useDate } from "@/context/DateContext";
import { useDeptor } from "@/context/DebtorContext";
import moment from 'moment';

export default function Receber() {
    const { date } = useDate();
    const { deptor } = useDeptor();
    const sumsDeptor = [0, 0, 0];

    deptor.forEach(deptor => {
        const value = parseFloat(deptor.value && (moment(deptor.date).isAfter(date.dtini) && moment(deptor.date).isBefore(date.dtend)) ? deptor.value : ``) || 0;

        if (deptor.status) {
            sumsDeptor[0] += value;
        } else if (moment().isAfter(deptor.date) && !deptor.status) {
            sumsDeptor[1] += value;
        } else if (moment().isBefore(deptor.date) && !deptor.status) {
            sumsDeptor[2] += value;
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
                    data: [sumsDeptor[0]]
                },
                {
                    name: "Atrasado",
                    data: [sumsDeptor[1]]
                },
                {
                    name: "Pendente",
                    data: [sumsDeptor[2]]
                },
            ],
            height: 170
        },
    ]

    const graficoDonut = [
        {
            options: {
                chart: {
                    id: "donut" as const
                },
                labels: ['Pago', 'Atrasado', "Pendente"],
                legend: {
                    position: 'right' as const
                }
            },
            series: sumsDeptor,
            height: 170
        },
    ]

    return (
        <section className="grow lg:ml-[240px] mt-14 lg:mt-auto pb-12">
            <div id="header-page">
                <Submenu />
            </div>

            <div id="mid-page">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[340px] lg:h-[475px] col-span-1 border bg-white shadow-md">
                        <div className="items-center text-lg flex font-poppins-bold text-white bg-slate-900 rounded-t-sm">
                            <p className="px-6 py-4 pointer-events-none">Contas à Receber</p>
                        </div>
                        <div className="h-full">
                            <ListDash className={`h-64 lg:h-96 p-4 w-full rounded-md`} context={deptor} variant={`deptor`} />
                        </div>
                    </div>

                    <div className="h-[475px] grid grid-cols-1 lg:grid-cols-4 gap-8 col-span-1">
                        <div className="col-span-1 lg:col-span-4 border bg-white shadow-md">
                            <div className="h-full bg-gradient-to-r rounded-sm from-slate-500 to-slate-400">
                                <Graph components={graficoSimples} />
                            </div>
                        </div>
                        <div className="col-span-1 lg:col-span-3 border bg-white shadow-md">
                            <Graph components={graficoDonut} />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}