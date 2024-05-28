"use client";

import Submenu from "@/components/Html/Body/Submenu/submenu";
import Graph from "@/components/Resources/GraphApex";
import { ListDash } from "@/components/Resources/Table";
import { useCategory } from "@/context/CategoryContext";
import { useDeptor } from "@/context/DebtorContext";
import { useEntries } from "@/context/EntriesContext";

export default function Pagar() {
    const { deptor } = useDeptor();
    const { entries } = useEntries();
    const { category } = useCategory();

    const categoryLabels = category.map(cat => cat.description);
    const sums = new Array(category.length).fill(0);

    entries.forEach(entry => {
        const value = parseFloat(entry.value ? entry.value : ``) || 0;
        const typeIndex = parseInt(entry.type, 10);

        if (!isNaN(typeIndex) && typeIndex >= 0 && typeIndex < sums.length) {
            sums[typeIndex] += value;
        }
    });

    const series = category.map((cat, index) => ({
        name: cat.description,
        data: [Number(sums[index].toFixed(2))]
    }));

    const graficoDonut = [
        {
            options: {
                chart: {
                    id: "donut" as const
                },
                labels: categoryLabels,
                legend: {
                    position: 'right' as const
                }
            },
            series: sums,
            height: 171
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
            series: series,
            height: 170
        },
    ]

    console.log(graficoSimples)

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
                            <ListDash className={`h-64 lg:h-96 p-4 w-full rounded-md`} context={entries} variant={`paymount`} />
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
        </section>
    );
}
