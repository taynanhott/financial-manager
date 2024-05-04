import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import NavOption from "@/components/Resources/NavOption/navoption";

export default function Gerenciar() {

    const levantamento = [
        {
            href: "gerenciar/analitico/levantamento/faturamento",
            src: "/image/menu/escrevendo.png",
            option: "Faturamento"
        },
        {
            href: "gerenciar/analitico/levantamento/mensal",
            src: "/image/menu/copiadora.png",
            option: "Mensal"
        },
        {
            href: "gerenciar/analitico/levantamento/receber",
            src: "/image/menu/escrevendo.png",
            option: "À Receber"
        },
        {
            href: "gerenciar/analitico/levantamento/reserva",
            src: "/image/menu/copiadora.png",
            option: "Reserva"
        }
    ];

    return (
        <div>
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

            <NavOption components={levantamento} title="LEVANTAMENTO" />
        </div>
    );
}