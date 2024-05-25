"use client";

import Submenu from "@/components/Html/Body/Submenu/submenu";
import Graph from "@/components/Resources/GraphApex";
import { TableListPaymount } from "@/components/Resources/Table";

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
        height: 480
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
                    <div className="h-[530px] col-span-1 border bg-white shadow-md">
                        <div className="h-full">
                            <TableListPaymount />
                        </div>
                    </div>
                    <div className="h-[530px] col-span-1 border bg-white shadow-md">
                        <div className="h-full bg-gradient-to-r rounded-sm from-slate-800 to-slate-600">
                            <Graph components={graficoSimples} />
                        </div>
                    </div>

                </div>
            </div>
        </section >

    );
}
