"use client"

import Graph from "@/components/Resources/GraphApex";
import Image from "next/image";
import { motion } from "framer-motion";

const graficoDetalhado = [
    {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1, 5, 10, 15, 20, 25, 30, 5]
            },
        },
        series: [
            {
                name: "Mês atual",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
                name: "Mês Anterior",
                data: [40, 25, 60, 45, 30, 25, 80, 90]
            }
        ],
        height: 275
    },
]

const graficoSimples = [
    {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1, 5, 10, 15]
            },
            colors: ['#FFFFFF'],
        },
        series: [
            {
                name: "Mês atual",
                data: [30, 40, 50, 45]
            }
        ],
        height: 200
    },
]

interface Props {
    cards: {
        title: string,
        icon?: string,
        text: string,
        footer: string,
    }[]
}

const cards = [
    {
        title: `Title`,
        icon: '/image/card/analise-de-dados.png',
        text: `Text`,
        footer: `Footer`,
    }, {
        title: `Title`,
        icon: '/image/card/documento-de-texto.png',
        text: `Text`,
        footer: `Footer`,
    }, {
        title: `Title`,
        icon: '/image/card/agenda.png',
        text: `Text`,
        footer: `Footer`,
    }, {
        title: `Title`,
        icon: '/image/card/baixar.png',
        text: `Text`,
        footer: `Footer`,
    },
]

function CardDashBoard({ cards }: Props) {
    return (
        <>{cards.map((card: any, index: number) => (
            <motion.div
                className="backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
            >
                <div className="h-32 grid grid-cols-2 lg:hover:scale-105 rounded-sm border bg-white transition ease-in-out hover:-translate-y-1 duration-700">
                    <div className="col-span-2 px-4 pt-2 flex justify-between items-center">
                        <div className="text-lg font-poppins-bold">{card.title}</div>
                        <Image
                            className=""
                            src={card.icon ?? ``}
                            width={30}
                            height={30}
                            alt=""
                        />
                    </div>
                    <div className="col-span-2 px-4 pb-2 items-center flex">{card.text}</div>
                    <div className="col-span-2 rounded-b-sm px-2 items-center flex font-poppins-bold text-white bg-gradient-to-r from-slate-700 to-slate-500">
                        {card.footer}
                    </div>
                </div>
            </motion.div >
        ))
        }
        </>
    )
}

export default function Gerenciar() {
    return (
        <section className="grow lg:ml-[240px] mt-14 lg:mt-auto bg-gray-100 min-h-full pb-12">

            <div id="header-dashboard">
                <div className="bg-white hidden shadow-md lg:flex w-full items-center h-14 px-2">
                    Teste
                </div>
            </div>

            <div id="top-dashboard">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-[38px] pt-[38px]">
                    <CardDashBoard cards={cards} />
                </div>
            </div>
            <div id="mid-dashboard">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[341px] col-span-1 lg:col-span-2 rounded-sm border bg-white">
                        <div className="px-2 items-center flex">Title</div>

                        <div className="px-2 tems-center flex">
                            <Graph components={graficoDetalhado} />
                        </div>

                    </div>
                    <div className="h-[341px] col-span-1 rounded-sm border bg-white">

                        <div className="px-2 h-2/3 bg-gradient-to-r from-green-500 to-green-300">
                            <Graph components={graficoSimples} />
                        </div>

                        <div className="px-2 h-1/3 items-center flex"></div>
                    </div>
                </div>
            </div>
            <div id="features-dashboard">
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[341px] col-span-8 lg:col-span-5 rounded-sm border bg-white">
                        <div className="px-2 items-center flex">Title</div>
                        <div className="px-2 items-center flex">Table</div>
                    </div>
                    <div className="h-[341px] col-span-8 lg:col-span-4 rounded-sm border bg-white">
                        <div className="px-2 items-center flex">Title</div>
                        <div className="px-2 items-center flex">Graph Pizza</div>
                    </div>
                    <div className="h-52 lg:h-[341px] grid grid-cols-8 lg:grid-cols-1 gap-8 col-span-8 lg:col-span-3 rounded-sm">
                        <div className="col-span-4 lg:col-span-1 rounded-sm border bg-white">
                            <div className="px-2 items-center flex">Title</div>
                            <div className="px-2 items-center flex">Count</div>
                        </div>
                        <div className="col-span-4 lg:col-span-1 rounded-sm border bg-white">
                            <div className="px-2 items-center flex">Title</div>
                            <div className="px-2 items-center flex">Count</div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}