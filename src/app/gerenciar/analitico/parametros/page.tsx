
import { DatePicker } from "@/components/Resources/DatePicker/datepicker";
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

export default function Parametros() {
    return (
        <>
            <div>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/gerenciar">Inicial</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Parâmetros</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Parâmetros de Data</CardTitle>
                        <CardDescription>
                            Define a data de abrangência de contabilização dos valores.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label className="block" htmlFor="name">Data Inicial</Label>
                            <DatePicker />
                        </div>
                        <div className="space-y-1">
                            <Label className="block" htmlFor="value">Data Final</Label>
                            <DatePicker />
                        </div>
                        <div className="space-y-1">
                            <Label className="block" htmlFor="date">Semanas Restantes</Label>
                            <Input id="name" defaultValue="Item genérico" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}