
import { DatePicker } from "@/components/Resources/DatePicker/datepicker";
import SimpleSelect from "@/components/Resources/Select/select";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
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

export default function Pagamento() {
    return (
        <>
             <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/gerenciar">Inicial</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/gerenciar/cadastro/cadastrar">Cadastrar</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Pagamento</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Card>
                <CardHeader>
                    <CardTitle>Cadastrar Item</CardTitle>
                    <CardDescription>
                        Cadastre um item para listagem.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="name">Nome item</Label>
                        <Input id="name" defaultValue="Item genérico" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="category">Categoria</Label>
                        <SimpleSelect
                            options={[
                                { value: 'D', description: "Débito" },
                                { value: 'C', description: "Crédito" },
                                { value: 'P', description: "Parcelado" },
                            ]}
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="value">Valor</Label>
                        <Input id="value" defaultValue="R$ 10,00" />
                    </div>
                    <div className="space-y-1">
                        <Label className="block" htmlFor="date">Data</Label>
                        <DatePicker />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Cadastrar</Button>
                </CardFooter>
            </Card>
        </>
    )
}