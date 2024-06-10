"use client"

import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
    name: string;
    href: string;
}

const navegation: Props[] = [
    {
        name: 'Dashboard',
        href: '/gerenciar/dashboard',
    },
    {
        name: 'Portfólio',
        href: 'https://taynan.dev/home',
    },
];

const cadastro: Props[] = [
    {
        name: 'Pagamento',
        href: '/gerenciar/cadastrar/pagamento',
    },
    {
        name: 'Arrecadação',
        href: '/gerenciar/cadastrar/arrecadar',
    },
    {
        name: 'Categoria',
        href: '/gerenciar/cadastrar/categoria',
    },
];

const levantamento: Props[] = [
    {
        name: 'Faturamento',
        href: '/gerenciar/levantamento/faturamento',
    },
    {
        name: 'Contas à receber',
        href: '/gerenciar/levantamento/receber',
    },
    {
        name: 'Contas à pagar',
        href: '/gerenciar/levantamento/pagar',
    },
    {
        name: 'Reserva',
        href: '/gerenciar/levantamento/reserva',
    }
];

interface PropsMenu {
    menu: {
        title: string;
        subtitle: string[];
        img: string[];
        position: string;
        href: Props[][];
    }[];
}

const menu: PropsMenu['menu'] = [
    {
        title: 'Navegação',
        subtitle: ['Menus'],
        position: '21',
        img: ['/image/menu/home.png'],
        href: [navegation],
    },
    {
        title: 'Funcionalidades',
        subtitle: ['Cadastro', 'Levantamento'],
        position: '12',
        img: ['/image/menu/cadastro.png', '/image/menu/levantamento-menu.png'],
        href: [cadastro, levantamento],
    },
];

function MenuItem({ name, href }: Props) {
    const variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    };

    return (
        <motion.li
            variants={variants}
            className="block items-center ml-4 max-h-6 cursor-pointer"
        >
            <Link href={href} target="_self" className="hover:border-b mt-4 hover:border-white flex items-center">
                {`> ${name}`}
            </Link>
        </motion.li>
    );
}

function MenuList({ menu }: PropsMenu) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ScrollArea className='h-full p-4 w-full rounded-md'>
            {menu.map((division, divIndex) => (
                <div key={`menu-${divIndex}`}>
                    <div className="text-gray-500 lg:flex pl-4 pb-4 font-poppins pointer-events-none text-sm">
                        {division.title}
                    </div>
                    {division.subtitle.map((label, subIndex: number) => (
                        <motion.ul
                            key={`submenu-${subIndex}`}
                            className="pl-4 pb-4 w-[240px] lg:flex"
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                        >
                            <motion.li key={`li-${subIndex}`}>
                                <div className="text-gray-100 text-xl font-poppins-bold flex items-center pointer-events-none">
                                    <Image
                                        className="mr-2"
                                        src={division.img[subIndex]}
                                        width={25}
                                        height={25}
                                        alt=""
                                    />
                                    {label}
                                </div>
                                {division.href[subIndex]?.map((link, index) => (
                                    <motion.button
                                        className="font-poppins text-gray-400 block"
                                        key={`link-${subIndex}-${index}`}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <MenuItem name={link.name} href={link.href} />
                                    </motion.button>
                                ))}
                            </motion.li>
                        </motion.ul>
                    ))}
                </div>
            ))}
        </ScrollArea>
    );
}

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="ml-4 mt-2 bg-transparent fixed top-2 items-center flex lg:hidden z-30">
                <Image
                    src='/image/menu/botao-menu.png'
                    width={25}
                    height={25}
                    alt=""
                />
            </button>
            <div className="fixed flex-none top-0 left-0 bg-slate-800 h-14 lg:h-screen z-20">
                <div className="w-screen lg:w-[240px] p-3 pointer-events-none">
                    <Label className="text-gray-100 text-lg font-poppins-bold text-center items-center flex justify-center col-span-9">
                        Gerenciador Financeiro
                    </Label>
                </div>
                <div className={`mt-1 h-screen w-[240px] ${isOpen ? '' : 'hidden lg:block'} bg-slate-700 lg:bg-slate-800 z-10`}>
                    <MenuList menu={menu} />
                </div>
            </div>
        </>
    );
}
