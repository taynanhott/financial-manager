import Image from "next/image";

export function CardDashBoard() {
    return (
        <div className="h-32 grid grid-cols-2 rounded-sm border bg-white">
            <div className="col-span-1 px-2  items-center flex">+$ 10000</div>
            <Image
                className="col-span-1 px-2 pt-2 items-center justify-end flex "
                src=''
                width={30}
                height={30}
                alt=""
            />
            <div className="col-span-2 px-2 items-center flex ">text teste</div>
            <div className="col-span-2 rounded-b-sm px-2 items-center flex font-poppins-bold text-white bg-gradient-to-r from-orange-500 to-orange-300">text teste</div>
        </div>
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
                    <CardDashBoard />
                    <CardDashBoard />
                    <CardDashBoard />
                    <CardDashBoard />
                </div>
            </div>
            <div id="mid-dashboard">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[417.5px] col-span-1 lg:col-span-2 rounded-sm border bg-white">
                        <div className="px-2 items-center flex">Title</div>
                        <div className="px-2 items-center flex">Grafico</div>
                    </div>
                    <div className="h-[417.5px] col-span-1 rounded-sm border bg-white">
                        <div className="px-2 h-2/3 items-center flex bg-gradient-to-r from-green-500 to-green-300"></div>
                        <div className="px-2 h-1/3 items-center flex"></div>
                    </div>
                </div>
            </div>
            <div id="features-dashboard">
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 px-[38px] pt-[38px]">
                    <div className="h-[417.5px] col-span-1 lg:col-span-5 rounded-sm border bg-white">
                        <div className="px-2 items-center flex">Title</div>
                        <div className="px-2 items-center flex">Table</div>
                    </div>
                    <div className="h-[417.5px] col-span-4 rounded-sm border bg-white">
                        <div className="px-2 items-center flex">Title</div>
                        <div className="px-2 items-center flex">Graph Pizza</div>
                    </div>
                    <div className="h-52 lg:h-[417.5px] grid grid-cols-2 lg:grid-cols-1 w-full gap-8 col-span-4 lg:col-span-3 rounded-sm">
                        <div className="col-span-1 rounded-sm border bg-white">
                            <div className="px-2 items-center flex">Title</div>
                            <div className="px-2 items-center flex">Count</div>
                        </div>
                        <div className="col-span-1 rounded-sm border bg-white">
                            <div className="px-2 items-center flex">Title</div>
                            <div className="px-2 items-center flex">Count</div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}