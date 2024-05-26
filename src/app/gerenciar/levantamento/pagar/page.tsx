"use client";

import Submenu from "@/components/Html/Body/Submenu/submenu";
import Graph from "@/components/Resources/GraphApex";
import { ListPaytDash } from "@/components/Resources/Table";

const graficoSimples = [
    {
        options: {
            chart: {
                id: "bar" as const,
                foreColor: '#F5F5F5'
            },
            xaxis: {
                categories: ['Categoria da Movimentação']
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
        height: 170
    },
]

const graficoDonut = [
    {
        options: {
            chart: {
                id: "donut" as const
            },
            labels: ['Crédito', 'Débito', "Parcelado", "Emprestado"],
            legend: {
                position: 'right' as const
            }
        },
        series: [250, 650, 450, 150],
        height: 171
    },
]

export default function Pagar() {
    return (
        <section className="grow lg:ml-[240px] mt-14 lg:mt-auto pb-12">
            <div id="header-page">
                <Submenu />
            </div>

            <div id="mid-page">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[340px] lg:h-[475px] col-span-1 border bg-white shadow-md">
                        <div className="items-center text-lg flex font-poppins-bold text-white bg-slate-900 rounded-t-sm">
                            <p className="px-6 py-4">Contas à Pagar</p>
                        </div>
                        <div className="h-full">
                            <ListPaytDash className={`h-64 lg:h-96 p-4 w-full rounded-md`} />
                        </div>
                    </div>
                    <div className="h-[475px] grid grid-cols-1 lg:grid-cols-4 gap-8 col-span-1">
                        <div className="col-span-1 lg:col-span-4 border bg-white shadow-md">
                            <div className="h-full bg-gradient-to-r rounded-sm from-slate-800 to-slate-600">
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
