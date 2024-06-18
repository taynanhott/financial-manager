"use client";

import Submenu from "@/components/Html/Body/Submenu/submenu";
import Graph from "@/components/Resources/GraphApex";
import { ListDash } from "@/components/Resources/Table";
import { useCategory } from "@/context/CategoryContext";
import { useDate } from "@/context/DateContext";
import { useEntries } from "@/context/EntriesContext";
import { useSubCategory } from "@/context/SubCategoryContext";
import moment from "moment";

function sums(variant: `category` | `subcategory`, context: any, entries: any, date: any) {
    const contextLabels = context.map((element: any) => element.description);
    const sums = new Array(context.length).fill(0);

    entries.forEach((element: any) => {
        const value = parseFloat(element.value && (moment(element.date).isAfter(date.dtini) && moment(element.date).isBefore(date.dtend)) ? element.value : ``) || 0;
        const typeIndex = parseInt(variant === `category` && (moment(element.date).isAfter(date.dtini) && moment(element.date).isBefore(date.dtend)) ? element.type : element.subtype, 10);

        if (!isNaN(typeIndex) && typeIndex >= 0 && typeIndex < sums.length) {
            sums[typeIndex] += value;
        }
    });

    const series = context.map((element: any, index: number) => ({
        name: element.description,
        data: [Number(sums[index].toFixed(2))]
    }));

    return [contextLabels, sums, series];
}

export default function Pagar() {
    const { date } = useDate();
    const { entries } = useEntries();
    const { category } = useCategory();
    const { subcategory } = useSubCategory();

    const sumsCat = sums(`category`, category, entries, date);
    const sumsSubCat = sums(`subcategory`, subcategory, entries, date);

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
            series: sumsCat[2],
            height: 170
        },
    ]

    const graficoDonut = [
        {
            options: {
                chart: {
                    id: "donut" as const
                },
                labels: sumsCat[0],
                legend: {
                    position: 'right' as const
                }
            },
            series: sumsCat[1],
            height: 171
        },
    ]

    const graficoDonutSub = [
        {
            options: {
                chart: {
                    id: "donut" as const
                },
                labels: sumsSubCat[0],
                legend: {
                    position: 'right' as const
                }
            },
            series: sumsSubCat[1],
            height: 171
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
                            <p className="px-6 py-4 pointer-events-none">Contas à Pagar</p>
                        </div>
                        <div className="h-full">
                            <ListDash className={`h-64 lg:h-96 p-4 w-full rounded-md`} context={entries} variant={`paymount`} />
                        </div>
                    </div>
                    <div className="h-[475px] grid grid-cols-1 lg:grid-cols-4 gap-8 col-span-1">
                        <div className="col-span-1 lg:col-span-4 border bg-white shadow-md">
                            <div className="h-full bg-gradient-to-r rounded-sm from-slate-500 to-slate-400">
                                <Graph components={graficoSimples} />
                            </div>
                        </div>
                        <div className="col-span-1 lg:col-span-2 border bg-white shadow-md">
                            <Graph components={graficoDonut} />
                        </div>
                        <div className="col-span-1 lg:col-span-2 border bg-white shadow-md">
                            <Graph components={graficoDonutSub} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
