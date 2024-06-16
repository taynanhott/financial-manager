"use client"

import Submenu from "@/components/Html/Body/Submenu/submenu";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import useAnimatedCount from "@/components/animation";
import { useDeptor } from "@/context/DebtorContext";
import { useEntries } from "@/context/EntriesContext";

export default function Reserva() {
    const { deptor } = useDeptor();
    const { entries } = useEntries();

    const totalDeptor = deptor.reduce((acc, element) => acc + (element.value ? parseFloat(element.value) : 0), 0);
    const totalEntries = entries.reduce((acc, element) => acc + (element.value ? parseFloat(element.value) : 0), 0);
    const totalFat = totalDeptor - totalEntries;

    return (
        <section className="grow lg:ml-[240px] mt-14 lg:mt-auto pb-12">
            <div id="header-page">
                <Submenu />
            </div>

            <div id="mid-page">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[400px] col-span-1 border bg-white shadow-md">
                        <div className="items-center text-lg flex font-poppins-bold text-white bg-slate-900 rounded-t-sm mb-4">
                            <p className="px-6 py-4 pointer-events-none">Reserva Financeira</p>
                        </div>

                        <div className="flex flex-col items-start px-6">
                            <Label className="pointer-events-none">Porcentagem de Reserva</Label>
                            <p className="my-2 font-poppins-bold flex text-lg text-nowrap"><motion.div>{useAnimatedCount(10)}</motion.div>% do faturamento total</p>

                            <div className="pointer-events-none">
                                <Label>Valor do Faturamento Total</Label>
                                <p className="my-2 font-poppins-bold flex text-lg text-nowrap">R$ <motion.div>{useAnimatedCount(totalFat)}</motion.div></p>

                                <Label>Valor de Reserva</Label>
                                <p className="my-2 font-poppins-bold flex text-lg text-nowrap">R$ <motion.div>{useAnimatedCount(totalFat * 0.1)}</motion.div></p>

                                <Label>Valor Restante sem Reserva</Label>
                                <p className="my-2 font-poppins-bold flex text-lg text-nowrap">R$ <motion.div>{useAnimatedCount(totalFat - (totalFat * 0.1))}</motion.div></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}