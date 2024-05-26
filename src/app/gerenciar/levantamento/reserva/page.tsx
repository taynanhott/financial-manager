import Submenu from "@/components/Html/Body/Submenu/submenu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider"

export default function Reserva() {
    return (
        <section className="grow lg:ml-[240px] mt-14 lg:mt-auto pb-12">
            <div id="header-page">
                <Submenu />
            </div>

            <div id="mid-page">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[400px] col-span-1 border bg-white shadow-md">
                        <div className="items-center text-lg flex font-poppins-bold text-white bg-slate-900 rounded-t-sm mb-4">
                            <p className="px-6 py-4">Reserva Financeira</p>
                        </div>

                        <div className="flex flex-col items-start px-6">
                            <Label>Porcentagem de Reserva</Label>
                            <Slider className="bg-slate-100 w-full md:w-1/2 lg:w-2/3 border border-slate-300 my-4" defaultValue={[5]} max={100} step={1} />

                            <Label>Total após 5º dia util</Label>
                            <Input
                                className="bg-slate-100 w-full md:w-1/2 lg:w-2/3 border border-slate-300 my-4"
                                type="text"
                            />

                            <Label>Valor de Reserva</Label>
                            <Input
                                className="bg-slate-100 w-full md:w-1/2 lg:w-2/3 border border-slate-300 my-4"
                                type="text"
                            />

                            <Label>Valor Restante sem Reserva</Label>
                            <Input
                                className="bg-slate-100 w-full md:w-1/2 lg:w-2/3 border border-slate-300 my-4"
                                type="text"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}