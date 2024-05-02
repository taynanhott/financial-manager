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
                        <BreadcrumbItem>
                            <BreadcrumbPage>Gerenciar</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <Label>Gerenciar
                    <a href="/gerenciar/cadastro/gerenciar/investido">
                        <Button>Investidos</Button>
                    </a>
                    <a href="/gerenciar/cadastro/gerenciar/receber">
                        <Button>À Receber</Button>
                    </a>
                    <a href="/gerenciar/cadastro/gerenciar/reserva">
                        <Button>Reserva</Button>
                    </a>
                </Label>
            </div>
        </div>
    );
}