"use client"

import Graph from "@/components/Resources/GraphApex";
import Image from "next/image";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AccountOptions } from "@/components/Resources/MenuBar";
import { TableList } from "@/components/Resources/Table";


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
        },
        series: [
            {
                name: "Valor semanal",
                data: [250, 250, 250, 250]
            },

            {
                name: "Valor Gasto",
                data: [650, 450, 175, 0]
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
        footer: `Conferir as Movimentações`,
    }, {
        title: `R$ 2000`,
        icon: '/image/menu/receber.png',
        text: `à receber`,
        footer: `Conferir os Devedores`,
    }, {
        title: `R$ 1500`,
        icon: '/image/menu/cadastrar.png',
        text: `pendente pagamento`,
        footer: `Conferir as Dívidas`,
    }, {
        title: `R$ 3000`,
        icon: '/image/menu/levantamento.png',
        text: `de previsão de faturamento`,
        footer: `Conferir os Lançamentos`,
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
                <div className="h-48 min-h-48 grid grid-cols-2 lg:hover:scale-105 rounded-sm border bg-white transition ease-in-out hover:-translate-y-1 duration-700">
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
                    <div className="col-span-2 px-4 font-poppins">{card.text}</div>
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
                <div className="bg-white hidden shadow-md lg:flex w-full items-center justify-between h-14 px-2">
                    <div className="flex ml-8">
                        {`[ SELETOR DE DATA ]`}
                    </div>
                    <div className="flex mr-8">
                        <AccountOptions />
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
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

                        <div className="h-2/3 bg-gradient-to-r from-slate-400 to-slate-300">
                            <Graph components={graficoSimples} />
                        </div>

                        <div className="p-4 h-1/3 items-center grid grid-cols-2">
                            <div className="px-2 col-span-2 font-poppins-bold text-lg">Distribuição semanal</div>
                            <div className="px-2 col-span-2 font-poppins">Periodo xx/xx/xxxx à xx/xx/xxxx</div>
                            <div className="px-2 col-span-1 font-poppins">Valor Gasto: R$ 175</div>
                            <div className="px-2 col-span-1 font-poppins">Valor Restante: R$ 75</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="features-dashboard">
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[341px] col-span-8 lg:col-span-5 rounded-sm border bg-white">
                        <div className="col-span-1 items-center text-lg font-poppins-bold px-4 pt-4">Lista de Devedores</div>
                        <TableList />
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
                            <div className="px-2 col-span-2 items-center flex">Title</div>
                            <div className="px-2 col-span-1 items-center flex">Title</div>
                            <div className="px-2 col-span-1 items-center flex">Count</div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}