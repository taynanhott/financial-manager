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

export default function Receber() {
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
                    <CardTitle>Valores à Receber</CardTitle>
                    <CardDescription>
                        Visualize os valores pendentes de recebimento.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <DataTable />
                </CardContent>
            </Card>
        </>
    )
}