
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Reserva() {
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
                    <CardTitle>Reserva de Segurança</CardTitle>
                    <CardDescription>
                        Gerencie sua reserva de emergência.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="current">Porcentagem de Reserva</Label>
                        <Input id="current" type="group" defaultValue="0,00%" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="current">Total após 5º dia util</Label>
                        <Input id="current" type="group" defaultValue="R$ 0,00" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="current">Valor de Reserva</Label>
                        <Input id="current" type="group" defaultValue="R$ 0,00" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="current">Valor Restante sem Reserva</Label>
                        <Input id="current" type="group" defaultValue="R$ 0,00" />
                    </div>
                </CardContent>
            </Card>
        </>
    )
}