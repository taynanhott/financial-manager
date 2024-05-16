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
                categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
            },
        },
        series: [
            {
                name: "Ano Anterior",
                data: [1500, 1800, 1400, 2000, 2150, 1900, 1400, 2000, 2250, 2300, 2600, 2450]
            },
            {
                name: "Ano atual",
                data: [2600, 2500, 2250, 2300, 2600, 2450, 2250, 2300, 1400, 2000, 3000, 3200]
            }
        ],
        height: 250
    },
]

const graficoSimples = [
    {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ['1ª semana', '2ª semana', '3ª semana', '4ª semana']
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
        title: `R$ 1000`,
        icon: '/image/menu/pagamento.png',
        text: `de saldo atual`,
        footer: `Conferir Movimentações`,
    }, {
        title: `R$ 2000`,
        icon: '/image/menu/receber.png',
        text: `à receber`,
        footer: `Conferir Devedores`,
    }, {
        title: `R$ 1500`,
        icon: '/image/menu/cadastrar.png',
        text: `pendente pagamento`,
        footer: `Conferir Dívidas`,
    }, {
        title: `R$ 3000`,
        icon: '/image/menu/levantamento.png',
        text: `de previsão de faturamento`,
        footer: `Conferir Lançamentos`,
    },
]

function CardDashBoard({ cards }: Props) {
    return (
        <>{cards.map((card: any, index: number) => (
            <motion.div
                key={`card-${index}`}
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
                            width={45}
                            height={45}
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
                        <div className="px-4 items-center text-lg flex font-poppins-bold pt-4">Faturamento Anual</div>

                        <div className="tems-center flex">
                            <Graph components={graficoDetalhado} />
                        </div>

                    </div>
                    <div className="h-[341px] col-span-1 rounded-sm border bg-white">

                        <div className="h-2/3 bg-gradient-to-r from-green-500 to-green-300">
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