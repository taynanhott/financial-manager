import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function Gerenciar() {

    return (
        <div className="z-10">
            <div className="mx-auto flex justify-center px-5">
                <div>
                    <Label className="flex justify-center">Cadastro</Label>
                    <div>
                        <div className="p-4 inline-block">
                            <Card className="min-h-64">
                                <CardContent className="flex aspect-square items-center justify-center p-6 ">
                                    <span className="text-center font-semibold">
                                        <Link
                                            href={"gerenciar/cadastro/cadastrar"}
                                            target="_self"
                                        >
                                            <Image
                                                className="min-h-32 max-w-32"
                                                src={"/public/image/todolist.jpg"}
                                                width={600}
                                                height={600}
                                                alt=""
                                            />
                                            <p className="bg-gray-900 rounded-bl-xl rounded-br-xl text-white p-2">{"Cadastrar"}</p>
                                        </Link>
                                    </span>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="p-4 inline-block ">
                            <Card className="min-h-64">
                                <CardContent className="flex aspect-square items-center justify-center p-6 ">
                                    <span className="text-center font-semibold">
                                        <Link
                                            href={"gerenciar/cadastro/gerenciar"}
                                            target="_self"
                                        >
                                            <Image
                                                className="min-h-32 max-w-32"
                                                src={"/public/image/todolist.jpg"}
                                                width={600}
                                                height={600}
                                                alt=""
                                            />
                                            <p className="bg-gray-900 rounded-bl-xl rounded-br-xl text-white p-2">{"Gerenciar"}</p>
                                        </Link>
                                    </span>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                <Label>Analítico
                    <a href="gerenciar/analitico/levantamento">
                        <Button>Levantamento</Button>
                    </a>
                    <a href="gerenciar/analitico/parametros">
                        <Button>Parâmetros</Button>
                    </a>
                </Label>


            </div>
        </div >
    );
}