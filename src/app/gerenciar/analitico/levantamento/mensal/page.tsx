
import { DataTable } from "@/components/Resources/DataTable/datatable";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Mensal() {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/gerenciar">Inicial</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/gerenciar/analitico/levantamento">Levantamento</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Reserva</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Card>
                <CardHeader>
                    <CardTitle>Valores do Mês</CardTitle>
                    <CardDescription>
                        Visualize todos os valores previstos para serem recebidos no mês.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <DataTable />
                </CardContent>
            </Card>
        </>
    )
}