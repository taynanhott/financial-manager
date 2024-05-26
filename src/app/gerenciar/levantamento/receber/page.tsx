"use client"

import Submenu from "@/components/Html/Body/Submenu/submenu";
import Graph from "@/components/Resources/GraphApex";
import { ListDeptorDash } from "@/components/Resources/Table";

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
        series: [350, 250, 450],
        height: 170
    },
]

export default function Receber() {
    return (
        <section className="grow lg:ml-[240px] mt-14 lg:mt-auto pb-12">
            <div id="header-page">
                <Submenu />
            </div>

            <div id="mid-page">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[340px] lg:h-[475px] col-span-1 border bg-white shadow-md">
                        <div className="items-center text-lg flex font-poppins-bold text-white bg-slate-900 rounded-t-sm">
                            <p className="px-6 py-4">Contas à Receber</p>
                        </div>
                        <div className="h-full">
                            <ListDeptorDash className={`h-64 lg:h-96 p-4 w-full rounded-md`} />
                        </div>
                    </div>

                    <div className="h-[475px] grid grid-cols-1 gap-8 col-span-1">
                        <div className="col-span-1 border bg-white shadow-md">
                            <Graph components={graficoDonut} />
                        </div>
                        <div className="col-span-1 border bg-white shadow-md">
                            <div className="h-full bg-gradient-to-r rounded-sm from-slate-800 to-slate-600">
                                <Graph components={graficoSimples} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}