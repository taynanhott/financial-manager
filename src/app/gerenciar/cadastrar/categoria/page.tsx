"use client"

import Submenu from "@/components/Html/Body/Submenu/submenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCategory } from "@/context/CategoryContext";
import { useState } from "react";

export default function Categoria() {
    const [description, setDescription] = useState<string>("");
    const { addCategory } = useCategory();

    function cadastrar(description: string) {
        const newCategory = { description };
        addCategory(newCategory);
    }

    return (
        <section className="grow lg:ml-[240px] mt-14 lg:mt-auto pb-12">
            <div id="header-page">
                <Submenu />
            </div>

            <div id="mid-page">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[341px] col-span-1 lg:col-span-2 rounded-sm border bg-white shadow-md">
                        <div className="items-center text-lg flex font-poppins-bold text-white bg-slate-900 rounded-t-sm">
                            <p className="px-6 py-4">Cadastro de Categoria</p>
                        </div>

                        <div className="px-6 my-4">
                            <p>Cadastre categoria de acordo com o tipo de movimentação financeira realizada.</p>
                        </div>

                        <div className="flex flex-col items-start px-6">
                            <Label>Descrição Categoria</Label>
                            <Input
                                className="bg-slate-100 w-full md:w-1/2 lg:w-1/2 border border-slate-300 my-4"
                                id="descricao"
                                name="descricao"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <Button type="submit" onClick={() => cadastrar(description)}>
                                Salvar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}