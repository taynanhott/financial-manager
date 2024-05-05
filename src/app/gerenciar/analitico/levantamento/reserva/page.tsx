
import Redirecionar from "@/components/Resources/Redirection/redirection";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const components = [
    {
        href: "/gerenciar/analitico/levantamento/",
        menu: 'Levantamento'
    }
]

export default function Reserva() {
    return (
        <div className="max-w-lg m-auto">
            <Redirecionar components={components} now="Reserva" />

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
        </div>
    )
}