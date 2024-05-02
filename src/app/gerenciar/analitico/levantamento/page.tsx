import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Gerenciar() {

    return (
        <div className="z-10">
            <div className="max-w-[768px] mx-auto flex justify-center px-5">

                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/gerenciar">Inicial</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Levantamento</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <Label>Levantamento
                    <a href="/gerenciar/analitico/levantamento/faturamento">
                        <Button>Faturamento</Button>
                    </a>
                    <a href="/gerenciar/analitico/levantamento/mensal">
                        <Button>Mensal</Button>
                    </a>
                    <a href="/gerenciar/analitico/levantamento/receber">
                        <Button>À Receber</Button>
                    </a>
                    <a href="/gerenciar/analitico/levantamento/reserva">
                        <Button>Reserva</Button>
                    </a>
                </Label>

            </div>
        </div>
    );
}