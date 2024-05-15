'use client'

import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

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
        icon?: string
    }
}

const project = [
    {
        index: 0,
        name: 'Reconhecimento',
        href: 'https://facial.taynan.dev',
        icon: '/image/reconhecimento.jpg'
    },
    {
        index: 1,
        name: 'Gerenciador',
        href: 'https://financial.taynan.dev',
        icon: '/image/todolist.jpg'
    },
    {
        index: 2,
        name: 'Calendario',
        href: 'https://calendar.taynan.dev',
        icon: '/image/calendario.jpg'
    },
];

export const MenuItem = ({ components }: Props) => {
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            className=" block items-center cursor-pointer mb-6"
        >
            <a href={components.href} target="_blank" className="hover:border-b mt-4 hover:border-gray-900 flex items-center text-xl">
                {components.name}
            </a>
        </motion.li>
    );
};

export default function Menu() {
    return (
        <div className="fixed flex-none top-0 left-0 bg-slate-800 h-14 lg:h-screen">
            <div className="w-screen lg:w-[240px] p-3">
                <Label className="text-white text-lg font-poppins-bold text-center items-center flex justify-center col-span-9">
                    Gerenciador Financeiro
                </Label>
            </div>

            <motion.ul className="p-4 w-[240px] hidden lg:flex text-white" variants={variantes}>
                <motion.li
                    variants={variants}
                    className="block items-center text-lg font-bold mb-4"
                >Cadastro
                    {project.map(project => (
                        <MenuItem components={project} key={project.index} />
                    ))}
                </motion.li>
            </motion.ul >
        </div>
    );
}