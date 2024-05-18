"use client"

import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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

const variantes = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

interface Props {
    components: {
        index: number,
        name: string,
        href: string,
    }
}

const navegation = [
    {
        index: 0,
        name: 'Dashboard',
        href: 'https://financial.taynan.dev',
    },
    {
        index: 1,
        name: 'Portfólio',
        href: 'https://taynan.dev',
    },
];

const cadastro = [
    {
        index: 0,
        name: 'Pagamento',
        href: 'https://financial.taynan.dev',
    },
    {
        index: 1,
        name: 'Categoria',
        href: 'https://financial.taynan.dev',
    },
];

const levantamento = [
    {
        index: 0,
        name: 'Faturamento',
        href: 'https://financial.taynan.dev',
    },
    {
        index: 1,
        name: 'Contas à receber',
        href: 'https://financial.taynan.dev',
    },
    {
        index: 2,
        name: 'Contas à pagar',
        href: 'https://financial.taynan.dev',
    },
    {
        index: 3,
        name: 'Reserva',
        href: 'https://financial.taynan.dev',
    },
];

export const MenuItem = ({ components }: Props) => {
    return (
        <motion.li
            variants={variants}
            className="block items-center ml-4 max-h-6 cursor-pointer"
        >
            <a href={components.href} target="_self" className="hover:border-b mt-4 hover:border-white flex items-center">
                {`> ${components.name}`}
            </a>
        </motion.li>
    );
};

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="ml-4 mt-2 bg-transparent fixed top-2 items-center flex lg:hidden z-30">
                <Image
                    className=""
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
                <div className={`h-screen w-[240px] ${isOpen ? '' : 'hidden lg:block'} bg-slate-700 lg:bg-slate-800`}>
                    <div className="text-gray-500 pl-4 pt-4 lg:flex pb-4 font-poppins pointer-events-none text-sm">
                        Navegação
                    </div>

                    <motion.ul className="pl-4 pb-4 w-[240px] lg:flex" variants={variantes}>
                        <motion.li>
                            <div className="text-gray-100 text-xl font-poppins-bold flex items-center pointer-events-none">
                                <Image
                                    className="mr-2"
                                    src='/image/menu/home.png'
                                    width={25}
                                    height={25}
                                    alt=""
                                />
                                Menus
                            </div>
                            {navegation.map((project, index) => (
                                <motion.div
                                    className="font-poppins text-gray-400"
                                    key={`li-${index}`}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <MenuItem components={project} key={project.index} />
                                </motion.div>
                            ))}
                        </motion.li>
                    </motion.ul>

                    <div className="text-gray-500 lg:flex pl-4 pb-4 font-poppins pointer-events-none text-sm">
                        Funcionalidades
                    </div>

                    <motion.ul className="pl-4 pb-4 w-[240px] lg:flex" variants={variantes}>
                        <motion.li>
                            <div className="text-gray-100 text-xl font-poppins-bold flex items-center pointer-events-none">
                                <Image
                                    className="mr-2"
                                    src='/image/menu/cadastro.png'
                                    width={25}
                                    height={25}
                                    alt=""
                                />
                                Cadastro
                            </div>
                            {cadastro.map((project, index) => (
                                <motion.div
                                    className="font-poppins text-gray-400"
                                    key={`li-${index}`}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <MenuItem components={project} key={project.index} />
                                </motion.div>
                            ))}
                        </motion.li>
                    </motion.ul>

                    <motion.ul className="pl-4 pb-4 w-[240px] lg:flex" variants={variantes}>
                        <motion.li>
                            <div className="text-gray-100 text-xl font-poppins-bold flex items-center pointer-events-none">
                                <Image
                                    className="mr-2"
                                    src='/image/menu/levantamento-menu.png'
                                    width={25}
                                    height={25}
                                    alt=""
                                />
                                Levantamento
                            </div>
                            {levantamento.map((project, index) => (
                                <motion.div
                                    className="font-poppins text-gray-400"
                                    key={`li-${index}`}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <MenuItem components={project} key={project.index} />
                                </motion.div>
                            ))}
                        </motion.li>
                    </motion.ul>
                </div>
            </div>
        </>
    );
}
