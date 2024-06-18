"use client"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useCategory } from "@/context/CategoryContext";
import { motion } from "framer-motion";
import moment from 'moment';
import 'moment/locale/pt-br';
import { DialogCategory, DialogDeptor, DialogEntries, DialogSubCategory } from "../Dialog";
import { useSubCategory } from "@/context/SubCategoryContext";
import { useDate } from "@/context/DateContext";

interface Props {
    className?: string,
    context: {
        description: string;
        date?: Date | undefined;
        value?: string | undefined;
        type?: string;
        subtype?: string;
    }[],
    variant: `deptor` | `paymount` | `category` | "subcategory"
}

function thVariant(variant: "deptor" | "paymount" | "category" | "subcategory") {
    switch (variant) {
        case `deptor`:
            return (
                <>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-left">Descrição</th>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-left">Situação</th>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-center">Data</th>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-left">Valor</th>
                </>
            )
        case `paymount`:
            return (
                <>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-left">Descrição</th>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-left">Categoria</th>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-left">Subcategoria</th>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-center">Data</th>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-left">Valor</th>
                </>
            )
        case `category`:
            return (
                <>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-left">Descrição</th>
                </>
            )
        case `subcategory`:
            return (
                <>
                    <th className="p-2 text-xs font-medium uppercase tracking-wider text-left">Descrição</th>
                </>
            )
        default:
            return <></>
    }
}

function dialogVariant(variant: string) {
    switch (variant) {
        case `deptor`:
            return <DialogDeptor />
        case `paymount`:
            return <DialogEntries />
        case `category`:
            return <DialogCategory />
        case `subcategory`:
            return <DialogSubCategory />
        default:
            return <></>
    }
}

export function ListDash({ className, context, variant }: Props) {
    const { date } = useDate();
    const { category } = useCategory();
    const { subcategory } = useSubCategory();

    return (
        <ScrollArea className={className}>
            <div className="relative">
                <table className="text-gray-500 divide-y divide-gray-200 w-full">
                    <thead className="sticky top-0 z-10 bg-white pointer-events-none">
                        <tr className="text-center">
                            {thVariant(variant)}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {context.length > 0 ? (
                            context.map((element: any, index: number) => (
                                moment(element.date).isAfter(date.dtini) && moment(element.date).isBefore(date.dtend) ? (
                                    <motion.tr
                                        key={`td-${index}`}
                                        className={`hover:bg-slate-200 pointer-events-none`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <td className="p-2 text-sm font-medium">{element.description}</td>
                                        {element.status !== undefined && (
                                            <td className="p-2 text-sm">
                                                {element.status ? `Pago` : `Pendente`}
                                            </td>
                                        )}
                                        {element.type && (
                                            <td className="p-2 text-sm">
                                                {category[+element.type].description}
                                            </td>
                                        )}
                                        {element.subtype && (
                                            <td className="p-2 text-sm">
                                                {subcategory[+element.subtype].description}
                                            </td>
                                        )}
                                        {element.date !== undefined && (
                                            <td className="p-2 text-sm text-center">
                                                {moment(element.date).format('DD/MM/YYYY')}
                                            </td>
                                        )}
                                        {element.value && (
                                            <td className="p-2 text-sm text-left text-nowrap">R$ {Number(element.value).toFixed(2)}</td>
                                        )}
                                    </motion.tr>) : (<></>)
                            ))
                        ) : (
                            <motion.tr
                                key="td-none"
                                className={`pointer-events-none`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <td colSpan={4} className="p-2 text-sm font-medium text-center">
                                    Nenhum registro cadastrado
                                </td>
                            </motion.tr>
                        )}
                    </tbody>
                </table>
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}

export function TableListAction({ className, variant }: Props) {
    return (
        <ScrollArea className={className}>
            <div className="relative">
                <table className="text-white divide-y divide-gray-200 w-full">
                    <thead className="sticky top-0 z-10 bg-gradient-to-r from-slate-800 to-slate-600 pointer-events-none">
                        <tr>
                            {thVariant(variant)}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {
                            dialogVariant(variant)
                        }
                    </tbody>
                </table>
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea >
    );
}

